import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// 환경 변수 확인
const openAIApiKey = Deno.env.get('openai_key');
const tavilyApiKey = Deno.env.get('web_search');
if (!openAIApiKey) {
  console.error('openai_key is not set');
}
if (!tavilyApiKey) {
  console.error('web_search (Tavily API key) is not set - 웹 검색 기능이 제한됩니다');
}
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};
// 신뢰할 수 있는 노화 연구 데이터베이스 소스
const TRUSTED_AGING_SOURCES = [
  'pubmed.ncbi.nlm.nih.gov',
  'nature.com/nataging',
  'science.org',
  'nia.nih.gov',
  'cochranelibrary.com',
  'academic.oup.com/biomedgerontology',
  'academic.oup.com/ageing',
  'aging-us.com',
  'cell.com',
  'nejm.org',
  'examine.com',
  'ods.od.nih.gov'
];






// 메모리 저장소
const conversationMemories = new Map();
// 메모리 관리 함수들
function updateShortTermMemory(userId, role, content) {
  const memory = conversationMemories.get(userId) || {
    userId,
    shortTermMemory: [],
    longTermMemory: [],
    lastUpdated: Date.now()
  };
  memory.shortTermMemory.push({
    role,
    content,
    timestamp: Date.now()
  });
  // 최근 6개 메시지만 유지
  if (memory.shortTermMemory.length > 6) {
    memory.shortTermMemory = memory.shortTermMemory.slice(-6);
  }
  memory.lastUpdated = Date.now();
  conversationMemories.set(userId, memory);
}
function updateLongTermMemory(userId, summary, topic) {
  const memory = conversationMemories.get(userId);
  if (!memory) return;
  memory.longTermMemory.push({
    summary,
    timestamp: Date.now(),
    topic
  });
  // 최근 3개 주제만 유지
  if (memory.longTermMemory.length > 3) {
    memory.longTermMemory = memory.longTermMemory.slice(-3);
  }
  conversationMemories.set(userId, memory);
}
function getMemoryContext(userId) {
  const memory = conversationMemories.get(userId);
  if (!memory) return '';
  let context = '';
  // 장기 기억 추가
  if (memory.longTermMemory.length > 0) {
    context += '\n이전 대화 요약:\n';
    memory.longTermMemory.forEach((item)=>{
      context += `- ${item.topic}: ${item.summary}\n`;
    });
  }
  // 단기 기억 추가
  if (memory.shortTermMemory.length > 0) {
    context += '\n최근 대화:\n';
    memory.shortTermMemory.forEach((item)=>{
      context += `${item.role}: ${item.content}\n`;
    });
  }
  return context;
}

// 검색 결과 타입 정의
interface SearchResult {
  title: string;
  url: string;
  content: string;
  score?: number;
  component?: string;
}

interface SearchSource {
  title: string;
  url: string;
  snippet: string;
  index: number;
  type?: string;
}

