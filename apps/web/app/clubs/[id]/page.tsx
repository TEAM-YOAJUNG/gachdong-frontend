import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RECRUIT_LIST } from "@/constants/data";
import { Calendar, Users, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ClubIntroduction() {
  const club = {
    name: "GDG On Campus Gachon",
    category: "IT · 프로그래밍",
    description:
      "Google Developer Student Clubs(GDSC)는 구글 개발자 기술에 관심이 있는 대학생 커뮤니티 그룹입니다. Peer-to-peer 학습 환경을 조성하는 리더들과 함께 기술을 학습하고, 이를 공유할 수 있습니다.",
    memberCount: 50,
    foundedYear: 2020,
    activities: [
      "정기적인 기술 세미나 및 워크샵 개최",
      "구글 기술을 활용한 프로젝트 개발",
      "다양한 IT 기업과의 네트워킹 이벤트",
      "글로벌 GDSC 솔루션 챌린지 참여",
    ],
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="max-w-[980px] mx-auto py-6 px-4">
        <div className="mb-6">
          <Link
            href="/clubs"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← 동아리 목록으로 돌아가기
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 bg-muted rounded-full flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt={club.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{club.name}</h1>
                    <p className="text-muted-foreground">{club.category}</p>
                  </div>
                </div>

                <Tabs defaultValue="intro" className="w-full">
                  <TabsList>
                    <TabsTrigger value="intro">소개</TabsTrigger>
                    <TabsTrigger value="activities">활동</TabsTrigger>
                  </TabsList>
                  <TabsContent value="intro">
                    <p className="text-sm leading-relaxed mb-4">
                      {club.description}
                    </p>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        회원 수: {club.memberCount}명
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        설립년도: {club.foundedYear}년
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="activities">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {club.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">모집 공고</h2>
            <div className="space-y-4">
              {RECRUIT_LIST.map((announcement) => (
                <Card
                  key={announcement.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{announcement.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {announcement.startDate} - {announcement.endDate}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        조회수: {announcement.views}
                      </div>
                    </div>
                    <Button className="w-full mt-3" variant="outline">
                      자세히 보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
