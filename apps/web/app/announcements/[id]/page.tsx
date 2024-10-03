"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
import Link from "next/link";
import { ANNOUNCEMENTS } from "@/constants/data";
import { Announcement } from "@/types";

export default function AnnouncementDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    const foundAnnouncement = ANNOUNCEMENTS.find(
      (a) => a.id === Number(params.id)
    );
    if (foundAnnouncement) {
      setAnnouncement(foundAnnouncement);
    } else {
      notFound();
    }
  }, [params.id]);

  if (!announcement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="max-w-[980px] mx-auto py-6 px-4">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/announcements" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            모든 공지사항 보기
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{announcement.title}</CardTitle>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(announcement.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                조회수 {announcement.views}
              </div>
            </div>
          </CardHeader>
          <Separator className="mb-6" />
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-muted-foreground prose-pre:bg-transparent prose-pre:p-0 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-base prose-ul:text-base prose-ol:text-base">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ node, ...props }) => (
                    <p className="whitespace-pre-wrap" {...props} />
                  ),
                }}
              >
                {announcement.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}