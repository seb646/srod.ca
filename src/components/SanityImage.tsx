import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage as SanityImageType } from "@/sanity/types";

export function SanityImage({
  image,
  width,
  height,
  sizes,
  alt,
  preload,
}: {
  image: SanityImageType | undefined;
  width: number;
  height: number;
  sizes?: string;
  alt?: string;
  preload?: boolean;
}) {
  if (!image?.asset) return null;
  return (
    <Image
      src={urlFor(image).width(width * 2).height(height * 2).fit("crop").url()}
      width={width}
      height={height}
      sizes={sizes}
      alt={alt ?? image.alt ?? ""}
      preload={preload}
    />
  );
}
