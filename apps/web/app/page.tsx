"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/layout/header";

const announcements = [
  {
    title: "새로운 동아리 모집 기간 시작",
    description: "2024학년도 1학기 동아리 모집이 시작되었습니다!",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "동아리 박람회 개최",
    description: "다양한 동아리를 만나볼 수 있는 기회!",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "우수 동아리 시상식",
    description: "2023학년도 우수 동아리 시상식이 열립니다.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + announcements.length) % announcements.length
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="max-w-[980px] mx-auto px-4 py-8">
        <section className="mb-8">
          <Card className="w-full overflow-hidden">
            <div className="relative h-[200px]">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={announcement.image}
                    alt={announcement.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2">
                        {announcement.title}
                      </h2>
                      <p className="text-lg mb-4">{announcement.description}</p>
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-foreground"
                      >
                        자세히 보기
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </Card>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          <section className="flex-grow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">동아리 목록</h2>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="동아리 검색"
                    className="pl-8 w-[200px]"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      필터
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>모집 중인 동아리만</DropdownMenuItem>
                    <DropdownMenuItem>최근 업데이트 순</DropdownMenuItem>
                    <DropdownMenuItem>인기 순</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Tabs defaultValue="전체" className="w-full mb-4">
              <TabsList>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "GDG On Campus Gachon",
                  category: "IT · 프로그래밍",
                  recruiting: true,
                  image:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
                {
                  name: "가천대 토론 동아리",
                  category: "학술 · 사회",
                  recruiting: false,
                  image:
                    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
                {
                  name: "가천 미술 동아리",
                  category: "문화 · 예술",
                  recruiting: true,
                  image:
                    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
                {
                  name: "가천 축구회",
                  category: "체육 · 건강",
                  recruiting: false,
                  image:
                    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
              ].map((club, i) => (
                <Card
                  key={i}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex-shrink-0 overflow-hidden">
                        <Image
                          src={club.image}
                          alt={`${club.name} logo`}
                          width={64}
                          height={64}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg">{club.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {club.category}
                        </p>
                        <div className="flex items-center mt-2">
                          <span
                            className={`w-2 h-2 rounded-full ${club.recruiting ? "bg-green-500" : "bg-red-500"} mr-2`}
                          ></span>
                          <span
                            className={`text-sm ${club.recruiting ? "text-green-600" : "text-red-600"}`}
                          >
                            {club.recruiting ? "모집중" : "모집 마감"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">최근 올라온 공고</h2>
            <div className="space-y-3">
              {[
                {
                  name: "GDSC Gachon 24-25 Member",
                  category: "IT · 프로그래밍",
                  dday: "D-5",
                  image:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
                {
                  name: "가천대 토론 동아리 신입 모집",
                  category: "학술 · 사회",
                  dday: "D-3",
                  image:
                    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
                {
                  name: "가천 미술 동아리 회원 모집",
                  category: "문화 · 예술",
                  dday: "D-7",
                  image:
                    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
                },
              ].map((announcement, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex-shrink-0 overflow-hidden">
                        <Image
                          src={announcement.image}
                          alt="Club logo"
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-sm">
                          {announcement.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {announcement.category}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-primary">
                        {announcement.dday}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-4">
              <Button variant="outline">+ 더보기</Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
