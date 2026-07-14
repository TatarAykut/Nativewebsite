import { Instagram } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../imports/natfr.png";
import { useLanguage } from "../i18n/LanguageContext";

/** Kept in sync with the Organization contactPoint in index.html's JSON-LD. */
const CONTACT_EMAIL = "info@nativeway.app";

const LINK_CLASS =
  "text-[var(--nw-muted)] text-sm hover:text-[var(--nw-text)] transition-colors";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-[var(--nw-bg-deep)] border-t border-[var(--nw-border)] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img
              src={logoImg}
              alt="NativeWay"
              style={{ height: "56px", width: "auto", marginBottom: "1rem" }}
            />
            <p className="text-[var(--nw-muted)] text-sm leading-relaxed max-w-xs">{f.tagline}</p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/nativeway.official/", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-[var(--nw-border)] flex items-center justify-center text-[var(--nw-muted)] hover:text-[var(--nw-accent-text)] hover:border-[#f07b22]/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Every link here goes somewhere. The footer used to list Pricing,
              Changelog, Blog, Careers and Press as greyed-out <span>s — pages
              that do not exist. Seven of ten links were dead, which reads as an
              unfinished site rather than an ambitious one, and a disabled <span>
              is worse than no link at all for keyboard and screen-reader users:
              it is not focusable and announces as ordinary text. */}
          <div>
            <p className="text-[var(--nw-text)] text-sm mb-4" style={{ fontWeight: 600 }}>{f.productHeading}</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/features" className={LINK_CLASS}>{f.productLinks[0]}</Link></li>
              <li><Link to="/how-it-works" className={LINK_CLASS}>{f.productLinks[1]}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[var(--nw-text)] text-sm mb-4" style={{ fontWeight: 600 }}>{f.companyHeading}</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/about" className={LINK_CLASS}>{f.companyLinks[0]}</Link></li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_CLASS}>
                  {f.companyLinks[1]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--nw-border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--nw-muted)] text-xs">{f.copyright}</p>
          <div className="flex items-center gap-6">
            {([
              { label: f.legal[0], to: "/privacy" },
              { label: f.legal[1], to: "/terms" },
              { label: f.legal[2], to: "/cookies" },
            ] as const).map((item) => (
              <Link key={item.to} to={item.to} className="text-[var(--nw-muted)] text-xs hover:text-[var(--nw-text)] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
