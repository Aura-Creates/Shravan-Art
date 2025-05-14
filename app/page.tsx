import Image from "next/image";
import Link from "next/link";
import { getFeaturedArtworks } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero Image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm dark:bg-background/60" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            SHRAVAN ART
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore a unique artistic journey through color, form, and emotion
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">Shop Artworks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading 
                title="About the Artist" 
                description="Shravan is a contemporary artist exploring the boundaries between traditional techniques and modern expression. With a background in fine arts and digital media, Shravan creates work that bridges cultural narratives and personal experiences."
              />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">Read More</Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="The artist at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Works Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading 
            title="Featured Works" 
            description="A selection of significant pieces from recent collections"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/portfolio">Explore Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Shop CTA Section */}
      <CTASection
        title="Own a Piece of Art"
        description="Browse available original artworks and limited edition prints"
        buttonText="Shop Now"
        buttonLink="/shop"
      />
    </div>
  );
}