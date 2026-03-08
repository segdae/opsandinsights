"use client";

import { useRef, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

/**
 * Inline email capture form for free lead-magnet downloads.
 *
 * Email is captured via /api/waitlist and stored in Supabase.
 */
interface FreeDownloadFormProps {
  productName: string;
}

export default function FreeDownloadForm({
  productName,
}: FreeDownloadFormProps): React.ReactElement {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const inputRef = useRef<HTMLInputElement>(null);

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
          source: "free_download",
          product: productName,
        }),
      });

      if (!res.ok) throw new Error("API error");

      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-green-subtle flex items-center justify-center mx-auto mb-5">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-green-primary"
            aria-hidden="true"
          >
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-primary">
          Check your inbox
        </h3>
        <p className="mt-3 text-secondary text-sm leading-relaxed max-w-sm mx-auto">
          Your free copy of {productName} is on its way. While you wait,
          check out our other free templates.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
    >
      <label
        htmlFor="download-email"
        className="block text-sm font-medium text-primary mb-2"
      >
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          ref={inputRef}
          id="download-email"
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-all"
        />
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-green-primary text-white px-6 py-3 rounded-full hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green-primary/20 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {formState === "submitting" ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 0 1 8-8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Download Free"
          )}
        </button>
      </div>

      {formState === "error" && (
        <p className="mt-2 text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="mt-4 text-xs text-secondary text-center leading-relaxed">
        No spam. We&apos;ll send you the download link and occasional
        updates.
        <br />
        Unsubscribe any time.
      </p>
    </form>
  );
}
