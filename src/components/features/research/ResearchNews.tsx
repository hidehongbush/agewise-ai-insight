import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/layout/card";
import { Calendar, ExternalLink } from "lucide-react";

const ResearchNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "간헐적 단식이 세포 노화 억제에 미치는 영향",
      summary: "2024년 Cell 저널에 발표된 연구에 따르면, 16:8 간헐적 단식이 텔로미어 길이 유지에 긍정적 영향을 미치는 것으로 나타났습니다.",
      date: "2024년 1월 15일",
      source: "Cell Journal",
    },
    {
      id: 2,
      title: "비타민 D와 근육량 유지의 상관관계",
      summary: "50세 이상 성인에서 충분한 비타민 D 수치가 근육량 감소(sarcopenia) 예방에 중요한 역할을 한다는 연구 결과가 발표되었습니다.",
      date: "2024년 1월 10일",
      source: "Journal of Gerontology",
    },
    {
      id: 3,
      title: "오메가-3 지방산의 뇌 노화 방지 효과",
      summary: "DHA와 EPA가 풍부한 오메가-3 지방산 섭취가 인지 기능 저하를 늦추고 치매 위험을 감소시킨다는 메타분석 결과가 공개되었습니다.",
      date: "2024년 1월 5일",
      source: "Nature Neuroscience",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          최신 노화 연구 동향
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    출처: {item.source}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchNews;
