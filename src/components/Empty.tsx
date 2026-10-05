import Link from "next/link";

export function Empty({ what }: { what: string }) {
  if (process.env.NODE_ENV === "production") {
    return <p className="empty">This page is being updated. Please check back soon.</p>;
  }
  return (
    <p className="empty">
      No {what} content yet. Open <Link href="/studio">the dashboard</Link> to add it, or import the starter content (see
      README).
    </p>
  );
}
