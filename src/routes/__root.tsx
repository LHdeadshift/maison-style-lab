import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, useRouterState,
  HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import Toast from "../components/Toast";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: "var(--cream)" }}>
      <div style={{ textAlign: "center", padding: 32 }}>
        <h1 style={{ fontSize: 72 }}>404</h1>
        <p style={{ marginTop: 12, color: "var(--gray)" }}>This page doesn't exist.</p>
        <Link to="/" style={{ display: "inline-block", marginTop: 24, padding: "12px 24px", background: "var(--gold)", color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12 }}>Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cream)" }}>
      <div style={{ textAlign: "center", padding: 32 }}>
        <h2 style={{ fontSize: 22 }}>Something went wrong</h2>
        <button onClick={() => { router.invalidate(); reset(); }} style={{ marginTop: 16, padding: "12px 24px", background: "var(--black)", color: "#fff", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MAISON — Curated Luxury" },
      { name: "description", content: "MAISON is a research-study luxury fashion site testing rule-based personalisation. Watches, bags, fragrance, apparel." },
      { property: "og:title", content: "MAISON — Curated Luxury" },
      { name: "twitter:title", content: "MAISON — Curated Luxury" },
      { property: "og:description", content: "MAISON is a research-study luxury fashion site testing rule-based personalisation. Watches, bags, fragrance, apparel." },
      { name: "twitter:description", content: "MAISON is a research-study luxury fashion site testing rule-based personalisation. Watches, bags, fragrance, apparel." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5a307356-c0c2-4ffa-b0bf-fd24e2aa659b/id-preview-8ac17a37--9cbf18ff-9ac3-4293-8477-9acded81593a.lovable.app-1781172332155.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5a307356-c0c2-4ffa-b0bf-fd24e2aa659b/id-preview-8ac17a37--9cbf18ff-9ac3-4293-8477-9acded81593a.lovable.app-1781172332155.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <main><Outlet /></main>
        <Footer />
        <CartSidebar />
        <Toast />
      </CartProvider>
    </QueryClientProvider>
  );
}
