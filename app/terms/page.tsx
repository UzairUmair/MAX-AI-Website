import Link from "next/link";
import { PageHero } from "@/components/marketing";
import { BUSINESS, priceLabel } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "MAX AI Terms — Demo & License Information",
  "Review MAX AI’s current demo and manual purchase process, third-party provider requirements, beta limitations and terms awaiting owner review.",
  "/terms",
);
export default function Terms() {
  return (
    <>
      <PageHero
        label="Terms"
        title="Know what you’re choosing."
        description="Current product and sales information, with unresolved terms clearly marked. Final license terms must be confirmed before payment."
      />
      <article className="shell narrow content-section legal">
        <div className="notice">
          OWNER REVIEW REQUIRED — This page is a draft. Legal seller identity,
          governing terms, device limits, transfer rights, cancellation/refund
          terms, and update entitlements are not finalized.
        </div>
        <h2>The product</h2>
        <p>
          MAX AI is a Windows personal AI system currently in beta. Available
          features depend on the supplied build, configuration, supported
          integrations, and external providers. Exact Windows compatibility
          should be confirmed before requesting access.
        </p>
        <h2>The {BUSINESS.trialHours}-hour demo</h2>
        <p>
          The free demo is requested through WhatsApp and prepared manually. The
          team explains the evaluation’s start and end. Visiting the website
          does not activate a trial or create any automatic payment. You decide
          whether to buy.
        </p>
        <h2>Purchasing MAX</h2>
        <p>
          The current fixed prices are PKR{" "}
          {BUSINESS.pricing.PKR.toLocaleString("en-US")} ({priceLabel("PKR")})
          or USD {priceLabel("USD")}. Purchases are arranged through WhatsApp.
          The team supplies payment instructions and manually verifies payment
          before providing delivery and activation guidance. This site does not
          process payments.
        </p>
        <h2>License scope</h2>
        <p>
          The offer is a one-time license for the current MAX version under the
          agreed terms. It does not promise lifetime updates. OWNER REVIEW
          REQUIRED: permitted devices, account sharing, transfers, commercial
          use, support scope, and future major-version policy.
        </p>
        <h2>Third-party AI services</h2>
        <p>
          You may need your own supported provider API key. Provider usage,
          charges, quotas, and terms are separate from MAX. Confirm your
          intended provider and workflow before purchasing.
        </p>
        <h2>Beta limitations</h2>
        <p>
          AI outputs may be incorrect. Voice recognition and supported tool
          behavior can vary. Review consequential actions and important results.
          Features are not represented as perfectly reliable, universally
          compatible, or completely offline.
        </p>
        <h2>Refunds and contact</h2>
        <p>
          The{" "}
          <Link href="/refund-policy">
            refund policy is awaiting a business decision
          </Link>
          . Request and review finalized terms before sending payment. Questions
          can be directed through <Link href="/contact">WhatsApp Business</Link>
          .
        </p>
      </article>
    </>
  );
}
