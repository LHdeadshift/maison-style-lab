import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "../data/products";

export type CartSource = "style-match" | "category-browse" | "featured" | "product-page";

export type CartItem = {
  product: Product;
  quantity: number;
  source: CartSource;
};

type CartCtx = {
  cartItems: CartItem[];
  addToCart: (p: Product, source: CartSource) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
  lastAdded: Product | null;
  bumpKey: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<Product | null>(null);
  const [bumpKey, setBumpKey] = useState(0);

  const addToCart = useCallback((product: Product, source: CartSource) => {
    setCartItems((items) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        return items.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...items, { product, quantity: 1, source }];
    });
    setLastAdded(product);
    setBumpKey((k) => k + 1);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems((items) => items.filter((i) => i.product.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    setCartItems((items) =>
      qty <= 0
        ? items.filter((i) => i.product.id !== id)
        : items.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i)),
    );
  }, []);

  const cartCount = useMemo(() => cartItems.reduce((s, i) => s + i.quantity, 0), [cartItems]);
  const cartTotal = useMemo(
    () => cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0),
    [cartItems],
  );

  const value: CartCtx = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    lastAdded,
    bumpKey,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
