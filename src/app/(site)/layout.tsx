import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { draftMode } from "next/headers";
import { stegaClean } from "next-sanity";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import { getSettings } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSettings();
  const name = stegaClean(s?.name) || "Sebastian Rodriguez";
  const tagline = stegaClean(s?.tagline);
  return {
    title: { default: tagline ? `${name} — ${tagline}` : name, template: `%s — ${name}` },
    description: stegaClean(s?.seoDescription) || undefined,
    openGraph: s?.ogImage?.asset ? { images: [urlFor(s.ogImage).width(1200).height(630).url()] } : undefined,
  };
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [settings, { isEnabled: isDraftMode }] = await Promise.all([getSettings(), draftMode()]);
  const accent = stegaClean(settings?.accent) || "#7a1e2c";

  return (
    <div className="page" style={{ "--accent": accent } as React.CSSProperties}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap">
        <header className="site-header">
          <Link href="/" className="site-name">
            {settings?.name || "Sebastian Rodriguez"}
          </Link>
          <SiteNav />
        </header>
        <main id="main">{children}</main>
        <Footer settings={settings} />
      </div>
      <SanityLive />
      {isDraftMode && <VisualEditing />}
      {/* Umami analytics — live site only, so local dev and dashboard previews aren't counted */}
      {process.env.NODE_ENV === "production" && !isDraftMode && (
        <Script
          src="https://analytics.srod.ca/script.js"
          data-website-id="86dbe8c7-0bed-488b-9a2d-a6287e5db94d"
          strategy="afterInteractive"
        />
      )}
    </div>
  );
}
