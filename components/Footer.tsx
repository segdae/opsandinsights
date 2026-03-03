import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1 — Brand + social icons */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif font-bold text-3xl text-primary leading-tight block"
            >
              Ops &amp; Insights
            </Link>

            <p className="mt-4 text-sm text-secondary">
              © Shea Campbell {new Date().getFullYear()}.
              <br />
              All rights reserved.
            </p>

            {/* Social icon row */}
            <div className="mt-5 flex gap-2.5">
              <a
                href="https://www.linkedin.com/in/s%C3%A9gd%C3%A1e-shay-campbell/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="https://github.com/segdae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a
                href="/rss.xml"
                aria-label="RSS Feed"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <p className="font-semibold text-primary mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/writing" className="text-secondary hover:text-primary transition-colors">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/building" className="text-secondary hover:text-primary transition-colors">
                  Building
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-secondary hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-secondary hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-secondary hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Content */}
          <div>
            <p className="font-semibold text-primary mb-5">Content</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/newsletter" className="text-secondary hover:text-primary transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <a href="/rss.xml" className="text-secondary hover:text-primary transition-colors">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <p className="font-semibold text-primary mb-5">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/s%C3%A9gd%C3%A1e-shay-campbell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/segdae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
