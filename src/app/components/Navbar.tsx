import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import logoImg from "../../imports/natfr.png";

const WHITE_REMOVE_FILTER = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <defs>
      <filter id="remove-white" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                 -12 -12 -12 36 0"/>
      </filter>
    </defs>
  </svg>
`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, language, setLanguage, languages } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const links = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.features, href: "/features" },
    { label: t.nav.howItWorks, href: "/how-it-works" },
    { label: t.nav.values, href: "/values" },
  ];

  const currentLang = languages.find((l) => l.code === language)!;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1829]/95 backdrop-blur-md border-b border-white/8 shadow-xl" : "bg-transparent"
      }`}
    >
      <div dangerouslySetInnerHTML={{ __html: WHITE_REMOVE_FILTER }} />

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="NativeWay"
            style={{ height: "80px", width: "auto", filter: "url(#remove-white)" }}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`text-sm transition-colors duration-200 tracking-wide ${
                  location.pathname === l.href
                    ? "text-[#f07b22]"
                    : "text-[#8da3b8] hover:text-[#f0ece4]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 border border-white/15 text-[#8da3b8] hover:text-[#f0ece4] hover:border-white/30 px-3 py-2 rounded-full text-sm transition-all duration-200"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden lg:inline">{currentLang.nativeName}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#122035] border border-white/10 rounded-xl overflow-hidden shadow-2xl w-44 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-white/5 transition-colors ${
                      language === lang.code ? "text-[#f07b22] bg-[#f07b22]/5" : "text-[#8da3b8]"
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                    {language === lang.code && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#f07b22]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/#get-app"
            className="inline-flex items-center gap-2 bg-[#f07b22] text-[#0b1829] px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:bg-[#ffa04a] hover:scale-105 active:scale-95"
            style={{ fontWeight: 600 }}
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="md:hidden text-[#f0ece4] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0b1829]/98 backdrop-blur-md border-t border-white/8 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`py-2 border-b border-white/8 last:border-0 ${
                location.pathname === l.href ? "text-[#f07b22]" : "text-[#f0ece4]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile language selector */}
          <div className="flex gap-2 flex-wrap pt-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-all ${
                  language === lang.code
                    ? "border-[#f07b22] text-[#f07b22] bg-[#f07b22]/10"
                    : "border-white/15 text-[#8da3b8]"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            ))}
          </div>

          <Link
            to="/#get-app"
            className="bg-[#f07b22] text-[#0b1829] px-5 py-3 rounded-full text-center mt-1"
            style={{ fontWeight: 600 }}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