// 웹검색 수행 여부 결정 함수 (개선)
function getShouldPerformWebSearch(message, messageType, enableWebSearch) {
  if (!enableWebSearch) return false;
  
  // 매우 단순한 인사말이나 감탄사만 제외하고 모든 질문에 대해 웹검색 활성화
  const verySimpleGreetings = /^(안녕|hi|hello|ㅎㅎ|ㅋㅋ|ok|okay|네|예|yes)$/i;
  if (verySimpleGreetings.test(message.trim()) && message.trim().length <= 4) {
    console.log('Very simple greeting detected - skipping web search');
    return false;
  }
  
  // 나머지 모든 메시지는 웹검색 활성화 (건강, 노화 관련이 아니어도)
  console.log('Enabling web search for comprehensive information');
  return true;
}
// AI 기반 성분 분석 함수
async function analyzeComponents(message) {
  if (!openAIApiKey) {
    return [message.trim()];
  }
  
  try {
    const analysisPrompt = `Analyze the following message and extract key nutritional/chemical components for research search.

Message: "${message}"

Instructions:
1. If it's a specific compound name (like NMN, resveratrol, curcumin), return just that compound name in English
2. If it's a food item, extract its major nutritional components in English
3. If it's a general health topic, return the main keywords in English
4. Return only component names, no explanations
5. Maximum 3-4 components
6. Use scientific names when possible

Format: Return components separated by commas, like: "beta-carotene, vitamin A, lutein"

Examples:
- "NMN의 성분" → "NMN"
- "당근의 노화 영향" → "beta-carotene, vitamin A, lutein"
- "블루베리 항산화" → "anthocyanin, vitamin C, antioxidants"
- "수면과 노화" → "sleep, melatonin"`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: analysisPrompt
          }
        ],
        temperature: 0.1,
        max_tokens: 100
      })
    });

    if (response.ok) {
      const data = await response.json();
      const components = data.choices[0].message.content.trim();
      
      // 쉼표로 분리하고 정리
      const componentList = components.split(',')
        .map(comp => comp.trim())
        .filter(comp => comp.length > 0)
        .slice(0, 4); // 최대 4개까지만
      
      console.log(`[LOG] AI component analysis: "${message}" → [${componentList.join(', ')}]`);
      return componentList;
    }
  } catch (error) {
    console.error('Component analysis error:', error);
  }
  
  // AI 분석 실패 시 폴백: 간단한 키워드 추출
  return extractFallbackKeywords(message);
}

// 폴백 키워드 추출 함수 (AI 분석 실패 시만 사용)
function extractFallbackKeywords(message) {
  const cleanMessage = message.trim();
  
  // 영어 단어가 있으면 사용
  const englishWords = cleanMessage.match(/[a-zA-Z]+/g) || [];
  if (englishWords.length > 0) {
    return englishWords.slice(0, 2);
  }
  
  // 아니면 그냥 전체 메시지 사용
  return [cleanMessage];
}

// 다중 검색 수행 함수
async function performMultiComponentSearch(components) {
  console.log(`[LOG] Performing multi-component search for: [${components.join(', ')}]`);
  
  // 각 성분별로 병렬 검색 수행
  const searchPromises = components.map(async (component) => {
    const pubmedResults = await searchPubMed(component);
    const webResults = await searchWeb(component);
    
    return {
      component,
      pubmedResults,
      webResults
    };
  });
  
  const allResults = await Promise.all(searchPromises);
  
  // 결과 통합
  const combinedResults: SearchResult[] = [];
  const combinedSources: (SearchSource & { type?: string })[] = [];
  let sourceIndex = 1;
  
  allResults.forEach(({ component, pubmedResults, webResults }) => {
    // PubMed 결과 추가
    pubmedResults.results.forEach(result => {
      combinedResults.push({
        ...result,
        component: component,
        title: `[${component}] ${result.title}`
      });
    });
    
    pubmedResults.sources.forEach(source => {
      combinedSources.push({
        ...source,
        title: `[${component}] ${source.title}`,
        index: sourceIndex++
      });
    });
    
    // 웹 결과 추가
    webResults.results.forEach(result => {
      combinedResults.push({
        ...result,
        component: component,
        title: `[${component}] ${result.title}`
      });
    });
    
    webResults.sources.forEach(source => {
      combinedSources.push({
        ...source,
        title: `[${component}] ${source.title}`,
        index: sourceIndex++
      });
    });
  });
  
  // 점수별로 정렬 (PubMed 우선)
  combinedResults.sort((a, b) => {
    const aIsPubmed = a.url.includes('pubmed');
    const bIsPubmed = b.url.includes('pubmed');
    
    if (aIsPubmed && !bIsPubmed) return -1;
    if (!aIsPubmed && bIsPubmed) return 1;
    
    return (b.score || 0) - (a.score || 0);
  });
  
  console.log(`[LOG] Multi-component search completed: ${combinedResults.length} total results from ${components.length} components`);
  
  return {
    results: combinedResults.slice(0, 10), // 상위 10개 결과만
    sources: combinedSources.slice(0, 8)   // 상위 8개 출처만
  };
}

