"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import { BUSINESS, createWhatsAppUrl, contactMessage } from "@/lib/business";
const nav = [
  ["Home", "/"],
  ["Features", "/features"],
  ["How it works", "/how-it-works"],
  ["Demo", "/demo"],
  ["Pricing", "/pricing"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="navbar">
      <div className="shell nav-inner">
        <Link className="logo" href="/">
          MAX<span>AI</span>
        </Link>
        <nav
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
          id="main-navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle")?.focus();
            }
          }}
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <WhatsAppLink kind="buy" className="button primary small">
            Get MAX AI
          </WhatsAppLink>
        </div>
        <button
          id="menu-toggle"
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="shell footer-main">
        <div>
          <Link className="logo" href="/">
            MAX<span>AI</span>
          </Link>
          <p>Your Personal AI System.</p>
          <span className="fine">Built independently. For your everyday.</span>
          <a
            className="footer-phone"
            href={createWhatsAppUrl(contactMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {BUSINESS.whatsappDisplay}
          </a>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          {[
            ...nav.slice(1),
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Refund policy", "/refund-policy"],
          ].map(([l, h]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} MAX AI</span>
        <span>
          WINDOWS BETA <span className="gold"> / </span> YOUR SYSTEM. YOUR
          RULES.
        </span>
      </div>
      <a
        className="floating-whatsapp"
        href={createWhatsAppUrl(contactMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp — contact MAX AI (opens a new tab)"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>Chat on WhatsApp</span>
      </a>
    </footer>
  );
}
