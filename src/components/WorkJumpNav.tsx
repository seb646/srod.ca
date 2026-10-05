"use client";

import { useEffect, useRef, useState } from "react";

type Jump = { id: string; label: React.ReactNode };

/**
 * The Work page's section pills. They stick under the site header once you
 * scroll past them, and highlight whichever section you're reading.
 */
export function WorkJumpNav({ items }: { items: Jump[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const stickyTop = parseFloat(getComputedStyle(nav).top) || 0;
      const rect = nav.getBoundingClientRect();
      setStuck(rect.top <= stickyTop + 0.5 && window.scrollY > 0);

      // A section is "current" once its heading reaches a line just below the bar.
      // At the very bottom of the page, the last section wins even if it's short.
      const line = rect.bottom + 48;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;
      for (const { id } of items) {
        const el = document.getElementById(id);
        const heading = el?.querySelector("h2") ?? el;
        if (heading && heading.getBoundingClientRect().top <= line) current = id;
      }
      if (atBottom && current && items.length) current = items[items.length - 1].id;
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  // On phones the pills scroll sideways; keep the active one in view. This moves
  // only the pill row — scrollIntoView would also nudge (and interrupt) the page.
  useEffect(() => {
    const row = ref.current?.querySelector<HTMLElement>(".wn-jump__inner");
    if (!active || !row || row.scrollWidth <= row.clientWidth) return;
    const link = row.querySelector<HTMLElement>(`a[href="#${CSS.escape(active)}"]`);
    if (!link) return;
    const left = link.offsetLeft - row.offsetLeft;
    if (left < row.scrollLeft || left + link.offsetWidth > row.scrollLeft + row.clientWidth) {
      row.scrollTo({ left: Math.max(0, left - 16), behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav ref={ref} aria-label="Sections" className="wn-jump" data-stuck={stuck || undefined}>
      <div className="wn-jump__inner">
        {items.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
