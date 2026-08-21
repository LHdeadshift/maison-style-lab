import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import catFragrance from "../assets/cat-fragrance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAISON — Dressed in Intention" },
      {
        name: "description",
        content:
          "Luxury watches, bags, fragrance and apparel curated to your taste. A research-study site on rule-based personalisation.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  {
    key: "watches",
    label: "Watches",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
  },
  {
    key: "bags",
    label: "Bags",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  },
  { key: "fragrance", label: "Fragrance", img: catFragrance },
  {
    key: "apparel",
    label: "Apparel",
    img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
  },
] as const;

function Home() {
  const navigate = useNavigate();
  const featured = ["w1", "b5", "f3", "a5"]
    .map((id) => products.find((p) => p.id === id)!)
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          height: "100vh",
          minHeight: 600,
          position: "relative",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "0 24px",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(40px, 7vw, 68px)",
              lineHeight: 1.1,
            }}
          >
            Dressed in Intention
          </h1>
          <p
            style={{
              marginTop: 16,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 18,
              opacity: 0.85,
            }}
          >
            Discover luxury curated to your taste.
          </p>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => navigate({ to: "/collections" })} style={btnPrimary}>
              Explore Collection
            </button>
            <button onClick={() => navigate({ to: "/find-your-style" })} style={btnOutline}>
              Find Your Style
            </button>
          </div>
        </div>
      </section>

      {/* Research strip */}
      <section
        style={{ background: "#1A1A1A", padding: "48px 24px", color: "#fff", textAlign: "center" }}
      >
        <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "0 auto 20px" }} />
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 20,
            maxWidth: 720,
            margin: "0 auto",
            lineHeight: 1.5,
          }}
        >
          We do not track you. We do not learn from you. Every recommendation on this site reflects
          what you tell us — nothing more.
        </p>
        <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "20px auto 0" }} />
      </section>

      {/* Categories */}
      <section style={{ padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {categories.map((c) => (
            <Link
              key={c.key}
              to="/collections"
              search={{ category: c.key }}
              className="cat-card"
              style={{
                position: "relative",
                height: 480,
                overflow: "hidden",
                cursor: "pointer",
                display: "block",
              }}
            >
              <img
                src={c.img}
                alt={c.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65))",
                }}
              />
              <div style={{ position: "absolute", left: 24, bottom: 24, color: "#fff" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26 }}>
                  {c.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    opacity: 0.7,
                    marginTop: 4,
                  }}
                >
                  12 pieces
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: "32px 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36 }}>New Arrivals</h2>
          <p
            style={{
              marginTop: 8,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 15,
              color: "var(--gray)",
            }}
          >
            Recently added to the collection
          </p>
          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 32,
              textAlign: "left",
            }}
          >
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} source="featured" />
            ))}
          </div>
        </div>
      </section>

      <style>{`.cat-card:hover img { transform: scale(1.05); }`}</style>
    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  height: 48,
  padding: "0 32px",
  background: "var(--gold)",
  color: "#fff",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};
const btnOutline: React.CSSProperties = {
  height: 48,
  padding: "0 32px",
  background: "transparent",
  color: "#fff",
  border: "1px solid #fff",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};
