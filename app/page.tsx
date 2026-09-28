import Link from "next/link";
import {
  ArrowRight,
  Mic,
  BrainCircuit,
  Command,
  ShieldCheck,
  Check,
} from "lucide-react";
import { MaxOrb } from "@/components/orb";
import { VoiceDemo, Pricing } from "@/components/interactive";
import {
  FeatureGrid,
  HowItWorks,
  FAQ,
  SectionHeading,
  Preflight,
  Personality,
  Memory,
  Screenshots,
  FinalCTA,
} from "@/components/marketing";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { priceLabel } from "@/lib/business";
import { pageMetadata, softwareSchema } from "@/lib/seo";
export const metadata = pageMetadata(
  "MAX AI — Personal AI Assistant for Windows",
  "Meet MAX AI for Windows: voice, memory and supported computer commands. Request a free 24-hour demo or purchase through WhatsApp.",
  "/",
);
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero shell">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="tiny-square" /> PERSONAL INTELLIGENCE. WINDOWS
            BETA.
          </span>
          <p className="hero-kicker">MAX PERSONAL AI SYSTEM</p>
          <h1>
            Your AI.
            <br />
            Your commands.
            <br />
            <em>Your system.</em>
          </h1>
          <p className="hero-description">
            Your personal AI assistant for Windows. Natural conversation, voice
            commands, memory, and supported computer actions — together in one
            experience.
          </p>
          <div className="actions">
            <WhatsAppLink kind="demo">Try MAX free for 24 hours</WhatsAppLink>
            <WhatsAppLink kind="buy" className="text-link">
              Get MAX AI — {priceLabel("PKR")}
            </WhatsAppLink>
          </div>
          <p className="fine">
            <Check size={14} aria-hidden="true" /> Free demo <span>·</span>{" "}
            Manual access via WhatsApp <span>·</span> USD {priceLabel("USD")} to
            buy
          </p>
        </div>
        <div className="hero-visual">
          <div className="orb-caption">
            <span>MAX / PERSONAL AI SYSTEM</span>
            <span>01 — CORE</span>
          </div>
          <MaxOrb />
          <div className="orb-status">
            <span className="status-dot" /> READY WHEN YOU ARE
          </div>
          <p className="orb-footnote">
            A visual preview of your next conversation.
          </p>
          <div className="visual-corner">
            VOICE ENABLED<span>HUMAN CENTERED</span>
          </div>
        </div>
      </section>
      <div className="capability-strip">
        <div className="shell">
          <span>
            <Mic /> Natural voice
          </span>
          <span>
            <BrainCircuit /> Personal memory
          </span>
          <span>
            <Command /> Everyday commands
          </span>
          <span>
            <ShieldCheck /> You stay in control
          </span>
        </div>
      </div>
      <section className="section shell">
        <SectionHeading
          label="01 / MEET MAX"
          title={
            <>
              More than a chatbot.
              <br />
              <span>A part of your workflow.</span>
            </>
          }
          description="Talk naturally. Open supported apps. Remember what matters. MAX brings conversation and your everyday tools into one personal desktop experience."
        />
        <FeatureGrid />
        <Link className="text-link section-link" href="/features">
          Explore all MAX AI features <ArrowRight size={16} />
        </Link>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <SectionHeading
            label="02 / FROM WORDS TO ACTION"
            title="Say it. Consider it. Do it."
            description="A thoughtful path from your request to a supported action."
          />
          <HowItWorks />
          <Link className="text-link" href="/how-it-works">
            See how MAX works <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section shell">
        <SectionHeading
          label="03 / TALK NATURALLY"
          title={
            <>
              A voice. A presence.
              <br />
              <span>A little more personal.</span>
            </>
          }
          description="Explore listening, thinking, and speaking. This interactive preview is a visual simulation, separate from the real 24-hour Windows demo."
        />
        <VoiceDemo />
        <div className="command-examples">
          {[
            "Hey MAX, YouTube kholo.",
            "Memory Bank check karo.",
            "Koi acha music laga do.",
          ].map((t) => (
            <span key={t}>“{t}”</span>
          ))}
        </div>
        <p className="fine">
          Illustrative English and Roman Urdu workflows. Available commands
          depend on the current build and configured providers.
        </p>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <Preflight />
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
          label="06 / INSIDE THE APP"
          title="Built for your Windows workspace."
          description="Explore real screens from MAX AI, including live voice, guarded computer control, automations, file tools, and encrypted provider settings."
        />
        <Screenshots />
        <p className="fine section-link">
          Software and activation instructions are provided directly after demo
          or purchase confirmation. Android is planned for the future.
        </p>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <SectionHeading
            label="07 / MAX AI PRICING"
            title="Your first 24 hours. On us."
            description="Request a free demo through WhatsApp, then decide whether MAX belongs in your workflow. No automatic purchase or charge."
          />
          <Pricing />
          <div className="page-links">
            <Link href="/pricing">See pricing and the purchase process →</Link>
            <Link href="/demo">How to request your demo →</Link>
          </div>
        </div>
      </section>
      <section className="section shell privacy-band">
        <ShieldCheck size={40} aria-hidden="true" />
        <div>
          <h2>Your MAX. Your control.</h2>
          <p>
            Choose supported providers. Manage your memory. Review supported
            consequential actions. Some AI features need your own provider key
            and internet access.
          </p>
        </div>
        <Link className="text-link" href="/privacy">
          Privacy & control <ArrowRight size={16} />
        </Link>
      </section>
      <section className="section shell">
        <SectionHeading
          label="08 / FREQUENTLY ASKED QUESTIONS"
          title="A few things to know."
        />
        <FAQ compact />
      </section>
      <FinalCTA />
    </>
  );
}
