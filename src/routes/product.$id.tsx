import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { formatINR, products } from "../data/products";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = products.find((x) => x.id === params.id);
    return {
      meta: [
        { title: p ? `${p.name} — MAISON` : "Product — MAISON" },
        { name: "description", content: p?.description ?? "MAISON luxury product." },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { id } = Route.useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) throw notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product, "product-page");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <ProductGallery image={product.image} name={product.name} />

        <div style={{ padding: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--gold)",
            }}
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)} · {product.brand}
          </div>
          <h1 style={{ marginTop: 12, fontSize: 38 }}>{product.name}</h1>
          <div
            style={{
              marginTop: 16,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 26,
            }}
          >
            {formatINR(product.price)}
          </div>
          <div style={{ height: 1, background: "var(--border)", margin: "24px 0" }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.8,
              color: "var(--gray)",
            }}
          >
            {product.description}
          </p>

          {product.category === "apparel" && (
            <div style={{ marginTop: 28 }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gray)",
                  marginBottom: 10,
                }}
              >
                Size
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {["XS", "S", "M", "L", "XL"].map((s) => {
                  const sel = size === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: 999,
                        border: sel ? "1px solid var(--gold)" : "1px solid var(--border)",
                        color: sel ? "var(--gold)" : "var(--black)",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 13,
                      }}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                style={{ padding: "10px 16px", fontSize: 16 }}
              >
                −
              </button>
              <span
                style={{
                  padding: "0 12px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                style={{ padding: "10px 16px", fontSize: 16 }}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            style={{
              marginTop: 20,
              width: "100%",
              height: 56,
              background: "var(--black)",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            {added ? "Added to Bag ✓" : "Add to Bag"}
          </button>

          <div
            style={{
              marginTop: 12,
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 12,
              color: "var(--gray)",
            }}
          >
            Complimentary gift wrapping on all orders
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ maxWidth: 1280, margin: "80px auto 0", padding: "0 24px" }}>
          <h2 style={{ fontSize: 22, marginBottom: 24 }}>You might also like</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 32,
            }}
          >
            {related.map((p) => (
              <ProductCard key={p.id} product={p} source="category-browse" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductGallery({ image, name }: { image: string; name: string }) {
  const views = [
    { label: "Front", style: { objectFit: "cover" as const, objectPosition: "center" } },
    {
      label: "Detail",
      style: { objectFit: "cover" as const, objectPosition: "center", transform: "scale(1.6)" },
    },
    {
      label: "Angle",
      style: { objectFit: "cover" as const, objectPosition: "top", transform: "scale(1.15)" },
    },
  ];
  const [idx, setIdx] = useState(0);
  const active = views[idx];
  return (
    <div style={{ padding: 16 }}>
      <div style={{ aspectRatio: "4/5", overflow: "hidden", background: "#eee" }}>
        <img
          src={image}
          alt={`${name} — ${active.label}`}
          style={{
            width: "100%",
            height: "100%",
            transition: "transform 0.4s ease",
            ...active.style,
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {views.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setIdx(i)}
            style={{
              flex: 1,
              aspectRatio: "1/1",
              overflow: "hidden",
              background: "#eee",
              border: idx === i ? "2px solid var(--gold)" : "1px solid var(--border)",
              padding: 0,
              cursor: "pointer",
            }}
            aria-label={v.label}
          >
            <img src={image} alt="" style={{ width: "100%", height: "100%", ...v.style }} />
          </button>
        ))}
      </div>
      <div
        style={{
          marginTop: 8,
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--gray)",
          textAlign: "center",
        }}
      >
        {active.label} view
      </div>
    </div>
  );
}
