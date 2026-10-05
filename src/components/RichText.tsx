import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";
import { SmartLink } from "./SmartLink";

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => <SmartLink href={value?.href}>{children}</SmartLink>,
  },
};

export function RichText({ value }: { value?: PortableTextBlock[] | null }) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
