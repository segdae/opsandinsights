"use client";

import { useRef } from "react";
import Link from "next/link";

export type CarouselCard = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  href: string;
  external?: boolean;
};

type Props = {
  heading: string;
  viewAllHref: string;
  viewAllLabel: string;
  cards: CarouselCard[];
  emptyMessage?: string;
};

export default function CarouselSection({
  heading,
  viewAllHref,
  viewAllLabel,
  cards,
  emptyMessage = "Coming soon.",
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  }

  return (
    <section className="mt-20">
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-2xl font-bold text-green-primary">
          {heading}
        </h2>
        {cards.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:border-green-primary hover:text-green-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:border-green-primary hover:text-green-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Cards track ── */}
      {cards.length > 0 ? (
        <>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 pb-1"
          >
            {cards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="snap-start shrink-0 w-60 border border-gray-200 rounded-2xl p-5 hover:border-green-primary hover:shadow-sm transition-all group"
              >
                {card.badge && (
                  <span className="text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                )}
                <p className="mt-2 font-semibold text-primary leading-snug group-hover:text-green-primary transition-colors">
                  {card.title}
                </p>
                {card.subtitle && (
                  <p className="mt-1.5 text-sm text-secondary leading-relaxed line-clamp-3">
                    {card.subtitle}
                  </p>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-5">
            <Link
              href={viewAllHref}
              className="text-sm text-green-primary hover:text-green-light transition-colors"
            >
              {viewAllLabel} →
            </Link>
          </div>
        </>
      ) : (
        <p className="text-secondary text-sm">{emptyMessage}</p>
      )}
    </section>
  );
}
