import { products } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Link href="/products">رجوع</Link>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </>
  );
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<p>...</p>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}
