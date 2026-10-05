import type { Metadata } from "next";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { sanityFetch } from "@/sanity/lib/live";
import { getSettings } from "@/sanity/lib/fetch";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import type { AboutData, CvEntry } from "@/sanity/types";
import { RichText } from "@/components/RichText";
import { SanityImage } from "@/components/SanityImage";
import { Empty } from "@/components/Empty";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: ABOUT_QUERY, stega: false });
  return { title: "About", description: (data as AboutData)?.lede?.trim() || undefined };
}

function Entries({ items }: { items?: CvEntry[] }) {
  return (
    <div className="entries">
      {(items || []).map((e) => (
        <div key={e._key}>
          <p className="entry__title">
            {e.title}
            {e.note && (
              <>
                {" "}
                <i className="entry__note">{e.note}</i>
              </>
            )}
          </p>
          <p className="entry__detail">{[e.organization, e.years].filter(Boolean).join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}

export default async function AboutPage() {
  const [{ data }, settings] = await Promise.all([sanityFetch({ query: ABOUT_QUERY }), getSettings()]);
  const about = data as AboutData;
  if (!about) return <Empty what="About page" />;

  return (
    <>
      <section className="about-hero">
        <div className="about-hero__text">
          {about.eyebrow && <p className="eyebrow">{about.eyebrow}</p>}
          <h1 className="display">{about.heading}</h1>
          {about.lede && <p className="lede">{about.lede}</p>}
        </div>
        {about.portrait?.asset && (
          <div className="portrait">
            <SanityImage image={about.portrait} width={240} height={300} sizes="240px" preload />
          </div>
        )}
      </section>

      {!!about.body?.length && (
        <section className="section prose">
          <RichText value={about.body} />
        </section>
      )}

      {(!!about.current?.length || !!about.education?.length) && (
        <section className="section cv-grid">
          {!!about.current?.length && (
            <div>
              <h2 className="label">{about.currentHeading}</h2>
              <Entries items={about.current} />
            </div>
          )}
          {!!about.education?.length && (
            <div>
              <h2 className="label">{about.educationHeading}</h2>
              <Entries items={about.education} />
            </div>
          )}
        </section>
      )}

      {!!about.past?.length && (
        <section className="section">
          <h2 className="label">{about.pastHeading}</h2>
          <Entries items={about.past} />
        </section>
      )}

      <section className="section section--last">
        {!!about.interests?.length && (
          <>
            <h2 className="label">{about.interestsHeading}</h2>
            <ul className="lede interests">
              {about.interests.map((interest, i) => (
                <li key={i}>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="actions">
          {settings?.cvUrl && (
            <a href={`${settings.cvUrl}?dl=${encodeURIComponent(`${stegaClean(settings.name) || "Sebastian Rodriguez"} CV.pdf`)}`} className="btn btn--solid">
              {about.cvLabel || "Download CV"}
              <ArrowDownTrayIcon className="icon" aria-hidden />
            </a>
          )}
          <Link href="/contact" className="btn">
            Get in touch
            <ArrowRightIcon className="icon" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