// 스마트 검색 쿼리 생성 함수 (완전히 새로 작성)
async function generateSmartSearchQuery(message, messageType) {
  console.log(`[LOG] Analyzing message for search: "${message}"`);
  
  // AI 기반 성분 분석
  const components = await analyzeComponents(message);
  
  // 단일 성분인 경우 간단한 검색
  if (components.length === 1) {
    return {
      type: 'single',
      query: components[0],
      components: components
    };
  }
  
  // 다중 성분인 경우 다중 검색 표시
  return {
    type: 'multi',
    components: components
  };
}

// 언어 감지 함수
function detectLanguage(message: string): 'ko' | 'en' {
  // 한국어 문자 패턴
  const koreanPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  
  // 영어 비율 계산
  const englishWords = message.match(/\b[a-zA-Z]+\b/g) || [];
  const koreanWords = message.match(/[가-힣]+/g) || [];
  
  // 한국어 문자가 있고, 영어 단어보다 한국어 단어가 많거나 같으면 한국어
  if (koreanPattern.test(message) && koreanWords.length >= englishWords.length) {
    return 'ko';
  }
  
  // 그 외는 영어
  return 'en';
}

// 메시지 타입별 검색 상태 메시지 생성 함수
function getSearchStatusMessage(messageType: string, components: string[] | null = null) {
  if (components && components.length > 1) {
    return `${components.join(', ')} 등 핵심 성분들을 분석하여 최신 연구 자료를 검색하고 있습니다...`;
  }
  return 'AI가 성분을 분석하고 최신 연구 자료를 PubMed와 웹에서 검색하고 있습니다...';
}
// PubMed 검색 함수
async function searchPubMed(query) {
  try {
    console.log(`[LOG] Performing PubMed search. Query: "${query}"`);
    
    // 쿼리 최적화: 너무 길면 핵심 키워드만 사용
    let optimizedQuery = query;
    if (query.length > 50) {
      const words = query.split(' ');
      optimizedQuery = words.slice(0, 3).join(' ');
    }
    
    // PubMed eSearch API를 사용하여 논문 ID 검색
    // retmax를 10으로 늘리고, 최근 5년 논문 우선
    const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(optimizedQuery)}&retmax=10&retmode=json&sort=relevance&mindate=2020&maxdate=2025`;
    
    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) {
      throw new Error(`PubMed search failed: ${searchResponse.status}`);
    }
    
    const searchData = await searchResponse.json();
    const pmids = searchData.esearchresult?.idlist || [];
    
    if (pmids.length === 0) {
      console.log('[LOG] No recent PubMed results found, trying broader search...');
      
      // 최근 연도 제한 없이 다시 검색
      const broadSearchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(optimizedQuery)}&retmax=8&retmode=json&sort=relevance`;
      
      const broadResponse = await fetch(broadSearchUrl);
      if (broadResponse.ok) {
        const broadData = await broadResponse.json();
        const broadPmids = broadData.esearchresult?.idlist || [];
        
        if (broadPmids.length === 0) {
          console.log('[LOG] No PubMed results found with broader search');
          return { results: [], sources: [] };
        }
        
        // 재귀 호출하여 처리
        return await fetchPubMedDetails(broadPmids);
      }
      
      return { results: [], sources: [] };
    }
    
    return await fetchPubMedDetails(pmids);
    
  } catch (error) {
    console.error('PubMed search error:', error);
    return { results: [], sources: [] };
  }
}

