import Link from "next/link";
import { PageHero } from "@/components/marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "MAX AI Privacy — Website & User Control",
  "Understand this MAX AI marketing website’s local preferences, external WhatsApp links, hosting data and separation from your desktop memories and contacts.",
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <PageHero
        label="Privacy"
        title="Your information. Clear boundaries."
        description="A description of how this Phase 1 marketing website works. This is a draft for owner review, not a promise that no data is ever processed."
      />
      <article className="shell narrow content-section legal">
        <div className="notice">
          OWNER REVIEW REQUIRED — The operator’s legal identity, hosting
          retention periods, data-request process, and jurisdiction-specific
          wording must be finalized before public launch.
        </div>
        <h2>This website</h2>
        <p>
          This site presents MAX AI and links to its business WhatsApp channel.
          It does not ask visitors to create an account, process payment,
          activate a license, or upload personal MAX data.
        </p>
        <h2>Local preferences</h2>
        <p>
          The currency selector saves your choice in browser local storage under
          “max-currency.” This preference stays on your device. Clearing this
          site’s browser data removes it. The site does not set marketing or
          analytics cookies, and no analytics or advertising SDK is included.
        </p>
        <h2>Hosting and access</h2>
        <p>
          Delivering pages may involve your IP address, browser information, and
          request logs being processed by the hosting provider. Private preview
          access may also use the hosting platform’s authentication. The owner
          must confirm applicable retention and access policies before public
          launch.
        </p>
        <h2>WhatsApp conversations</h2>
        <p>
          Contact buttons open an external WhatsApp link with a prepared
          message. Opening the link does not send that message automatically. If
          you choose to send it, WhatsApp and the business receive information
          you share, including your contact details. WhatsApp’s own terms and
          privacy policy apply.
        </p>
        <h2>Your desktop MAX data</h2>
        <p>
          This website has no source dependency on the desktop application and
          does not read your local memories, contacts, chat history, provider
          keys, or WhatsApp sessions. Data handling inside the MAX application
          is separate and must be explained in its own release documentation.
        </p>
        <h2>External AI providers</h2>
        <p>
          The visual preview on this site does not call an AI service or access
          your microphone. Cloud features in the actual MAX application use the
          providers you configure and are subject to those providers’ policies.
        </p>
        <h2>Questions and requests</h2>
        <p>
          Use the <Link href="/contact">business contact page</Link> for privacy
          questions. Do not send secrets or private conversations. Owner review
          is required to establish the formal data-request and deletion process
          for business correspondence.
        </p>
      </article>
    </>
  );
}
