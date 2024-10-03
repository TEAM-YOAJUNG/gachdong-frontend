"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Calendar, Eye, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 가상의 공고 데이터
const announcements = [
  {
    id: 1,
    title: "GDSC Gachon 24-25 Member 모집",
    category: "IT · 프로그래밍",
    startDate: "2024.03.01",
    endDate: "2024.03.15",
    views: 245,
    dday: 5,
  },
  {
    id: 2,
    title: "멋쟁이사자처럼 12기 모집",
    category: "IT · 프로그래밍",
    startDate: "2024.03.05",
    endDate: "2024.03.20",
    views: 180,
    dday: 10,
  },
  {
    id: 3,
    title: "가천대 밴드 동아리 신입 모집",
    category: "문화 · 예술",
    startDate: "2024.03.10",
    endDate: "2024.03.25",
    views: 120,
    dday: 15,
  },
  // ... 더 많은 가상 데이터 추가 가능
];

export default function Announcements() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="flex justify-between items-center px-4 py-2 max-w-[1200px] mx-auto h-20 border-b">
        <Link href="/" className="text-2xl font-bold text-foreground">
          GACHDONG
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
          >
            동아리 목록
          </Link>
          <Link
            href="/announcements"
            className="text-sm font-medium text-foreground hover:text-foreground transition-colors"
          >
            동아리 공고
          </Link>
        </nav>
        <Button variant="default" size="sm">
          로그인
        </Button>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">동아리 공고</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <Tabs
            defaultValue="all"
            className="w-full md:w-auto overflow-x-auto mb-4 md:mb-0"
          >
            <TabsList className="w-full md:w-auto justify-start">
              {[
                "전체",
                "IT · 프로그래밍",
                "학술 · 사회",
                "문화 · 예술",
                "체육 · 건강",
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-3 py-1.5 text-sm whitespace-nowrap"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="flex space-x-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="공고 검색..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              필터
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <Card
              key={announcement.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex-shrink-0">
                    <Image
                      src="/placeholder.svg"
                      alt="Club logo"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-1">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {announcement.category}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />{" "}
                        {announcement.startDate} - {announcement.endDate}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> {announcement.views}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-primary mb-2">
                      D-{announcement.dday}
                    </span>
                    <Button variant="outline" size="sm">
                      자세히 보기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            검색 결과가 없습니다.
          </div>
        )}

        {filteredAnnouncements.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline">더 보기</Button>
          </div>
        )}
      </main>
    </div>
  );
}
