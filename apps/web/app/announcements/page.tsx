"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Newspaper, Search } from "lucide-react";
import Link from "next/link";

interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
}

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      title: "2024학년도 1학기 동아리 등록 안내",
      date: "2024-02-15",
      category: "일반",
      content:
        "2024학년도 1학기 동아리 등록 기간 및 절차에 대해 안내드립니다...",
    },
    {
      id: 2,
      title: "동아리 공간 사용 규정 변경 안내",
      date: "2024-02-10",
      category: "시설",
      content: "동아리방 및 공용 공간 사용에 대한 새로운 규정이 적용됩니다...",
    },
    {
      id: 3,
      title: "2024 동아리 박람회 개최 안내",
      date: "2024-02-05",
      category: "행사",
      content: "오는 3월 2일부터 3일간 동아리 박람회가 개최됩니다...",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="max-w-[980px] mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">공지사항</h1>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="공지사항 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="space-y-4 flex flex-col">
          {filteredAnnouncements.map((announcement) => (
            <Link
              key={announcement.id}
              href={`/announcements/${announcement.id}`}
            >
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{announcement.title}</CardTitle>
                      <CardDescription>{announcement.date}</CardDescription>
                    </div>
                    <Badge>{announcement.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {announcement.content}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <Newspaper className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-lg font-semibold">공지사항이 없습니다</h2>
            <p className="mt-2 text-muted-foreground">
              검색어와 일치하는 공지사항이 없습니다.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