// PubMed 상세 정보 가져오기 함수 분리
async function fetchPubMedDetails(pmids) {
  try {
    // eFetch API를 사용하여 논문 상세 정보 가져오기
    const fetchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=xml`;
    
    const fetchResponse = await fetch(fetchUrl);
    if (!fetchResponse.ok) {
      throw new Error(`PubMed fetch failed: ${fetchResponse.status}`);
    }
    
    const xmlText = await fetchResponse.text();
    
    // 간단한 XML 파싱 (제목과 초록 추출)
    const articles = xmlText.match(/<PubmedArticle>[\s\S]*?<\/PubmedArticle>/g) || [];
    
    const results: SearchResult[] = [];
    const sources: SearchSource[] = [];
    
    articles.forEach((article, index) => {
      const titleMatch = article.match(/<ArticleTitle>([\s\S]*?)<\/ArticleTitle>/);
      const abstractMatch = article.match(/<AbstractText[^>]*>([\s\S]*?)<\/AbstractText>/);
      const pmidMatch = article.match(/<PMID[^>]*>(\d+)<\/PMID>/);
      const yearMatch = article.match(/<Year>(\d{4})<\/Year>/);
      
      if (titleMatch && pmidMatch) {
        const title = titleMatch[1].replace(/<[^>]*>/g, '').trim();
        const abstract = abstractMatch ? abstractMatch[1].replace(/<[^>]*>/g, '').trim() : 'Abstract not available';
        const pmid = pmidMatch[1];
        const year = yearMatch ? yearMatch[1] : 'Unknown';
        const url = `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
        
        // 제목과 초록에서 관련성 점수 계산 (간단한 키워드 매칭)
        const titleLower = title.toLowerCase();
        const abstractLower = abstract.toLowerCase();
        
        let relevanceScore = 0;
        const keywords = ['aging', 'longevity', 'nmn', 'nicotinamide', 'health', 'nutrition', 'antioxidant'];
        keywords.forEach(keyword => {
          if (titleLower.includes(keyword)) relevanceScore += 3;
          if (abstractLower.includes(keyword)) relevanceScore += 1;
        });
        
        // 최근 연도일수록 높은 점수
        if (year && parseInt(year) >= 2022) relevanceScore += 2;
        
        const displayTitle = `${title} (${year})`;
        const truncatedAbstract = abstract.length > 400 ? abstract.substring(0, 400) + '...' : abstract;
        
        results.push({
          title: displayTitle,
          url: url,
          content: truncatedAbstract,
          score: relevanceScore
        });
        
        sources.push({
          title: displayTitle,
          url: url,
          snippet: abstract.substring(0, 150) + (abstract.length > 150 ? '...' : ''),
          index: index + 1
        });
      }
    });
    
    // 관련성 점수로 정렬
    results.sort((a, b) => (b.score || 0) - (a.score || 0));
    
    console.log(`[LOG] PubMed search returned ${results.length} results`);
    return { results: results.slice(0, 5), sources: sources.slice(0, 5) };
    
  } catch (error) {
    console.error('PubMed fetch error:', error);
    return { results: [], sources: [] };
  }
}

