"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const cart = useContext(CartContext);
  if (cart === null)
    throw new Error("useCart must be used inside CartProvider");
  return cart;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(product: Product) {
    const existing = items.find((item) => item.product.id === product.id);
    if (existing) {
      setItems(
        items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setItems([...items, { product, quantity: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
