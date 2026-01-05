import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import { addToCart } from '../utils/cart';

function Breadcrumbs({ productTitle, category }: { productTitle: string; category: string }) {
  const navigate = useNavigate();
  
  return (
    <nav className="flex items-center gap-2 mb-8 text-[14px]">
      <button
        onClick={() => navigate('/')}
        className="text-[#999] hover:text-[#4eba86] transition-colors"
      >
        Store
      </button>
      <span className="text-[#999]">/</span>
      <button
        onClick={() => navigate('/products')}
        className="text-[#999] hover:text-[#4eba86] transition-colors"
      >
        {category === 'education' ? 'Digital' : category === 'health' ? 'Health' : 'Digital'}
      </button>
      <span className="text-[#999]">/</span>
      <span className="text-[#1a1a1a] font-medium">{productTitle}</span>
    </nav>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'requirements'>('description');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  console.log('Product slug from URL:', slug);
  
  // Get the product
  const product = slug ? getProductBySlug(slug) : null;
  
  // Debug: Log the product
  console.log('Found product:', product);

  // Create image gallery (main image + additional images if available)
  const images = product ? [
    product.image,
    ...(product.additionalImages || [])
  ] : [];

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
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <Breadcrumbs productTitle={product.title} category={product.category} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Image Gallery */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-4">
              <img
                src={images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-[450px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x450/e8e8e8/999999?text=No+Image';
                }}
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`flex-1 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx 
                        ? 'border-[#4eba86] shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      className="w-full h-[100px] object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/150x100/e8e8e8/999999?text=Image';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold text-[#1a1a1a] mb-4 leading-tight">
              {product.title}
            </h1>
            
            {product.subtitle && (
              <p className="text-[17px] text-[#666] mb-6 leading-relaxed">
                {product.subtitle}
              </p>
            )}
            
            <div className="mb-8">
              <p className="text-[40px] font-bold text-[#1a1a1a] mb-1">
                {product.priceXAF ? product.priceXAF.toLocaleString() : '0'} XAF
              </p>
              {product.priceUSD && (
                <p className="text-[16px] text-[#999]">
                  (${product.priceUSD.toLocaleString()})
                </p>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-fit bg-[#4eba86] hover:bg-[#3da670] text-black px-8 py-4 rounded-lg font-semibold text-[16px] transition-all duration-200 mb-4"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex gap-8 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 px-2 font-medium text-[15px] transition-colors ${
                activeTab === 'description' 
                  ? 'border-b-2 border-[#4eba86] text-[#4eba86]' 
                  : 'text-[#666] hover:text-[#1a1a1a]'
              }`}
            >
              Description
            </button>
            {product.features && product.features.length > 0 && (
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-4 px-2 font-medium text-[15px] transition-colors ${
                  activeTab === 'features' 
                    ? 'border-b-2 border-[#4eba86] text-[#4eba86]' 
                    : 'text-[#666] hover:text-[#1a1a1a]'
                }`}
              >
                Features
              </button>
            )}
            {product.requirements && product.requirements.length > 0 && (
              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-4 px-2 font-medium text-[15px] transition-colors ${
                  activeTab === 'requirements' 
                    ? 'border-b-2 border-[#4eba86] text-[#4eba86]' 
                    : 'text-[#666] hover:text-[#1a1a1a]'
                }`}
              >
                Requirements
              </button>
            )}
          </div>

          <div className="py-4">
            {activeTab === 'description' && (
              <div className="space-y-4">
                {product.fullDescription ? (
                  product.fullDescription.map((paragraph, idx) => (
                    <p key={idx} className="text-[#555] leading-relaxed text-[15px]">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-[#555] leading-relaxed text-[15px]">{product.description}</p>
                )}
              </div>
            )}

            {activeTab === 'features' && product.features && (
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#4eba86] mr-3 mt-1 flex-shrink-0 font-bold">✓</span>
                    <span className="text-[#555] text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'requirements' && product.requirements && (
              <ul className="space-y-3">
                {product.requirements.map((requirement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#999] mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-[#555] text-[15px]">{requirement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Customer Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-1">{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#555] text-[14px] leading-relaxed">{review.text}</p>
                  {review.highlight && (
                    <p className="mt-3 text-[#1a1a1a] font-semibold text-[14px]">{review.highlight}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}