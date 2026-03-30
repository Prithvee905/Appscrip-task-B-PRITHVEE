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
  const url = 'https://fakestoreapi.com/products';
  try {
    const res = await fetch(url, {
      cache: 'no-store', // Disable caching for initial debugging to see actual server fetch
      headers: {
        'User-Agent': 'Mozilla/5.0 (Vercel Build Environment)',
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'no body');
      console.error(`Fetch to ${url} failed with status: ${res.status} ${res.statusText}. Body: ${errorText}`);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      console.error(`Fetch to ${url} returned invalid data format: expected array, got ${typeof data}`);
      return [];
    }

    return data;
  } catch (error: any) {
    console.error(`Fetching products from ${url} failed with error:`, error.message || error);
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
