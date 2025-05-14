import { getAvailableArtworks } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkGrid } from "@/components/artwork-grid";
import { CTASection } from "@/components/cta-section";

export const metadata = {
  title: "Shop | Shravan Art",
  description: "Purchase original artworks and limited editions from Shravan's artistic collection",
};

export default function ShopPage() {
  const availableArtworks = getAvailableArtworks();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-24 pb-16 container px-4 md:px-6">
        <SectionHeading
          title="Art Shop"
          description="Browse and purchase available original artworks and limited editions"
        />
        <ArtworkGrid artworks={availableArtworks} isShop={true} />
      </div>
      
      <CTASection
        title="Looking for Something Specific?"
        description="Contact me for commission requests or inquiries about sold pieces"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}