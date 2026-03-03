import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch, urlFor } from "@/lib/sanity";
import { getAllServices, getAllTemplates } from "@/sanity/lib/queries";
import ProductsTabs from "@/components/ProductsTabs";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Services & Products",
  description:
    "Consulting services and digital products for AI, automation, and intelligent operations.",
  alternates: { canonical: "/products" },
};

type Service = {
  _id: string;
  name: string;
  tagline?: string;
  description?: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  featured?: boolean;
  image?: { asset: { _ref: string; _type: string } };
};

type Template = {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  gumroadUrl: string;
  category?: string;
  featured?: boolean;
  image?: { asset: { _ref: string; _type: string } };
};

export default async function ProductsPage() {
  const [services, templates] = await Promise.all([
    sanityFetch<Service[]>({ query: getAllServices }),
    sanityFetch<Template[]>({ query: getAllTemplates }),
  ]);

  /* ── Services tab content ─────────────────────────────────────────────── */
  const servicesContent = (
    <>
      {services.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className={`flex flex-col sm:flex-row gap-6 border rounded-xl p-6 hover:shadow-md transition-shadow ${
                service.featured
                  ? "border-green-primary/30 bg-green-subtle/30"
                  : "border-gray-200"
              }`}
            >
              {/* Image */}
              {service.image && (
                <div className="shrink-0 w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={urlFor(service.image).width(256).height(256).url()}
                    alt={service.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2">
                  <h3 className="font-semibold text-lg text-primary">
                    {service.name}
                  </h3>
                  {service.featured && (
                    <span className="shrink-0 mt-0.5 text-[10px] font-semibold uppercase tracking-wider bg-green-primary text-white px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {service.tagline && (
                  <p className="mt-1 text-sm text-green-primary font-medium">
                    {service.tagline}
                  </p>
                )}

                {service.description && (
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    {service.description}
                  </p>
                )}

                {service.highlights && service.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {service.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-secondary flex items-start gap-2"
                      >
                        <span className="text-green-primary mt-0.5 shrink-0">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {service.ctaUrl && (
                  <a
                    href={service.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium bg-green-primary text-white px-5 py-2.5 rounded-full hover:bg-green-light transition-colors"
                  >
                    {service.ctaLabel || "Get in touch"} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary">
            Services launching soon. In the meantime, feel free to reach out
            directly.
          </p>
        </div>
      )}
    </>
  );

  /* ── Products tab content ─────────────────────────────────────────────── */
  const productsContent = (
    <>
      {templates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template._id}
              className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Preview image */}
              {template.image && (
                <div className="aspect-video overflow-hidden bg-gray-50">
                  <Image
                    src={urlFor(template.image).width(600).height(338).url()}
                    alt={`${template.name} preview`}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                {template.category && (
                  <span className="self-start text-xs bg-green-subtle text-green-primary px-2 py-0.5 rounded-full">
                    {template.category}
                  </span>
                )}

                <div className="mt-2 flex items-start justify-between gap-3">
                  <p className="font-semibold text-primary leading-snug">
                    {template.name}
                  </p>
                  {template.price != null && (
                    <span className="shrink-0 font-bold text-green-primary">
                      {template.price === 0 ? "Free" : `£${template.price}`}
                    </span>
                  )}
                </div>

                {template.description && (
                  <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-3">
                    {template.description}
                  </p>
                )}

                <a
                  href={template.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 block w-full text-center text-sm font-medium bg-green-primary text-white px-4 py-2.5 rounded-lg hover:bg-green-light transition-colors"
                >
                  Get Template &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary">Digital products coming soon.</p>
        </div>
      )}
    </>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-16">
      <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">
        Services &amp; Products
      </h1>
      <p className="mt-2 text-secondary">
        Consulting services for AI and automation strategy, plus digital
        products built for practitioners.
      </p>

      <ProductsTabs
        servicesContent={servicesContent}
        productsContent={productsContent}
      />
    </main>
  );
}
