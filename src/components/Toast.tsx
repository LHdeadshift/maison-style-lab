import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

export default function Toast() {
  const { lastAdded, bumpKey } = useCart();
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState<Product | null>(null);

  useEffect(() => {
    if (bumpKey === 0 || !lastAdded) return;
    setShown(lastAdded);
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, [bumpKey, lastAdded]);

  if (!visible || !shown) return null;

  return (
    <div
      className="anim-slide-right"
      style={{
        position: "fixed", top: 88, right: 24, zIndex: 300,
        background: "#fff", borderLeft: "3px solid var(--gold)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        padding: 14, display: "flex", gap: 12, alignItems: "center",
        minWidth: 280, maxWidth: 340,
      }}
    >
      <img src={shown.image} alt="" style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 4 }} />
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 13 }}>Added to your bag</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 12, color: "var(--gray)" }}>{shown.name}</div>
      </div>
    </div>
  );
}
