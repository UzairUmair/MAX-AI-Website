import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  createWhatsAppUrl,
  demoMessage,
  contactMessage,
  purchaseMessage,
  type Currency,
} from "@/lib/business";
export function WhatsAppLink({
  kind = "contact",
  currency = "PKR",
  children,
  className = "button primary",
}: {
  kind?: "demo" | "buy" | "contact";
  currency?: Currency;
  children: ReactNode;
  className?: string;
}) {
  const message =
    kind === "demo"
      ? demoMessage
      : kind === "buy"
        ? purchaseMessage(currency)
        : contactMessage;
  return (
    <a
      className={className}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
