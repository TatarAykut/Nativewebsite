import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../imports/natfr.png";
import { useLanguage } from "../i18n/LanguageContext";

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
              style={{ height: "56px", width: "auto", marginBottom: "1rem", filter: "url(#remove-white)" }}
            />
            <p className="text-[var(--nw-muted)] text-sm leading-relaxed max-w-xs">{f.tagline}</p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[var(--nw-border)] flex items-center justify-center text-[var(--nw-muted)] hover:text-[#f07b22] hover:border-[#f07b22]/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[var(--nw-text)] text-sm mb-4" style={{ fontWeight: 600 }}>{f.productHeading}</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/features" className="text-[var(--nw-muted)] text-sm hover:text-[var(--nw-text)] transition-colors">{f.productLinks[0]}</Link></li>
              <li><Link to="/how-it-works" className="text-[var(--nw-muted)] text-sm hover:text-[var(--nw-text)] transition-colors">{f.productLinks[1]}</Link></li>
              <li><span className="text-[var(--nw-muted)] text-sm opacity-40 cursor-not-allowed select-none">{f.productLinks[2]}</span></li>
              <li><span className="text-[var(--nw-muted)] text-sm opacity-40 cursor-not-allowed select-none">{f.productLinks[3]}</span></li>
            </ul>
          </div>

          <div>
            <p className="text-[var(--nw-text)] text-sm mb-4" style={{ fontWeight: 600 }}>{f.companyHeading}</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/about" className="text-[var(--nw-muted)] text-sm hover:text-[var(--nw-text)] transition-colors">{f.companyLinks[0]}</Link></li>
              {f.companyLinks.slice(1).map((item) => (
                <li key={item}><span className="text-[var(--nw-muted)] text-sm opacity-40 cursor-not-allowed select-none">{item}</span></li>
              ))}
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
