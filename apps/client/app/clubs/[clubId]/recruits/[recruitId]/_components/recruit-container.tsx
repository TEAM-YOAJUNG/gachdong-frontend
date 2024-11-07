'use client';
import { clubQueries } from '@/apis/club';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from '@/lib/date';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import remarkGfm from 'remark-gfm';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Eye } from 'lucide-react';
import { Users } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';

export function RecruitContainer() {
  const { clubId, recruitId } = useParams();
  const { data: announcement } = useSuspenseQuery(clubQueries.recruitmentsDetail(Number(clubId), Number(recruitId)));
  const { data: club } = useSuspenseQuery(clubQueries.club(Number(clubId)));

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="lg:w-2/3">
        <Card className="mb-6">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-4">
              <div className="bg-muted h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={club.clubImageUrl ?? ''}
                  alt={`${club.clubName} logo`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <CardTitle className="text-2xl">{announcement.title}</CardTitle>
                <p className="text-muted-foreground mt-1">{club.clubName}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="prose prose-sm text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-muted-foreground prose-pre:bg-transparent prose-pre:p-0 prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:text-sm prose-ul:text-sm prose-ol:text-sm max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ node, ...props }) => <p className="whitespace-pre-wrap" {...props} />,
                }}
              >
                {announcement.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:w-1/3">
        <div className="sticky top-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">모집 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  모집기간
                </span>
                <span className="font-medium">
                  {announcement.startDate} - {announcement.endDate}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  모집인원
                </span>
                <span className="font-medium">{announcement.recruitmentCount}명</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center">
                  <Eye className="mr-2 h-4 w-4" />
                  조회수
                </span>
                <span className="font-medium">
                  {
                    100
                    // TODO: 조회수 추가
                  }
                </span>
              </div>
              <div className="pt-2">
                <Badge variant="outline" className="w-full justify-center py-1 text-sm">
                  마감까지 {formatDistanceToNow(announcement.endDate)}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg" asChild>
            <Link href={`/clubs/${clubId}/recruits/${recruitId}/apply`}>지원하기</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
