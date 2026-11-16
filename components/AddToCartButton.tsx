"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <>
      <button onClick={() => addItem(product)}>أضف للسلة</button>
    </>
  );
}
