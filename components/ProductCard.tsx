import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4">
      <p>{product.category}</p>
      <p>{product.name}</p>
      <span>{product.price}</span>
    </div>
  );
}
