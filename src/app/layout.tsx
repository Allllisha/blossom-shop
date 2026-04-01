import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blossom.inc — Handcrafted Squishies",
  description: "Dreamy, handcrafted squishies shipped worldwide. Free shipping on orders over $50.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.paypal.com/sdk/js?client-id=BAAocjYVyjKwhbFMzY1Bh2myBEr_bFoZ5ClEfrDpo4_o6qyM96Kc04302cEhOkdrV1rooHIcSLRob1ZyPI&components=hosted-buttons&disable-funding=venmo&currency=USD&locale=en_US"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
