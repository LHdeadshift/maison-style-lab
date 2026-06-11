import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const search = z.object({ category: z.enum(["all","watches","bags","fragrance","apparel"]).optional() });

export const Route = createFileRoute("/collections")({
  validateSearch: (s) => search.parse(s),
  head: () => ({
    meta: [
      { title: "The Collection — MAISON" },
      { name: "description", content: "Browse the full MAISON collection: watches, bags, fragrance, and apparel from curated luxury houses." },
    ],
  }),
  component: Collections,
});

const tabs = ["all", "watches", "bags", "fragrance", "apparel"] as const;

function Collections() {
  const { category = "all" } = Route.useSearch();
  const navigate = useNavigate();
  const active = category;
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div style={{ padding: "48px 24px 0" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 48 }}>The Collection</h1>
        <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "16px auto 0" }} />
      </div>

      <div style={{ position: "sticky", top: 72, background: "var(--cream)", zIndex: 50, marginTop: 32, borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 28, padding: "16px 0", justifyContent: "center", flexWrap: "wrap" }}>
          {tabs.map((t) => {
            const isActive = active === t;
            return (
              <button
                key={t}
                onClick={() => navigate({ to: "/collections", search: { category: t } })}
                style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 13,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  paddingBottom: 8,
                  borderBottom: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                  color: isActive ? "var(--black)" : "var(--gray)",
                }}
              >
                {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "24px auto 0", padding: "0 8px", fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 13, color: "var(--gray)" }}>
        Showing {filtered.length} pieces
      </div>

      <div style={{ maxWidth: 1280, margin: "32px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", columnGap: 32, rowGap: 48 }}>
        {filtered.map((p) => <ProductCard key={p.id} product={p} source="category-browse" />)}
      </div>
    </div>
  );
}
