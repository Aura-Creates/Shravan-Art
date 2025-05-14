import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtworkBySlug, getRelatedArtworks, getAllArtworks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ShoppingCart, Heart, Share2 } from "lucide-react";

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
      title: "Artwork Not Found | Shravan Art Shop",
    };
  }
  
  return {
    title: `${artwork.title} | Shravan Art Shop`,
    description: artwork.description,
  };
}

export default function ShopItemPage({ params }: { params: { slug: string } }) {
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
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  {artwork.title}
                </h1>
                {artwork.available ? (
                  <Badge variant="secondary">Available</Badge>
                ) : (
                  <Badge variant="outline">Sold</Badge>
                )}
              </div>
              <p className="text-muted-foreground">
                {artwork.year} &middot; {artwork.technique}
              </p>
            </div>
            
            {artwork.available && artwork.price && (
              <div className="text-2xl font-semibold">${artwork.price}</div>
            )}
            
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
              {artwork.available && (
                <Button className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              )}
              <Button variant="outline" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Save
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="pt-6 border-t text-sm text-muted-foreground">
              <p>Free shipping for purchases over $500</p>
              <p className="mt-2">14-day return policy for all artworks</p>
              <p className="mt-2">Certificate of authenticity included</p>
            </div>
          </div>
        </div>
        
        {relatedArtworks.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <SectionHeading title="You Might Also Like" />
            <div className={cn(
              "grid gap-6",
              relatedArtworks.length === 1 ? "grid-cols-1" : 
              relatedArtworks.length === 2 ? "grid-cols-1 sm:grid-cols-2" : 
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}>
              {relatedArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} isShop={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}