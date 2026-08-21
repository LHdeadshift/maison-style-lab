import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart, type CartSource } from "../context/CartContext";
import { formatINR } from "../data/products";

const sourceLabel: Record<CartSource, string> = {
  "style-match": "Style match",
  "category-browse": "Browsed",
  featured: "Featured",
  "product-page": "Added",
};

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } =
    useCart();
  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  const handleSave = async () => {
    const text = cartItems
      .map((i) => `${i.product.name} — ${formatINR(i.product.price)} × ${i.quantity}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Clipboard copy error:", err);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className="anim-fade"
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 199 }}
      />
      <aside
        className="anim-slide-right cart-aside"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 440,
          maxWidth: "100vw",
          background: "var(--cream)",
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "24px 28px",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22 }}>Your Bag</div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 14,
                color: "var(--gray)",
                marginTop: 2,
              }}
            >
              ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close"
            style={{ fontSize: 22, color: "var(--gray)" }}
          >
            ×
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "8px 28px" }}>
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B6B6B"
                strokeWidth="1.2"
              >
                <path d="M6 7h12l-1.2 12.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20 }}>
                Your bag is empty
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "var(--gray)",
                }}
              >
                Start exploring the collection
              </div>
              <Link
                to="/collections"
                onClick={() => setIsCartOpen(false)}
                style={{
                  marginTop: 12,
                  background: "var(--gold)",
                  color: "#fff",
                  padding: "12px 24px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={item.product.id}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "20px 0",
                  borderBottom: idx < cartItems.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <img
                  src={item.product.image}
                  alt=""
                  style={{ width: 88, height: 108, objectFit: "cover" }}
                />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--gold)",
                    }}
                  >
                    {item.product.brand}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15 }}>
                    {item.product.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14 }}>
                    {formatINR(item.product.price)}
                  </div>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      marginTop: 2,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 10,
                      border: "1px solid var(--gold)",
                      color: "var(--gold)",
                      padding: "2px 8px",
                      borderRadius: 12,
                    }}
                  >
                    {sourceLabel[item.source]}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        style={{ padding: "4px 10px", fontSize: 14 }}
                      >
                        −
                      </button>
                      <span
                        style={{
                          padding: "0 8px",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: 14,
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        style={{ padding: "4px 10px", fontSize: 14 }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: "var(--gray)",
                        textDecoration: "underline",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div style={{ padding: "20px 28px", borderTop: "1px solid var(--border)" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--gray)",
                }}
              >
                Subtotal
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18 }}>
                {formatINR(cartTotal)}
              </span>
            </div>
            <p
              style={{
                marginTop: 12,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 11,
                color: "var(--gray)",
                fontStyle: "italic",
              }}
            >
              This is a research study prototype. No real transaction will occur.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                marginTop: 14,
                width: "100%",
                padding: "14px 0",
                background: "var(--gold)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Continue Browsing
            </button>
            <button
              onClick={handleSave}
              style={{
                marginTop: 10,
                width: "100%",
                padding: "13px 0",
                background: "transparent",
                color: "var(--black)",
                border: "1px solid var(--black)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {copied ? "Copied!" : "Save My Selections"}
            </button>
          </div>
        )}
      </aside>
      <style>{`@media (max-width: 480px){ .cart-aside { width: 100vw !important; } }`}</style>
    </>
  );
}
