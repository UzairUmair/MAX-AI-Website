import Link from "next/link";
import Image from "next/image";
import {
  Mic,
  BrainCircuit,
  Command,
  SlidersHorizontal,
  MessageCircle,
  ShieldCheck,
  Monitor,
  Users,
  Bell,
  ArrowRight,
  Check,
} from "lucide-react";
import type { ReactNode } from "react";
import { BUSINESS, priceLabel } from "@/lib/business";
import { WhatsAppLink } from "./whatsapp-link";
export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero shell">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{label}</span>
      </nav>
      <span className="eyebrow">
        MAX PERSONAL AI SYSTEM / {label.toUpperCase()}
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export const features = [
  {
    icon: Mic,
    title: "A more natural conversation",
    tag: "VOICE",
    text: "Speak to MAX with configured voice providers. Designed for English and Roman Urdu workflows; recognition can vary.",
  },
  {
    icon: BrainCircuit,
    title: "Context that stays with you",
    tag: "MEMORY",
    text: "Keep useful, user-approved information. Review, edit, and delete your saved memories.",
  },
  {
    icon: Command,
    title: "Words become actions",
    tag: "COMMAND CENTER",
    text: "Open supported apps and use local commands. MAX prepares supported consequential actions for confirmation.",
  },
  {
    icon: SlidersHorizontal,
    title: "Your AI, your choice",
    tag: "AI PROVIDERS",
    text: "Connect a supported AI provider with your own key. Provider terms, usage costs, and quotas apply.",
  },
  {
    icon: MessageCircle,
    title: "A familiar personality",
    tag: "PAKISTANI DOST",
    text: "A warmer tone for conversation, friendly banter when appropriate, and a more serious response when context calls for it.",
  },
  {
    icon: ShieldCheck,
    title: "Control comes first",
    tag: "PRIVACY",
    text: "Local-first capabilities where supported, configurable providers, and user-controlled memory.",
  },
  {
    icon: Users,
    title: "People, with context",
    tag: "CONTACTS",
    text: "Use saved contacts in supported communication workflows. Integration availability depends on the current beta build.",
  },
  {
    icon: Bell,
    title: "Less to keep in your head",
    tag: "ORGANIZE",
    text: "Manage supported tasks and reminders in one workspace. Ask about available routines when requesting the demo.",
  },
  {
    icon: Monitor,
    title: "At home on your PC",
    tag: "WINDOWS DESKTOP",
    text: "A dedicated Windows application for your everyday workflow. Android is planned for the future, not available today.",
  },
];
export function FeatureGrid({ full = false }: { full?: boolean }) {
  return (
    <div className="feature-grid">
      {features.slice(0, full ? 9 : 6).map((f) => (
        <article className="feature-card" key={f.tag}>
          <f.icon size={25} strokeWidth={1.4} aria-hidden="true" />
          <span className="eyebrow">{f.tag}</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>
      ))}
    </div>
  );
}
export function HowItWorks() {
  return (
    <ol className="steps">
      {[
        ["Talk", "Start with “Hey MAX…”"],
        ["Understand", "Interpret words and context."],
        ["Consider", "Prepare the intended action."],
        ["Confirm", "Review when needed."],
        ["Act", "Use a supported tool."],
        ["Remember", "Keep approved context."],
      ].map(([title, text], i) => (
        <li key={title}>
          <span className="step-number">0{i + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}
export function Preflight() {
  return (
    <div className="split-layout">
      <div>
        <span className="eyebrow">THINK. CONFIRM. ACT.</span>
        <h2>
          Your words.
          <br />
          <span>Your final say.</span>
        </h2>
        <p>
          Important communication actions can require confirmation before
          execution. MAX shows the intended action so you can check the
          recipient and message.
        </p>
        <p className="fine">
          Illustrative conversation only. This website does not send messages or
          verify delivery.
        </p>
      </div>
      <div className="conversation">
        <span className="eyebrow">ACTION CONFIRMATION / EXAMPLE</span>
        <p className="user-bubble">Rayyan ko message karo ke main busy hoon.</p>
        <div className="max-reply">
          <span className="mini-logo">M</span>
          <p>Rayyan ko “Main busy hoon” WhatsApp par bhej doon?</p>
        </div>
        <p className="user-bubble">Haan.</p>
        <div className="max-reply">
          <span className="mini-logo">M</span>
          <p>
            Confirmed. The supported messaging tool can now attempt the action.
          </p>
        </div>
      </div>
    </div>
  );
}
export function Personality() {
  return (
    <div className="split-layout">
      <div>
        <span className="eyebrow">PAKISTANI DOST</span>
        <h2>
          A familiar voice.
          <br />
          <span>A serious assistant.</span>
        </h2>
        <p>
          An AI that doesn’t have to sound like a robot. A relaxed Pakistani
          conversational personality, natural Roman Urdu, and optional light
          roasting.
        </p>
        <p>Friendly when the moment fits. Focused when it matters.</p>
        <Link href="/features" className="text-link">
          Explore MAX AI features <ArrowRight size={16} />
        </Link>
      </div>
      <div className="conversation">
        <span className="eyebrow">ILLUSTRATIVE CONVERSATION</span>
        <p className="user-bubble">Build phir fail ho gayi.</p>
        <div className="max-reply">
          <span className="mini-logo">M</span>
          <p>
            Bhai ye build tumse personal dushmani nikal rahi hai. Chal error
            dekhte hain.
          </p>
        </div>
        <div className="chat-divider" />
        <p className="user-bubble">Mera account compromise ho gaya.</p>
        <div className="max-reply">
          <span className="mini-logo">M</span>
          <p>Ye serious hai. Pehle account secure karte hain.</p>
        </div>
      </div>
    </div>
  );
}
export function Memory() {
  return (
    <div className="split-layout">
      <div className="memory-preview">
        <div className="panel-header">
          <span>
            <BrainCircuit size={17} /> MEMORY BANK
          </span>
          <span className="muted">Illustrative preview</span>
        </div>
        {[
          "You prefer concise answers.",
          "You are learning React.",
          "Rayyan is your friend.",
        ].map((s, i) => (
          <div className="memory-row" key={s}>
            <span className="memory-index">0{i + 1}</span>
            <span>{s}</span>
            <Check size={16} aria-hidden="true" />
          </div>
        ))}
        <div className="memory-tools">
          SEARCH <span>EDIT</span>
          <span>REMOVE</span>
        </div>
      </div>
      <div>
        <span className="eyebrow">MEMORY WITH PERMISSION</span>
        <h2>
          Remembers what matters.
          <br />
          <span>Forgets when you ask.</span>
        </h2>
        <p>
          User-controlled memory gives your conversations context. Review, edit,
          or delete what MAX keeps. This preview uses fictional entries.
        </p>
        <Link className="text-link" href="/privacy">
          Read about privacy and control <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
export function Screenshots() {
  const screenshots = [
    {
      name: "Core hub",
      detail: "Your command workspace",
      src: "/product-screenshots/core-hub.png",
      alt: "MAX core workspace with system health, central orb, and a privacy-blurred contact directory",
    },
    {
      name: "Core activity",
      detail: "Live execution telemetry",
      src: "/product-screenshots/activity-telemetry.png",
      alt: "MAX AI activity screen showing execution events, statuses, categories, and latency",
    },
    {
      name: "Live voice",
      detail: "Interruptible voice workspace",
      src: "/product-screenshots/live-voice.png",
      alt: "MAX AI live voice panel with conversation history, suggested actions, and microphone controls",
    },
    {
      name: "WhatsApp",
      detail: "Connected communications",
      src: "/product-screenshots/whatsapp.png",
      alt: "MAX WhatsApp connection and messaging controls with account details and messages blurred",
    },
    {
      name: "Contacts",
      detail: "Contact and alert controls",
      src: "/product-screenshots/contacts.png",
      alt: "MAX contact book with a blank contact form and saved-contact alert preferences",
    },
    {
      name: "Chat history",
      detail: "Search and manage history",
      src: "/product-screenshots/chat-history.png",
      alt: "MAX conversation archive with search and deletion controls and private conversations blurred",
    },
    {
      name: "Memory bank",
      detail: "User-controlled memory",
      src: "/product-screenshots/memory-bank.png",
      alt: "MAX memory bank with search, saved memory cards and topology; personal entries blurred",
    },
    {
      name: "Screen control",
      detail: "Guarded local commands",
      src: "/product-screenshots/screen-control.png",
      alt: "MAX AI screen control page with fast path, vision fallback, safety gate, and command input",
    },
    {
      name: "Math & media",
      detail: "Solver and file analysis",
      src: "/product-screenshots/math-media.png",
      alt: "MAX AI math solver and local image, PDF, and ZIP analysis tools",
    },
    {
      name: "Automations",
      detail: "Rules with dry runs",
      src: "/product-screenshots/automations.png",
      alt: "MAX AI automation rules showing triggers, actions, dry-run buttons, and enable switches",
    },
    {
      name: "System & voice",
      detail: "Voice and device controls",
      src: "/product-screenshots/system-voice.png",
      alt: "MAX AI system configuration with voice output, microphone selection, and provider status",
    },
    {
      name: "AI providers",
      detail: "Encrypted model vault",
      src: "/product-screenshots/ai-models.png",
      alt: "MAX AI provider settings with encrypted API-key cards and connection status",
    },
    {
      name: "Device fleet",
      detail: "Android · coming soon",
      src: "/product-screenshots/device-fleet.png",
      alt: "MAX device fleet page explicitly showing Android integration is still in development",
    },
  ];

  return (
    <div className="screenshot-grid">
      {screenshots.map((screenshot, i) => (
        <figure className="screenshot-frame" key={screenshot.name}>
          <a
            className="screenshot-image-link"
            href={screenshot.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size ${screenshot.name} screenshot`}
          >
            <Image
              className="screenshot-image"
              src={screenshot.src}
              alt={screenshot.alt}
              width={1400}
              height={1120}
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </a>
          <figcaption className="screenshot-label">
            <span>
              {String(i + 1).padStart(2, "0")} / {screenshot.name}
            </span>
            <span>{screenshot.detail}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
export const faqs = [
  [
    "What is MAX AI?",
    "MAX AI is a personal AI system for Windows, combining conversation, voice, user-controlled memory, supported computer commands, and configurable AI providers. The current product is a beta; capabilities vary by build.",
  ],
  [
    "Does MAX AI understand Roman Urdu?",
    "MAX is designed for conversational English, Roman Urdu, and mixed-language workflows. Recognition and responses depend on the voice provider, language, and environment. Perfect recognition is not promised.",
  ],
  [
    "Does MAX AI have memory?",
    "MAX can retain useful, user-approved information and provides controls to review, edit, or delete saved memories. This marketing website does not access your local MAX memory.",
  ],
  [
    "Can MAX open applications?",
    "MAX supports selected local app-opening and computer commands. It does not work with every program or action. Ask about your intended workflow before buying.",
  ],
  [
    "Does MAX require an internet connection?",
    "Cloud AI models, cloud voice, and online integrations require internet. Local capabilities vary by feature and build. MAX is not advertised as a fully offline AI system.",
  ],
  [
    "Do I need an AI API key?",
    "Some features require you to configure a supported AI provider API key. Provider usage costs, quotas, and subscriptions are separate from the MAX license.",
  ],
  [
    "Which AI providers are supported?",
    "MAX has configurable provider support. Ask the team for the supported model and voice combinations in the current demo build before choosing a provider or purchasing API access.",
  ],
  [
    "How much does MAX AI cost?",
    `The current one-time license costs PKR ${BUSINESS.pricing.PKR.toLocaleString("en-US")} (${priceLabel("PKR")}) in Pakistan or USD ${priceLabel("USD")} internationally. These are fixed prices, not currency conversions. Confirm device limits and update terms with the team before payment.`,
  ],
  [
    "How do I request the free 24-hour demo?",
    "Choose Request demo to open a prepared WhatsApp message. Review and send it yourself. The team manually arranges demo access and explains when your 24-hour evaluation begins. Browsing this website does not activate a trial.",
  ],
  [
    "Will the demo automatically charge me?",
    "No. The 24-hour demo does not automatically purchase MAX. You choose whether to buy, and purchases are handled through a separate manual conversation.",
  ],
  [
    "How do I buy MAX and receive it?",
    "Choose Buy MAX AI to contact the team on WhatsApp Business. The team provides payment instructions, manually verifies payment, and then sends delivery and activation guidance directly. This website does not collect payment or host an installer.",
  ],
  [
    "Does a one-time license include lifetime updates?",
    "The current offer is a one-time license under the applicable MAX terms. Lifetime updates are not promised. Future major-version policies and device limits need to be confirmed before purchasing.",
  ],
  [
    "Is MAX AI available for Android?",
    "No. Windows is the active product platform. Android is planned for the future and is not currently downloadable.",
  ],
  [
    "Which Windows versions are supported?",
    "Exact supported Windows versions and hardware requirements must be confirmed against the demo build. Voice interaction requires a microphone; cloud features need internet. No unverified RAM or CPU minimum is listed here.",
  ],
  [
    "Why might Windows SmartScreen appear?",
    "Early unsigned beta installers may trigger Windows SmartScreen. Confirm the signing status and source with the team. Keep Windows security enabled; this website does not ask you to disable it.",
  ],
  [
    "How can I get help or report a bug?",
    "Contact MAX AI through the business WhatsApp link. Include the build version and steps to reproduce the issue. Remove passwords, API keys, private conversations, and personal data from anything you share.",
  ],
];
export function FAQ({ compact = false }: { compact?: boolean }) {
  const list = compact ? [faqs[0], faqs[5], faqs[8], faqs[9], faqs[10]] : faqs;
  return (
    <div className="faq">
      {list.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
      {compact && (
        <Link className="text-link" href="/faq">
          Read all MAX AI questions <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta shell">
      <span className="eyebrow">YOUR PERSONAL AI SYSTEM</span>
      <h2>
        Meet <em>your</em> MAX.
      </h2>
      <p>Try it for 24 hours. Decide in your own time.</p>
      <div className="actions">
        <WhatsAppLink kind="demo">Request free demo</WhatsAppLink>
        <WhatsAppLink kind="buy" className="text-link">
          Buy via WhatsApp
        </WhatsAppLink>
      </div>
      <p className="fine">
        {priceLabel("PKR")} / USD {priceLabel("USD")} · Windows beta · No
        automatic charge
      </p>
    </section>
  );
}
