import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/marketing";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { BUSINESS } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contact MAX AI — WhatsApp Demo & Sales",
  "Contact MAX AI on WhatsApp Business for demo requests, purchase guidance and product questions. Access, payments and delivery are currently handled manually.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s talk about your MAX."
        description="Request a demo, ask about a workflow, or get purchase guidance. WhatsApp Business is our current contact and sales channel."
      />
      <section className="shell content-section split-layout">
        <div className="panel">
          <MessageCircle size={30} className="gold" aria-hidden="true" />
          <h2>WhatsApp Business</h2>
          <p className="contact-number">{BUSINESS.whatsappDisplay}</p>
          <WhatsAppLink>Chat on WhatsApp</WhatsAppLink>
          <p className="fine section-link">
            Opens a new tab or your WhatsApp app. You review and send the
            message yourself.
          </p>
        </div>
        <div>
          <h2>How can we help?</h2>
          <p>
            Tell us your Windows version and the features you want to try. The
            team will guide you through the current demo or purchase process.
          </p>
          <div className="actions">
            <WhatsAppLink kind="demo" className="button secondary">
              Request a demo
            </WhatsAppLink>
            <WhatsAppLink kind="buy" className="text-link">
              Ask about buying
            </WhatsAppLink>
          </div>
          <p>
            Do not send passwords, private API keys, or banking credentials.
            Support conversations happen on WhatsApp and are subject to its
            privacy terms.
          </p>
          <Link className="text-link" href="/faq">
            Read frequently asked questions →
          </Link>
        </div>
      </section>
    </>
  );
}
