import { artworks } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkGrid } from "@/components/artwork-grid";

export const metadata = {
  title: "Portfolio | Shravan Art",
  description: "Explore the artistic portfolio of Shravan featuring paintings, drawings, sculptures, and more",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Portfolio"
          description="Explore a diverse collection of artistic expressions across mediums and styles"
        />
        <ArtworkGrid artworks={artworks} />
      </div>
    </div>
  );
}