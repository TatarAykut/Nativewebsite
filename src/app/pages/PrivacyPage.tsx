export function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-[var(--nw-bg)] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="py-16 border-b border-[var(--nw-border)] mb-12">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl text-[var(--nw-text)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Privacy Policy
          </h1>
          <p className="text-[var(--nw-muted)]">Last updated: 1 June 2026</p>
        </div>

        <div className="prose-nw">
          <Section title="1. Who We Are">
            <p>NativeWay ("we", "us", "our") is a travel platform that connects travellers with authentic local knowledge. Our registered address is NativeWay Ltd, 12 Explorer Street, Oslo, Norway.</p>
            <p>We are the data controller for personal data collected through our website and application. If you have any questions about this policy, contact us at <a href="mailto:privacy@nativeway.com">privacy@nativeway.com</a>.</p>
          </Section>

          <Section title="2. What Data We Collect">
            <p>We collect only what we need to provide the service. This includes:</p>
            <ul>
              <li><strong>Account data:</strong> email address, display name, and profile photo (optional).</li>
              <li><strong>Residency verification (locals only):</strong> a single document confirming your city of residence. This is reviewed, confirmed, then immediately deleted — we do not store it.</li>
              <li><strong>Content you create:</strong> reviews, pins, routes, and messages you submit through the platform.</li>
              <li><strong>Usage data:</strong> which cities and features you interact with, used solely to improve the product.</li>
              <li><strong>Device data:</strong> browser type, operating system, and app version for bug fixing and compatibility.</li>
            </ul>
            <p>We do <strong>not</strong> collect precise GPS location data. City-level destination selection is stored only while your session is active.</p>
          </Section>

          <Section title="3. How We Use Your Data">
            <p>Your data is used exclusively to:</p>
            <ul>
              <li>Provide, maintain, and improve the NativeWay service.</li>
              <li>Verify local residency for contributing users.</li>
              <li>Send transactional emails (account confirmation, waitlist updates, password reset).</li>
              <li>Detect and prevent fraud, abuse, and spam.</li>
              <li>Respond to support requests.</li>
            </ul>
            <p>We do <strong>not</strong> use your data for behavioural advertising, do not build advertising profiles, and do not sell or license your data to any third party — ever.</p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>Under the General Data Protection Regulation (GDPR), we process your data on the following legal bases:</p>
            <ul>
              <li><strong>Contract:</strong> processing necessary to provide the service you signed up for.</li>
              <li><strong>Legitimate interest:</strong> security, fraud prevention, and product improvement.</li>
              <li><strong>Consent:</strong> optional communications such as newsletters. You can withdraw consent at any time.</li>
              <li><strong>Legal obligation:</strong> where we are required to retain data under applicable law.</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>We share your data with a minimal set of trusted processors who help us operate the service:</p>
            <ul>
              <li><strong>Cloud infrastructure:</strong> servers hosted in the EU (AWS Frankfurt region).</li>
              <li><strong>Email delivery:</strong> transactional emails sent via Postmark.</li>
              <li><strong>Error tracking:</strong> anonymised crash reports via Sentry.</li>
            </ul>
            <p>All processors are bound by data processing agreements and GDPR-compliant terms. We do not share your data with advertisers, data brokers, or analytics companies that build user profiles.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain your data for as long as your account is active. If you delete your account:</p>
            <ul>
              <li>Personal profile data is deleted within 30 days.</li>
              <li>Public contributions (reviews, pins, routes) are anonymised and may remain on the platform.</li>
              <li>Billing records are retained for 7 years as required by law.</li>
            </ul>
          </Section>

          <Section title="7. Your Rights">
            <p>Under GDPR and applicable data protection laws, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> request a copy of the data we hold about you.</li>
              <li><strong>Rectification:</strong> ask us to correct inaccurate data.</li>
              <li><strong>Erasure:</strong> request deletion of your personal data ("right to be forgotten").</li>
              <li><strong>Portability:</strong> receive your data in a machine-readable format.</li>
              <li><strong>Restriction:</strong> ask us to pause processing of your data.</li>
              <li><strong>Objection:</strong> object to processing based on legitimate interest.</li>
            </ul>
            <p>To exercise any of these rights, email <a href="mailto:privacy@nativeway.com">privacy@nativeway.com</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="8. Security">
            <p>We apply industry-standard security measures including encryption in transit (TLS 1.3), encryption at rest (AES-256), access controls, and regular security audits. Despite these measures, no system is perfectly secure — if you believe your account has been compromised, contact us immediately.</p>
          </Section>

          <Section title="9. Children">
            <p>NativeWay is not directed at children under 16. We do not knowingly collect data from anyone under 16. If you believe a minor has created an account, contact us and we will delete it promptly.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We will notify registered users of material changes to this policy via email at least 14 days before they take effect. The date at the top of this page reflects when it was last updated. Continued use of the service after changes take effect constitutes acceptance.</p>
          </Section>

          <Section title="11. Contact & Complaints">
            <p>For privacy-related queries: <a href="mailto:privacy@nativeway.com">privacy@nativeway.com</a></p>
            <p>You also have the right to lodge a complaint with your local data protection authority. In Norway, this is the <strong>Datatilsynet</strong> (datatilsynet.no).</p>
          </Section>
        </div>
      </div>

      <style>{`
        .prose-nw { color: #8da3b8; line-height: 1.8; }
        .prose-nw h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; color: #f0ece4; margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .prose-nw p { margin-bottom: 1rem; }
        .prose-nw ul { margin: 0.75rem 0 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; list-style: disc; }
        .prose-nw li { padding-left: 0.25rem; }
        .prose-nw strong { color: #f0ece4; font-weight: 600; }
        .prose-nw a { color: #f07b22; text-decoration: none; }
        .prose-nw a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
