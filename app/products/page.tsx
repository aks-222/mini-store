import { products } from "@/data/products";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <>
      <h1>المنتجات</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </>
  );
}
