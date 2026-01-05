import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import { addToCart } from '../utils/cart';

function Breadcrumbs({ productTitle, category }: { productTitle: string; category: string }) {
  const navigate = useNavigate();
  
  return (
    <nav className="flex items-center gap-2 mb-6 text-[14px]">
      <button
        onClick={() => navigate('/')}
        className="text-[#666] hover:text-[#4eba86] transition-colors"
      >
        Store
      </button>
      <span className="text-[#666]">/</span>
      <button
        onClick={() => navigate('/products')}
        className="text-[#666] hover:text-[#4eba86] transition-colors"
      >
        {category === 'education' ? 'Education' : category === 'health' ? 'Health' : 'Digital'}
      </button>
      <span className="text-[#666]">/</span>
      <span className="text-[#0c1733] font-medium">{productTitle}</span>
    </nav>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'requirements'>('description');

  console.log('Product slug from URL:', slug);
  
  // Get the product
  const product = slug ? getProductBySlug(slug) : null;
  
  // Debug: Log the product
  console.log('Found product:', product);

  if (!product) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="mb-6">Slug: {slug}</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Back to Store
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      priceUSD: product.priceUSD,
      priceXAF: product.priceXAF,
      image: product.image
    });
    navigate('/checkout');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1375px] mx-auto px-6 py-8">
        <Breadcrumbs productTitle={product.title} category={product.category} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-gray-100 rounded-lg h-[400px] overflow-hidden border">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x400/cccccc/969696?text=No+Image';
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            
            {product.subtitle && (
              <p className="text-xl text-gray-700 mb-6">
                {product.subtitle}
              </p>
            )}
            
            <p className="text-gray-600 mb-6 line-clamp-3">
              {product.description}
            </p>
            
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-8">
                <p className="text-3xl font-bold text-green-600">
                  {product.priceXAF ? product.priceXAF.toLocaleString() : '0'} XAF
                </p>
                {product.priceUSD && (
                  <p className="text-lg text-gray-500">
                    (${product.priceUSD.toLocaleString()})
                  </p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
                
                <button
                  onClick={() => navigate('/checkout')}
                  className="bg-blue-600 hover:bg-blue-700 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-blue-600"
                >
                  Buy Now
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant access after purchase
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content - Simplified for visibility */}
        <div className="mb-8">
          <div className="flex gap-8 mb-6 border-b">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-3 px-1 font-medium ${activeTab === 'description' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Description
            </button>
            {product.features && product.features.length > 0 && (
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-3 px-1 font-medium ${activeTab === 'features' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Features
              </button>
            )}
            {product.requirements && product.requirements.length > 0 && (
              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-3 px-1 font-medium ${activeTab === 'requirements' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Requirements
              </button>
            )}
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div className="space-y-4">
                {product.fullDescription ? (
                  product.fullDescription.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                )}
              </div>
            )}

            {activeTab === 'features' && product.features && (
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start p-3 hover:bg-gray-50 rounded">
                    <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'requirements' && product.requirements && (
              <ul className="space-y-3">
                {product.requirements.map((requirement, idx) => (
                  <li key={idx} className="flex items-start p-3 hover:bg-gray-50 rounded">
                    <span className="text-gray-400 mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold text-center mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-green-600">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}