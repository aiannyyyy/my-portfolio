import { useState, useEffect } from "react";

export default function Navbar() {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      
      setDarkMode(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-violet-500/10 border-b border-violet-200/30 dark:border-violet-800/30' 
          : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl'
      }`}>
        
        {/* Animated gradient border */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 via-blue-500 to-transparent opacity-80"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a href="#home" className="group transform hover:scale-105 transition-transform duration-300">
              <img
                src={darkMode ? "/logo-dark.png" : "/logo-white.png"}
                alt="Logo"
                className="h-12 filter drop-shadow-lg"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative px-5 py-2.5 text-slate-700 dark:text-slate-200 font-semibold rounded-full transition-all duration-500 hover:text-violet-600 dark:hover:text-violet-400 group overflow-hidden"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white dark:group-hover:text-white">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 dark:from-violet-500/20 dark:to-blue-500/20 rounded-full scale-0 group-hover:scale-110 transition-all duration-700"></div>
                </a>
              ))}

              {/* Modern Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative ml-4 p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-violet-100 hover:to-blue-100 dark:hover:from-violet-900/50 dark:hover:to-blue-900/50 transition-all duration-500 group border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`relative z-10 transform transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                  {darkMode ? 
                    <span className="block w-5 h-5 text-amber-400">☀</span> : 
                    <span className="block w-5 h-5 text-slate-600 dark:text-slate-300">🌙</span>
                  }
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            >
              <div className={`transform transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0'}`}>
                {isOpen ? 
                  <span className="block w-6 h-6 text-slate-600 dark:text-slate-300">✕</span> : 
                  <span className="block w-6 h-6 text-slate-600 dark:text-slate-300">☰</span>
                }
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-screen opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-violet-200/30 dark:border-violet-800/30 shadow-2xl">
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-6 py-4 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-violet-50 hover:to-blue-50 dark:hover:from-violet-900/30 dark:hover:to-blue-900/30 hover:text-violet-600 dark:hover:text-violet-400 hover:translate-x-2 transform border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50"
                  onClick={toggleMenu}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? `slideIn 0.6s ease-out forwards` : 'none'
                  }}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={() => { toggleDarkMode(); toggleMenu(); }}
                className="flex items-center gap-4 w-full px-6 py-4 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/30 dark:hover:to-orange-900/30 hover:translate-x-2 transform border border-transparent hover:border-amber-200/50 dark:hover:border-amber-700/50 mt-4"
              >
                <div className={`transform transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                  {darkMode ? 
                    <span className="block w-5 h-5 text-amber-400">☀</span> : 
                    <span className="block w-5 h-5">🌙</span>
                  }
                </div>
                <span className="hover:text-amber-600 dark:hover:text-amber-400">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
=======
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  // Permanent dark theme
  const txt    = "#e2e8f0";
  const subtxt = "#94a3b8";
  const border = "rgba(56,189,248,0.12)";
  const cardBg = "rgba(15,23,42,0.8)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800&family=DM+Sans:wght@400;600;700&display=swap');

        .nav-link {
          position: relative;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: color 0.25s, background 0.25s;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 60%; }
        .nav-link:hover  { color: #38bdf8 !important; background: rgba(56,189,248,0.08) !important; }
        .nav-link.active { color: #38bdf8 !important; }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 1rem;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s, color 0.2s;
          border: 1px solid transparent;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-link:hover {
          background: rgba(56,189,248,0.08);
          border-color: rgba(56,189,248,0.18);
          transform: translateX(4px);
          color: #38bdf8 !important;
        }
        .mobile-link.active {
          background: rgba(56,189,248,0.08);
          border-color: rgba(56,189,248,0.2);
          color: #38bdf8 !important;
        }

        .hline {
          display: block;
          width: 20px; height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .drawer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
        }

        @keyframes linkFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .link-anim { animation: linkFadeIn 0.4s ease both; }

        /* KEY FIX: hide/show desktop vs mobile */
        .desktop-nav { display: flex !important; }
        .hamburger   { display: none !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(2,6,23,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${border}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>

        {/* Gradient accent line when scrolled */}
        {scrolled && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.45), rgba(129,140,248,0.45), transparent)",
          }} />
        )}

        {/* ── Top bar ── */}
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 48px)",
          height: 68,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              padding: 2,
              boxShadow: "0 0 18px rgba(56,189,248,0.35)",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 28px rgba(56,189,248,0.55)"; e.currentTarget.style.transform = "scale(1.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 18px rgba(56,189,248,0.35)"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#0a0f1e" }}>
                <img
                  src="/logo.jpg" alt="JT"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { e.target.style.display = "none"; e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:white;font-family:Space Grotesk">JT</div>'; }}
                />
              </div>
            </div>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: txt }}>
              John<span style={{ color: "#38bdf8" }}>.</span>dev
            </span>
          </a>

          {/* ── Desktop links (hidden on mobile) ── */}
          <div className="desktop-nav" style={{ alignItems: "center", gap: 4 }}>
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link link-anim ${activeSection === item.toLowerCase() ? "active" : ""}`}
                style={{ color: activeSection === item.toLowerCase() ? "#38bdf8" : subtxt, animationDelay: `${i * 80}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* ── Hamburger (mobile only, hidden on desktop) ── */}
          <button
            className="hamburger"
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{
              width: 42, height: 42,
              borderRadius: 12,
              border: `1px solid ${isOpen ? "rgba(56,189,248,0.35)" : border}`,
              background: cardBg,
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              color: isOpen ? "#38bdf8" : txt,
              transition: "all 0.3s",
              boxShadow: isOpen ? "0 0 14px rgba(56,189,248,0.2)" : "none",
            }}
          >
            <span className="hline" style={{ transform: isOpen ? "rotate(45deg) translate(4px, 4px)"   : "none" }} />
            <span className="hline" style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? "scaleX(0)" : "none" }} />
            <span className="hline" style={{ transform: isOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div className="drawer" style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}>
          <div style={{
            background: "rgba(2,6,23,0.97)",
            backdropFilter: "blur(24px)",
            borderTop: `1px solid ${border}`,
            padding: "16px clamp(16px, 4vw, 48px) 28px",
          }}>

            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: subtxt, marginBottom: 10, paddingLeft: 4 }}>
              Navigate
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navItems.map((item, i) => {
                const active = activeSection === item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-link link-anim ${active ? "active" : ""}`}
                    style={{ color: active ? "#38bdf8" : txt, animationDelay: `${i * 60}ms` }}
                  >
                    <span style={{
                      width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                      background: active ? "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${active ? "rgba(56,189,248,0.35)" : border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 800,
                      color: active ? "#38bdf8" : subtxt,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {item}

                    {active && (
                      <span style={{
                        marginLeft: "auto", flexShrink: 0,
                        width: 6, height: 6, borderRadius: "50%",
                        background: "#38bdf8", boxShadow: "0 0 8px #38bdf8",
                      }} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Social row */}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${border}`, display: "flex", gap: 10 }}>
              {[
                { href: "https://github.com/aiannyyyy",                                        label: "GH" },
                { href: "https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/",           label: "LI" },
                { href: "mailto:john.ticatic@gmail.com",                                        label: "@"  },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "11px", borderRadius: 12,
                    border: `1px solid ${border}`,
                    background: "rgba(56,189,248,0.04)",
                    color: subtxt, textDecoration: "none",
                    fontSize: "0.75rem", fontWeight: 800,
                    fontFamily: '"Space Grotesk", sans-serif',
                    letterSpacing: "0.06em",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#38bdf8"; e.currentTarget.style.color = "#38bdf8"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = border;    e.currentTarget.style.color = subtxt;   }}
                >
                  {label}
                </a>
              ))}
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
            </div>
          </div>
        </div>
      </nav>
<<<<<<< HEAD

      {/* Spacer */}
      <div className="h-20"></div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
=======
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
    </>
  );
}