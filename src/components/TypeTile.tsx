import { stegaClean } from "next-sanity";
import { AcademicCapIcon, BookOpenIcon, DocumentTextIcon, NewspaperIcon } from "@heroicons/react/24/outline";

/** An icon that matches the kind of work. */
function TypeIcon({ label }: { label: string }) {
  const l = label.toLowerCase();
  const props = { className: "wn-type__icon", "aria-hidden": true } as const;
  if (/course|class|workshop|teach/.test(l)) return <AcademicCapIcon {...props} />;
  if (/article|journal|peer|paper|chapter|book/.test(l)) return <BookOpenIcon {...props} />;
  if (/report|brief|white ?paper/.test(l)) return <DocumentTextIcon {...props} />;
  return <NewspaperIcon {...props} />;
}

/** Stand-in for a logo on items that don't have one: an icon and the item's type. */
export function TypeTile({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <div className="wn-type">
      <TypeIcon label={stegaClean(label)} />
      <span>{label}</span>
    </div>
  );
}
