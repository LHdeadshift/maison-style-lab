import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Study — MAISON" },
      {
        name: "description",
        content:
          "MAISON is a research-study prototype exploring rule-based personalisation and brand loyalty in luxury fashion.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: 48, textAlign: "center" }}>About the Study</h1>
      <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "16px auto 32px" }} />
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 16,
          lineHeight: 1.8,
          color: "var(--gray)",
        }}
      >
        <p>
          MAISON is a research-study prototype investigating how rule-based personalisation — where
          the shopper explicitly tells the site their preferences — compares to opaque, algorithmic
          recommendation in the luxury fashion category.
        </p>
        <p style={{ marginTop: 16 }}>
          Nothing here learns from you. No cookies, no behavioural tracking, no machine learning.
          Every edit you see on the <em>Find Your Style</em> page is generated from a published rule
          set you can read in the source.
        </p>
        <p style={{ marginTop: 16 }}>
          The brands and products shown are fictional or used for illustrative academic purposes
          only. No transactions take place on this site.
        </p>
      </div>
    </div>
  );
}
