import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, type Product } from "../data/products";

export const Route = createFileRoute("/find-your-style")({
  head: () => ({
    meta: [
      { title: "Find Your Style — MAISON" },
      { name: "description", content: "Tell us your aesthetic, occasion and budget. We'll surface a hand-curated edit — with no algorithms involved." },
    ],
  }),
  component: FindYourStyle,
});

const styles = ["minimalist", "classic", "bold", "romantic"] as const;
const occasions = ["everyday", "date night", "work", "special event"] as const;
const budgets = [
  { key: "under-10k", label: "Under ₹10,000" },
  { key: "10k-30k", label: "₹10K–₹30K" },
  { key: "30k-80k", label: "₹30K–₹80K" },
  { key: "80k+", label: "₹80K+" },
] as const;

const rules: Record<string, string[]> = {
  "minimalist-everyday":     ["w2","f2","b2","a4","w12","f4"],
  "minimalist-work":         ["w2","b2","a3","f4","w12","a8"],
  "minimalist-date night":   ["w2","b5","f5","a8","w9","f2"],
  "minimalist-special event":["w9","a3","b2","f5","w1","a1"],
  "classic-work":            ["w1","b2","a3","f4","w7","a9"],
  "classic-special event":   ["w3","b1","a1","f3","w5","a7"],
  "classic-date night":      ["w5","b3","f3","a8","w10","b5"],
  "classic-everyday":        ["w2","b6","a9","f4","w10","b2"],
  "bold-special event":      ["w3","a7","b1","f6","w6","a5"],
  "bold-everyday":           ["w4","a6","b8","f4","w11","b6"],
  "bold-date night":         ["w6","b4","f6","a5","w3","b7"],
  "bold-work":               ["w11","a3","b2","f1","w8","a7"],
  "romantic-date night":     ["b3","f3","a5","w5","b7","f9"],
  "romantic-special event":  ["a5","f3","b5","w5","a2","f9"],
  "romantic-everyday":       ["b5","f5","a8","w9","b11","f7"],
};

function FindYourStyle() {
  const [aesthetic, setAesthetic] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [results, setResults] = useState<Product[] | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const canShow = aesthetic && occasion && budget;

  const handleShow = () => {
    const key = `${aesthetic}-${occasion}`;
    let ids = rules[key];
    let picks: Product[];
    if (ids) {
      picks = ids.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[];
    } else {
      picks = products.filter((p) => p.priceRange === budget).slice(0, 6);
    }
    setResults(picks);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <div style={{ padding: "64px 24px 80px" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 48 }}>Find Your Style</h1>
        <p style={{ marginTop: 12, maxWidth: 500, margin: "12px auto 0", fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, color: "var(--gray)" }}>
          Tell us your preferences. We'll do the rest — with no algorithms involved.
        </p>
      </div>

      <div style={{ maxWidth: 920, margin: "64px auto 0", display: "flex", flexDirection: "column", gap: 48 }}>
        <Step title="Your aesthetic" options={styles.map((s) => ({ key: s, label: s.charAt(0).toUpperCase() + s.slice(1) }))} value={aesthetic} onChange={setAesthetic} />
        <Step title="The occasion" options={occasions.map((s) => ({ key: s, label: s.replace(/\b\w/g, (c) => c.toUpperCase()) }))} value={occasion} onChange={setOccasion} />
        <Step title="Your budget" options={budgets.map((b) => ({ key: b.key, label: b.label }))} value={budget} onChange={setBudget} />

        <button
          onClick={handleShow}
          disabled={!canShow}
          style={{
            alignSelf: "center", width: "100%", maxWidth: 400, padding: "16px 0",
            background: canShow ? "var(--gold)" : "#D9D2BD", color: "#fff",
            fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 13,
            textTransform: "uppercase", letterSpacing: "0.12em",
            cursor: canShow ? "pointer" : "not-allowed",
          }}
        >Show My Picks</button>
      </div>

      <div ref={resultsRef} style={{ maxWidth: 1280, margin: "80px auto 0" }}>
        {results && (
          <>
            <h2 style={{ textAlign: "center", fontSize: 32 }}>Your Edit</h2>
            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", columnGap: 32, rowGap: 48 }}>
              {results.map((p) => <ProductCard key={p.id} product={p} source="style-match" />)}
            </div>
            <p style={{ marginTop: 24, textAlign: "center", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 16, color: "var(--gold)" }}>
              These pieces were selected based on your stated preferences only. No browsing history, no behavioural data, no algorithms.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function Step({ title, options, value, onChange }: { title: string; options: { key: string; label: string }[]; value: string; onChange: (k: string) => void }) {
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: 22, marginBottom: 24 }}>{title}</h3>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {options.map((o) => {
          const selected = value === o.key;
          return (
            <button
              key={o.key}
              onClick={() => onChange(o.key)}
              style={{
                width: 200, padding: "20px 0",
                border: selected ? "2px solid var(--gold)" : "1px solid var(--border)",
                background: selected ? "var(--gold-light)" : "transparent",
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14,
                textAlign: "center", textTransform: "capitalize",
              }}
            >{o.label}</button>
          );
        })}
      </div>
    </div>
  );
}
