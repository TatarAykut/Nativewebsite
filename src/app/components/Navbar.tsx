import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const location = useLocation();
  const links = [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Values", href: "/values" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1829]/95 backdrop-blur-md border-b border-white/8 shadow-xl" : "bg-transparent"
      }`}
    >
      {/* Inline SVG filter definition for white-removal */}
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
            <li key={l.label}>
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

        <Link
          to="/#get-app"
          className="hidden md:inline-flex items-center gap-2 bg-[#f07b22] text-[#0b1829] px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:bg-[#ffa04a] hover:scale-105 active:scale-95"
        >
          Get Early Access
        </Link>

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
              key={l.label}
              to={l.href}
              className={`py-2 border-b border-white/8 last:border-0 ${
                location.pathname === l.href ? "text-[#f07b22]" : "text-[#f0ece4]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#get-app"
            className="bg-[#f07b22] text-[#0b1829] px-5 py-3 rounded-full text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Get Early Access
          </Link>
        </div>
      )}
    </header>
  );
}
