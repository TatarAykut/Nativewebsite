export function CookiePage() {
  return (
    <div className="pt-24 pb-20 bg-[var(--nw-bg)] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="py-16 border-b border-[var(--nw-border)] mb-12">
          <span className="text-[#f07b22] text-xs tracking-[0.2em] uppercase block mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl text-[var(--nw-text)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Cookie Policy
          </h1>
          <p className="text-[var(--nw-muted)]">Last updated: 1 June 2026</p>
        </div>

        <div className="prose-nw">
          <Section title="1. What Are Cookies">
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners. Similar technologies include local storage, session storage, and pixels — this policy covers all of them.</p>
          </Section>

          <Section title="2. Our Philosophy on Cookies">
            <p>NativeWay uses as few cookies as possible. We do not use advertising cookies, tracking pixels, or any third-party analytics that build profiles of your behaviour. We don't use cookies to sell you things or follow you around the web.</p>
            <p>Our cookies exist purely to make the product work.</p>
          </Section>

          <Section title="3. Cookies We Use">
            <p>We use three categories of cookies:</p>

            <div className="mt-4 mb-6 rounded-xl overflow-hidden border border-[var(--nw-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--nw-bg-card)]">
                    <th className="text-left px-5 py-3 text-[var(--nw-text)]" style={{ fontWeight: 600 }}>Category</th>
                    <th className="text-left px-5 py-3 text-[var(--nw-text)]" style={{ fontWeight: 600 }}>Purpose</th>
                    <th className="text-left px-5 py-3 text-[var(--nw-text)]" style={{ fontWeight: 600 }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Strictly Necessary", "Authentication session, CSRF protection, security tokens. The site cannot function without these.", "Session / 30 days"],
                    ["Functional", "Remembering your language preference, theme, and saved cities. Stored in localStorage, not sent to our servers.", "1 year"],
                    ["Performance", "Anonymised error reports sent to Sentry to help us fix bugs. No personally identifiable information is included.", "Session"],
                  ].map(([cat, purpose, duration], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[var(--nw-bg-surface)]" : "bg-[var(--nw-bg)]"}>
                      <td className="px-5 py-3 text-[var(--nw-text)] align-top whitespace-nowrap" style={{ fontWeight: 500 }}>{cat}</td>
                      <td className="px-5 py-3 text-[var(--nw-muted)] align-top">{purpose}</td>
                      <td className="px-5 py-3 text-[var(--nw-muted)] align-top whitespace-nowrap">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>We do <strong>not</strong> use any of the following:</p>
            <ul>
              <li>Advertising or retargeting cookies (e.g. Google Ads, Meta Pixel)</li>
              <li>Third-party analytics that track you across sites (e.g. Google Analytics)</li>
              <li>Social media tracking pixels</li>
              <li>Fingerprinting or supercookies</li>
            </ul>
          </Section>

          <Section title="4. Specific Cookies and Storage Items">
            <p>The following are the specific items we store:</p>

            <div className="mt-4 mb-6 rounded-xl overflow-hidden border border-[var(--nw-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--nw-bg-card)]">
                    <th className="text-left px-5 py-3 text-[var(--nw-text)]" style={{ fontWeight: 600 }}>Name</th>
                    <th className="text-left px-5 py-3 text-[var(--nw-text)]" style={{ fontWeight: 600 }}>Type</th>
                    <th className="text-left px-5 py-3 text-[var(--nw-text)]" style={{ fontWeight: 600 }}>What it stores</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["nw_session", "Cookie (HttpOnly)", "Encrypted authentication session token"],
                    ["nw_csrf", "Cookie", "Cross-site request forgery protection token"],
                    ["nativeway-lang", "localStorage", "Your chosen interface language (e.g. 'en', 'zh')"],
                    ["nw_city_cache", "localStorage", "Cities you've downloaded for offline use"],
                    ["nw_onboarding", "localStorage", "Whether you've completed the first-run tutorial"],
                  ].map(([name, type, what], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[var(--nw-bg-surface)]" : "bg-[var(--nw-bg)]"}>
                      <td className="px-5 py-3 align-top">
                        <code className="text-[#f07b22] text-xs bg-[#f07b22]/10 px-2 py-0.5 rounded">{name}</code>
                      </td>
                      <td className="px-5 py-3 text-[var(--nw-muted)] align-top whitespace-nowrap">{type}</td>
                      <td className="px-5 py-3 text-[var(--nw-muted)] align-top">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Legal Basis">
            <p>Strictly necessary cookies are used on the basis of our legitimate interest in providing a secure, functional service. No consent is required for these under ePrivacy Directive Article 5(3).</p>
            <p>Functional and performance items are set with your implied consent when you use the Service. Because we do not use these for profiling or advertising, they fall within the acceptable use category under most jurisdictions.</p>
          </Section>

          <Section title="6. Managing Cookies">
            <p>You can control and delete cookies through your browser settings. Instructions for common browsers:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
            <p>Note that disabling strictly necessary cookies will prevent you from logging in and using most features of the Service. Clearing localStorage will reset your language preference and offline city downloads.</p>
          </Section>

          <Section title="7. Changes to This Policy">
            <p>We will update this policy if we add or change the cookies and storage items we use. The date at the top of this page reflects the last update. Material changes will be communicated via the in-app notification system or by email.</p>
          </Section>

          <Section title="8. Contact">
            <p>Questions about our use of cookies? Contact us at <a href="mailto:privacy@nativeway.com">privacy@nativeway.com</a>.</p>
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
        .prose-nw table { border-collapse: collapse; width: 100%; }
        .prose-nw code { font-family: monospace; }
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
