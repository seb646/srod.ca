import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";
import type { HomeData, WorkItem } from "@/sanity/types";
import { RichText } from "@/components/RichText";
import { SmartLink } from "@/components/SmartLink";
import { workAnchor } from "@/components/workMeta";
import { Empty } from "@/components/Empty";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { stegaClean } from "next-sanity";
import { SanityLogo, type LogoBox } from "@/components/SanityLogo";
import { TypeTile } from "@/components/TypeTile";

const CARD_LOGO: LogoBox = { area: 2600, maxW: 150, maxH: 44 };

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  const home = data as HomeData;
  if (!home) return <Empty what="home page" />;
  const work = (home.selectedWork || []).filter(Boolean) as WorkItem[];

  return (
    <>
      <section className="hero">
        {home.eyebrow && <p className="eyebrow">{home.eyebrow}</p>}
        <h1 className="display">{home.headline}</h1>
        <div className="intro">
          <RichText value={home.intro} />
        </div>
        {home.cta?.label && (
          <div className="actions">
            <SmartLink href={home.cta.href} className="btn btn--solid" withIcon>
              {home.cta.label}
            </SmartLink>
          </div>
        )}
      </section>

      {!!home.facts?.length && (
        <section className="facts">
          {home.facts.map((f) => (
            <div key={f._key}>
              <h2 className="label">{f.heading}</h2>
              <p>
                {(f.items || []).map((line, i) => (
                  <span key={line._key}>
                    {i > 0 && <br />}
                    {line.href ? <SmartLink href={line.href}>{line.text}</SmartLink> : line.text}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </section>
      )}

      {work.length > 0 && (
        <section className="section section--last">
          <h2 className="h2 section__title">
            {home.selectedWorkHeading || "Selected work"}
          </h2>

          <div className="sw-grid">
            {work.map((w) => (
              <Link key={w._id} href={`/work#${workAnchor(w._id)}`} className="sw-card">
                <ArrowRightIcon className="icon sw-card__arrow" aria-hidden />
                <span className="sw-card__mark">
                  {w.image?.asset ? (
                    <SanityLogo image={w.image} alt={w.image.alt || stegaClean(w.title)} box={CARD_LOGO} />
                  ) : (
                    <TypeTile label={w.kind || w.role} />
                  )}
                </span>
                <span className="sw-card__title">{w.title}</span>
                {w.summary && <span className="sw-card__summary">{w.summary}</span>}
                {/* The type already shows up top, so the meta line gives the role instead */}
                <span className="sw-card__meta">{[w.role || w.kind, w.years].filter(Boolean).join(" · ")}</span>
              </Link>
            ))}
          </div>

          <Link href="/work" className="btn">
            {home.allWorkLabel || "All work"}
            <ArrowRightIcon className="icon" aria-hidden />
          </Link>
        </section>
      )}
    </>
  );
}
