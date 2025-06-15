import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const magicApiKey = Deno.env.get('x-magicapi-key');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('=== Aging Simulation Function Started ===');
    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);
    
    // API 키 확인
    if (!magicApiKey) {
      console.error('Magic API key not found in environment variables');
      throw new Error('Magic API key not configured');
    }
    console.log('Magic API key found:', magicApiKey ? 'Yes' : 'No');
    console.log('Magic API key (first 10 chars):', magicApiKey?.substring(0, 10) + '...');

    const requestBody = await req.json();
    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    const { action, imageUrl, requestId } = requestBody;

    if (!action) {
      throw new Error('Action parameter is required');
    }

    if (action === 'start') {
      if (!imageUrl) {
        throw new Error('imageUrl parameter is required for start action');
      }

      console.log('Starting aging simulation for image:', imageUrl);
      
      // Magic API 정확한 엔드포인트 (OpenAPI 명세서 기반)
      const apiUrl = 'https://prod.api.market/api/v1/magicapi/period/period';
      console.log('Calling Magic API:', apiUrl);

      const requestPayload = {
        image: imageUrl,
        target_age: 'default',
      };
      console.log('Request payload:', JSON.stringify(requestPayload, null, 2));

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'x-magicapi-key': magicApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      console.log('Magic API response status:', response.status);
      console.log('Magic API response headers:', Object.fromEntries(response.headers.entries()));

      const responseText = await response.text();
      console.log('Magic API raw response:', responseText);

      if (!response.ok) {
        console.error('Magic API Error:', response.status, responseText);
        
        // 더 자세한 에러 정보 제공
        let errorMessage = `Magic API Error: ${response.status}`;
        try {
          const errorData = JSON.parse(responseText);
          errorMessage += ` - ${errorData.message || errorData.error || responseText}`;
        } catch {
          errorMessage += ` - ${responseText}`;
        }
        
        // 특정 에러 코드별 처리
        if (response.status === 401) {
          errorMessage = 'Magic API authentication failed. Please check your API key.';
        } else if (response.status === 403) {
          errorMessage = 'Magic API access denied. Please verify your API key permissions.';
        } else if (response.status === 404) {
          errorMessage = 'Magic API endpoint not found. Please check the API URL.';
        } else if (response.status === 429) {
          errorMessage = 'Magic API rate limit exceeded. Please try again later.';
        } else if (response.status >= 500) {
          errorMessage = 'Magic API server error. Please try again later.';
        }
        
        throw new Error(errorMessage);
      }

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse Magic API response:', parseError);
        throw new Error('Invalid JSON response from Magic API');
      }

      console.log('Magic API parsed response:', JSON.stringify(data, null, 2));

      // 응답에서 request_id 확인
      if (!data.request_id) {
        console.error('No request_id in response:', data);
        throw new Error('No request ID received from Magic API');
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          request_id: data.request_id,
          message: 'Aging simulation started successfully'
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          } 
        }
      );

    } else if (action === 'check') {
      if (!requestId) {
        throw new Error('Request ID is required for check action');
      }

      console.log('Checking aging simulation status for request ID:', requestId);
      
      // Magic API 정확한 폴링 엔드포인트 (OpenAPI 명세서 기반)
      const pollUrl = `https://prod.api.market/api/v1/magicapi/period/predictions/${requestId}`;
      console.log('Polling URL:', pollUrl);

      const response = await fetch(pollUrl, {
        headers: {
          'accept': 'application/json',
          'x-magicapi-key': magicApiKey,
        },
      });

      console.log('Polling response status:', response.status);
      console.log('Polling response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Magic API Polling Error:', response.status, errorText);
        
        // 특정 상태 코드별 처리
        if (response.status === 404) {
          console.log('404 received - treating as still processing');
          return new Response(
            JSON.stringify({ 
              success: true, 
              status: 'processing',
              message: 'Aging simulation is still processing (404 response)'
            }),
            { 
              headers: { 
                ...corsHeaders, 
                'Content-Type': 'application/json' 
              } 
            }
          );
        } else if (response.status === 401) {
          throw new Error('Magic API authentication failed during polling');
        } else if (response.status === 403) {
          throw new Error('Magic API access denied during polling');
        } else if (response.status === 429) {
          throw new Error('Magic API rate limit exceeded during polling');
        } else if (response.status >= 500) {
          throw new Error('Magic API server error during polling');
        }
        
        throw new Error(`Magic API Polling Error: ${response.status} - ${errorText}`);
      }

      const responseText = await response.text();
      console.log('Polling raw response:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse polling response:', parseError);
        throw new Error('Invalid JSON response from polling API');
      }

      console.log('Polling parsed response:', JSON.stringify(data, null, 2));
      
      // Magic API 응답 상태에 대한 추가 분석
      console.log('=== POLLING ANALYSIS ===');
      console.log('Response keys:', Object.keys(data));
      console.log('Status value:', data.status);
      console.log('Status type:', typeof data.status);
      console.log('Result value:', data.result);
      console.log('Result type:', typeof data.result);
      console.log('Has result:', !!data.result);
      console.log('========================');

      // OpenAPI 명세서에 따라 응답 구조 확인: { status: string, result: string }
      // Magic API의 상태값 매핑
      let mappedStatus = data.status || 'unknown';
      
      // Magic API 상태값에 따른 처리
      if (data.status === 'starting' || data.status === 'processing') {
        mappedStatus = 'processing';
      } else if (data.status === 'succeeded' && data.result) {
        mappedStatus = 'succeeded';
      } else if (data.status === 'failed') {
        mappedStatus = 'failed';
      }
      
      console.log('Mapped status:', mappedStatus);

      return new Response(
        JSON.stringify({ 
          success: true, 
          status: mappedStatus,
          output: data.result || data.output, // result를 우선하되 fallback으로 output 사용
          message: `Status: ${mappedStatus}`,
          debug: {
            originalStatus: data.status,
            hasResult: !!data.result,
            timestamp: new Date().toISOString()
          }
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          } 
        }
      );

    } else {
      throw new Error(`Invalid action: ${action}. Use "start" or "check"`);
    }

  } catch (error) {
    console.error('=== Function Error ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // 더 상세한 에러 응답
    const errorResponse = {
      success: false, 
      error: error.message,
      timestamp: new Date().toISOString(),
      debug: {
        errorType: error.constructor.name,
        hasApiKey: !!magicApiKey,
        apiKeyPrefix: magicApiKey ? magicApiKey.substring(0, 10) + '...' : 'NOT_SET'
      }
    };
    
    return new Response(
      JSON.stringify(errorResponse),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
}); 