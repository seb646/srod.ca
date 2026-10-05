import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="hero--inner">
      <p className="eyebrow">404</p>
      <h1 className="display display--narrow">This page doesn’t exist.</h1>
      <p className="standfirst">It may have moved when the site was redesigned. Try one of these instead:</p>
      <div className="actions">
        <Link href="/" className="btn btn--solid">
          Home
          <ArrowRightIcon className="icon" aria-hidden />
        </Link>
        <Link href="/work" className="btn">
          Work
          <ArrowRightIcon className="icon" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
