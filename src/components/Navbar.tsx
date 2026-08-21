import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/find-your-style", label: "Find Your Style" },
  { to: "/about", label: "About" },
] as const;

export default function Navbar() {
  const { cartCount, setIsCartOpen, bumpKey } = useCart();
  const [bump, setBump] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (bumpKey === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(t);
  }, [bumpKey]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: 72,
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ marginRight: 16, display: "none" }}
            className="mobile-only"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              letterSpacing: "0.15em",
            }}
          >
            MAISON
          </Link>
        </div>

        <nav className="desktop-nav" style={{ display: "flex", gap: 36 }}>
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  paddingBottom: 4,
                  borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                  color: "var(--black)",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
            style={{ position: "relative", padding: 8 }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.4"
            >
              <path d="M6 7h12l-1.2 12.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7z" />
              <path d="M9 7V5a3 3 0 0 1 6 0v2" />
            </svg>
            {cartCount > 0 && (
              <span
                className={bump ? "anim-pop" : ""}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  background: "var(--gold)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 18,
                  height: 18,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <>
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 150 }}
          />
          <aside
            className="anim-slide-left"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              width: "85vw",
              maxWidth: 320,
              background: "#fff",
              zIndex: 151,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                letterSpacing: "0.15em",
                marginBottom: 12,
              }}
            >
              MAISON
            </div>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {l.label}
              </Link>
            ))}
          </aside>
        </>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
