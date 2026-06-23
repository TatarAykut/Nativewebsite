export function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0b1829] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="py-16 border-b border-white/8 mb-12">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl text-[#f0ece4] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Terms of Service
          </h1>
          <p className="text-[#8da3b8]">Last updated: 1 June 2026</p>
        </div>

        <div className="prose-nw">
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using NativeWay (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service. These Terms form a legally binding agreement between you and NativeWay Ltd ("NativeWay", "we", "us").</p>
            <p>We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes your acceptance. We will notify you of material changes by email at least 14 days in advance.</p>
          </Section>

          <Section title="2. Eligibility">
            <p>You must be at least 16 years old to use NativeWay. By creating an account, you confirm that you meet this requirement and that all information you provide is accurate and truthful.</p>
            <p>If you are using the Service on behalf of a business, you represent that you have the authority to bind that business to these Terms.</p>
          </Section>

          <Section title="3. Your Account">
            <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at <a href="mailto:support@nativeway.com">support@nativeway.com</a> if you suspect unauthorised access.</p>
            <p>You may not share your account, create multiple accounts for the same person, or create accounts for automated use without our prior written consent.</p>
          </Section>

          <Section title="4. Local Contributor Verification">
            <p>To contribute reviews, pins, and routes as a local, you must verify your residency in the relevant city. By submitting verification documents, you confirm:</p>
            <ul>
              <li>The document is genuine and belongs to you.</li>
              <li>You currently reside in the city you are verifying for.</li>
              <li>You understand the document is reviewed and then permanently deleted.</li>
            </ul>
            <p>Submitting fraudulent verification is grounds for immediate account termination and may result in legal action.</p>
          </Section>

          <Section title="5. User Content">
            <p>You retain ownership of content you submit to NativeWay (reviews, pins, routes, messages). By submitting content, you grant NativeWay a worldwide, non-exclusive, royalty-free licence to use, display, distribute, and adapt your content for the purpose of operating and improving the Service.</p>
            <p>You are solely responsible for the content you submit. You agree not to submit content that:</p>
            <ul>
              <li>Is false, misleading, or fraudulent.</li>
              <li>Infringes any intellectual property, privacy, or other rights of any person.</li>
              <li>Is defamatory, harassing, abusive, obscene, or discriminatory.</li>
              <li>Contains spam, advertisements, or unsolicited promotions.</li>
              <li>Violates any applicable law or regulation.</li>
            </ul>
            <p>We reserve the right to remove any content that violates these Terms, without notice.</p>
          </Section>

          <Section title="6. Prohibited Uses">
            <p>You agree not to:</p>
            <ul>
              <li>Scrape, crawl, or systematically extract data from the Service without written permission.</li>
              <li>Reverse-engineer, decompile, or attempt to extract source code from any part of the Service.</li>
              <li>Use the Service to distribute malware, conduct phishing, or perform any form of cyberattack.</li>
              <li>Manipulate ratings or reviews, including incentivising others to write fake reviews.</li>
              <li>Impersonate any person, business, or entity.</li>
              <li>Use the Service to harass, threaten, or harm any other user.</li>
              <li>Circumvent any access controls, rate limits, or security features.</li>
            </ul>
          </Section>

          <Section title="7. Subscription and Payments">
            <p>NativeWay operates on a subscription model. Pricing is displayed clearly before purchase. By subscribing, you authorise us to charge your payment method on a recurring basis until you cancel.</p>
            <p>Early access members receive free premium access for the first year as stated at the time of sign-up. After this period, standard subscription rates apply.</p>
            <p>Refunds are available within 14 days of any charge if you have not made substantial use of premium features during that period. Contact <a href="mailto:support@nativeway.com">support@nativeway.com</a> to request a refund.</p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>All NativeWay branding, design, software, and proprietary content (excluding user-submitted content) is owned by NativeWay Ltd and protected by copyright and other intellectual property laws. You may not reproduce, redistribute, or create derivative works from our proprietary content without written permission.</p>
          </Section>

          <Section title="9. Third-Party Services">
            <p>The Service may contain links to or integrations with third-party services. We are not responsible for the content, privacy practices, or terms of those services. Use them at your own risk.</p>
          </Section>

          <Section title="10. Disclaimers">
            <p>NativeWay is provided "as is" and "as available". We do not warrant that the Service will be uninterrupted, error-free, or that any content — including local recommendations — is accurate, safe, or suitable for your specific circumstances.</p>
            <p>Travel involves inherent risks. Nothing on NativeWay constitutes safety advice. Always use your own judgement and verify critical information independently.</p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, NativeWay shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service, including loss of profits, data, or goodwill.</p>
            <p>Our total liability for any claim arising from these Terms shall not exceed the amount you paid us in the 12 months preceding the claim, or €50, whichever is greater.</p>
          </Section>

          <Section title="12. Termination">
            <p>You may delete your account at any time from your account settings. We may suspend or terminate your account at any time for violation of these Terms, with or without notice.</p>
            <p>Upon termination, your right to use the Service ceases immediately. Sections that by their nature should survive termination (including Sections 5, 8, 10, 11, and 13) will do so.</p>
          </Section>

          <Section title="13. Governing Law & Disputes">
            <p>These Terms are governed by the laws of Norway. Any disputes arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of Oslo, Norway.</p>
            <p>If you are a consumer in the EU, you may also use the European Commission's Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>
          </Section>

          <Section title="14. Contact">
            <p>For questions about these Terms: <a href="mailto:legal@nativeway.com">legal@nativeway.com</a></p>
            <p>NativeWay Ltd · 12 Explorer Street · Oslo, Norway</p>
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
