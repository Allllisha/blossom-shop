"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, use } from "react";
import { products, getProductBySlug } from "../../products";

function PayPalButton({ slug, buttonId }: { slug: string; buttonId: string }) {
  const containerId = `paypal-container-${buttonId}-${slug}`;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;

    function renderButton() {
      const paypal = w.paypal as {
        HostedButtons?: (opts: { hostedButtonId: string }) => { render: (el: string | HTMLElement) => void };
      };
      if (paypal?.HostedButtons && containerRef.current) {
        containerRef.current.innerHTML = "";
        paypal
          .HostedButtons({ hostedButtonId: buttonId })
          .render(containerRef.current);
      }
    }

    if (w.paypal) {
      renderButton();
    } else {
      const script = document.querySelector('script[src*="paypal.com/sdk/js"]');
      if (script) {
        script.addEventListener("load", renderButton);
      } else {
        const check = setInterval(() => {
          if (w.paypal) {
            clearInterval(check);
            renderButton();
          }
        }, 100);
        return () => clearInterval(check);
      }
    }
  }, [slug, buttonId]);

  return (
    <div ref={containerRef} id={containerId} style={{ minHeight: 50 }} />
  );
}

function BackArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <h1 className="font-serif" style={{ fontSize: 32, color: "var(--text-dark)", marginBottom: 16 }}>
          Product not found
        </h1>
        <Link href="/" className="btn-primary" style={{ display: "inline-flex" }}>
          Back to shop
        </Link>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <>
      {/* ── Nav ── */}
      <nav className="site-nav scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Blossom<span>.</span>inc
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/#collection">Collection</Link>
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

      {/* ── Product Detail ── */}
      <main className="pdp-main">
        <div className="pdp-container">
          {/* Back link */}
          <Link href="/" className="pdp-back">
            <BackArrow />
            <span>Back to collection</span>
          </Link>

          <div className="pdp-grid">
            {/* Image */}
            <div className="pdp-image-wrap">
              <div className="pdp-image-inner">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="product-badge">{product.badge}</div>
              </div>
            </div>

            {/* Details */}
            <div className="pdp-details">
              <div className="pdp-details-inner">
                <p className="section-eyebrow">{product.badge}</p>
                <h1 className="pdp-title">{"orderType" in product && product.orderType === "howto" ? "How to Order" : "orderType" in product && product.orderType === "deposit" ? "Deposit" : "orderType" in product && product.orderType === "livecheckout" ? "Live Checkout" : product.name}</h1>
                {"orderType" in product && product.orderType === "howto" ? null : (
                  <p className="pdp-description">{product.longDescription}</p>
                )}

                {/* Features */}
                <div className="pdp-features">
                  <div className="pdp-feature">
                    <div className="pdp-feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <span>Slow-rising foam</span>
                  </div>
                  <div className="pdp-feature">
                    <div className="pdp-feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <span>Free shipping over $50</span>
                  </div>
                  <div className="pdp-feature">
                    <div className="pdp-feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>
                    <span>Open basket with $25</span>
                  </div>
                </div>

                {/* Order Section */}
                {"orderType" in product && product.orderType === "howto" ? (
                  <div className="pdp-howto">
                    <h3 className="pdp-howto-title">How to Order</h3>
                    <div className="pdp-howto-steps">
                      <div className="pdp-howto-step">
                        <div className="pdp-howto-num">1</div>
                        <div>
                          <strong>Open your basket</strong>
                          <p>Pay a $25 deposit to open your basket. Your basket stays open for 7 days.</p>
                        </div>
                      </div>
                      <div className="pdp-howto-step">
                        <div className="pdp-howto-num">2</div>
                        <div>
                          <strong>Send us your details</strong>
                          <p>After opening your basket, DM <a href="https://www.tiktok.com/@sakurasakusquishy" target="_blank" rel="noopener noreferrer">@sakurasakusquishy</a> with your TikTok ID, name, and a screenshot of your PayPal payment confirmation showing the Transaction ID.</p>
                        </div>
                      </div>
                      <div className="pdp-howto-step">
                        <div className="pdp-howto-num">3</div>
                        <div>
                          <strong>Join our live &amp; pick your items</strong>
                          <p>Tune in to our TikTok live at <a href="https://www.tiktok.com/@sakura.squishy6" target="_blank" rel="noopener noreferrer">@sakura.squishy6</a> and keep the items you love in your basket.</p>
                        </div>
                      </div>
                      <div className="pdp-howto-step">
                        <div className="pdp-howto-num">4</div>
                        <div>
                          <strong>Live checkout</strong>
                          <p>When you&apos;re ready, pay through the checkout button. Free shipping on orders over $50.</p>
                        </div>
                      </div>
                    </div>
                    <p className="pdp-howto-notice">Please note: failure to complete payment will result in being blacklisted from future orders.</p>
                    <Link
                      href="/product/teddy-bear-sweets"
                      className="btn-primary"
                      style={{ display: "inline-flex", marginTop: 8 }}
                    >
                      Open basket
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="pdp-paypal">
                      <PayPalButton
                        slug={slug}
                        buttonId={"orderType" in product && product.orderType === "livecheckout" ? "NWWXVKZH2H72U" : "WKTQFU5VG9RW4"}
                      />
                    </div>
                    <div className="paypal-secure" style={{ justifyContent: "flex-start", marginTop: 12 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Secure payment via PayPal
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── You may also like ── */}
        <section className="pdp-related">
          <div className="pdp-related-inner">
            <div className="section-header">
              <p className="section-eyebrow">You may also like</p>
              <h2 className="section-title">
                More <em>dreams</em>
              </h2>
            </div>
            <div className="product-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
              {otherProducts.map((p) => (
                <Link href={`/product/${p.slug}`} key={p.id} className="product-card">
                  <div className="product-img-wrap">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="product-badge">{p.badge}</div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{"orderType" in p && p.orderType === "howto" ? "How to Order" : "orderType" in p && p.orderType === "deposit" ? "Deposit" : "orderType" in p && p.orderType === "livecheckout" ? "Live Checkout" : p.name}</h3>
                    <p className="product-desc">{"orderType" in p && p.orderType === "howto" ? "Please read before placing your order." : p.description}</p>
                    <div className="product-order-btn">
                      <span>{"orderType" in p && p.orderType === "howto" ? "How to order" : "Order here"}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

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
            <Link href="/refund-policy" className="footer-link">Refund Policy</Link>
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
          </div>
          <p className="footer-copy">&copy; 2026 Blossom.inc</p>
        </div>
      </footer>
    </>
  );
}
