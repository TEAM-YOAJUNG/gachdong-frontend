"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Filter, Calendar, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
          >
            동아리 공고
          </Link>
        </nav>
        <Button variant="default" size="sm">
          로그인
        </Button>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <section className="mb-8 relative">
          <div className="bg-card rounded-lg overflow-hidden shadow-md">
            <div className="relative h-[200px] md:h-[300px]">
              <Image
                src="/placeholder.svg"
                alt="Banner"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    가천대학교 동아리 모음
                  </h2>
                  <p className="text-lg md:text-xl mb-4">
                    다양한 동아리를 만나보세요
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white hover:text-foreground"
                  >
                    자세히 보기
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md">
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-foreground" />
          </button>
          <button className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md">
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-foreground" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${i === 3 ? "bg-primary" : "bg-gray-300"}`}
              ></div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          <section className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h2 className="text-2xl font-semibold mb-2 md:mb-0">
                동아리 목록
              </h2>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                필터
              </Button>
            </div>
            <Tabs defaultValue="all" className="w-full overflow-x-auto mb-4">
              <TabsList className="w-full justify-start md:justify-center">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[800px] overflow-y-auto pr-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card
                  key={i}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center p-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex-shrink-0 mr-4">
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
                        GDG On Campus Gachon
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        IT · 프로그래밍
                      </p>
                      <p className="text-sm line-clamp-2">
                        구글의 다양한 기술과 플랫폼을 학습하고 공유하는 개발자
                        커뮤니티입니다.
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted px-4 py-2 flex justify-between items-center">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      모집중
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-foreground hover:text-primary"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="lg:w-1/3">
            <div className="lg:sticky lg:top-4">
              <h2 className="text-2xl font-semibold mb-4">최근 올라온 공고</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex-shrink-0">
                          <Image
                            src="/placeholder.svg"
                            alt="Club logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-sm">
                            GDSC Gachon 24-25 Member ...
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            IT · 프로그래밍
                          </p>
                        </div>
                        <span className="text-xs font-medium text-primary">
                          D-5
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> 2024.03.01 -
                          03.15
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" /> 245
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Button variant="outline">더보기</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
