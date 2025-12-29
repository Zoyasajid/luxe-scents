import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === slug);

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gold-500">{category.name}</h1>
          <p className="text-charcoal-400 text-lg">{category.description}</p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-charcoal-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

