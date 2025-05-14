import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

export const metadata = {
  title: "About | Shravan Art",
  description: "Learn about Shravan, artistic journey, influences, and creative process",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-24 pb-16 container px-4 md:px-6">
        <SectionHeading
          title="About the Artist"
          description="The journey, influences, and creative vision behind Shravan Art"
        />
        
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="col-span-2">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted relative">
              <Image
                src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Shravan in the studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div className="prose max-w-none dark:prose-invert">
              <p>
                Shravan is a contemporary artist whose work explores the intersection of traditional techniques and modern expression. Born in Mumbai and based in New York City, Shravan's multicultural background informs a unique artistic perspective that bridges diverse visual languages and cultural narratives.
              </p>
              
              <p>
                After completing formal training at the School of Visual Arts in New York, Shravan developed a distinctive style characterized by bold color relationships, dynamic compositions, and a thoughtful integration of traditional motifs with contemporary themes. Working across mediums—from oils and acrylics to mixed media and digital art—Shravan's practice demonstrates versatility while maintaining a cohesive artistic vision.
              </p>
              
              <p>
                Exhibitions of Shravan's work have been held at galleries throughout North America and Europe, with pieces residing in several notable private and institutional collections. Recent solo exhibitions include "Chromatic Dialogues" at the Anderson Contemporary in New York (2023) and "Memory Fragments" at the Tate Modern in London (2022).
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Artist Statement</h3>
              
              <p>
                "My work investigates the visual poetry of everyday life—the moments of beauty, tension, and connection that populate our existence but often go unexamined. I'm interested in the spaces between formal exploration and emotional resonance, seeking a balance that invites both aesthetic appreciation and personal reflection.
              </p>
              
              <p>
                The recurring themes in my practice include cultural identity, memory, and the dialogue between traditional and contemporary visual languages. I believe art serves as both a mirror and a window—reflecting our shared human experience while offering glimpses into new possibilities of seeing and understanding our world."
              </p>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <Button asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t">
          <SectionHeading
            title="Education & Exhibitions"
            description="Academic background and exhibition history"
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="font-medium">MFA, Painting & Mixed Media</div>
                  <div>School of Visual Arts, New York</div>
                  <div className="text-sm text-muted-foreground">2015-2017</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">BFA, Fine Arts</div>
                  <div>Sir J.J. School of Art, Mumbai</div>
                  <div className="text-sm text-muted-foreground">2008-2012</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Artist Residency</div>
                  <div>Centro Cultural Montehermoso, Spain</div>
                  <div className="text-sm text-muted-foreground">Summer 2018</div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Selected Exhibitions</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="font-medium">"Chromatic Dialogues" (Solo)</div>
                  <div>Anderson Contemporary, New York, NY</div>
                  <div className="text-sm text-muted-foreground">2023</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">"Memory Fragments" (Solo)</div>
                  <div>Tate Modern, London, UK</div>
                  <div className="text-sm text-muted-foreground">2022</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">"New Voices in Contemporary Art" (Group)</div>
                  <div>Museum of Modern Art, New York, NY</div>
                  <div className="text-sm text-muted-foreground">2021</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">"Crosscurrents" (Group)</div>
                  <div>Venice Biennale, Venice, Italy</div>
                  <div className="text-sm text-muted-foreground">2019</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        title="Interested in Collecting?"
        description="Browse available original artworks and limited editions"
        buttonText="Shop Now"
        buttonLink="/shop"
      />
    </div>
  );
}