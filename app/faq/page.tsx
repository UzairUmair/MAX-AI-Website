import Link from "next/link";
import { PageHero, FAQ } from "@/components/marketing";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "MAX AI FAQ — Demo, Pricing & Windows",
  "Answers about MAX AI for Windows, Roman Urdu, memory, provider keys, the 24-hour demo, manual WhatsApp purchases and product limitations.",
  "/faq",
);
export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Good questions. Clear answers."
        description="What to expect from MAX, how the demo works, and what to know before you buy."
      />
      <section className="shell content-section">
        <FAQ />
        <div className="notice">
          Can’t find your answer? Tell the team which feature or workflow
          matters to you before making a purchase.
        </div>
        <WhatsAppLink>Ask a question on WhatsApp</WhatsAppLink>
        <div className="page-links">
          <Link href="/features">Explore MAX AI features →</Link>
          <Link href="/how-it-works">Understand how MAX works →</Link>
        </div>
      </section>
    </>
  );
}
