import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { getCategory, getProductsByCategory } from '../hooks/useProducts';

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategory(categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-center text-gray-600">Η κατηγορία δεν βρέθηκε</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Επιστροφή στην Αρχική</span>
        </Link>

        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Κατηγορία
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md">
            <p className="text-gray-500 text-lg">
              Δεν υπάρχουν προϊόντα σε αυτήν την κατηγορία
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
