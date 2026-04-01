"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "./products";

const marqueeItems = [
  "Free shipping over $50",
  "Handcrafted with love",
  "Slow-rising & scented",
  "Worldwide delivery",
  "Join our TikTok live",
  "Free shipping over $50",
  "Handcrafted with love",
  "Slow-rising & scented",
  "Worldwide delivery",
  "Join our TikTok live",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Blossom<span>.</span>inc
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@sakura.squishy6"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div className="product-img-wrap">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="product-badge">{product.badge}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{"orderType" in product && product.orderType === "howto" ? "How to Order" : "orderType" in product && product.orderType === "deposit" ? "Deposit" : "orderType" in product && product.orderType === "livecheckout" ? "Live Checkout" : product.name}</h3>
        <p className="product-desc">{"orderType" in product && product.orderType === "howto" ? "Please read before placing your order." : product.description}</p>
        <div className="product-order-btn">
          <span>{"orderType" in product && product.orderType === "howto" ? "How to order" : "Order here"}</span>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        />
        <div className="hero-gradient" />
        <div className="hero-content">
          <p className="hero-eyebrow">Handcrafted squishies</p>
          <h1 className="hero-title">
            Made for
            <br />
            <em>dreamers</em>
          </h1>
          <p className="hero-sub">
            Each piece is carefully crafted to bring a little softness and magic
            into your everyday. Slow-rising, scented, and made with love.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="btn-primary">
              Shop collection
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <div key={i} className="marquee-item">
              <div className="marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── Products ── */}
      <section id="collection" className="products-section">
        <div className="section-header">
          <p className="section-eyebrow">Our Collection</p>
          <h2 className="section-title">
            Sweet <em>dreams</em>
          </h2>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── Shipping ── */}
      <div className="shipping-section">
        <div className="shipping-row">
          <div className="shipping-item">
            <div className="shipping-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v0a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5" />
                <path d="M3 11h18v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>Handcrafted</div>
              <div style={{ fontSize: 12, color: "var(--text-soft)" }}>Made with love</div>
            </div>
          </div>
          <div className="shipping-divider" />
          <div className="shipping-item">
            <div className="shipping-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>Free shipping over $50</div>
              <div style={{ fontSize: 12, color: "var(--text-soft)" }}>On all orders</div>
            </div>
          </div>
          <div className="shipping-divider" />
          <div className="shipping-item">
            <div className="shipping-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>Europe &amp; USA</div>
              <div style={{ fontSize: 12, color: "var(--text-soft)" }}>5–8 business days</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <Link href="/" className="footer-logo">
            Blossom<span>.</span>inc
          </Link>
          <div className="footer-center">
            <a
              href="https://www.tiktok.com/@sakura.squishy6"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.12v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.6z" />
              </svg>
              @sakura.squishy6
            </a>
          </div>
          <p className="footer-copy">&copy; 2026 Blossom.inc</p>
        </div>
      </footer>
    </>
  );
}
