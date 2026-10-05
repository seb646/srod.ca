import { SmartLink } from "./SmartLink";
import type { Settings } from "@/sanity/types";

export function Footer({ settings }: { settings: Settings }) {
  const profiles = (settings?.profiles || []).filter((p) => p.inFooter !== false);
  return (
    <footer className="site-footer">
      {settings?.email ? <a href={`mailto:${settings.email}`}>{settings.email}</a> : <span />}
      <span className="site-footer__links">
        {profiles.map((p) => (
          <SmartLink key={p._key} href={p.url}>
            {p.label}
          </SmartLink>
        ))}
      </span>
    </footer>
  );
}
