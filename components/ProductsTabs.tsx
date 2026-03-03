"use client";

import { useState } from "react";

type Tab = "services" | "products";

export default function ProductsTabs({
  servicesContent,
  productsContent,
}: {
  servicesContent: React.ReactNode;
  productsContent: React.ReactNode;
}) {
  const [active, setActive] = useState<Tab>("services");

  return (
    <>
      {/* Tab bar */}
      <div className="mt-10 flex gap-1 bg-gray-100 rounded-full p-1 w-fit">
        <button
          onClick={() => setActive("services")}
          className={`text-sm font-medium px-5 py-2 rounded-full transition-colors ${
            active === "services"
              ? "bg-white text-green-primary shadow-sm"
              : "text-secondary hover:text-primary"
          }`}
        >
          Services
        </button>
        <button
          onClick={() => setActive("products")}
          className={`text-sm font-medium px-5 py-2 rounded-full transition-colors ${
            active === "products"
              ? "bg-white text-green-primary shadow-sm"
              : "text-secondary hover:text-primary"
          }`}
        >
          Digital Products
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-10">
        {active === "services" ? servicesContent : productsContent}
      </div>
    </>
  );
}
