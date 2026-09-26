import { PageHero } from "@/components/marketing";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "MAX AI Refund Policy — Pending Owner Review",
    "The MAX AI refund policy has not been finalized. Confirm the applicable business policy before sending payment.",
    "/refund-policy",
  ),
  robots: { index: false, follow: true },
};
export default function Refund() {
  return (
    <>
      <PageHero
        label="Refund policy"
        title="Refund policy pending review."
        description="Business policy to be finalized before public sales."
      />
      <article className="shell narrow content-section legal">
        <div className="notice">
          OWNER REVIEW REQUIRED — No refund promise or no-refund rule has been
          established by this draft.
        </div>
        <p>
          The owner must define eligibility, request timelines, exceptions, the
          request process, and any applicable legal rights before opening public
          sales. Do not treat this page as an agreed refund policy.
        </p>
        <p>
          Ask the team for finalized terms before making a payment. This draft
          page is excluded from search indexing and the sitemap.
        </p>
        <WhatsAppLink>Ask about the refund policy</WhatsAppLink>
      </article>
    </>
  );
}
