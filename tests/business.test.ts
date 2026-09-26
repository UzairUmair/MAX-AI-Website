import { test } from "node:test";
import assert from "node:assert/strict";
import {
  BUSINESS,
  createWhatsAppUrl,
  demoMessage,
  purchaseMessage,
  priceLabel,
} from "../lib/business";
test("business number uses WhatsApp international digits", () =>
  assert.equal(BUSINESS.whatsappNumber, "923707429349"));
test("PKR and USD are independent fixed prices", () => {
  assert.equal(priceLabel("PKR"), "Rs. 4,999");
  assert.equal(priceLabel("USD"), "$20");
});
test("PKR message matches displayed price", () => {
  const s = purchaseMessage("PKR");
  assert.match(s, /MAX AI Full/);
  assert.match(s, /PKR 4,999/);
  assert.doesNotMatch(s, /USD/);
});
test("USD message matches selected price", () => {
  const s = purchaseMessage("USD");
  assert.match(s, /USD \$20/);
  assert.doesNotMatch(s, /PKR/);
});
test("demo message is a request, not a purchase", () => {
  assert.match(demoMessage, /24-hour MAX AI demo/);
  assert.match(demoMessage, /Windows Version:/);
  assert.doesNotMatch(demoMessage, /payment|purchase|activated/i);
});
test("Unicode, newlines and URL metacharacters round-trip safely", () => {
  const message = "Hello & MAX? #demo\nUrdu: السلام + 100%";
  const u = new URL(createWhatsAppUrl(message));
  assert.equal(u.origin, "https://wa.me");
  assert.equal(u.pathname, "/923707429349");
  assert.equal(u.searchParams.get("text"), message);
  assert.equal(u.searchParams.size, 1);
  assert.equal(u.hash, "");
});
test("each sales link only prepares a message", () => {
  for (const message of [
    demoMessage,
    purchaseMessage("PKR"),
    purchaseMessage("USD"),
  ]) {
    const u = new URL(createWhatsAppUrl(message));
    assert.equal(u.protocol, "https:");
    assert.equal(u.searchParams.size, 1);
    assert.ok(!u.searchParams.has("send"));
  }
});
