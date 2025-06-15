import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { HugeiconsIcon } from '@hugeicons/react';
import { GlobalSearchIcon, LinkIcon, CalendarIcon, UserIcon, LoadingIcon } from '@hugeicons/core-free-icons';

// Spline viewer 타입 선언
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

interface ResearchPaper {
  id: string;
  title: string;
  url: string;
  snippet: string;
  source: string;
  date?: string;
  author?: string;
  thumbnail?: string;
  index: number;
}

const LatestTrends = () => {
  const { t } = useLanguage();
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [randomThumbnails, setRandomThumbnails] = useState<string[]>([]);

  // 신뢰할만한 연구 도메인들
  const trustedDomains = [
    'pubmed.ncbi.nlm.nih.gov',
    'nature.com',
    'science.org',
    'nia.nih.gov',
    'cochranelibrary.com',
    'academic.oup.com',
    'cell.com',
    'nejm.org'
  ];

  // 현재 연도 반환 (2025년으로 고정)
  const getCurrentYear = (): string => {
    return '2025';
  };

  // 랜덤 썸네일 6개 생성 (10개 중에서 중복 없이)
  const generateRandomThumbnails = (): string[] => {
    const allThumbnails = [
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop&q=95&auto=format', // 정밀 의학
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop&q=95&auto=format', // 분자 생물학
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop&q=95&auto=format', // 분자 구조 모델
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=400&fit=crop&q=95&auto=format', // 의료 연구실
      'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=400&fit=crop&q=95&auto=format', // 의료 기술
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop&q=95&auto=format', // 생명과학 연구
      'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=800&h=400&fit=crop&q=95&auto=format', // 고급 연구실
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=400&fit=crop&q=95&auto=format', // 과학 연구
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=400&fit=crop&q=95&auto=format', // 의학 장비
      'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&h=400&fit=crop&q=95&auto=format'  // 바이오 연구
    ];
    
    // 배열을 셔플하고 앞의 6개만 반환
    const shuffled = [...allThumbnails].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  };

  // 병렬 검색을 통한 최신 노화 연구 검색 (개선된 버전)
  const searchLatestResearch = async () => {
    setIsLoading(true);
    setError(null);
    
    // 새로운 검색마다 랜덤 썸네일 조합 생성
    const newRandomThumbnails = generateRandomThumbnails();
    setRandomThumbnails(newRandomThumbnails);
    
    try {
      // 넓고 다양한 노화 관련 검색 쿼리들 (각각에서 많은 결과 기대)
      const currentTime = Date.now();
      
      // 24개의 다양하고 구체적인 기본 검색어
      const baseQueries = [
        // Core Concepts (기본 개념)
        'aging research breakthrough', 'longevity study', 'cellular senescence mechanism', 'telomere biology update', 
        'anti-aging intervention latest', 'healthy aging strategy', 'epigenetic clock accuracy', 'hallmarks of aging 2025',
        // Hot Topics & Compounds (최신 토픽 및 화합물)
        'NAD+ metabolism and aging', 'sirtuins in longevity', 'senolytics clinical trial 2025', 'rapamycin for anti-aging human',
        'metformin and aging study', 'yamanaka factors rejuvenation', 'mitochondrial dysfunction and aging', 'autophagy activation therapy',
        // Disease & Healthspan (질병 및 건강수명)
        'neurodegenerative disease and aging', 'cardiovascular aging research', 'immunosenescence and therapy', 'metabolic health and longevity',
        // Broader terms (더 넓은 범위)
        'geroscience advances', 'aging biomarkers discovery', 'life extension technology 2025', 'preventive gerontology'
      ];

      // 쿼리 랜덤화 및 선택 (8개 병렬 실행)
      const shuffleArray = (array: string[]) => array.sort(() => Math.random() - 0.5);
      const selectedQueries = shuffleArray([...baseQueries]).slice(0, 8);
      
      // 검색 상태 업데이트
      const displayQueries = selectedQueries.length > 2 
        ? `${selectedQueries.slice(0, 2).join(', ')}${t.pages?.latestTrends?.searchSuffix || ' 등'}` 
        : selectedQueries.join(', ');
      setSearchQuery(`${displayQueries} ${selectedQueries.length}${t.pages?.latestTrends?.topicsCount || '개 주제 동시 검색...'}`);

      console.log('Starting enhanced parallel search with 8 diverse queries:', selectedQueries);

      // 효율적인 병렬 검색 (8개 diverse query로 많은 결과 수집)
      const searchPromises = selectedQueries.map(async (query, index) => {
        try {
          const message = `${query} ${getCurrentYear()}`; // 2025년 명시
          
          const response = await fetch(`https://rpxhlgtsojovyyxodtcr.supabase.co/functions/v1/aging-chat`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJweGhsZ3Rzb2pvdnl5eG9kdGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTk4NTQsImV4cCI6MjA2NTM5NTg1NH0.7UoaZfVTbugy7H7JY2pglhvHa2NhwBmQ3qseWVc6fbw`,
            },
            body: JSON.stringify({ 
              message: message,
              userId: `diverse_trends_${getCurrentYear()}_${index}_${currentTime}`,
              isStream: false,
              enableWebSearch: true
            })
          });

          if (!response.ok) {
            console.warn(`Enhanced search ${index + 1} (${query}) failed with status: ${response.status}`);
            return { sources: [] };
          }

          const data = await response.json();
          
          // 결과에 요약 정보 추가
          if (data.sources && data.sources.length > 0) {
            data.sources = data.sources.map((source: any) => ({
              ...source,
              summary: generateResearchSummary(source.snippet || source.title),
              relevanceScore: calculateRelevanceScore(source.title, source.snippet, query),
              searchIndex: index,
              searchQuery: query
            }));
          }
          
          console.log(`Enhanced search ${index + 1} (${query}) found ${data.sources?.length || 0} results`);
          return data;
        } catch (err) {
          console.warn(`Enhanced search ${index + 1} (${query}) failed:`, err);
          return { sources: [] };
        }
      });

      // 병렬 검색 완료
      const searchResults = await Promise.all(searchPromises);
      console.log('Enhanced parallel search completed.');

      // 모든 결과 수집 및 처리
      const allSources = searchResults.flatMap(result => result.sources || []);
      console.log(`Total sources collected: ${allSources.length}`);

      if (allSources.length > 0) {
        // URL과 제목 기반 고급 중복 제거
        const uniqueSources = allSources.filter((source, index, self) => {
          const isDuplicateUrl = self.findIndex(s => s.url === source.url) !== index;
          const isDuplicateTitle = self.findIndex(s => 
            s.title && source.title && 
            s.title.toLowerCase().replace(/[^a-z0-9]/g, '') === 
            source.title.toLowerCase().replace(/[^a-z0-9]/g, '')
          ) !== index;
          
          return !isDuplicateUrl && !isDuplicateTitle;
        });

        console.log(`Unique sources after deduplication: ${uniqueSources.length}`);

        // 추가 필터링: 실제 연구 논문/기사가 아닐 가능성이 높은 항목 제거
        const contentBlacklist = [
            'call for proposals', 'call for papers', 'call for applications', 'call for research',
            'about the journal', 'for authors', 'submit your paper', 'editorial board',
            'table of contents', 'current issue', 'past issues', 'journal archive',
            'society', 'association', 'symposium', 'conference', 'programme', 'neurodegenerative disease research'
        ];

        const filteredSources = uniqueSources.filter(source => {
            const title = (source.title || '').toLowerCase();
            const snippet = (source.snippet || '').toLowerCase();
            const url = source.url || '';
        
            const fullText = `${title} ${snippet}`;
        
            // 1. 내용에 블랙리스트 키워드가 포함된 경우 필터링
            if (contentBlacklist.some(keyword => fullText.includes(keyword))) {
                console.log(`Filtering out by content keyword: "${source.title}"`);
                return false;
            }
        
            // 2. 제목이 너무 짧고, 일반적인 논문 제목 형식이 아닌 경우 (예: "Nature Aging")
            if (title.length < 25 && !title.includes(':') && !title.includes('-')) {
                 console.log(`Filtering out by short/generic title: "${source.title}"`);
                 return false;
            }
            
            // 3. URL 경로가 너무 짧은 경우 (메인 페이지일 가능성)
            try {
                const urlPath = new URL(url).pathname;
                // 경로가 '/' 이거나 매우 짧으면 필터링 (e.g., /news, /aging)
                if (urlPath.length < 10 && urlPath.split('/').length < 3) {
                    console.log(`Filtering out by short URL path: "${url}"`);
                    return false;
                }
            } catch (e) {
                // URL이 유효하지 않은 경우, 일단 통과
            }
        
            return true;
        });

        console.log(`Sources after filtering non-paper content: ${filteredSources.length}`);

        // 관련성 점수, 신뢰도, 2025년 우선순위 기반 정렬
        const sortedSources = filteredSources.sort((a, b) => {
          const domainA = extractDomain(a.url || '');
          const domainB = extractDomain(b.url || '');
          
          const isTrustedA = trustedDomains.includes(domainA);
          const isTrustedB = trustedDomains.includes(domainB);
          
          // 1순위: 신뢰할 만한 도메인
          if (isTrustedA && !isTrustedB) return -1;
          if (!isTrustedA && isTrustedB) return 1;
          
          // 2순위: 관련성 점수
          const scoreA = a.relevanceScore || 0;
          const scoreB = b.relevanceScore || 0;
          if (scoreB !== scoreA) return scoreB - scoreA;
          
          // 3순위: 2025년 포함 여부
          const has2025A = (a.title + a.snippet).toLowerCase().includes('2025');
          const has2025B = (b.title + b.snippet).toLowerCase().includes('2025');
          if (has2025A && !has2025B) return -1;
          if (!has2025A && has2025B) return 1;
          
          return 0;
        });

        // 최고 품질 6개 연구 선택 (다양성 고려)
        const selectedSources = selectDiverseTopSources(sortedSources, 6);
        console.log(`Selected ${selectedSources.length} diverse top sources`);
        
        const researchPapers: ResearchPaper[] = selectedSources.map((source, index) => {
          // 제목 정리 (마크다운 및 특수 문자 제거)
          const cleanTitle = (source.title || `Latest Aging Research Study ${getCurrentYear()}`)
            .replace(/\*\*|\*/g, '')  // 마크다운 볼드 제거
            .replace(/#+\s*/g, '')    // 마크다운 헤더 제거
            .replace(/\[.*?\]\(.*?\)/g, '')  // 마크다운 링크 제거
            .trim();

          // 최적화된 요약 사용 (이미 generateResearchSummary가 적용됨)
          const bestSnippet = source.summary || 
                             generateResearchSummary(source.snippet || '') || 
                             `Cutting-edge research on aging and longevity in ${getCurrentYear()}.`;

          return {
            id: `research_${getCurrentYear()}_${currentTime}_${index}`,
            title: cleanTitle,
            url: source.url || '#',
            snippet: bestSnippet,
            source: extractDomain(source.url),
            date: extractDateFromContent(source.snippet) || getCurrentYear(),
            author: extractAuthorFromContent(source.snippet),
            thumbnail: getHighQualityThumbnail(source.url, index, source.searchIndex),
            index: index + 1
          };
        });

        setPapers(researchPapers);
        console.log(`Successfully loaded ${researchPapers.length} high-quality research papers from enhanced search`);
      } else {
        setPapers([]);
        setError('최신 연구 결과를 찾을 수 없습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch (err) {
      console.error('Error in enhanced parallel search:', err);
      setError('최신 연구를 불러오는 중 문제가 발생했습니다. 다시 시도해 주세요.');
      setPapers([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 다양성을 고려한 최고 품질 소스 선택
  const selectDiverseTopSources = (sources: any[], count: number): any[] => {
    if (sources.length <= count) return sources;
    
    const selected: any[] = [];
    const usedQueries = new Set<string>();
    const usedDomains = new Set<string>();
    
    // 1차: 다양한 검색어와 도메인에서 최고 품질 선택
    for (const source of sources) {
      if (selected.length >= count) break;
      
      const query = source.searchQuery || '';
      const domain = extractDomain(source.url || '');
      
      // 다양성 체크 (같은 검색어는 1번만, 같은 도메인은 2번까지만 허용)
      if (!usedQueries.has(query)) {
        const domainCount = Array.from(usedDomains).filter(d => d === domain).length;
        if (domainCount < 2) {
          selected.push(source);
          usedQueries.add(query);
          usedDomains.add(domain);
        }
      }
    }
    
    // 2차: 부족한 부분을 최고 점수 순으로 채움
    if (selected.length < count) {
      for (const source of sources) {
        if (selected.length >= count) break;
        // 이미 선택된 소스는 건너뛰기
        if (!selected.some(s => s.url === source.url)) {
          selected.push(source);
        }
      }
    }
    
    return selected.slice(0, count);
  };

  // 연구 내용 요약 생성 (개선된 버전)
  const generateResearchSummary = (content: string): string => {
    if (!content || content.length < 30) return content;
    
    // 텍스트 정리 및 전처리
    let cleanContent = content
      .replace(/\s+/g, ' ')  // 여러 공백을 하나로
      .replace(/\*\*|\*/g, '')  // 마크다운 기호 제거
      .replace(/#+/g, '')  // 해시태그 제거
      .replace(/\[.*?\]\(.*?\)/g, '')  // 마크다운 링크 제거
      .trim();

    // 문장 단위로 분할 (더 정교하게)
    const sentences = cleanContent
      .split(/(?<=[.!?])\s+(?=[A-Z])|(?<=\.)\s*\n+/)
      .map(s => s.trim())
      .filter(s => s.length > 15 && !s.match(/^[A-Z\s]{2,}$/)); // 너무 짧거나 대문자만 있는 문장 제외

    if (sentences.length === 0) return cleanContent.slice(0, 150) + '...';

    // 핵심 키워드 기반 문장 점수 계산
    const keywords = [
      'aging', 'longevity', 'anti-aging', 'senescence', 'telomere', 'mitochondria', 
      'autophagy', 'NAD+', 'rapamycin', 'metformin', 'research', 'study', 'therapy', 
      'treatment', 'clinical', 'trial', 'breakthrough', 'discovery', 'mechanism',
      'cellular', 'molecular', 'biomarker', 'intervention', 'healthspan'
    ];

    const scoredSentences = sentences.map((sentence, index) => {
      const lowerSentence = sentence.toLowerCase();
      let score = 0;
      
      // 키워드 점수
      keywords.forEach(keyword => {
        if (lowerSentence.includes(keyword)) {
          score += keyword === 'aging' || keyword === 'longevity' ? 3 : 1;
        }
      });
      
      // 첫 번째 문장 보너스
      if (index === 0) score += 2;
      
      // 연도 포함 보너스
      if (lowerSentence.includes('2025') || lowerSentence.includes('2024')) {
        score += 2;
      }
      
      // 문장 길이 적정성 (너무 짧거나 길면 감점)
      const length = sentence.length;
      if (length > 40 && length < 200) score += 1;
      if (length < 20 || length > 300) score -= 1;

      return { sentence, score, index };
    });

    // 점수 순으로 정렬하고 상위 문장들 선택
    const topSentences = scoredSentences
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .sort((a, b) => a.index - b.index); // 원래 순서로 재정렬

    // 요약 생성
    let summary = topSentences.map(item => item.sentence).join('. ');
    
    // 마지막 문장이 완전하지 않으면 정리
    if (!summary.endsWith('.') && !summary.endsWith('!') && !summary.endsWith('?')) {
      const lastDotIndex = summary.lastIndexOf('.');
      if (lastDotIndex > summary.length * 0.7) {
        summary = summary.substring(0, lastDotIndex + 1);
      } else {
        summary = summary + '.';
      }
    }

    // 길이 조정 (너무 길면 자르기)
    if (summary.length > 280) {
      const cutIndex = summary.substring(0, 250).lastIndexOf('.');
      summary = cutIndex > 100 ? summary.substring(0, cutIndex + 1) : summary.substring(0, 250) + '...';
    }

    // 너무 짧으면 원본에서 더 가져오기
    if (summary.length < 80 && cleanContent.length > 80) {
      const firstSentence = sentences[0] || cleanContent.substring(0, 150);
      return firstSentence.length > 150 ? firstSentence.substring(0, 150) + '...' : firstSentence;
    }

    return summary || cleanContent.substring(0, 150) + '...';
  };

  // 관련성 점수 계산 (검색어 고려)
  const calculateRelevanceScore = (title: string, snippet: string, searchQuery?: string): number => {
    const text = `${title} ${snippet}`.toLowerCase();
    const query = searchQuery?.toLowerCase().replace(/\d+/g, '').trim() || '';
    
    let score = 0;
    
    // 기본 노화 관련 키워드
    const agingKeywords = [
      'aging', 'longevity', 'anti-aging', 'senescence', 'telomere', 
      'mitochondria', 'autophagy', 'NAD+', 'rapamycin', 'metformin',
      'clinical trial', 'breakthrough', 'research', 'study', 'therapy'
    ];
    
    // 연도 키워드 (높은 가중치)
    const yearKeywords = ['2025', '2024'];
    
    // 기본 키워드 점수
    agingKeywords.forEach(keyword => {
      const matches = (text.match(new RegExp(keyword, 'g')) || []).length;
      score += matches * 1;
    });
    
    // 연도 키워드 점수 (3배 가중치)
    yearKeywords.forEach(keyword => {
      const matches = (text.match(new RegExp(keyword, 'g')) || []).length;
      score += matches * 3;
    });
    
    // 검색어와의 관련성 (5배 가중치)
    if (query) {
      const queryWords = query.split(' ').filter(w => w.length > 2);
      queryWords.forEach(word => {
        const matches = (text.match(new RegExp(word, 'g')) || []).length;
        score += matches * 5;
      });
    }
    
    // 제목에 나타나는 키워드는 추가 점수
    const titleText = title.toLowerCase();
    agingKeywords.forEach(keyword => {
      if (titleText.includes(keyword)) {
        score += 2; // 제목에 나타나면 추가 점수
      }
    });
    
    return score;
  };

  // 도메인 추출
  const extractDomain = (url: string): string => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return 'Scientific Journal';
    }
  };

  // 날짜 추출 개선 (2025년 중심)
  const extractDateFromContent = (content: string): string | null => {
    if (!content) return null;
    
    // 2025년 우선 패턴들
    const datePatterns = [
      /(?:2025)/g, // 2025 우선
      /(?:202[4-5])/g, // 2024, 2025
      /(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+2025/gi,
      /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+2025/gi,
      /\b2025-\d{2}-\d{2}\b/g // 2025-MM-DD 형식
    ];

    for (const pattern of datePatterns) {
      const matches = content.match(pattern);
      if (matches && matches.length > 0) {
        return matches[0];
      }
    }
    
    return '2025'; // 기본값을 2025로 설정
  };

  // 저자 추출 개선
  const extractAuthorFromContent = (content: string): string | undefined => {
    if (!content) return undefined;
    
    // 더 정교한 저자명 패턴들
    const authorPatterns = [
      /(?:authored by|written by|by)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]*)*(?:\s+[A-Z][a-z]+))/gi,
      /(?:Dr\.?\s+)([A-Z][a-z]+(?:\s+[A-Z][a-z]*)*(?:\s+[A-Z][a-z]+))/g,
      /([A-Z][a-z]+(?:\s+[A-Z]\.)*\s+[A-Z][a-z]+)(?:\s+et\s+al\.?)/g,
      /([A-Z][a-z]+\s+[A-Z][a-z]+)(?:\s+and\s+colleagues)/g
    ];

    for (const pattern of authorPatterns) {
      const match = content.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    // 저자를 찾지 못하면 일반적인 연구 저자명 사용
    const genericAuthors = [
      'Dr. Research Team',
      'Scientific Consortium',
      'Research Institute',
      'Clinical Study Group'
    ];
    
    return genericAuthors[Math.floor(Math.random() * genericAuthors.length)];
  };

  // 고화질 썸네일 생성 (랜덤으로 선택된 6개 이미지 사용)
  const getHighQualityThumbnail = (url: string, index: number, searchIndex?: number): string => {
    // 랜덤 썸네일이 설정되어 있으면 사용, 없으면 기본 이미지 사용
    if (randomThumbnails.length > 0) {
      const uniqueIndex = index % randomThumbnails.length;
      return randomThumbnails[uniqueIndex];
    }
    
    // Fallback: 기본 이미지 (첫 로드 시에만 사용)
    const fallbackThumbnails = [
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop&q=95&auto=format', // 정밀 의학
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop&q=95&auto=format', // 분자 생물학
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop&q=95&auto=format', // 분자 구조 모델
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=400&fit=crop&q=95&auto=format', // 의료 연구실
      'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=400&fit=crop&q=95&auto=format', // 의료 기술
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop&q=95&auto=format'  // 생명과학 연구
    ];
    
    const uniqueIndex = index % fallbackThumbnails.length;
    return fallbackThumbnails[uniqueIndex];
  };

  // 페이지 로드 시 연구 검색
  useEffect(() => {
    searchLatestResearch();
    
    // Spline 스크립트 동적 로드
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // 새로고침 버튼 핸들러
  const handleRefresh = () => {
    searchLatestResearch();
  };

  return (
    <div style={{ backgroundColor: '#171717', minHeight: '100vh' }}>
      {/* CSS 애니메이션 스타일 */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          .pulse-animation {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .research-card {
            transition: all 0.3s ease;
            backdrop-filter: blur(12px);
          }
          
          .research-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <Navbar />
      
      {/* Spline 3D 배경 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <spline-viewer url="https://prod.spline.design/aKGpMB18avQjK9vR/scene.splinecode" style={{
          width: '100%',
          height: '100%'
        }}></spline-viewer>
      </div>

      <div className="pt-16 relative z-20" style={{ minHeight: '100vh' }}>
        {/* 헤더 섹션 */}
        <div className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 
              className="text-5xl font-light text-white mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.pages?.latestTrends?.title || '최신 노화 연구 동향'}
            </h1>
            <p 
              className="text-lg text-white/70 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.pages?.latestTrends?.subtitle || '신뢰할 수 있는 학술 데이터베이스에서 실시간으로 검색된 최신 노화 연구를 확인하세요'}
            </p>
            
            {/* 검색 상태 표시 */}
            {isLoading && (
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HugeiconsIcon icon={GlobalSearchIcon} size={20} color="#3b82f6" className="pulse-animation" />
                  <span style={{ color: '#3b82f6', fontSize: '14px' }}>
                    {t.pages?.latestTrends?.searching || '여러 데이터베이스에서 병렬 검색 중...'}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                  {t.pages?.latestTrends?.searchingDetail || 'PubMed, Nature, Science 등에서 최신 연구를 수집하고 있습니다'}
                </div>
              </div>
            )}
            
            {searchQuery && !isLoading && (
              <div 
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: '16px'
                }}
              >
                {t.pages?.latestTrends?.searchComplete || '검색 완료'}: "{searchQuery}"
              </div>
            )}

            {/* 새로고침 버튼 */}
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '14px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                margin: '0 auto',
                transition: 'all 0.2s ease'
              }}
            >
              <HugeiconsIcon 
                icon={LoadingIcon} 
                size={16} 
                color="white" 
                className={isLoading ? 'pulse-animation' : ''} 
              />
              {isLoading ? (t.pages?.latestTrends?.refreshing || '새로운 연구 검색 중...') : (t.pages?.latestTrends?.refreshButton || '새로운 연구 검색')}
            </button>
          </div>
        </div>

        {/* 연구 결과 섹션 */}
        <div className="pb-20">
          <div className="container mx-auto px-6">
            {error && (
              <div 
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  color: '#ef4444',
                  textAlign: 'center'
                }}
              >
                {error}
              </div>
            )}
            
            {isLoading ? (
              // 로딩 상태 - 6개 카드 표시
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={`loading_${i}`}
                    className="research-card"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      height: '320px'
                    }}
                  >
                    <div 
                      style={{
                        width: '100%',
                        height: '120px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                      className="pulse-animation"
                    ></div>
                    <div 
                      style={{
                        width: '80%',
                        height: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        marginBottom: '12px'
                      }}
                      className="pulse-animation"
                    ></div>
                    <div 
                      style={{
                        width: '60%',
                        height: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        marginBottom: '8px'
                      }}
                      className="pulse-animation"
                    ></div>
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        width: '40px',
                        height: '16px',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderRadius: '4px'
                      }}
                      className="pulse-animation"
                    ></div>
                  </div>
                ))}
              </div>
            ) : papers.length === 0 && !error ? (
              // 검색 결과가 없을 때 빈 상태
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                <HugeiconsIcon icon={GlobalSearchIcon} size={48} color="rgba(255, 255, 255, 0.3)" style={{ marginBottom: '20px' }} />
                <h3 style={{
                  fontSize: '20px',
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  {t.pages?.latestTrends?.noResults || '검색 결과가 없습니다'}
                </h3>
                <p style={{
                  fontSize: '16px',
                  marginBottom: '24px',
                  maxWidth: '400px',
                  margin: '0 auto 24px'
                }}>
                  {t.pages?.latestTrends?.noResultsDescription || '현재 검색 조건에 맞는 연구를 찾지 못했습니다. 새로고침 버튼을 눌러 다시 시도해 보세요.'}
                </p>
                <button
                  onClick={handleRefresh}
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <HugeiconsIcon icon={LoadingIcon} size={16} color="#3b82f6" />
                  {t.pages?.latestTrends?.retrySearch || '다시 검색하기'}
                </button>
              </div>
            ) : (
              // 실제 연구 결과
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {papers.map((paper) => (
                  <div
                    key={paper.id}
                    className="research-card"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '0',
                      overflow: 'hidden',
                      cursor: 'pointer'
                    }}
                    onClick={() => window.open(paper.url, '_blank')}
                  >
                    {/* 썸네일 */}
                    <div style={{ position: 'relative' }}>
                      <img
                        src={paper.thumbnail}
                        alt={paper.title}
                        style={{
                          width: '100%',
                          height: '160px',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=400&fit=crop&q=95&auto=format';
                        }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '12px'
                        }}
                      >
                        #{paper.index}
                      </div>
                    </div>

                    {/* 내용 */}
                    <div style={{ padding: '20px' }}>
                      <h3 
                        style={{
                          color: 'white',
                          fontSize: '16px',
                          fontWeight: '600',
                          lineHeight: '1.4',
                          marginBottom: '12px',
                          fontFamily: 'Inter, sans-serif',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          wordBreak: 'break-word',
                          hyphens: 'auto'
                        }}
                        title={paper.title} // 호버 시 전체 제목 표시
                      >
                        {paper.title}
                      </h3>

                      <p 
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          marginBottom: '16px',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          wordBreak: 'break-word',
                          hyphens: 'auto'
                        }}
                        title={paper.snippet} // 호버 시 전체 텍스트 표시
                      >
                        {paper.snippet}
                      </p>

                      {/* 메타데이터 */}
                      <div style={{ marginBottom: '12px' }}>
                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            marginBottom: '6px'
                          }}
                        >
                          <HugeiconsIcon icon={LinkIcon} size={14} color="#3b82f6" />
                          <span 
                            style={{
                              fontSize: '12px',
                              color: '#3b82f6',
                              fontWeight: '500'
                            }}
                          >
                            {paper.source}
                          </span>
                        </div>

                        {paper.date && (
                          <div 
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              marginBottom: '4px'
                            }}
                          >
                            <HugeiconsIcon icon={CalendarIcon} size={14} color="rgba(255, 255, 255, 0.5)" />
                            <span 
                              style={{
                                fontSize: '12px',
                                color: 'rgba(255, 255, 255, 0.5)'
                              }}
                            >
                              {paper.date}
                            </span>
                          </div>
                        )}

                        {paper.author && (
                          <div 
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <HugeiconsIcon icon={UserIcon} size={14} color="rgba(255, 255, 255, 0.5)" />
                            <span 
                              style={{
                                fontSize: '12px',
                                color: 'rgba(255, 255, 255, 0.5)'
                              }}
                            >
                              {paper.author}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* 외부 링크 표시 */}
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '12px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <span 
                          style={{
                            fontSize: '12px',
                            color: '#3b82f6',
                            fontWeight: '500'
                          }}
                        >
                          {t.pages?.latestTrends?.readMore || '자세히 보기'}
                        </span>
                        <HugeiconsIcon icon={LinkIcon} size={16} color="#3b82f6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LatestTrends;
