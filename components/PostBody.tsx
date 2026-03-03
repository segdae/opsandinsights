import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

// Sanity portable text block — broad type that covers text blocks,
// inline images, and custom objects (codeBlock).
type SanityBlock = {
  _type: string;
  _key?: string;
  [key: string]: unknown;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-[1.5em] leading-[1.75]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-primary mt-[2em] mb-4 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-primary mt-[1.5em] mb-3 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-primary mt-[1.5em] mb-2 leading-snug">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-green-primary pl-6 italic text-secondary my-6 leading-[1.75]">
        {children}
      </blockquote>
    ),
  },

  marks: {
    // External / internal links
    link: ({ children, value }) => {
      const target = value?.blank ? "_blank" : undefined;
      const rel = value?.blank ? "noopener noreferrer" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-green-primary hover:underline transition-colors"
        >
          {children}
        </a>
      );
    },
    // Inline code
    code: ({ children }) => (
      <code className="bg-green-subtle text-green-primary text-[0.875em] rounded px-[6px] py-[2px] font-mono">
        {children}
      </code>
    ),
  },

  types: {
    // Inline images with optional caption
    image: ({ value }) => {
      const src = urlFor(value).width(1360).url(); // 2× for retina on 680px column
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt ?? ""}
            width={1360}
            height={765}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-sm text-secondary text-center mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // Custom code block with dark background
    codeBlock: ({ value }) => (
      <pre className="bg-[#1A1A1A] text-gray-100 rounded-lg p-6 overflow-x-auto my-6 font-mono text-sm leading-relaxed">
        {value.language && (
          <div className="text-gray-500 text-xs mb-3 uppercase tracking-wide">
            {value.language}
          </div>
        )}
        <code>{value.code}</code>
      </pre>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="leading-[1.75] text-primary">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-[1.75] text-primary">{children}</li>
    ),
  },
};

export default function PostBody({ body }: { body: SanityBlock[] }) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <PortableText value={body as any} components={components} />
  );
}
