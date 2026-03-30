import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Product } from '@/types';

// SEO requirements
export const metadata = {
  title: 'mettamuse | Discover Our Products',
  description: 'Explore the latest collection of premium products. Shop clothing, jewelry, and more globally with secure transactions.',
  keywords: 'ecommerce, shop online, fashion, premium products, global shopping',
};

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const initialProducts: Product[] = await getProducts();

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <main>
        <Hero />
        <ProductGrid initialProducts={initialProducts} />
      </main>
      <Footer />
    </div>
  );
}
