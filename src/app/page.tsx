import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Product } from '@/types';

// Force SSR for dynamic API data and handle build-time fetch quirks
export const dynamic = 'force-dynamic';

// SEO requirements
export const metadata = {
  title: 'mettamuse | Discover Our Products',
  description: 'Explore the latest collection of premium products. Shop clothing, jewelry, and more globally with secure transactions.',
  keywords: 'ecommerce, shop online, fashion, premium products, global shopping',
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) {
      console.error(`Fetch failed: ${res.status} ${res.statusText}`);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Fetching products failed:', error);
    return [];
  }
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
