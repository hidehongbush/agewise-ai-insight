import { useEffect } from 'react';

export const useScrollbarFix = () => {
  useEffect(() => {
    // Chrome에서 스크롤바 스타일 강제 적용
    const forceScrollbarStyles = () => {
      // 동적으로 스타일 요소 생성
      const styleId = 'forced-scrollbar-styles';
      let styleElement = document.getElementById(styleId) as HTMLStyleElement;
      
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }

      // 강제 스크롤바 스타일 적용 - webkit 속성만 사용
      styleElement.textContent = `
        /* 스크롤바 자체는 표시 - 외부 확장 프로그램 대응 */
        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        body[data-demoway-document-id]::-webkit-scrollbar,
        body[data-demoway-document-id] *::-webkit-scrollbar,
        div[data-demoway-ignore]::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: block !important;
          width: 8px !important;
          height: 8px !important;
          background: transparent !important;
          background-color: transparent !important;
        }

        /* 트랙과 버튼은 숨김/투명 - 외부 확장 프로그램 대응 */
        html::-webkit-scrollbar-track,
        body::-webkit-scrollbar-track,
        body[data-demoway-document-id]::-webkit-scrollbar-track,
        body[data-demoway-document-id] *::-webkit-scrollbar-track,
        div[data-demoway-ignore]::-webkit-scrollbar-track,
        *::-webkit-scrollbar-track,
        html::-webkit-scrollbar-button,
        body::-webkit-scrollbar-button,
        body[data-demoway-document-id]::-webkit-scrollbar-button,
        body[data-demoway-document-id] *::-webkit-scrollbar-button,
        div[data-demoway-ignore]::-webkit-scrollbar-button,
        *::-webkit-scrollbar-button {
          display: none !important;
          background: transparent !important;
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
        }

        /* 썸만 표시 - 외부 확장 프로그램 대응 */
        html::-webkit-scrollbar-thumb,
        body::-webkit-scrollbar-thumb,
        body[data-demoway-document-id]::-webkit-scrollbar-thumb,
        body[data-demoway-document-id] *::-webkit-scrollbar-thumb,
        div[data-demoway-ignore]::-webkit-scrollbar-thumb,
        *::-webkit-scrollbar-thumb {
          display: block !important;
          background: rgba(128, 128, 128, 0.6) !important;
          background-color: rgba(128, 128, 128, 0.6) !important;
          border-radius: 4px !important;
          border: none !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
        }

        html::-webkit-scrollbar-thumb:hover,
        body::-webkit-scrollbar-thumb:hover,
        body[data-demoway-document-id]::-webkit-scrollbar-thumb:hover,
        body[data-demoway-document-id] *::-webkit-scrollbar-thumb:hover,
        div[data-demoway-ignore]::-webkit-scrollbar-thumb:hover,
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(128, 128, 128, 0.8) !important;
          background-color: rgba(128, 128, 128, 0.8) !important;
        }

        html::-webkit-scrollbar-corner,
        body::-webkit-scrollbar-corner,
        body[data-demoway-document-id]::-webkit-scrollbar-corner,
        body[data-demoway-document-id] *::-webkit-scrollbar-corner,
        div[data-demoway-ignore]::-webkit-scrollbar-corner,
        *::-webkit-scrollbar-corner {
          display: none !important;
          background: transparent !important;
          background-color: transparent !important;
        }
      `;
    };

    // 페이지 로드 후 스타일 적용
    forceScrollbarStyles();

    // webkit 속성만 사용하므로 DOM 인라인 스타일 적용 불필요
    const forceInlineStyles = () => {
      // webkit 스크롤바 속성은 CSS에서만 적용 가능
      // DOM에서 인라인으로 설정할 수 없으므로 이 함수는 빈 상태로 유지
    };

    // 인라인 스타일 적용
    forceInlineStyles();

    // DOM 변경 감지하여 다시 적용
    const observer = new MutationObserver(() => {
      forceScrollbarStyles();
      forceInlineStyles();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // 주기적으로 스타일 재적용 (극단적 방법)
    const interval = setInterval(() => {
      forceScrollbarStyles();
      forceInlineStyles();
    }, 1000);

    // 클린업
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
}; 