// Tavily 웹 검색 함수
async function searchWeb(query) {
  if (!tavilyApiKey) {
    console.log('Tavily API key not available, skipping web search');
    return {
      results: [],
      sources: []
    };
  }

  // 신뢰할 수 있는 도메인 목록 확장
  const trustedDomains = [
    'pubmed.ncbi.nlm.nih.gov',
    'nature.com',
    'science.org',
    'nia.nih.gov',
    'cochranelibrary.com',
    'academic.oup.com',
    'aging-us.com',
    'cell.com',
    'nejm.org',
    'examine.com',
    'ods.od.nih.gov',
    'mayoclinic.org',
    'harvard.edu',
    'stanford.edu',
    'who.int',
    'nih.gov',
    'ncbi.nlm.nih.gov',
    'healthline.com',
    'webmd.com'
  ];

  const searchPayload = {
    query: query,
    search_depth: 'basic',
    include_answer: false,
    include_raw_content: false,
    max_results: 8, // 결과 수 늘려서 필터링 후 선별
    include_images: false,
    include_domains: trustedDomains.slice(0, 10) // 상위 신뢰 도메인들만 포함
  };

  try {
    console.log(`[LOG] Performing web search with Tavily. Query: "${query}"`);

    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tavilyApiKey}`
      },
      body: JSON.stringify(searchPayload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[ERROR] Tavily API error: ${response.status} ${response.statusText}`, `Response Body: ${errorBody}`);
      
      // include_domains 없이 재시도
      const fallbackPayload = {
        query: query,
        search_depth: 'basic',
        include_answer: false,
        include_raw_content: false,
        max_results: 6,
        include_images: false
      };
      
      const fallbackResponse = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tavilyApiKey}`
        },
        body: JSON.stringify(fallbackPayload)
      });
      
      if (!fallbackResponse.ok) {
        return { results: [], sources: [] };
      }
      
      const fallbackData = await fallbackResponse.json();
      return processWebResults(fallbackData.results || [], trustedDomains);
    }

    const data = await response.json();
    console.log(`[LOG] Tavily search returned ${data.results?.length || 0} results.`);

    return processWebResults(data.results || [], trustedDomains);
    
  } catch (error) {
    console.error('Web search error:', error);
    return {
      results: [],
      sources: []
    };
  }
}

// 웹 검색 결과 처리 함수
function processWebResults(results, trustedDomains) {
  // 결과 필터링 및 점수 계산
  const scoredResults = results.map(result => {
    let score = 0;
    const url = result.url.toLowerCase();
    const title = result.title.toLowerCase();
    const content = result.content.toLowerCase();
    
    // 신뢰할 수 있는 도메인 점수
    for (const domain of trustedDomains) {
      if (url.includes(domain)) {
        score += 10;
        break;
      }
    }
    
    // .edu, .gov 도메인 추가 점수
    if (url.includes('.edu') || url.includes('.gov')) {
      score += 5;
    }
    
    // 학술적 키워드 점수
    const academicKeywords = ['study', 'research', 'clinical', 'trial', 'journal', 'peer-reviewed'];
    academicKeywords.forEach(keyword => {
      if (title.includes(keyword) || content.includes(keyword)) {
        score += 2;
      }
    });
    
    // 건강/노화 관련 키워드 점수
    const relevantKeywords = ['health', 'aging', 'longevity', 'nutrition', 'supplement', 'nmn', 'antioxidant'];
    relevantKeywords.forEach(keyword => {
      if (title.includes(keyword)) score += 3;
      if (content.includes(keyword)) score += 1;
    });
    
    // 블로그나 개인 사이트 점수 감소
    const lowQualityIndicators = ['blog', 'tistory', 'naver.com/blog', 'personal'];
    lowQualityIndicators.forEach(indicator => {
      if (url.includes(indicator)) {
        score -= 5;
      }
    });
    
    // 상업적 키워드 점수 감소
    const commercialKeywords = ['buy', 'sale', 'discount', 'shop', 'store'];
    commercialKeywords.forEach(keyword => {
      if (title.includes(keyword) || content.includes(keyword)) {
        score -= 3;
      }
    });
    
    return {
      ...result,
      score: score
    };
  });
  
  // 점수로 정렬하고 상위 결과만 선택
  const sortedResults = scoredResults
    .filter(result => result.score > -5) // 너무 낮은 점수는 제외
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
  
  console.log(`[LOG] Filtered and scored ${sortedResults.length} web results`);
  
  const sources = sortedResults.map((result, index) => ({
    title: result.title,
    url: result.url,
    snippet: result.content.length > 200 ? result.content.substring(0, 200) + '...' : result.content,
    index: index + 1
  }));
  
  return {
    results: sortedResults,
    sources: sources
  };
}

// 통합 검색 함수 (PubMed + Tavily)
async function performIntegratedSearch(query) {
  console.log(`[LOG] Starting integrated search for: "${query}"`);
  
  // PubMed와 Tavily 검색을 병렬로 실행
  const [pubmedResults, tavilyResults] = await Promise.all([
    searchPubMed(query),
    searchWeb(query)
  ]);
  
  // 결과 통합
  const allResults: SearchResult[] = [...pubmedResults.results, ...tavilyResults.results];
  const allSources: (SearchSource & { type: string })[] = [
    ...pubmedResults.sources.map(source => ({ ...source, type: 'pubmed' })),
    ...tavilyResults.sources.map(source => ({ ...source, type: 'web' }))
  ];
  
  // 인덱스 재정렬
  allSources.forEach((source, index) => {
    source.index = index + 1;
  });
  
  console.log(`[LOG] Integrated search completed: ${pubmedResults.results.length} PubMed + ${tavilyResults.results.length} Tavily = ${allResults.length} total results`);
  
  return {
    results: allResults,
    sources: allSources
  };
}
serve(async (req)=>{
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders
    });
  }
  try {
    const { message, userId = 'anonymous', messageType = 'general', enableWebSearch = true, isStream = true } = await req.json();
    console.log('Received message:', message, 'User ID:', userId, 'Type:', messageType, 'WebSearch:', enableWebSearch, 'Stream:', isStream);
    // 메모리에서 대화 컨텍스트 가져오기
    const memoryContext = getMemoryContext(userId);
    // 스마트 웹검색 로직
    let webSearchResults: {results: SearchResult[], sources: SearchSource[]} = {
      results: [],
      sources: []
    };
    let searchContext = '';
    let searchStrategy: any = null;
    
    const shouldPerformWebSearch = getShouldPerformWebSearch(message, messageType, enableWebSearch);
    console.log(`Web search decision: ${shouldPerformWebSearch} (Message: "${message}", Type: ${messageType})`);
    if (shouldPerformWebSearch && tavilyApiKey) {
      // AI 기반 성분 분석 및 검색 실행
      searchStrategy = await generateSmartSearchQuery(message, messageType);
      console.log('Search strategy:', searchStrategy);
      
      if (searchStrategy.type === 'single') {
        // 단일 성분 검색
        console.log('Single component search:', searchStrategy.query);
        webSearchResults = await performIntegratedSearch(searchStrategy.query);
      } else {
        // 다중 성분 검색
        console.log('Multi-component search:', searchStrategy.components);
        webSearchResults = await performMultiComponentSearch(searchStrategy.components);
      }
      
      console.log(`Search completed: ${webSearchResults.results.length} results found`);
      
      if (webSearchResults.results.length > 0) {
        searchContext = '\n';
        webSearchResults.results.forEach((result, index)=>{
          searchContext += `[출처 ${index + 1}]\n제목: ${result.title}\nURL: ${result.url}\n내용: ${result.content}\n\n`;
        });
        console.log('Search context prepared with', webSearchResults.results.length, 'results');
      } else {
        console.log('No web search results found - AI will provide general knowledge response');
      }
    } else {
      if (!shouldPerformWebSearch) {
        console.log('Web search skipped due to AI decision');
      } else if (!tavilyApiKey) {
        console.log('Web search skipped due to missing Tavily API key');
      }
    }
    
    // 언어 감지
    const detectedLanguage = detectLanguage(message);
    console.log(`Detected language: ${detectedLanguage} for message: "${message}"`);
    
    // 시스템 프롬프트 구성
    const systemPrompt = detectedLanguage === 'ko' 
      ? `당신은 건강과 노화에 특화된 전문 AI 어시스턴트입니다. 과학적 근거를 바탕으로 정확하고 신뢰할 수 있는 정보를 제공하세요.

