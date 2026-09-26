"use client";
import { useState, useSyncExternalStore } from "react";
import { Mic, AudioLines, Sparkles, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS, priceLabel, type Currency } from "@/lib/business";
import { WhatsAppLink } from "./whatsapp-link";
import { MaxOrb } from "./orb";
const states = [
  {
    name: "Listening",
    icon: Mic,
    line: "Hey MAX, YouTube kholo.",
    caption: "Your words. Naturally.",
  },
  {
    name: "Thinking",
    icon: Sparkles,
    line: "Understanding your request…",
    caption: "A moment to understand the intent.",
  },
  {
    name: "Speaking",
    icon: AudioLines,
    line: "YouTube khol deta hoon.",
    caption: "Illustrative response. No action is executed.",
  },
];
export function VoiceDemo() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const item = states[selected];
  return (
    <div className="voice-demo">
      <div className="demo-orb">
        <MaxOrb state={item.name.toLowerCase()} />
        <span className="eyebrow">{item.name.toUpperCase()}</span>
      </div>
      <div className="demo-controls">
        <span className="badge">INTERACTIVE PREVIEW</span>
        <h3>A conversation starts here.</h3>
        <p>Choose a state to see MAX respond.</p>
        <div className="state-buttons" aria-label="Voice preview state">
          {states.map((s, i) => (
            <button
              key={s.name}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <s.icon size={17} aria-hidden="true" />
              {s.name}
            </button>
          ))}
        </div>
        <motion.div
          key={selected}
          initial={reduced ? false : { y: 5 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.22 }}
          className="sample-response"
          aria-live="polite"
        >
          <span className="eyebrow">{selected === 0 ? "YOU" : "MAX"}</span>
          <p>“{item.line}”</p>
          <small>{item.caption}</small>
        </motion.div>
        <p className="fine">Visual simulation only · No microphone access</p>
      </div>
    </div>
  );
}
function subscribe(fn: () => void) {
  window.addEventListener("storage", fn);
  window.addEventListener("max-currency", fn);
  return () => {
    window.removeEventListener("storage", fn);
    window.removeEventListener("max-currency", fn);
  };
}
function useCurrency() {
  const value = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem("max-currency") === "USD" ? "USD" : "PKR";
      } catch {
        return "PKR";
      }
    },
    () => "PKR",
  ) as Currency;
  const [fallback, setFallback] = useState<Currency | null>(null);
  return [
    fallback ?? value,
    (v: Currency) => {
      try {
        localStorage.setItem("max-currency", v);
        setFallback(null);
      } catch {
        setFallback(v);
      }
      window.dispatchEvent(new Event("max-currency"));
    },
  ] as const;
}
export function Pricing() {
  const [currency, setCurrency] = useCurrency();
  return (
    <>
      <div className="pricing-intro">
        <p>Try it first. Make it yours when you’re ready.</p>
        <div className="currency-toggle" aria-label="Pricing currency">
          {(["PKR", "USD"] as const).map((c) => (
            <button
              key={c}
              aria-pressed={currency === c}
              onClick={() => setCurrency(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="pricing-grid">
        <article className="price-card">
          <span className="eyebrow">THE FIRST CONVERSATION</span>
          <h3>{BUSINESS.trialHours}-hour demo</h3>
          <div className="price">
            Free<span> / {BUSINESS.trialHours} hours</span>
          </div>
          <p>Meet MAX in your own workflow.</p>
          <ul>
            {[
              "Explore the MAX Windows experience",
              "Test available features with your providers",
              "Demo access arranged through WhatsApp",
              "No automatic purchase or charge",
            ].map((t) => (
              <li key={t}>
                <Check size={17} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <WhatsAppLink kind="demo" className="button secondary">
            Request free demo
          </WhatsAppLink>
        </article>
        <article className="price-card featured">
          <span className="price-tag">YOUR PERSONAL AI</span>
          <span className="eyebrow">MAKE IT YOURS</span>
          <h3>MAX AI Full</h3>
          <div className="price" aria-live="polite">
            {priceLabel(currency)}
            <span> / one-time</span>
          </div>
          <p>A one-time license for the current MAX version.</p>
          <ul>
            {[
              "The full MAX AI Windows version",
              "Features according to the current release",
              "Personal purchase assistance via WhatsApp",
              "Manual payment and delivery guidance",
            ].map((t) => (
              <li key={t}>
                <Check size={17} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <WhatsAppLink kind="buy" currency={currency}>
            Buy MAX AI via WhatsApp
          </WhatsAppLink>
        </article>
      </div>
      <p className="pricing-note">
        MAX AI price in Pakistan:{" "}
        <strong>PKR {BUSINESS.pricing.PKR.toLocaleString("en-US")}</strong> (
        {priceLabel("PKR")}). International price:{" "}
        <strong>USD {priceLabel("USD")}</strong>. Two fixed prices, no currency
        conversion. Supported AI provider usage is separate.
      </p>
      <p className="fine">
        Your message opens in WhatsApp for you to review and send. Purchases and
        demo requests are handled manually.
      </p>
    </>
  );
}
