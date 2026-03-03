"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 border border-gray-300 rounded-full px-5 py-2.5 text-sm text-primary placeholder:text-secondary focus:outline-none focus:border-green-primary transition-colors"
      />
      <button
        type="submit"
        className="bg-green-primary text-white px-6 py-2.5 text-sm font-medium rounded-full hover:bg-green-light transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
