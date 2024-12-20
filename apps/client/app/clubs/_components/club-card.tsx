import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ClubSummaryResponse } from '@gachdong/api/club';
import { CATEGORY_MAP } from '@/constants/categories';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ClubCardProps {
  club: ClubSummaryResponse;
}

export function ClubCard({ club }: ClubCardProps) {
  return (
    <Link href={`/clubs/${club.clubId}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-video w-full overflow-hidden">
          <Avatar className="relative aspect-video h-full w-full rounded-none">
            <AvatarImage src={club.clubImageUrl} asChild>
              <Image
                src={club.clubImageUrl ?? ''}
                alt={`${club.clubName} 로고`}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority
              />
            </AvatarImage>
            <AvatarFallback delayMs={600} className="bg-muted relative flex h-full w-full items-center justify-center">
              {club.clubName.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="group-hover:text-primary line-clamp-1 font-medium text-gray-900">{club.clubName}</h3>
            <Badge variant="secondary" className="shrink-0 text-xs">
              {CATEGORY_MAP[club.category]}
            </Badge>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600">{club.shortDescription}</p>
          <div className="mt-3">
            <Badge
              variant="outline"
              className={cn(
                'text-xs font-medium',
                club.recruitingStatus
                  ? 'border-green-500 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800'
                  : 'border-red-300 bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800'
              )}
            >
              {club.recruitingStatus ? '모집중' : '모집 마감'}
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
}
