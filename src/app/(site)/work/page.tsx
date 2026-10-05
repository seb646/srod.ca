import type { Metadata } from "next";
import { PortableText, stegaClean, toPlainText, type PortableTextComponents } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_QUERY } from "@/sanity/lib/queries";
import type { WorkData, WorkItem } from "@/sanity/types";
import { SmartLink } from "@/components/SmartLink";
import { SanityLogo, type LogoBox } from "@/components/SanityLogo";
import { Empty } from "@/components/Empty";
import { CopyButton } from "@/components/CopyButton";
import { linksOf, workAnchor } from "@/components/workMeta";
import { WorkJumpNav } from "@/components/WorkJumpNav";
import { TypeTile } from "@/components/TypeTile";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: WORK_QUERY, stega: false });
  return { title: "Work", description: (data as WorkData)?.headline?.trim() || undefined };
}

type Display = "cards" | "papers" | "syllabus";

const ASIDE_LOGO: LogoBox = { area: 4200, maxW: 180, maxH: 56 };

/** Use the section's chosen style, or guess from its anchor until one is set. */
function displayFor(display: string | undefined, anchor: string | undefined): Display {
  const d = stegaClean(display);
  if (d === "cards" || d === "papers" || d === "syllabus") return d;
  const a = stegaClean(anchor) || "";
  if (/research|paper|publication/.test(a)) return "papers";
  if (/teach|course|curriculum/.test(a)) return "syllabus";
  return "cards";
}

/** Citations allow italics and links only. */
const citationComponents: PortableTextComponents = {
  block: { normal: ({ children }) => <p>{children}</p> },
  marks: {
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={stegaClean(value?.href)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const join = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(" · ");

/**
 * Every item, in every section, has the same anatomy:
 *   aside — the logo (tools) or the type and year (research, courses), then the link
 *   body  — title, description, the section's own detail, and a short meta line
 */
function Item({ w, display }: { w: WorkItem; display: Display }) {
  const description = w.description || w.summary;
  const links = linksOf(w);
  // A course's logo belongs to whoever ran it, not to the course itself
  const logoOwner = display === "syllabus" ? w.organization || w.title : w.title;

  // The aside always holds something picture-like: the logo if there is one,
  // otherwise a small "type" tile so it never reads as just another link.
  const aside = w.image?.asset ? (
    <div className="wn-item__logo">
      <SanityLogo image={w.image} alt={w.image.alt || stegaClean(logoOwner)} box={ASIDE_LOGO} />
    </div>
  ) : display !== "cards" ? (
    <TypeTile label={w.kind || (display === "syllabus" ? "Course" : w.role)} />
  ) : null;

  const meta =
    display === "cards"
      ? join(w.role, w.organization, w.years)
      : display === "papers"
        ? join(w.kind ? w.role : undefined, w.organization, w.years)
        : join(w.role, w.organization, w.years);

  return (
    <article className="wn-item" id={workAnchor(w._id)}>
      <div className="wn-item__aside">
        {aside}
        {links.length > 0 && (
          <ul className="wn-links">
            {links.map((l, n) => (
              <li key={l._key || n}>
                <SmartLink href={l.href} className="wn-link" withIcon>
                  {l.label || "Visit"}
                </SmartLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="wn-item__body">
        <h3>{w.title}</h3>
        {description && <p className="wn-item__desc">{description}</p>}

        {display === "cards" && !!w.stack?.length && (
          <ul className="wn-chips" aria-label="Built with">
            {w.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {display === "papers" && !!w.reference?.length && (
          <div className="wn-cite">
            <PortableText value={w.reference} components={citationComponents} />
            <CopyButton text={stegaClean(toPlainText(w.reference))} />
          </div>
        )}

        {/* Courses: the outline sits between the description and the meta line */}
        {display === "syllabus" && !!w.outline?.length && (
          <ol className="wn-track" aria-label="Course outline" style={{ "--steps": w.outline.length } as React.CSSProperties}>
            {w.outline.map((step, n) => (
              <li key={n}>
                <span className="wn-track__dot" aria-hidden>
                  <span className="wn-track__num">{n + 1}</span>
                </span>
                <span className="wn-track__text">{step}</span>
              </li>
            ))}
          </ol>
        )}
        {meta && <p className="wn-item__meta">{meta}</p>}
      </div>
    </article>
  );
}

export default async function WorkPage() {
  const { data } = await sanityFetch({ query: WORK_QUERY });
  const work = data as WorkData;
  if (!work) return <Empty what="Work page" />;
  const sections = work.sections || [];

  return (
    <>
      <section className="hero--inner hero--tight">
        {work.eyebrow && <p className="eyebrow">{work.eyebrow}</p>}
        <h1 className="display">{work.headline}</h1>
      </section>

      {sections.length > 1 && (
        <WorkJumpNav
          items={sections.map((s) => ({ id: stegaClean(s.anchor) || s._key, label: s.navLabel || s.title }))}
        />
      )}

      {sections.map((s) => {
        const items = (s.items || []).filter(Boolean) as WorkItem[];
        const display = displayFor(s.display, s.anchor);
        return (
          <section key={s._key} id={stegaClean(s.anchor)} className="wn-section">
            <div className="wn-section__head">
              <h2>{s.title}</h2>
              {s.subtitle && <p>{s.subtitle}</p>}
            </div>
            {items.map((w) => (
              <Item key={w._id} w={w} display={display} />
            ))}
          </section>
        );
      })}
    </>
  );
}
