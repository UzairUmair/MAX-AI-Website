import Link from "next/link";
import {
  PageHero,
  HowItWorks,
  Preflight,
  SectionHeading,
  FinalCTA,
} from "@/components/marketing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "How MAX AI Works — Personal AI for Windows",
  "See how MAX turns conversation into supported Windows actions: understand, consider, confirm, act and remember with user control.",
  "/how-it-works",
);
export default function How() {
  return (
    <>
      <PageHero
        label="How it works"
        title="From a thought to a supported action."
        description="Speak naturally. MAX interprets the request, considers the available tools, and asks for confirmation when needed. You stay part of the decision."
      />
      <section className="shell content-section">
        <HowItWorks />
      </section>
      <section className="section section-muted">
        <div className="shell">
          <Preflight />
        </div>
      </section>
      <section className="section shell">
        <SectionHeading
          label="GETTING STARTED"
          title="An assistant on your terms."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="eyebrow">01 / YOUR WINDOWS PC</span>
            <h3>Start with the right build.</h3>
            <p>
              Request the demo and confirm Windows compatibility with the team.
              Exact hardware requirements are not finalized here.
            </p>
          </article>
          <article className="feature-card">
            <span className="eyebrow">02 / YOUR CONFIGURATION</span>
            <h3>Connect supported providers.</h3>
            <p>
              Configure model and voice services as needed. Cloud features need
              internet and may incur separate provider costs.
            </p>
          </article>
          <article className="feature-card">
            <span className="eyebrow">03 / YOUR WORKFLOW</span>
            <h3>Try something useful.</h3>
            <p>
              Test supported commands, review saved memory, and choose your
              preferred conversational style. Beta behavior can vary.
            </p>
          </article>
        </div>
        <div className="page-links">
          <Link href="/demo">Request the 24-hour demo →</Link>
          <Link href="/features">Explore the supported feature areas →</Link>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
