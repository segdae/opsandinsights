"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

/**
 * Waitlist email capture modal.
 *
 * Opens when any link with `href="#waitlist"` is clicked, or when the page
 * loads with `#waitlist` in the URL. Closes on backdrop click, Escape key,
 * or the close button.
 *
 * Email is captured via /api/waitlist and stored in Supabase.
 */
interface WaitlistPopupProps {
  productName?: string;
  launchDate?: string;
  price?: number;
  fullPrice?: number;
}

export default function WaitlistPopup({
  productName = "this product",
  launchDate = "April 2026",
  price = 99,
  fullPrice = 149,
}: WaitlistPopupProps): React.ReactElement | null {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  /* ── Open on #waitlist hash ─────────────────────────────────────────── */
  const checkHash = useCallback((): void => {
    if (window.location.hash === "#waitlist") {
      setOpen(true);
      // Clean the hash without scrolling
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [checkHash]);

  /* ── Intercept all #waitlist link clicks ─────────────────────────────── */
  useEffect(() => {
    function handleClick(e: MouseEvent): void {
      const target = (e.target as HTMLElement).closest("a[href='#waitlist']");
      if (target) {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* ── Focus input when modal opens ───────────────────────────────────── */
  useEffect(() => {
    if (open) {
      // Small delay to let the animation start
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  /* ── Close on Escape ────────────────────────────────────────────────── */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  /* ── Lock body scroll when open ─────────────────────────────────────── */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  /* ── Submit handler ─────────────────────────────────────────────────── */
  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    if (!email.trim()) return;

    setFormState("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "waitlist",
          product: productName,
        }),
      });

      if (!res.ok) throw new Error("API error");

      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  function handleClose(): void {
    setOpen(false);
    // Reset form after close animation
    setTimeout(() => {
      setEmail("");
      setFormState("idle");
    }, 300);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Join the waitlist"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-fade-in-up overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors z-10"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </button>

        {formState === "success" ? (
          /* ── Success state ──────────────────────────────────────────── */
          <div className="px-8 py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-green-subtle flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-green-primary" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary">
              You&apos;re on the list
            </h3>
            <p className="mt-3 text-secondary text-sm leading-relaxed max-w-xs mx-auto">
              We&apos;ll email you when {productName} launches in {launchDate} with
              your founding member pricing locked in at ${price}.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 text-sm font-medium text-green-primary hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form state ─────────────────────────────────────────────── */
          <>
            {/* Header with green accent */}
            <div className="bg-green-subtle/60 px-8 pt-10 pb-8">
              <span className="inline-block text-[11px] font-semibold text-green-primary uppercase tracking-widest mb-3">
                Launching {launchDate}
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary leading-snug">
                Get {productName} at
                <br />
                founding member price
              </h3>
              <p className="mt-2 text-sm text-secondary">
                <span className="line-through opacity-50">${fullPrice}</span>{" "}
                <span className="font-bold text-primary text-lg">${price}</span>{" "}
                &mdash; first 50 members only
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8">
              <label htmlFor="waitlist-email" className="block text-sm font-medium text-primary mb-2">
                Email address
              </label>
              <input
                ref={inputRef}
                id="waitlist-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-all"
              />

              {formState === "error" && (
                <p className="mt-2 text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 text-base font-semibold bg-green-primary text-white py-3.5 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 0 1 8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    Joining...
                  </>
                ) : (
                  "Join the waitlist"
                )}
              </button>

              <p className="mt-4 text-xs text-secondary text-center leading-relaxed">
                No spam. One email when we launch, plus your ${fullPrice - price} discount code.
                <br />
                Unsubscribe any time.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