**핵심 원칙:**
- 과학적 연구 결과를 우선적으로 참고하여 답변하세요
- PubMed 논문은 가장 높은 신뢰도를 가지므로 우선 인용하세요
- 구체적인 수치, 용량, 연구 결과를 포함하여 답변하세요
- 불확실한 정보는 명확히 표시하고, 한계점을 언급하세요

**답변 구조:**
1. 핵심 정보 요약 (2-3문장)
2. 과학적 근거 제시 (연구 결과 포함)
3. 실생활 적용 방법
4. 주의사항 또는 제한점

**답변 스타일:**
- 친근하지만 전문적인 톤 유지
- 복잡한 과학 정보를 이해하기 쉽게 설명
- 핵심 내용을 명확하게 구조화
- "연구에 따르면..." 형식 사용

${searchContext ? `
**최신 연구 정보:**
${searchContext}

**인용 지침:**
1. PubMed 논문을 먼저 인용하고, 웹 자료를 보조적으로 활용하세요
2. 구체적인 연구 데이터 (퍼센테지, 용량, 기간 등)를 정확히 인용하세요
3. 각 주요 주장 뒤에 [출처 번호] 형식으로 출처를 표기하세요
4. 연구의 한계점이나 추가 연구 필요성도 언급하세요
5. 상충되는 연구 결과가 있다면 이를 균형있게 제시하세요

**출처 표시 규칙:**
- PubMed 논문: (연도)를 포함하여 신뢰도 강조
- 웹 자료: 도메인 신뢰도에 따라 가중치 부여
- 각 문단마다 적절한 출처 인용

답변 마지막에 다음 형식으로 출처 목록을 제공하세요:
**출처:**
- [1] 제목 - URL (PubMed/학술지/신뢰기관)
- [2] 제목 - URL (웹사이트)

**참고사항:**
제시된 정보는 최신 연구를 바탕으로 하지만, 개인의 건강 상태에 따라 다를 수 있습니다. 중요한 건강 결정은 의료 전문가와 상담하시기 바랍니다.
` : `
**제한된 정보 안내:**
현재 최신 연구 정보를 가져올 수 없어 일반적인 과학 지식을 바탕으로 답변드립니다. 

**답변 시 주의사항:**
1. 일반적으로 알려진 과학적 사실에 기반하여 답변하세요
2. "일반적으로", "연구에 따르면" 등의 표현을 사용하세요
3. 최신 연구 결과는 별도 확인이 필요함을 명시하세요
4. 의학적 조언이 아님을 명확히 하세요

**중요 고지:**
이 답변은 제한된 정보에 기반하므로, 최신 연구나 의학적 조언은 전문가에게 문의하시기 바랍니다.
`}

