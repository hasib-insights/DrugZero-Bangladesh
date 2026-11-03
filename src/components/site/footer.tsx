import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

type SiteFooterProps = {
  logoSrc: string | null;
};

const socialLinks = [
  { key: "facebook", label: "Facebook", href: siteConfig.social.facebook, Icon: Facebook },
  { key: "youtube", label: "YouTube", href: siteConfig.social.youtube, Icon: Youtube },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
  { key: "x", label: "X (Twitter)", href: siteConfig.social.x, Icon: Twitter },
] as const;

export function SiteFooter({ logoSrc }: SiteFooterProps) {
  const hasContact =
    siteConfig.contact.email || siteConfig.contact.phone || siteConfig.contact.address;
  const activeSocials = socialLinks.filter((s) => s.href);

  return (
    <footer className="mt-auto border-t border-border bg-secondary">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="space-y-4">
            <Link
              href="/"
              aria-label={`${siteConfig.name} — Home`}
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <Logo logoSrc={logoSrc} />
            </Link>
            <p className="text-sm font-medium text-primary">{siteConfig.tagline}</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A youth-focused organization working on drug awareness, educational
              programs, and community outreach in Bangladesh.
            </p>
          </div>

          {/* Link groups */}
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact block — rendered only with verified details */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h2>
            {hasContact ? (
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {siteConfig.contact.email && (
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-primary"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                )}
                {siteConfig.contact.phone && (
                  <li>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="hover:text-primary"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                )}
                {siteConfig.contact.address && <li>{siteConfig.contact.address}</li>}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Official contact details will be published here once verified. Until
                then, please reach us through the{" "}
                <Link href="/contact" className="font-medium text-primary underline underline-offset-2">
                  contact form
                </Link>
                .
              </p>
            )}
            {activeSocials.length > 0 && (
              <ul className="mt-5 flex gap-2">
                {activeSocials.map(({ key, label, href, Icon }) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${label}`}
                      className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-muted-foreground" aria-hidden="true">
              ·
            </span>
            <p className="text-xs italic text-muted-foreground">{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
