import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../imports/natfr.png";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-[#080f1a] border-t border-white/8 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img
              src={logoImg}
              alt="NativeWay"
              style={{ height: "56px", width: "auto", marginBottom: "1rem", filter: "url(#remove-white)" }}
            />
            <p className="text-[#8da3b8] text-sm leading-relaxed max-w-xs">{f.tagline}</p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8da3b8] hover:text-[#f07b22] hover:border-[#f07b22]/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#f0ece4] text-sm mb-4" style={{ fontWeight: 600 }}>{f.productHeading}</p>
            <ul className="flex flex-col gap-2.5">
              {f.productLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#8da3b8] text-sm hover:text-[#f0ece4] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#f0ece4] text-sm mb-4" style={{ fontWeight: 600 }}>{f.companyHeading}</p>
            <ul className="flex flex-col gap-2.5">
              {f.companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#8da3b8] text-sm hover:text-[#f0ece4] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8da3b8] text-xs">{f.copyright}</p>
          <div className="flex items-center gap-6">
            {([
              { label: f.legal[0], to: "/privacy" },
              { label: f.legal[1], to: "/terms" },
              { label: f.legal[2], to: "/cookies" },
            ] as const).map((item) => (
              <Link key={item.to} to={item.to} className="text-[#8da3b8] text-xs hover:text-[#f0ece4] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
