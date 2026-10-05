import type { Metadata } from "next";
import { stegaClean } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import type { ContactData } from "@/sanity/types";
import { SmartLink } from "@/components/SmartLink";
import { ContactForm } from "@/components/ContactForm";
import { Empty } from "@/components/Empty";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: CONTACT_QUERY, stega: false });
  return { title: "Contact", description: (data as ContactData)?.intro?.trim() || undefined };
}

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: CONTACT_QUERY });
  const c = data as ContactData;
  if (!c) return <Empty what="Contact page" />;

  return (
    <>
      <section className="hero--inner">
        {c.eyebrow && <p className="eyebrow">{c.eyebrow}</p>}
        <h1 className="display display--narrow">{c.heading}</h1>
        {c.intro && <p className="standfirst">{c.intro}</p>}
      </section>

      {!!c.services?.length && (
        <section className="services-section">
          <h2 className="label">{c.servicesHeading}</h2>
          <div className="services">
            {c.services.map((s) => (
              <div key={s._key} className="service">
                <h3>{s.title}</h3>
                {s.description && <p>{s.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="connect">
        <section className="connect__form" id="message">
          <h2 className="label">{c.formHeading}</h2>
          <ContactForm
            topics={(c.formTopics || []).map((t) => stegaClean(t))}
            successMessage={c.successMessage || "Thanks — your message is on its way."}
          />
        </section>
        {!!c.connectLinks?.length && (
          <section className="connect__links">
            <h2 className="label">{c.connectHeading}</h2>
            {c.connectLinks.map((l) => (
              <SmartLink key={l._key} href={l.url}>
                <span>{l.label}</span>
                <span>{l.handle || l.url}</span>
              </SmartLink>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
