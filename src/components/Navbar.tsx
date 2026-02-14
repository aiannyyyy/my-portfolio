import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  // 🔥 Permanent Dark Theme Colors
  const txt = "#e2e8f0";
  const subtxt = "#94a3b8";
  const border = "rgba(56,189,248,0.12)";
  const cardBg = "rgba(15,23,42,0.8)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(2,6,23,0.88)"
            : "transparent",
          backdropFilter: scrolled
            ? "blur(24px) saturate(180%)"
            : "none",
          borderBottom: scrolled
            ? `1px solid ${border}`
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 48px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #38bdf8, #818cf8)",
                padding: 2,
                boxShadow:
                  "0 0 18px rgba(56,189,248,0.35)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "#0a0f1e",
                }}
              >
                <img
                  src="/logo.jpg"
                  alt="JT"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "-0.02em",
                color: txt,
              }}
            >
              John
              <span style={{ color: "#38bdf8" }}>
                .
              </span>
              dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  padding: "8px 16px",
                  borderRadius: 50,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color:
                    activeSection ===
                    item.toLowerCase()
                      ? "#38bdf8"
                      : subtxt,
                  transition: "0.25s",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div
            style={{
              display: "none",
              alignItems: "center",
            }}
            className="mobile-nav"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                border: `1px solid ${border}`,
                background: cardBg,
                cursor: "pointer",
                color: txt,
              }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div
            style={{
              background:
                "rgba(2,6,23,0.97)",
              borderTop: `1px solid ${border}`,
              padding:
                "16px clamp(16px, 4vw, 48px)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() =>
                  setIsOpen(false)
                }
                style={{
                  display: "block",
                  padding: "12px 0",
                  color:
                    activeSection ===
                    item.toLowerCase()
                      ? "#38bdf8"
                      : txt,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Responsive */}
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-nav  { display: none; }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-nav  { display: flex; }
        }
      `}</style>
    </>
  );
}
