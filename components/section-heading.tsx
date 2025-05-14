import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  description, 
  centered = false, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "space-y-2 mb-8",
      centered && "text-center",
      className
    )}>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-[46rem]">
          {description}
        </p>
      )}
    </div>
  );
}