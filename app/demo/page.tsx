import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/marketing";
import { VoiceDemo } from "@/components/interactive";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { BUSINESS } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "MAX AI 24-Hour Demo — Try MAX on Windows",
  "Request a free 24-hour MAX AI Windows demo through WhatsApp. Access is arranged manually, with no automatic charge. Explore the interactive visual preview.",
  "/demo",
);
export default function Demo() {
  return (
    <>
      <PageHero
        label="Demo"
        title="Meet MAX. In your own workflow."
        description={`Request a free ${BUSINESS.trialHours}-hour evaluation of the Windows application. Demo access is prepared manually through WhatsApp, with guidance from the team.`}
      />
      <section className="shell content-section split-layout">
        <div className="panel">
          <span className="eyebrow">MAX AI DEMO / WINDOWS BETA</span>
          <h2>Your first 24 hours.</h2>
          <div className="price">
            Free<span> / one day</span>
          </div>
          <ul className="intro-list">
            <li>Explore the Windows experience and available features.</li>
            <li>
              Try voice, memory, and supported commands with your configuration.
            </li>
            <li>Choose whether to buy after the evaluation.</li>
          </ul>
          <WhatsAppLink kind="demo">Request 24-hour demo</WhatsAppLink>
          <p className="fine section-link">
            Opens a message for you to review and send. Nothing is sent
            automatically.
          </p>
        </div>
        <div>
          <h2>How your demo works</h2>
          <ol className="process-list">
            {[
              [
                "Request your demo",
                "Open the prepared WhatsApp message and add your name and Windows version.",
              ],
              [
                "Talk to the team",
                "Send the message yourself. The team confirms the build and setup requirements.",
              ],
              [
                "Receive demo guidance",
                "Access is prepared manually. The team explains when your evaluation begins.",
              ],
              [
                "Try MAX for 24 hours",
                "Explore the available features. Visiting this website does not start a timer.",
              ],
              [
                "Decide in your own time",
                "Purchase only if you want to continue. There is no automatic charge.",
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
      <section className="section section-muted">
        <div className="shell">
          <SectionHeading
            label="A QUICK FEEL FOR MAX"
            title="Explore the interactive preview."
            description="This frontend-only simulation shows voice states. It is not the real MAX application and is separate from the 24-hour software demo."
          />
          <VoiceDemo />
        </div>
      </section>
      <section className="section shell">
        <h2>Before you begin</h2>
        <p className="wide-copy">
          You’ll need a compatible Windows PC. Voice features need a microphone;
          cloud AI features need internet and may require your own supported
          provider API key. Provider charges are separate. Ask the team to
          verify your Windows version and essential workflows before you begin.
        </p>
        <div className="page-links">
          <Link href="/pricing">See MAX AI pricing →</Link>
          <Link href="/faq">Read demo and setup FAQs →</Link>
        </div>
      </section>
    </>
  );
}
