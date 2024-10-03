"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  author: string;
}

export default function AnnouncementPage() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the announcement data from an API
    // For this example, we'll use mock data
    const mockAnnouncement: Announcement = {
      id: 1,
      title: "2024학년도 1학기 동아리 등록 안내",
      date: "2024-02-15",
      category: "일반",
      content: `
        안녕하세요, 학생 여러분.

        2024학년도 1학기 동아리 등록에 대해 안내드립니다.

        1. 등록 기간: 2024년 2월 20일 ~ 3월 5일
        2. 등록 방법: 학교 홈페이지 내 동아리 관리 시스템을 통해 온라인으로 등록
        3. 필요 서류:
           - 동아리 등록 신청서
           - 회원 명단
           - 연간 활동 계획서
           - 지도교수 승인서

        4. 주의사항:
           - 모든 서류는 PDF 형식으로 제출해주세요.
           - 기존 동아리도 재등록이 필요합니다.
           - 등록 마감 이후에는 추가 등록이 불가능합니다.

        5. 문의:
           학생처 동아리 담당자 (02-1234-5678, club@gachon.ac.kr)

        많은 관심과 참여 부탁드립니다.

        감사합니다.
      `,
      author: "학생처",
    };

    setAnnouncement(mockAnnouncement);
  }, []);

  if (!announcement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="max-w-[980px] mx-auto py-6 px-4">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/announcements" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            공지사항 목록으로 돌아가기
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{announcement.title}</CardTitle>
                <CardDescription className="flex items-center mt-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {announcement.date}
                </CardDescription>
              </div>
              <Badge>{announcement.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <User className="mr-2 h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {announcement.author}
              </span>
            </div>
            <Separator className="my-4" />
            <div className="whitespace-pre-wrap">{announcement.content}</div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="ml-auto">
              <Link href="/announcements">목록으로</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
