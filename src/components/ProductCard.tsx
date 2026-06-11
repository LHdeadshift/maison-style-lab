import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { formatINR, type Product } from "../data/products";
import { useCart, type CartSource } from "../context/CartContext";

export default function ProductCard({ product, source }: { product: Product; source: CartSource }) {
  const { addToCart } = useCart();
  const [hover, setHover] = useState(false);

  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        border: hover ? "1px solid var(--gold)" : "1px solid transparent",
        transition: "border-color 0.3s ease",
        padding: 4,
      }}
    >
      <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#eee" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hover ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>
      <div style={{ marginTop: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--gray)" }}>
        {product.brand}
      </div>
      <div style={{ marginTop: 4, fontFamily: "'Playfair Display', serif", fontSize: 16, color: "var(--black)" }}>
        {product.name}
      </div>
      <div style={{ marginTop: 6, fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 15 }}>
        {formatINR(product.price)}
      </div>
      <button
        onClick={(e) => { e.preventDefault(); addToCart(product, source); }}
        style={{
          marginTop: 12, width: "100%", height: 44,
          background: "var(--black)", color: "#fff",
          fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 12,
          textTransform: "uppercase", letterSpacing: "0.1em",
          opacity: hover ? 1 : 0,
          transform: hover ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >Add to Bag</button>
    </Link>
  );
}
