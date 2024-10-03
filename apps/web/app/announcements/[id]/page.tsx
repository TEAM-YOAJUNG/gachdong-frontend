"use client";

import { Header } from "@/components/layout/header";
import { Eye, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnnouncementDetailPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="max-w-[980px] mx-auto py-6 px-4">
        <Link
          href="/announcements"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          모든 공고 보기
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-card shadow rounded-lg overflow-hidden mb-6">
              <div className="p-6 border-b">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex-shrink-0"></div>
                  <div>
                    <h1 className="text-2xl font-bold">
                      GDSC Gachon 24-25 Member 모집
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      GDG On Campus Gachon University
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <Image
                  src="/placeholder.svg"
                  alt="GDSC Gachon"
                  className="w-full h-64 object-cover mb-6 rounded-lg"
                  width={800}
                  height={400}
                />

                <div className="space-y-6">
                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      📌 GDSC는 무엇인가요?
                    </h2>
                    <p className="mb-2">
                      Google Developer Student Clubs(GDSC)는 구글 개발자 기술에
                      관심이 있는 대학생 커뮤니티 그룹입니다.
                    </p>
                    <p>
                      Peer-to-peer 학습 환경을 조성하는 리더들과 함께 기술을
                      학습하고, 이를 공유할 수 있습니다. 24-25기는 2기 리더이며,
                      25년 7월까지 1년 간 활동하게 됩니다.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">🎯 활동 안내</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Connect Session</strong>
                        <p>
                          2주 마다 정기적으로 진행하는 Connect Session에서는
                          모든 Member가 한 공간에 모여 기술 공유와 네트워킹을
                          통해 서로의 성장을 돕습니다.
                        </p>
                      </li>
                      <li>
                        <strong>TechLearn Study</strong>
                        <p>
                          원하는 분야의 스터디에 참여하여 함께 배우고 성장할 수
                          있습니다. 두 달 간 진행되는 TechLearn Study에서
                          자유롭게 공부하고, 다른 멤버들에게 스터디 결과를 통해
                          배운점을 공유하세요.
                        </p>
                      </li>
                      <li>
                        <strong>GDSC Solution Challenge</strong>
                        <p>
                          GDSC 구성원에게 제공되는 글로벌 규모의 공모전으로,
                          UN에서 제정한 17가지 지속 가능한 개발 목표를 달성하기
                          위한 솔루션을 개발합니다.
                        </p>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      🙋‍♀️ 연합 행사 참여
                    </h2>
                    <p>
                      다른 GDSC 챕터, 혹은 파트너십과 동아리와의 다양한 연합
                      행사가 예정되어 있습니다. 이를 통해 네트워킹의 기회를 얻을
                      수 있습니다.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <div className="bg-card shadow rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">모집 정보</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">모집기간</span>
                    <span className="font-medium">2024.03.01 - 2024.03.15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">모집인원</span>
                    <span className="font-medium">00명</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">활동기간</span>
                    <span className="font-medium">2024.03 - 2025.02</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">조회수</span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      245
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/announcements/1/apply"
                className="block w-full bg-primary text-white font-semibold py-3 rounded-lg text-center"
              >
                지원하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
