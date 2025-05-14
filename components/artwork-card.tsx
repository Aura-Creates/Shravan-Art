import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Artwork } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
  isShop?: boolean;
}

export function ArtworkCard({ artwork, className, isShop = false }: ArtworkCardProps) {
  const routePrefix = isShop ? "/shop" : "/portfolio";
  const availabilityBadge = !isShop ? null : (
    artwork.available ? (
      <Badge variant="secondary" className="absolute top-4 right-4 z-10">
        Available
      </Badge>
    ) : (
      <Badge variant="outline" className="absolute top-4 right-4 z-10 bg-background/80">
        Sold
      </Badge>
    )
  );

  return (
    <Card className={cn("group overflow-hidden border-0 shadow-none", className)}>
      <CardContent className="p-0 relative">
        <Link href={`${routePrefix}/${artwork.slug}`}>
          <div className="relative">
            {availabilityBadge}
            <AspectRatio ratio={4/3} className="bg-muted">
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={artwork.featured}
                />
              </div>
            </AspectRatio>
            <div className="mt-3 space-y-1">
              <h3 className="font-medium text-sm">
                {artwork.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {artwork.technique}, {artwork.year}
                </p>
                {isShop && artwork.price && (
                  <p className="text-sm font-medium">
                    ${artwork.price}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}