import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  className,
}: CTASectionProps) {
  return (
    <div className={`py-16 md:py-24 bg-muted/50 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <SectionHeading title={title} description={description} centered />
          <div className="mx-auto w-full max-w-md">
            <Button asChild className="w-full">
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}