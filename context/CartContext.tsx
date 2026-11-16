import { createContext } from "react";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product) => void;
};

export const CartContext = createContext<CartContextType | null>(null);
