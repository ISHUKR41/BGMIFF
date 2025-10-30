import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent";
  width?: "default" | "wide" | "full";
  className?: string;
  id?: string;
  "data-testid"?: string;
}

export default function SectionWrapper({
  children,
  variant = "default",
  width = "default",
  className = "",
  id,
  "data-testid": dataTestId,
}: SectionWrapperProps) {
  const bgVariants = {
    default: "",
    muted: "bg-muted/30",
    accent: "bg-accent/30",
  };

  const widthVariants = {
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-none",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", bgVariants[variant], className)}
      data-testid={dataTestId}
    >
      <div className={cn("container mx-auto px-4", widthVariants[width])}>
        {children}
      </div>
    </section>
  );
}
