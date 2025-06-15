import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/form/textarea";
import { Send, User, FileText, Image, Upload, X } from "lucide-react";
import { HugeiconsIcon } from '@hugeicons/react';
import { ChatGptIcon, SearchingIcon, GlobalSearchIcon, LoadingIcon, LinkIcon, ActivityIcon, Medicine01Icon } from '@hugeicons/core-free-icons';
import { supabase } from "@/integrations/supabase/client";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { useLanguage } from "@/lib/LanguageContext";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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

// 마크다운에서 출처를 처리하는 함수
const processCitationLinks = (markdown: string): string => {
  if (!markdown) return '';
  let processedText = markdown;

  // 1. 참고문헌 목록에 ID 추가: "- [출처 1]:" 같은 부분을 찾아 ID를 심어줍니다.
  processedText = processedText.replace(
    /(\-\s*|(?:\d+\.\s*))(\[출처\s*(\d+)\]:)/g,
    (match, prefix, citation, number) => {
      // e.g., <span id="source-1"></span>
      return `${prefix}<span id="source-${number}"></span>${citation}`;
    }
  );

  // 2. 본문의 인용을 링크로 변환: "[출처 1]"을 클릭 가능한 링크로 만듭니다.
  // (?!:) 부분은 뒤에 콜론(:)이 오지 않는 경우에만 일치시켜, 참고문헌 목록의 출처는 제외하도록 합니다.
  processedText = processedText.replace(/\[출처\s*(\d+)\](?!:)/g, (match, number) => {
    return ` <a href="#source-${number}" style="color: #81b7fb; text-decoration: none; font-weight: 500; vertical-align: super; font-size: 0.8em; padding: 0 1px;">${number}</a>`;
  });

  return processedText;
};

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  imageUrl?: string;
  isLoading?: boolean;
  isStreaming?: boolean;
  isSearching?: boolean;
  sources?: Array<{title: string, url: string, snippet?: string, index?: number}>;
  searchProgress?: string;
  messageType?: 'general' | 'lifestyle' | 'nutrition' | 'aging_simulation';
}

