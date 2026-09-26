export const BUSINESS = {
  productName: "MAX AI",
  tagline: "Your Personal AI System",
  trialHours: 24,
  pricing: { PKR: 4999, USD: 20 },
  platform: "Windows",
  android: "Coming later",
  whatsappDisplay: "+92 370 7429349",
  whatsappNumber: "923707429349",
  status: "Beta",
} as const;
export type Currency = keyof typeof BUSINESS.pricing;
export const priceLabel = (currency: Currency) =>
  currency === "PKR"
    ? `Rs. ${BUSINESS.pricing.PKR.toLocaleString("en-US")}`
    : `$${BUSINESS.pricing.USD}`;
export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export const demoMessage = `Assalam o Alaikum, I would like to request the ${BUSINESS.trialHours}-hour MAX AI demo.\n\nName:\nWindows Version:\n\nPlease guide me about the demo.`;
export const contactMessage =
  "Hello, I have a question about MAX AI. Please guide me.";
export function purchaseMessage(currency: Currency) {
  return currency === "PKR"
    ? `Assalam o Alaikum, I want to purchase MAX AI.\n\nPlan: MAX AI Full\nPrice: PKR ${BUSINESS.pricing.PKR.toLocaleString("en-US")}\n\nPlease guide me about payment and activation.`
    : `Hello, I would like to purchase MAX AI.\n\nPlan: MAX AI Full\nPrice: USD $${BUSINESS.pricing.USD}\n\nPlease send me the payment and activation details.`;
}
