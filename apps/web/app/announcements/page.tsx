import { Search, Filter, Calendar, Eye } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Button } from "../../components/ui/button";

export default function AnnouncementList() {
  const announcements = [
    {
      id: 1,
      title: "GDSC Gachon 24-25 Member 모집",
      category: "IT · 프로그래밍",
      club: "GDG On Campus Gachon",
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      views: 245,
      daysLeft: 5,
    },
    {
      id: 2,
      title: "멋쟁이사자처럼 12기 모집",
      category: "IT · 프로그래밍",
      club: "멋쟁이사자처럼",
      startDate: "2024-03-05",
      endDate: "2024-03-20",
      views: 180,
      daysLeft: 10,
    },
    {
      id: 3,
      title: "가천대 밴드 동아리 신입 모집",
      category: "문화 · 예술",
      club: "가천대 밴드",
      startDate: "2024-03-10",
      endDate: "2024-03-25",
      views: 120,
      daysLeft: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="max-w-[980px] mx-auto py-6 px-4">
        <h2 className="text-3xl font-bold mb-6">동아리 공고</h2>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
          <div className="flex space-x-2 overflow-x-auto">
            {[
              "전체",
              "IT · 프로그래밍",
              "학술 · 사회",
              "문화 · 예술",
              "체육 · 건강",
            ].map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="공고 검색..."
                className="pl-10 pr-4 py-2 border rounded-md w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Link
              href={`/announcements/${announcement.id}`}
              key={announcement.id}
              className="block bg-card hover:bg-accent transition-colors rounded-lg overflow-hidden shadow"
            >
              <div className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex-shrink-0"></div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {announcement.club}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {announcement.startDate} - {announcement.endDate}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {announcement.views}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    D-{announcement.daysLeft}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {announcement.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