${memoryContext ? `\n**이전 대화 맥락:**\n${memoryContext}` : ''}`
      : `You are a professional AI assistant specialized in health and aging. Provide accurate and reliable information based on scientific evidence.

**Core Principles:**
- Prioritize scientific research results in your responses
- PubMed papers have the highest credibility, so cite them first
- Include specific numbers, dosages, and research results
- Clearly indicate uncertain information and mention limitations

**Response Structure:**
1. Core information summary (2-3 sentences)
2. Scientific evidence presentation (including research results)
3. Practical application methods
4. Precautions or limitations

**Response Style:**
- Maintain a friendly yet professional tone
- Explain complex scientific information in an understandable way
- Structure key content clearly
- Use formats like "Recent studies show..." or "According to research..."

${searchContext ? `
**Latest Research Information:**
${searchContext}

**Citation Guidelines:**
1. Cite PubMed papers first, use web sources as supplementary
2. Accurately cite specific research data (percentages, dosages, duration, etc.)
3. Mark sources after each major claim in [source number] format
4. Mention research limitations or need for additional studies
5. Present conflicting research results in a balanced manner

**Source Display Rules:**
- PubMed papers: Include (year) to emphasize credibility
- Web sources: Weight according to domain reliability
- Cite appropriate sources in each paragraph

Provide source list at the end of your response in this format:
**Sources:**
- [1] Title - URL (PubMed/Journal/Trusted Institution)
- [2] Title - URL (Website)

**Note:**
The information provided is based on the latest research, but may vary depending on individual health conditions. Please consult with medical professionals for important health decisions.
` : `
**Limited Information Notice:**
Currently unable to access the latest research information, so responding based on general scientific knowledge.

**Response Guidelines:**
1. Base responses on generally known scientific facts
2. Use expressions like "generally" or "according to research"
3. Note that latest research results need separate verification
4. Clearly state this is not medical advice

**Important Notice:**
This response is based on limited information, so please consult experts for the latest research or medical advice.
`}

