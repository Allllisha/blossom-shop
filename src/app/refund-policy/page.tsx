import Link from "next/link";

export default function RefundPolicy() {
  return (
    <>
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
                href="https://www.tiktok.com/@sakurasakusquishy"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="policy-main">
        <div className="policy-container">
          <Link href="/" className="pdp-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to shop</span>
          </Link>

          <h1 className="policy-title">Refund &amp; Return Policy</h1>

          <div className="policy-section">
            <h2>Products</h2>
            <p>
              All of our products are handmade squishies made from food-grade silicone. Every item is brand new. Due to the handmade nature and silicone material, complete uniformity between items cannot be guaranteed.
            </p>
          </div>

          <div className="policy-section">
            <h2>Handmade product disclaimer</h2>
            <p>
              As these are handmade items, minor imperfections are considered normal and are to be expected. Due to the softness and nature of the material, the following conditions are unavoidable:
            </p>
            <ul>
              <li>Mold line marks</li>
              <li>Fingerprints</li>
              <li>Slight color variations due to tinting</li>
              <li>Color blending</li>
              <li>Wrinkles</li>
              <li>Air bubbles</li>
              <li>Fuzz or loose fibers</li>
              <li>Oil marks</li>
              <li>Bag staining from vaseline</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>Packaging</h2>
            <p>
              Bags may tear during transit. A replacement bag is included with every order so you can replace it yourself if needed.
            </p>
          </div>

          <div className="policy-section">
            <h2>Important notice</h2>
            <p>
              All of the above are considered within normal range and are not eligible for returns or refunds. If you are not comfortable with these conditions, please refrain from purchasing.
            </p>
          </div>

          <div className="policy-section">
            <h2>Deposits</h2>
            <p>
              The $25 basket deposit is non-refundable. Failure to complete payment will result in being blacklisted from future orders.
            </p>
          </div>

          <div className="policy-section">
            <h2>All sales are final</h2>
            <p>
              Due to the nature of our products, all sales are final. We do not accept returns, exchanges, or provide refunds.
            </p>
          </div>

          <div className="policy-section">
            <h2>Contact</h2>
            <p>
              If you have any questions, please reach out via TikTok DM at{" "}
              <a
                href="https://www.tiktok.com/@sakurasakusquishy"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sakurasakusquishy
              </a>.
            </p>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Link href="/" className="footer-logo">
            Blossom<span>.</span>inc
          </Link>
          <div className="footer-center">
            <a
              href="https://www.tiktok.com/@sakurasakusquishy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.12v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.6z" />
              </svg>
              @sakurasakusquishy
            </a>
          </div>
          <p className="footer-copy">&copy; 2026 Blossom.inc</p>
        </div>
      </footer>
    </>
  );
}
