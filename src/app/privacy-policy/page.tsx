import Link from "next/link";

export default function PrivacyPolicy() {
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

      <main className="policy-main">
        <div className="policy-container">
          <Link href="/" className="pdp-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to shop</span>
          </Link>

          <h1 className="policy-title">Privacy Policy</h1>

          <div className="policy-section">
            <h2>Introduction</h2>
            <p>
              Blossom.inc respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
          </div>

          <div className="policy-section">
            <h2>Information we collect</h2>
            <p>We may collect the following information when you place an order:</p>
            <ul>
              <li>Name</li>
              <li>TikTok username</li>
              <li>Shipping address</li>
              <li>Email address (via PayPal)</li>
              <li>Payment information (processed securely by PayPal)</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>How we use your information</h2>
            <p>Your personal data is used solely for:</p>
            <ul>
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your order</li>
              <li>Shipping your products</li>
            </ul>
            <p>We do not sell, trade, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div className="policy-section">
            <h2>Payment processing</h2>
            <p>
              All payments are processed securely through PayPal. We do not store your payment card details. Please refer to{" "}
              <a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer">
                PayPal&apos;s Privacy Policy
              </a>{" "}
              for more information on how they handle your data.
            </p>
          </div>

          <div className="policy-section">
            <h2>Data retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill your order and comply with legal obligations. You may request deletion of your data at any time.
            </p>
          </div>

          <div className="policy-section">
            <h2>Your rights (GDPR)</h2>
            <p>If you are located in the European Economic Area, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Request data portability</li>
            </ul>
            <p>To exercise any of these rights, please contact us via TikTok DM.</p>
          </div>

          <div className="policy-section">
            <h2>Cookies</h2>
            <p>
              This website does not use tracking cookies. Third-party services such as PayPal may use cookies as part of their payment processing.
            </p>
          </div>

          <div className="policy-section">
            <h2>Contact</h2>
            <p>
              For any privacy-related questions, please reach out via TikTok DM at{" "}
              <a
                href="https://www.tiktok.com/@sakurasakusquishy"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sakurasakusquishy
              </a>.
            </p>
          </div>

          <div className="policy-section">
            <p style={{ color: "var(--text-faint)", fontSize: 13 }}>
              Last updated: April 2026
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
