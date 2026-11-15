import { products } from "@/data/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>المنتجات</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <div className="border rounded p-4">
              <p>{p.category}</p>
              <p>{p.name}</p>
              <span>{p.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
