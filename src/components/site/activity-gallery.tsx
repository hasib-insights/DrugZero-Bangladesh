"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/components/site/language-provider";
import type { GalleryImage } from "@/content/activities";
import { toBnDigits } from "@/lib/format";
import { tx } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Photo gallery for an activity.
 *
 * - Responsive grid: two columns on desktop, two compact columns on mobile.
 * - Photos keep their natural aspect ratio (w-full, h-auto) — never cropped,
 *   stretched, or upscaled beyond their size.
 * - Subtle hover effect (gentle zoom + magnifier affordance) and
 *   click-to-enlarge lightbox with keyboard support (Esc, ←, →).
 */
export function ActivityGallery({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className={cn("grid grid-cols-2 gap-3", className)}>
        {images.map((image) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(images.indexOf(image))}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <img
                src={image.src}
                alt={t(image.alt)}
                loading="lazy"
                decoding="async"
                className="w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-2 right-2 inline-flex size-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <ZoomIn className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}

/**
 * Full-screen photo viewer: dark backdrop, natural-size image, caption,
 * close button, and prev/next navigation. Closes on Escape or backdrop click.
 */
function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const { lang, t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < images.length - 1) onNavigate(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t(tx("Photo gallery", "ফটো গ্যালারি"))}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-6"
      onClick={onClose}
    >
      <figure
        className="flex max-h-full flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={t(image.alt)}
          className="max-h-[76vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
        />
        <figcaption className="max-w-2xl text-center text-sm leading-relaxed text-white/85">
          {t(image.alt)}
        </figcaption>
      </figure>

      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t(tx("Close photo viewer", "ছবি বন্ধ করুন"))}
        className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index - 1);
            }}
            disabled={index === 0}
            aria-label={t(tx("Previous photo", "আগের ছবি"))}
            className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40 sm:left-4"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index + 1);
            }}
            disabled={index === images.length - 1}
            aria-label={t(tx("Next photo", "পরের ছবি"))}
            className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40 sm:right-4"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
          <p
            aria-hidden="true"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-white/85"
          >
            {lang === "bn"
              ? `${toBnDigits(index + 1)} / ${toBnDigits(images.length)}`
              : `${index + 1} / ${images.length}`}
          </p>
        </>
      )}
    </div>
  );
}
