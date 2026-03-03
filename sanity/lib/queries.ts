import { groq } from "next-sanity";

export const getAllPosts = groq`
  *[_type == "post" && programmatic != true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "pillar": pillar->{ name, slug, colour },
    ogImage
  }
`;

export const getPostBySlug = groq`
  *[_type == "post" && programmatic != true && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "pillar": pillar->{ name, slug, colour },
    ogImage
  }
`;

export const getAllProjects = groq`
  *[_type == "project"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    client,
    challenge,
    approach,
    outcome,
    tools,
    publishedAt,
    featured
  }
`;

export const getAllServices = groq`
  *[_type == "service"] | order(featured desc, order asc, name asc) {
    _id,
    name,
    slug,
    tagline,
    description,
    highlights,
    ctaLabel,
    ctaUrl,
    featured,
    image
  }
`;

export const getAllTemplates = groq`
  *[_type == "template"] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    description,
    price,
    gumroadUrl,
    category,
    featured,
    image
  }
`;

export const getCvEntries = groq`
  *[_type == "cvEntry"] | order(startDate desc) {
    _id,
    role,
    company,
    startDate,
    endDate,
    description,
    skills
  }
`;

export const getSiteSettings = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    tagline,
    authorName,
    authorRole,
    linkedinUrl,
    githubUrl,
    newsletterUrl,
    ogImage
  }
`;

export const getAllPillars = groq`
  *[_type == "pillar"] | order(name asc) {
    _id,
    name,
    slug,
    colour
  }
`;

// Lightweight projection — only what the homepage list needs (excludes programmatic)
export const getLatestPosts = groq`
  *[_type == "post" && programmatic != true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    "pillar": pillar->{ name, colour }
  }
`;

// For generateStaticParams and sitemap — writing posts only (excludes programmatic)
export const getAllPostSlugs = groq`
  *[_type == "post" && programmatic != true] { "slug": slug.current, publishedAt }
`;

// Related posts from the same pillar, excluding the current post and programmatic articles
export const getRelatedPosts = groq`
  *[_type == "post" && programmatic != true && pillar->slug.current == $pillarSlug && _id != $postId]
  | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt
  }
`;

// ─── Programmatic / Articles ────────────────────────────────────────────────

export const getAllArticles = groq`
  *[_type == "post" && programmatic == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "pillar": pillar->{ name, slug, colour }
  }
`;

export const getArticleBySlug = groq`
  *[_type == "post" && programmatic == true && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    "pillar": pillar->{ name, slug, colour },
    ogImage
  }
`;

// For generateStaticParams and sitemap — programmatic articles only
export const getAllArticleSlugs = groq`
  *[_type == "post" && programmatic == true] { "slug": slug.current, publishedAt }
`;