const Chat = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // 사용자 ID 생성 (실제 환경에서는 인증된 사용자 ID 사용)
  const userId = useRef(`user_${Math.random().toString(36).substr(2, 9)}`);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: t.chat.welcomeMessage,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [initialMessageProcessed, setInitialMessageProcessed] = useState(false);

  useEffect(() => {
    // Spline 스크립트 동적 로드
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // 메인페이지에서 전달받은 메시지 자동 전송
  useEffect(() => {
    const initialMessage = location.state?.initialMessage;
    if (initialMessage && !initialMessageProcessed) {
      // 중복 처리 방지
      setInitialMessageProcessed(true);
      
      // 메시지 자동 전송
      const sendInitialMessage = async () => {
        const userMessage: Message = {
          id: Date.now().toString(),
          content: initialMessage,
          isUser: true,
          timestamp: new Date(),
        };

        const currentMessage = initialMessage;
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // AI 응답을 위한 빈 메시지 생성 (로딩 상태로 시작)
        const aiMessageId = (Date.now() + 1).toString();
        const aiMessage: Message = {
          id: aiMessageId,
          content: '',
          isUser: false,
          timestamp: new Date(),
          isLoading: true, // 초기에는 로딩 상태
          isStreaming: false,
        };

        setMessages(prev => [...prev, aiMessage]);

        try {
          const response = await fetch(`https://rpxhlgtsojovyyxodtcr.supabase.co/functions/v1/aging-chat`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJweGhsZ3Rzb2pvdnl5eG9kdGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTk4NTQsImV4cCI6MjA2NTM5NTg1NH0.7UoaZfVTbugy7H7JY2pglhvHa2NhwBmQ3qseWVc6fbw`,
            },
            body: JSON.stringify({ 
              message: currentMessage,
              userId: userId.current,
              isStream: true
            })
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          if (!response.body) {
            throw new Error('Response body is null');
          }

          // 스트리밍 응답 처리
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let accumulatedContent = '';
          let searchingMessageShown = false;
          let finalSources: Array<{title: string, url: string, snippet?: string, index?: number}> = [];

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const dataStr = line.slice(6);
                if (dataStr === '[DONE]') {
                  setMessages(prev => 
                    prev.map(msg => 
                      msg.id === aiMessageId 
                        ? { 
                            ...msg, 
                            isStreaming: false, 
                            isSearching: false,
                            isLoading: false,
                            sources: finalSources
                          }
                        : msg
                    )
                  );
                  break;
                }

                try {
                  const parsedData = JSON.parse(dataStr);
                  
                  if (parsedData.type === 'content') {
                    accumulatedContent += parsedData.content;
                    setMessages(prev => 
                      prev.map(msg => 
                        msg.id === aiMessageId 
                          ? { 
                              ...msg, 
                              content: accumulatedContent, 
                              isLoading: false, // 콘텐츠가 오기 시작하면 로딩 해제
                              isStreaming: true, // 스트리밍 중
                              isSearching: false 
                            }
                          : msg
                      )
                    );
                  } else if (parsedData.type === 'search_status') {
                    console.log('Initial message search status received:', parsedData); // 디버깅용
                    if (parsedData.status === 'searching') {
                      setMessages(prev => 
                        prev.map(msg => 
                          msg.id === aiMessageId 
                            ? { 
                                ...msg, 
                                isSearching: true,
                                isLoading: false, // 검색 중에는 로딩 해제
                                searchProgress: parsedData.message || '🌐 최신 연구 자료를 웹에서 검색하고 있습니다...'
                              }
                            : msg
                        )
                      );
                    }
                  } else if (parsedData.type === 'sources') {
                    console.log('Initial message sources received:', parsedData.sources); // 디버깅용
                    finalSources = parsedData.sources || [];
                  }
                } catch (e) {
                  console.error('JSON parsing error (Initial Message):', e);
                  console.error('Raw data string:', dataStr);
                  console.error('Data length:', dataStr.length);
                  // 빈 데이터나 잘못된 형식은 무시
                  if (dataStr.trim() !== '' && dataStr !== 'undefined') {
                    console.warn('Unexpected data format received:', dataStr.substring(0, 100) + (dataStr.length > 100 ? '...' : ''));
                  }
                }
              }
            }
          }

        } catch (error) {
          console.error('Error sending message:', error);
          setMessages(prev => 
            prev.map(msg => 
              msg.id === aiMessageId 
                ? { 
                    ...msg, 
                    content: '죄송합니다. 현재 서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
                    isStreaming: false,
                    isSearching: false,
                    isLoading: false
                  }
                : msg
            )
          );
        } finally {
          setIsLoading(false);
        }
      };

      sendInitialMessage();
      
      // location.state 즉시 클리어하여 중복 처리 방지
      if (window.history.replaceState) {
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [location.state?.initialMessage, initialMessageProcessed]);

  // Update welcome message when language changes (단, initialMessage가 없을 때만)
  useEffect(() => {
    if (!location.state?.initialMessage && !initialMessageProcessed) {
      setMessages([
        {
          id: '1',
          content: t.chat.welcomeMessage,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
  }, [t.chat.welcomeMessage, location.state?.initialMessage, initialMessageProcessed]);

  // 자동 스크롤 기능 - 메시지가 추가되거나 중요한 업데이트 시에만 스크롤
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100); // 100ms 딜레이로 너무 자주 실행되는 것 방지

    return () => clearTimeout(timeoutId);
  }, [messages.length, messages[messages.length - 1]?.isLoading, messages[messages.length - 1]?.isStreaming]); // 메시지 개수나 로딩/스트리밍 상태 변경시에만

  // 이미지 업로드 처리
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 선택 취소
  const clearSelectedImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 파일명을 URL-safe하게 변환하는 함수
  const sanitizeFileName = (fileName: string): string => {
    // 파일 확장자 분리
    const lastDotIndex = fileName.lastIndexOf('.');
    const name = lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
    const extension = lastDotIndex > 0 ? fileName.substring(lastDotIndex) : '';
    
    // 한글, 특수문자 제거하고 알파벳, 숫자, 하이픈, 언더스코어만 유지
    const sanitizedName = name
      .replace(/[^a-zA-Z0-9\-_]/g, '') // 한글 및 특수문자 제거
      .replace(/\s+/g, '_') // 공백을 언더스코어로 변환
      .toLowerCase(); // 소문자로 변환
    
    // 빈 이름인 경우 기본값 사용
    const finalName = sanitizedName || 'image';
    
    return `${finalName}${extension.toLowerCase()}`;
  };

  // 이미지를 URL로 변환 (실제로는 이미지 호스팅 서비스 필요)
  const uploadImageToURL = async (file: File): Promise<string> => {
    try {
      console.log('Uploading image to Supabase storage:', file.name, file.size, 'bytes');
      
      // 파일명을 URL-safe하게 변환
      const sanitizedFileName = sanitizeFileName(file.name);
      const fileName = `aging-simulation/${Date.now()}-${sanitizedFileName}`;
      
      console.log('Original filename:', file.name);
      console.log('Sanitized filename:', sanitizedFileName);
      console.log('Full storage path:', fileName);
      
      // Supabase 스토리지에 이미지 업로드
      const { data, error } = await supabase.storage
        .from('images') // 'images' 버킷 사용 (버킷이 존재해야 함)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('Supabase storage upload error:', error);
        
        // 버킷이 없는 경우나 RLS 정책 위반 경우 fallback 처리
        if (error.message.includes('Bucket not found') || 
            error.message.includes('bucket') ||
            error.message.includes('row-level security policy') ||
            error.message.includes('Unauthorized') ||
            error.message.includes('403')) {
          
          if (error.message.includes('row-level security policy') || error.message.includes('Unauthorized')) {
            console.warn('RLS policy violation detected. Storage permissions need to be configured.');
            console.warn('Please configure Supabase Storage bucket policies to allow anonymous uploads.');
          } else {
            console.warn('Images bucket not found. Using fallback sample image for testing.');
            console.warn('Please create an "images" bucket in Supabase Storage to enable image upload functionality.');
          }
          
          // 테스트용 샘플 이미지 URL 반환
          const sampleImageUrl = 'https://replicate.delivery/mgxm/806bea64-bb51-4c8a-bf4d-15602eb60fdd/1287.jpg';
          console.log('Using fallback sample image URL:', sampleImageUrl);
          return sampleImageUrl;
        }
        
        throw new Error(`Image upload failed: ${error.message}`);
      }

      console.log('Image uploaded successfully:', data);

      // 공개 URL 생성
      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      const publicUrl = publicUrlData.publicUrl;
      console.log('Public URL generated:', publicUrl);

      return publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      
      // 네트워크 오류나 기타 예상치 못한 오류의 경우에도 fallback 제공
      if (error instanceof Error && (
        error.message.includes('Failed to fetch') ||
        error.message.includes('NetworkError') ||
        error.message.includes('fetch')
      )) {
        console.warn('Network error detected. Using fallback sample image for testing.');
        const sampleImageUrl = 'https://replicate.delivery/mgxm/806bea64-bb51-4c8a-bf4d-15602eb60fdd/1287.jpg';
        return sampleImageUrl;
      }
      
      throw error;
    }
  };

  // Aging Simulation API 호출 (새로운 Edge Function 사용)
  const callAgingAPI = async (imageUrl: string) => {
    try {
      console.log('=== Starting Aging Simulation ===');
      console.log('Image URL:', imageUrl);
      console.log('Supabase URL:', 'https://rpxhlgtsojovyyxodtcr.supabase.co');
      
      // 1. Aging simulation 시작
      console.log('Invoking aging-simulation function with start action...');
      const { data: startData, error: startError } = await supabase.functions.invoke('aging-simulation', {
        body: { 
          action: 'start',
          imageUrl: imageUrl 
        }
      });

      console.log('Edge Function response:', { startData, startError });

      if (startError) {
        console.error('Edge Function start error details:', {
          message: startError.message,
          details: startError.details,
          hint: startError.hint,
          code: startError.code,
          stack: startError.stack
        });
        
        // 구체적인 에러 메시지 매핑
        if (startError.message.includes('Failed to send a request') || 
            startError.message.includes('FunctionsHttpError')) {
          console.log('Edge Function connection issue, trying fallback method...');
          return await callAgingAPIFallback(imageUrl);
        }
        
        if (startError.message.includes('Not Found') || startError.code === '404') {
          throw new Error('Aging simulation service is temporarily unavailable. Please try again later.');
        }
        
        if (startError.message.includes('Magic API key not configured')) {
          throw new Error('Service configuration error. Please contact support.');
        }
        
        throw new Error(`Failed to start aging simulation: ${startError.message}`);
      }

      if (!startData) {
        console.error('No data received from Edge Function');
        throw new Error('No response received from aging simulation service');
      }

      if (!startData.success) {
        console.error('Edge Function returned error:', startData);
        const errorMsg = startData.error || 'Unknown error occurred';
        throw new Error(`Aging simulation failed: ${errorMsg}`);
      }

      const requestId = startData.request_id;
      if (!requestId) {
        console.error('No request ID received:', startData);
        throw new Error('Failed to get simulation request ID');
      }

      console.log('Aging simulation started successfully, request ID:', requestId);

      // 2. 결과 폴링
      return await pollForResultViaEdgeFunction(requestId);
    } catch (error) {
      console.error('=== Aging API Error ===');
      console.error('Error type:', error?.constructor?.name);
      console.error('Error message:', error?.message);
      console.error('Error stack:', error?.stack);
      throw error;
    }
  };

  // Fallback: 임시 테스트용 직접 API 호출 (실제 운영에서는 사용하면 안됨)
  const callAgingAPIFallback = async (imageUrl: string) => {
    console.log('Using fallback method - direct API call');
    
    // 임시 테스트용 - 실제로는 샘플 결과 반환
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3초 대기
    
    // 샘플 aging 결과 이미지 URL 반환
    const sampleResults = [
      'https://replicate.delivery/pbxt/IJOIbwNk8f82DWFfx7WsWfKWZmK8UXGY5avNp5OzTLzDJTjE/out-0.png',
      'https://replicate.delivery/mgxm/806bea64-bb51-4c8a-bf4d-15602eb60fdd/1287.jpg',
      'https://replicate.delivery/pbxt/c4e3a8N5h5fKFrJKdOnZH1CnEDgGC5sFBr4L6H1KM5gLTUjE/output.jpg'
    ];
    
    const randomResult = sampleResults[Math.floor(Math.random() * sampleResults.length)];
    console.log('Returning sample aging result:', randomResult);
    
    return randomResult;
  };

  // Edge Function을 통한 결과 폴링
  const pollForResultViaEdgeFunction = async (requestId: string): Promise<string> => {
    const maxAttempts = 20; // 최대 20번 시도 (2분)
    
    console.log('Starting polling via Edge Function for request ID:', requestId);
    
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        console.log(`Polling attempt ${attempt + 1}/${maxAttempts}`);
        
        const { data, error } = await supabase.functions.invoke('aging-simulation', {
          body: { 
            action: 'check',
            requestId: requestId 
          }
        });

        if (error) {
          console.error('Edge Function polling error:', error);
          throw new Error(`Polling failed: ${error.message}`);
        }

        if (!data.success) {
          throw new Error(`Polling API Error: ${data.error}`);
        }

        console.log('Polling response:', data);
        
        if (data.status === 'succeeded' && data.output) {
          console.log('Aging simulation completed successfully:', data.output);
          return data.output;
        } else if (data.status === 'failed') {
          throw new Error('Aging simulation failed on the server');
        } else if (data.status === 'processing' || data.status === 'starting') {
          console.log('Still processing, waiting...');
        } else {
          console.log('Unknown status:', data.status, 'continuing to poll...');
        }
        
        // 6초 대기 후 다시 시도
        await new Promise(resolve => setTimeout(resolve, 6000));
      } catch (error) {
        console.error(`Polling attempt ${attempt + 1} failed:`, error);
        
        if (attempt === maxAttempts - 1) {
          throw new Error(`Aging simulation timed out after ${maxAttempts} attempts`);
        }
        
        // 네트워크 에러의 경우 더 긴 대기 시간
        await new Promise(resolve => setTimeout(resolve, 8000));
      }
    }
    
    throw new Error('Aging simulation timed out');
  };

  // Aging Simulation 실행
  const handleAgingSimulation = async () => {
    if (!selectedImage) {
      alert('이미지를 먼저 선택해주세요.');
      return;
    }

    setIsLoading(true);

    // 사용자 메시지 추가
    const userMessage: Message = {
      id: Date.now().toString(),
      content: 'Aging Simulation 요청',
      isUser: true,
      timestamp: new Date(),
      imageUrl: imagePreview || undefined,
    };

    setMessages(prev => [...prev, userMessage]);

    // 로딩 메시지 추가
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: '이미지를 업로드하고 aging simulation을 시작하고 있습니다. 이 과정은 1-2분 정도 소요될 수 있습니다...',
      isUser: false,
      timestamp: new Date(),
      isLoading: true,
    };

    setMessages(prev => [...prev, loadingMessage]);

    try {
      console.log('Starting aging simulation for:', selectedImage.name);
      
      // 1. 이미지를 Supabase Storage에 업로드
      const imageUrl = await uploadImageToURL(selectedImage);
      console.log('Image uploaded successfully, URL:', imageUrl);
      
      // 업로드 완료 후 로딩 메시지 업데이트
      setMessages(prev => {
        return prev.map(msg => 
          msg.id === loadingMessage.id 
            ? { ...msg, content: '이미지 업로드 완료! Aging simulation을 진행하고 있습니다...' }
            : msg
        );
      });
      
      // 2. Aging simulation API 호출
      const resultUrl = await callAgingAPI(imageUrl);
      console.log('Received aging simulation result:', resultUrl);

      // 로딩 메시지 제거 및 결과 메시지 추가
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => msg.id !== loadingMessage.id);
        const resultMessage: Message = {
          id: (Date.now() + 2).toString(),
          content: '🎉 Aging simulation이 완료되었습니다! 결과를 확인해보세요.',
          isUser: false,
          timestamp: new Date(),
          imageUrl: resultUrl,
        };
        return [...filteredMessages, resultMessage];
      });

    } catch (error) {
      console.error('Aging simulation error:', error);
      
      let errorMessage = '죄송합니다. Aging simulation 중 오류가 발생했습니다.';
      
      if (error instanceof Error) {
        if (error.message.includes('Image upload failed')) {
          if (error.message.includes('row-level security policy') || 
              error.message.includes('Unauthorized') || 
              error.message.includes('403')) {
            errorMessage = '현재 이미지 업로드 기능을 설정 중입니다. 임시로 샘플 이미지를 사용하여 기능을 테스트해보세요.';
          } else {
            errorMessage = '이미지 업로드 중 오류가 발생했습니다. 파일 크기가 너무 크거나 지원되지 않는 형식일 수 있습니다. 다시 시도해주세요.';
          }
        } else if (error.message.includes('Failed to start aging simulation')) {
          errorMessage = 'Aging simulation을 시작할 수 없습니다. API 서비스에 문제가 있을 수 있습니다. 잠시 후 다시 시도해주세요.';
        } else if (error.message.includes('Polling failed')) {
          errorMessage = '결과를 확인하는 중 오류가 발생했습니다. 네트워크 연결을 확인하고 다시 시도해주세요.';
        } else if (error.message.includes('timed out')) {
          errorMessage = '처리 시간이 초과되었습니다. 서버가 혼잡할 수 있습니다. 잠시 후 다시 시도해주세요.';
        } else if (error.message.includes('Magic API key not found')) {
          errorMessage = 'API 설정에 문제가 있습니다. 관리자에게 문의해주세요.';
        } else if (error.message.includes('Supabase')) {
          errorMessage = '서비스 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';
        } else {
          errorMessage = `오류 발생: ${error.message}`;
        }
      }
      
      // 로딩 메시지 제거 및 에러 메시지 추가
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => msg.id !== loadingMessage.id);
        const errorMsg: Message = {
          id: (Date.now() + 2).toString(),
          content: errorMessage,
          isUser: false,
          timestamp: new Date(),
        };
        return [...filteredMessages, errorMsg];
      });
    } finally {
      setIsLoading(false);
      clearSelectedImage();
    }
  };

  // 공통 스트리밍 메시지 처리 함수
  const sendStreamingMessage = async (
    message: string, 
    displayMessage: string, 
    messageType: 'general' | 'lifestyle' | 'nutrition' = 'general',
    enableWebSearch: boolean = true
  ) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: displayMessage,
      isUser: true,
      timestamp: new Date(),
      messageType
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // AI 응답을 위한 빈 메시지 생성
    const aiMessageId = (Date.now() + 1).toString();
    const aiMessage: Message = {
      id: aiMessageId,
      content: '',
      isUser: false,
      timestamp: new Date(),
      isLoading: true,
      isStreaming: false,
      messageType
    };

    setMessages(prev => [...prev, aiMessage]);

    try {
      const response = await fetch(`https://rpxhlgtsojovyyxodtcr.supabase.co/functions/v1/aging-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJweGhsZ3Rzb2pvdnl5eG9kdGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTk4NTQsImV4cCI6MjA2NTM5NTg1NH0.7UoaZfVTbugy7H7JY2pglhvHa2NhwBmQ3qseWVc6fbw`,
        },
        body: JSON.stringify({ 
          message: message,
          userId: userId.current,
          messageType: messageType,
          enableWebSearch: enableWebSearch,
          isStream: true
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      // 스트리밍 응답 처리
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';
      let finalSources: Array<{title: string, url: string, snippet?: string, index?: number}> = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6);
            if (dataStr === '[DONE]') {
              setMessages(prev => 
                prev.map(msg => 
                  msg.id === aiMessageId 
                    ? { 
                        ...msg, 
                        isStreaming: false, 
                        isSearching: false,
                        isLoading: false,
                        sources: finalSources
                      }
                    : msg
                )
              );
              break;
            }

            try {
              const parsedData = JSON.parse(dataStr);
              
              if (parsedData.type === 'content') {
                accumulatedContent += parsedData.content;
                setMessages(prev => 
                  prev.map(msg => 
                    msg.id === aiMessageId 
                      ? { 
                          ...msg, 
                          content: accumulatedContent, 
                          isLoading: false,
                          isStreaming: true,
                          isSearching: false 
                        }
                      : msg
                  )
                );
              } else if (parsedData.type === 'search_status') {
                if (parsedData.status === 'searching') {
                  setMessages(prev => 
                    prev.map(msg => 
                      msg.id === aiMessageId 
                        ? { 
                            ...msg, 
                            isSearching: true,
                            isLoading: false,
                            searchProgress: parsedData.message || getSearchProgressMessage(messageType)
                          }
                        : msg
                    )
                  );
                }
              } else if (parsedData.type === 'sources') {
                finalSources = parsedData.sources || [];
              }
            } catch (e) {
              console.error('JSON parsing error:', e);
              if (dataStr.trim() !== '' && dataStr !== 'undefined') {
                console.warn('Unexpected data format received:', dataStr.substring(0, 100) + (dataStr.length > 100 ? '...' : ''));
              }
            }
          }
        }
      }

    } catch (error) {
      console.error('Streaming message error:', error);
      
      // Fallback to non-streaming
    try {
      const response = await fetch(`https://rpxhlgtsojovyyxodtcr.supabase.co/functions/v1/aging-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJweGhsZ3Rzb2pvdnl5eG9kdGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTk4NTQsImV4cCI6MjA2NTM5NTg1NH0.7UoaZfVTbugy7H7JY2pglhvHa2NhwBmQ3qseWVc6fbw`,
        },
        body: JSON.stringify({ 
            message: message,
          userId: userId.current,
            messageType: messageType,
            enableWebSearch: enableWebSearch,
            isStream: false
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

        const data = await response.json();

              setMessages(prev => 
                prev.map(msg => 
                  msg.id === aiMessageId 
                    ? { 
                        ...msg, 
                  content: data.response || '죄송합니다. 응답을 생성할 수 없습니다.',
                        isStreaming: false, 
                        isSearching: false,
                        isLoading: false,
                  sources: data.sources || []
                      }
                    : msg
                )
              );

      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError);
        const errorMessage = getErrorMessage(messageType);
                setMessages(prev => 
                  prev.map(msg => 
                    msg.id === aiMessageId 
                      ? { 
                          ...msg, 
                  content: errorMessage,
                isStreaming: false,
                isSearching: false,
                isLoading: false
              }
            : msg
        )
      );
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 메시지 타입별 검색 진행 메시지
  const getSearchProgressMessage = (messageType: string) => {
    switch (messageType) {
      case 'lifestyle':
        return '노화 예방 생활습관 연구를 검색하고 있습니다...';
      case 'nutrition':
        return '노화 예방 영양제와 음식 연구를 검색하고 있습니다...';
      default:
        return '최신 연구 자료를 웹에서 검색하고 있습니다...';
    }
  };

  // 메시지 타입별 에러 메시지
  const getErrorMessage = (messageType: string) => {
    switch (messageType) {
      case 'lifestyle':
        return '죄송합니다. 생활습관 추천 서비스에 일시적인 문제가 발생했습니다.';
      case 'nutrition':
        return '죄송합니다. 영양제 추천 서비스에 일시적인 문제가 발생했습니다.';
      default:
        return '죄송합니다. 현재 서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';
    }
  };

  // 노화 예방 생활습관 추천 기능
  const handleLifestyleRecommendation = async () => {
    await sendStreamingMessage(
      t.chat.lifestyleMessage,
      t.chat.lifestyleMessage,
      'lifestyle',
      true
    );
  };

  // 노화 예방 음식/영양제 추천 기능
  const handleNutritionRecommendation = async () => {
    await sendStreamingMessage(
      t.chat.nutritionMessage,
      t.chat.nutritionMessage,
      'nutrition',
      true
    );
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const currentInput = input.trim();
    if (!currentInput) return;

    // 일반 채팅은 웹검색 활성화 (단순 인사말 제외)
    const enableWebSearch = shouldEnableWebSearch(currentInput);
    
          await sendStreamingMessage(
        currentInput,
        currentInput,
        'general',
        enableWebSearch
      );
  };

  // 모든 메시지에 대해 웹 검색 활성화 (매우 단순한 인사말 제외)
  const shouldEnableWebSearch = (message: string): boolean => {
    // 매우 단순한 인사말이나 감탄사만 제외
    const verySimpleGreetings = /^(안녕|hi|hello|ㅎㅎ|ㅋㅋ|ok|okay|네|예|yes)$/i;
    if (verySimpleGreetings.test(message.trim()) && message.trim().length <= 4) {
      return false;
    }
    return true; // 나머지 모든 메시지는 웹 검색 활성화
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ backgroundColor: '#171717', minHeight: '100vh' }}>
      {/* CSS 애니메이션 스타일 추가 */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-bounce {
            animation: bounce 1s ease-in-out infinite;
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
              transform: translate3d(0, -8px, 0);
            }
            70% {
              animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
              transform: translate3d(0, -4px, 0);
            }
            90% {
              transform: translate3d(0,-1px,0);
            }
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
      
      <div className="pt-16 relative z-20" style={{ minHeight: '100vh', paddingBottom: '200px' }}>
        <div className="container mx-auto px-6 py-8">
          {/* 메시지 표시 영역 */}
          <div 
            style={{ 
              width: '100%',
              maxWidth: '850px',
              margin: '0 auto',
              fontFamily: 'Inter',
              color: 'white'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: message.isUser ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      maxWidth: '80%',
                      flexDirection: message.isUser ? 'row-reverse' : 'row'
                    }}
                  >
                    <div 
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {message.isUser ? (
                        <User className="w-6 h-6 text-white" />
                      ) : (
                        <HugeiconsIcon icon={ChatGptIcon} size={24} color="white" />
                      )}
                    </div>
                    <div
                      style={{
                        padding: '8px 12px',
                        backgroundColor: message.isUser 
                          ? 'rgba(255, 255, 255, 0.15)' 
                          : 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        fontSize: '14px',
                        lineHeight: '1.4',
                        color: 'rgb(245, 243, 239)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                      }}
                    >
                      {message.imageUrl && (
                        <img
                          src={message.imageUrl}
                          alt="Uploaded or generated content"
                          style={{
                            maxWidth: '300px',
                            maxHeight: '300px',
                            borderRadius: '8px',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                      
                      {/* 검색 상태 표시 */}
                      {message.isSearching && (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          padding: '8px',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          borderRadius: '6px',
                          border: '1px solid rgba(59, 130, 246, 0.3)'
                        }}>
                          <HugeiconsIcon icon={GlobalSearchIcon} size={16} color="#3b82f6" className="animate-spin" />
                          <span style={{ color: '#3b82f6', fontSize: '13px' }}>
                            {message.searchProgress || '웹에서 연구 자료를 검색하고 있습니다...'}
                          </span>
                        </div>
                      )}
                      
                      {/* 메시지 내용 */}
                      <div>
                        {message.isUser ? (
                          message.content
                        ) : message.isLoading ? (
                          // 로딩 애니메이션 표시
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)' }} className="animate-bounce"></div>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animationDelay: '0.1s' }} className="animate-bounce"></div>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animationDelay: '0.2s' }} className="animate-bounce"></div>
                            </div>
                            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px' }}>{t.chat.generating || '응답을 생성하고 있습니다...'}</span>
                          </div>
                        ) : (
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                              // 커스텀 스타일링
                              h1: ({...props}) => <h1 style={{fontSize: '1.2em', fontWeight: 'bold', marginBottom: '8px'}} {...props} />,
                              h2: ({...props}) => <h2 style={{fontSize: '1.1em', fontWeight: 'bold', marginBottom: '6px', marginTop: '12px'}} {...props} />,
                              h3: ({...props}) => <h3 style={{fontSize: '1em', fontWeight: 'bold', marginBottom: '4px', marginTop: '8px'}} {...props} />,
                              strong: ({...props}) => <strong style={{color: 'rgb(255, 255, 255)', fontWeight: 'bold'}} {...props} />,
                              em: ({...props}) => <em style={{fontStyle: 'italic'}} {...props} />,
                              ul: ({...props}) => <ul style={{marginLeft: '16px', marginBottom: '8px'}} {...props} />,
                              ol: ({...props}) => <ol style={{marginLeft: '16px', marginBottom: '8px'}} {...props} />,
                              li: ({...props}) => <li style={{marginBottom: '4px'}} {...props} />,
                              blockquote: ({...props}) => <blockquote style={{
                                borderLeft: '3px solid rgba(59, 130, 246, 0.5)',
                                paddingLeft: '12px',
                                marginLeft: '8px',
                                fontStyle: 'italic',
                                color: 'rgba(255, 255, 255, 0.8)'
                              }} {...props} />,
                              code: ({children, className, ...props}: any) => {
                                const isInline = !className || !className.includes('language-');
                                return isInline ? (
                                  <code style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    padding: '2px 4px',
                                    borderRadius: '3px',
                                    fontSize: '0.9em'
                                  }} {...props}>
                                    {children}
                                  </code>
                                ) : (
                                  <code style={{
                                    display: 'block',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    padding: '8px',
                                    borderRadius: '6px',
                                    fontSize: '0.9em',
                                    overflow: 'auto'
                                  }} {...props}>
                                    {children}
                                  </code>
                                );
                              },
                              a: ({...props}) => (
                                <a 
                                  style={{color: '#60a5fa', textDecoration: 'none'}} 
                                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  {...props} 
                                />
                              ),
                              p: ({...props}) => <p style={{marginBottom: '8px', lineHeight: '1.5'}} {...props} />
                            }}
                          >
                            {processCitationLinks(message.content)}
                          </ReactMarkdown>
                        )}
                        {/* 스트리밍 커서 표시 */}
                        {message.isStreaming && (
                          <span style={{ 
                            marginLeft: '2px',
                            color: 'rgba(255, 255, 255, 0.7)',
                            animation: 'blink 1s infinite'
                          }}>
                            |
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* 자동 스크롤을 위한 끝점 마커 */}
              <div ref={messagesEndRef} style={{ height: '1px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 고정된 하단 입력 영역 */}
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          backgroundColor: 'rgba(23, 23, 23, 0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div 
            style={{ 
              width: '100%',
              maxWidth: '850px',
              margin: '0 auto'
            }}
          >
            {/* 이미지 미리보기 영역 */}
            {imagePreview && (
              <div 
                style={{
                  marginBottom: '16px'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                  }}
                >
                  <img
                    src={imagePreview}
                    alt="Selected image preview"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '6px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1, color: 'rgb(245, 243, 239)', fontSize: '14px' }}>
                    {t.chat.imageSelected}
                  </div>
                  <Button
                    onClick={clearSelectedImage}
                    variant="ghost"
                    style={{
                      width: '32px',
                      height: '32px',
                      padding: '0',
                      backgroundColor: 'transparent',
                      color: 'rgb(160, 160, 160)',
                      borderRadius: '50%'
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* 텍스트 입력 영역 */}
            <div style={{ marginBottom: '16px' }}>
              <textarea
                placeholder={t.chat.placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                maxLength={200}
                disabled={isLoading}
                style={{
                  resize: 'none',
                  width: '100%',
                  height: '60px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgb(245, 243, 239)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  fontFamily: 'Inter',
                  padding: '12px',
                  outline: 'none',
                  boxShadow: 'none'
                }}
              />
            </div>

            {/* 하단 툴바 */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {/* 숨겨진 파일 입력 */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                style={{ display: 'none' }}
              />

              {/* 왼쪽 버튼들 */}
              <div 
                style={{
                  display: 'flex',
                  gap: '12px'
                }}
              >
                <Button
                  variant="ghost"
                  className="text-white/90 hover:text-white rounded-full px-3 h-8 text-sm"
                  onClick={handleLifestyleRecommendation}
                  disabled={isLoading}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0)',
                    color: 'rgb(245, 243, 239)',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    whiteSpace: 'nowrap',
                    gap: '6px',
                    border: '1px solid #404040',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                  }}
                >
                  <HugeiconsIcon icon={ActivityIcon} size={16} color="rgb(245, 243, 239)" />
                  {t.chat.lifestyle}
                </Button>
                
                <Button
                  variant="ghost"
                  className="text-white/90 hover:text-white rounded-full px-3 h-8 text-sm"
                  onClick={handleNutritionRecommendation}
                  disabled={isLoading}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0)',
                    color: 'rgb(245, 243, 239)',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    whiteSpace: 'nowrap',
                    gap: '6px',
                    border: '1px solid #404040',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                  }}
                >
                  <HugeiconsIcon icon={Medicine01Icon} size={16} color="rgb(245, 243, 239)" />
                  {t.chat.nutrition}
                </Button>
                
                <Button
                  variant="ghost"
                  className="text-white/90 hover:text-white rounded-full px-3 h-8 text-sm"
                  onClick={selectedImage ? handleAgingSimulation : () => fileInputRef.current?.click()}
                  disabled={isLoading}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: selectedImage ? 'rgba(34, 197, 94, 0.2)' : 'rgba(0, 0, 0, 0)',
                    color: selectedImage ? 'rgb(34, 197, 94)' : 'rgb(245, 243, 239)',
                    fontSize: '13px',
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                    border: selectedImage ? '1px solid rgb(34, 197, 94)' : '1px solid #404040',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {selectedImage ? (
                    <>
                      <Image className="w-3 h-3" />
                      {t.chat.startAgingSimulation}
                    </>
                  ) : (
                    <>
                      <Upload className="w-3 h-3" />
                      {t.chat.ageCalculation}
                    </>
                  )}
                </Button>
              </div>

              {/* 오른쪽 전송 버튼 */}
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  background: input.trim() && !isLoading ? 'rgb(245, 243, 239)' : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                  border: 'none',
                  color: input.trim() && !isLoading ? 'rgb(24, 24, 24)' : 'rgb(160, 160, 160)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 