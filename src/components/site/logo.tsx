import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

type LogoProps = {
  /** Public path of the official logo file, or null when it does not exist yet. */
  logoSrc?: string | null;
  className?: string;
  /** Color scheme of the surrounding surface. */
  variant?: "light" | "onDark";
};

/**
 * Brand lockup.
 * - When the official logo file exists (public/images/logo.png) it is shown
 *   unchanged and at natural aspect ratio.
 * - Until then, a neutral text wordmark is used as a placeholder.
 *   No replacement logo is invented.
 */
export function Logo({ logoSrc, className, variant = "light" }: LogoProps) {
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={`${siteConfig.name} logo`}
        className={cn("h-10 w-auto", className)}
      />
    );
  }
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "inline-block size-3 rounded-full",
          variant === "onDark" ? "bg-brand-soft" : "bg-brand-soft"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            variant === "onDark" ? "text-white" : "text-primary"
          )}
        >
          DrugZero
        </span>
        <span
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.18em]",
            variant === "onDark" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          Bangladesh
        </span>
      </span>
    </span>
  );
}
