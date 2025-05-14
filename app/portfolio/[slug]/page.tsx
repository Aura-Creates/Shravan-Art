import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtworkBySlug, getRelatedArtworks, getAllArtworks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const artworks = getAllArtworks();
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artwork = getArtworkBySlug(params.slug);
  
  if (!artwork) {
    return {
      title: "Artwork Not Found | Shravan Art",
    };
  }
  
  return {
    title: `${artwork.title} | Shravan Art Portfolio`,
    description: artwork.description,
  };
}

export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const artwork = getArtworkBySlug(params.slug);
  
  if (!artwork) {
    notFound();
  }
  
  const relatedArtworks = getRelatedArtworks(artwork);

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                {artwork.title}
              </h1>
              <p className="text-muted-foreground">
                {artwork.year} &middot; {artwork.technique}
              </p>
            </div>
            
            <div>
              <p className="leading-relaxed">{artwork.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-sm">
              <div>
                <p className="font-medium">Category</p>
                <p className="text-muted-foreground capitalize">{artwork.category.replace("-", " ")}</p>
              </div>
              <div>
                <p className="font-medium">Dimensions</p>
                <p className="text-muted-foreground">{artwork.dimensions}</p>
              </div>
              <div>
                <p className="font-medium">Year</p>
                <p className="text-muted-foreground">{artwork.year}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {artwork.available && artwork.price && (
                <Button asChild>
                  <Link href={`/shop/${artwork.slug}`}>
                    Purchase - ${artwork.price}
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline">
                <Link href="/contact">Inquire</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/portfolio">Back to Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {relatedArtworks.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <SectionHeading title="Related Works" />
            <div className={cn(
              "grid gap-6",
              relatedArtworks.length === 1 ? "grid-cols-1" : 
              relatedArtworks.length === 2 ? "grid-cols-1 sm:grid-cols-2" : 
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}>
              {relatedArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}