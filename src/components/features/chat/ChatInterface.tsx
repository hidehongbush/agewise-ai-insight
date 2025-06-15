import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/layout/card";
import { Textarea } from "@/components/ui/form/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, FileText, Image, Play } from "lucide-react";
import { HugeiconsIcon } from '@hugeicons/react';
import { ChatGptIcon } from '@hugeicons/core-free-icons';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";

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

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
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

  // Update welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        id: '1',
        content: t.chat.welcomeMessage,
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  }, [t.chat.welcomeMessage]);

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

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // 입력된 메시지와 함께 chat 페이지로 이동
    navigate('/chat', { 
      state: { 
        initialMessage: input.trim() 
      }
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="relative pt-3 pb-0" style={{ backgroundColor: '#171717', height: '300px' }}>
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
      <div className="container mx-auto px-6 relative z-20">
        <div 
          className="mx-auto"
          style={{ 
            border: '1px solid #404040',
            position: 'absolute',
            top: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '230px',
            width: '100%',
            maxWidth: '850px',
            backgroundColor: 'rgba(34, 34, 34, 0.4)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter',
            color: 'white',
            boxShadow: 'rgba(0, 0, 0, 0) 0px 564px 158px 0px, rgba(0, 0, 0, 0.03) 0px 361px 144px 0px, rgba(0, 0, 0, 0.11) 0px 203px 122px 0px, rgba(0, 0, 0, 0.19) 0px 90px 90px 0px, rgba(0, 0, 0, 0.21) 0px 23px 50px 0px'
          }}
        >
          {/* 메시지 표시 영역 */}
          <div style={{ flex: '1', padding: '16px 32px' }}>
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
                        fontSize: '15px',
                        lineHeight: '1.4',
                        color: 'rgb(245, 243, 239)'
                      }}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start' }}>
                  <div 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <HugeiconsIcon icon={ChatGptIcon} size={24} color="white" />
                  </div>
                  <div 
                    style={{
                      padding: '8px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)' }} className="animate-bounce"></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animationDelay: '0.1s' }} className="animate-bounce"></div>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animationDelay: '0.2s' }} className="animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 텍스트 입력 영역 */}
          <div 
            style={{
              paddingTop: '16px',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingBottom: '16px'
            }}
          >
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
                fontSize: '15px',
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
              alignItems: 'center',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingBottom: '20px'
            }}
          >
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0)',
                  color: 'rgb(245, 243, 239)',
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  whiteSpace: 'nowrap',
                  gap: '4px',
                  border: '1px solid #404040'
                }}
              >
                <HugeiconsIcon icon={ChatGptIcon} size={14} />
                {t.chat.aiConsult}
              </Button>
              
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white rounded-full px-3 h-8 text-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0)',
                  color: 'rgb(245, 243, 239)',
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  whiteSpace: 'nowrap',
                  gap: '4px',
                  border: '1px solid #404040'
                }}
              >
                <FileText className="w-3 h-3" />
                {t.chat.research}
              </Button>
              
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white rounded-full px-3 h-8 text-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(0, 0, 0, 0)',
                  color: 'rgb(245, 243, 239)',
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  whiteSpace: 'nowrap',
                  gap: '4px',
                  border: '1px solid #404040'
                }}
              >
                <Image className="w-3 h-3" />
                {t.chat.ageCalculation}
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
    </section>
  );
};

export default ChatInterface;
