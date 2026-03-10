import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionHeaderProps) {
  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  const eyebrowClasses =
    tone === "onDark"
      ? "border-white/15 bg-white/5 text-zinc-300"
      : "border-border/80 bg-secondary text-muted-foreground";

  const titleClasses = tone === "onDark" ? "text-white" : "text-foreground";

  const descriptionClasses =
    tone === "onDark" ? "text-zinc-300" : "text-muted-foreground";

  return (
    <div className={cn("flex flex-col gap-4", alignClasses, className)}>
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.16em]",
            eyebrowClasses,
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
          titleClasses,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-balance text-sm sm:text-base md:text-lg",
            descriptionClasses,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