${memoryContext ? `\n**Previous Conversation Context:**\n${memoryContext}` : ''}`;
    // 대화 기록에 사용자 메시지 추가
    updateShortTermMemory(userId, 'user', message);
    // OpenAI API 호출
    const messages = [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: message
      }
    ];
    console.log('Calling OpenAI API with streaming:', isStream);
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4.1',
        messages: messages,
        temperature: 0.2,
        max_tokens: 4000,
        stream: isStream
      })
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API 호출에 실패했습니다');
    }
    // 스트리밍 응답 처리
    if (isStream) {
      console.log('Setting up streaming response');
      const stream = new ReadableStream({
        async start (controller) {
          const reader = response.body?.getReader();
          if (!reader) {
            controller.close();
            return;
          }
          const decoder = new TextDecoder();
          let fullResponse = '';
          let searchStatusSent = false;
          // 웹 검색 상태 먼저 전송
          if (shouldPerformWebSearch && tavilyApiKey && !searchStatusSent) {
            const components = (searchStrategy?.type === 'multi') ? searchStrategy.components : null;
            const searchEvent = `data: ${JSON.stringify({
              type: 'search_status',
              status: 'searching',
              message: getSearchStatusMessage(messageType, components)
            })}\n\n`;
            controller.enqueue(new TextEncoder().encode(searchEvent));
            searchStatusSent = true;
          }
          try {
            while(true){
              const { done, value } = await reader.read();
              if (done) break;
              const chunk = decoder.decode(value, {
                stream: true
              });
              const lines = chunk.split('\n');
              for (const line of lines){
                if (line.startsWith('data: ')) {
                  const data = line.slice(6);
                  if (data === '[DONE]') {
                    // 대화 기록에 AI 응답 추가
                    updateShortTermMemory(userId, 'assistant', fullResponse);
                    // 웹 검색 출처 정보 전송
                    if (webSearchResults.sources.length > 0) {
                      const sourcesEvent = `data: ${JSON.stringify({
                        type: 'sources',
                        sources: webSearchResults.sources
                      })}\n\n`;
                      controller.enqueue(new TextEncoder().encode(sourcesEvent));
                    }
                    const doneEvent = `data: [DONE]\n\n`;
                    controller.enqueue(new TextEncoder().encode(doneEvent));
                    controller.close();
                    return;
                  }
                  try {
                    const parsedData = JSON.parse(data);
                    const delta = parsedData.choices?.[0]?.delta?.content;
                    if (delta) {
                      fullResponse += delta;
                      const contentEvent = `data: ${JSON.stringify({
                        type: 'content',
                        content: delta
                      })}\n\n`;
                      controller.enqueue(new TextEncoder().encode(contentEvent));
                    }
                  } catch (e) {
                    console.error('JSON parsing error:', e);
                  }
                }
              }
            }
          } catch (error) {
            console.error('Stream error:', error);
            controller.error(error);
          }
        }
      });
      return new Response(stream, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        }
      });
    } else {
      // 비스트리밍 응답 처리
      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      // 대화 기록에 추가
      updateShortTermMemory(userId, 'assistant', aiResponse);
      return new Response(JSON.stringify({
        response: aiResponse,
        sources: webSearchResults.sources,
        usage: data.usage
      }), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Error in aging-chat function:', error);
    return new Response(JSON.stringify({
      error: '죄송합니다. 현재 서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
      details: error.message
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }
});
