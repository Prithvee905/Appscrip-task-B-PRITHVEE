import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <main>
        {/* Hero Skeleton */}
        <section className="text-center py-12 md:py-20 px-4">
          <div className="h-10 md:h-14 bg-gray-200 animate-pulse w-3/4 md:w-1/2 mx-auto mb-6 rounded"></div>
          <div className="h-4 md:h-5 bg-gray-200 animate-pulse w-full max-w-2xl mx-auto rounded"></div>
        </section>

        {/* Grid Skeleton */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
          <div className="border-t border-b border-gray-200 py-4 mb-8 flex justify-between">
            <div className="w-24 h-6 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block w-64 flex-shrink-0 space-y-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 animate-pulse rounded"></div>
              ))}
            </div>

            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex flex-col h-full bg-white">
                    <div className="aspect-[3/4] w-full mb-4 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-5 bg-gray-200 animate-pulse w-3/4 mb-2 rounded"></div>
                    <div className="h-4 bg-gray-200 animate-pulse w-1/4 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
