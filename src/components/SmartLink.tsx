import Link from "next/link";
import { stegaClean } from "next-sanity";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";

/** The arrow that matches where a link goes: down the page, to another page, or off-site. */
export function LinkIcon({ href }: { href: string }) {
  const props = { className: "icon", "aria-hidden": true } as const;
  if (href.startsWith("#")) return <ArrowDownIcon {...props} />;
  if (/^https?:\/\//.test(href)) return <ArrowUpRightIcon {...props} />;
  if (href.startsWith("/")) return <ArrowRightIcon {...props} />;
  return null; // mailto: etc.
}

/** Internal paths use Next's <Link>; everything else is a plain anchor. */
export function SmartLink({
  href,
  children,
  className,
  withIcon,
  ...rest
}: {
  href?: string | null;
  children: React.ReactNode;
  className?: string;
  /** Append an arrow icon that matches the destination */
  withIcon?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const url = stegaClean(href) || "#";
  const content = withIcon ? (
    <>
      {children}
      <LinkIcon href={url} />
    </>
  ) : (
    children
  );
  if (url.startsWith("/") && !url.startsWith("//")) {
    return (
      <Link href={url} className={className} {...rest}>
        {content}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(url);
  return (
    <a href={url} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {content}
    </a>
  );
}
