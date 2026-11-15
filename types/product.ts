export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  price: number;
  category: string;
}
