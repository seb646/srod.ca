import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/types";

/** Reads the original size from a Sanity asset id: image-<hash>-<w>x<h>-<ext> */
function dimensions(ref: string) {
  const m = ref.match(/-(\d+)x(\d+)-/);
  return m ? { w: Number(m[1]), h: Number(m[2]) } : { w: 4, h: 1 };
}

export type LogoBox = {
  /** px² each logo is sized to, so wide wordmarks and square crests look equally heavy */
  area: number;
  maxW: number;
  maxH: number;
};

/**
 * Shows a logo whole (never cropped) at a size balanced against the others.
 * Each image's "Size" field in the dashboard nudges it bigger or smaller.
 */
export function SanityLogo({ image, alt, box }: { image: SanityImage | undefined; alt: string; box: LogoBox }) {
  if (!image?.asset?._ref) return null;
  const { w, h } = dimensions(image.asset._ref);
  const ratio = w / h;
  const scale = image.scale ?? 1;
  let width = Math.sqrt(box.area * ratio) * scale;
  let height = width / ratio;
  if (width > box.maxW) [width, height] = [box.maxW, box.maxW / ratio];
  if (height > box.maxH) [width, height] = [box.maxH * ratio, box.maxH];
  width = Math.round(width);
  height = Math.round(height);

  const isSvg = image.asset._ref.endsWith("-svg");
  return (
    <Image
      src={isSvg ? urlFor(image).url() : urlFor(image).width(width * 3).url()}
      width={width}
      height={height}
      alt={alt}
      sizes={`${width}px`}
      unoptimized={isSvg}
    />
  );
}
