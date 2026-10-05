"use client";

import { useState } from "react";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/16/solid";

/** Copies a piece of text and confirms it for a couple of seconds. */
export function CopyButton({ text, label = "Copy citation" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }
  return (
    <button type="button" className="wn-copy" onClick={copy} aria-live="polite">
      {copied ? <CheckIcon className="icon" aria-hidden /> : <DocumentDuplicateIcon className="icon" aria-hidden />}
      {copied ? "Copied" : label}
    </button>
  );
}
