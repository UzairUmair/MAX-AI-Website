import Link from "next/link";
import {
  FeatureGrid,
  PageHero,
  Personality,
  Memory,
  Screenshots,
  SectionHeading,
  FinalCTA,
} from "@/components/marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "MAX AI Features — Voice, Memory & Commands",
  "Explore MAX AI voice interaction, user-controlled memory, computer commands, configurable providers and Pakistani Dost personality for Windows.",
  "/features",
);
export default function Features() {
  return (
    <>
      <PageHero
        label="Features"
        title="One assistant. Your everyday."
        description="MAX brings conversation and supported tools into a dedicated Windows workspace. Explore what the beta is designed to do, then try it with your own workflow."
      />
      <section className="shell content-section">
        <FeatureGrid full />
        <div className="notice">
          MAX AI is a Windows beta. Feature and integration availability depends
          on the build and your configuration. Confirm any essential workflow
          with the team before purchasing.
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <SectionHeading
            label="YOUR AI, YOUR CHOICE"
            title="Bring the provider that works for you."
            description="MAX supports configurable AI providers. Some model and voice features require your own provider API key; internet access, usage charges, and quotas depend on that provider."
          />
          <p className="wide-copy">
            The MAX license does not include an AI subscription. Ask for the
            supported models and voice combinations in your demo build before
            paying for third-party access. Keep your provider credentials inside
            the desktop app’s configuration; do not send API keys in a support
            chat.
          </p>
          <Link className="text-link" href="/faq">
            Read provider and connectivity FAQs →
          </Link>
        </div>
      </section>
      <section className="section shell">
        <Personality />
      </section>
      <section className="section section-muted">
        <div className="shell">
          <Memory />
        </div>
      </section>
      <section className="section shell">
        <SectionHeading
          label="A LOOK INSIDE"
          title="Built for Windows."
          description="Explore MAX AI’s workspace, voice, memory, communications, and controls. These product previews are cropped and edited for privacy, with personal details blurred. Select an image to view it full size."
        />
        <Screenshots />
        <p className="fine section-link">
          No software is hosted here. Demo access and purchase delivery are
          arranged directly through WhatsApp.
        </p>
      </section>
      <FinalCTA />
    </>
  );
}
