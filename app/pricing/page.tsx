import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/marketing";
import { Pricing } from "@/components/interactive";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { priceLabel } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  `MAX AI Pricing — ${priceLabel("PKR")} / ${priceLabel("USD")}`,
  "Try a free 24-hour demo or get the current MAX AI license for PKR 4,999 or USD $20. Purchases and delivery are handled manually through WhatsApp.",
  "/pricing",
);
export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Start free. Choose what comes next."
        description="Try the Windows beta before you buy. The current MAX AI license is a one-time purchase, with personal assistance through WhatsApp."
      />
      <section className="shell content-section">
        <Pricing />
        <div className="notice">
          Before payment, confirm the current license terms, device limits,
          update policy, and refund policy with the team. These business terms
          are awaiting owner review.
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell split-layout">
          <div>
            <SectionHeading
              label="A HUMAN ON THE OTHER SIDE"
              title="A straightforward conversation."
              description="Purchases are handled manually. No payment is collected on this website, and no license is activated by clicking a button."
            />
            <WhatsAppLink kind="contact">Ask about purchasing</WhatsAppLink>
          </div>
          <ol className="process-list">
            {[
              [
                "Choose MAX",
                "Review the features and the price in your preferred currency.",
              ],
              [
                "Contact us on WhatsApp",
                "Review and send your prepared purchase message.",
              ],
              [
                "Get payment details",
                "Confirm the terms and payment instructions directly with the team.",
              ],
              [
                "Payment is verified",
                "The team checks payment manually; this website does not verify it.",
              ],
              [
                "Receive MAX AI guidance",
                "Delivery and activation instructions are provided directly after confirmation.",
              ],
            ].map(([t, d]) => (
              <li key={t}>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section shell">
        <h2>One-time license. Clear expectations.</h2>
        <p className="wide-copy">
          The price covers the current MAX AI license according to its agreed
          terms. It does not promise lifetime updates or include third-party AI
          usage. Provider fees and future major-version policies are separate.
        </p>
        <div className="page-links">
          <Link href="/demo">Request the free demo first →</Link>
          <Link href="/terms">Review current terms →</Link>
          <Link href="/refund-policy">Refund policy status →</Link>
        </div>
      </section>
    </>
  );
}
