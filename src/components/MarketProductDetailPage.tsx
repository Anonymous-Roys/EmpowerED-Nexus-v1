import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { marketplaceDataService, Product } from '../utils/marketplaceData';

export function MarketProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (slug) {
      const foundProduct = marketplaceDataService.getProductBySlug(slug);
      if (foundProduct) {
        setProduct(foundProduct);
        const related = marketplaceDataService.getRelatedProducts(foundProduct.id);
        setRelatedProducts(related);
      } else {
        navigate('/marketplace');
      }
    }
  }, [slug, navigate]);

  if (!product) {
    return (
      <div className="bg-white min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4eba86] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    // Future: Redirect to Shopify
    alert(`Redirecting to purchase ${product.name}. This will integrate with Shopify in the future.`);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart. Cart functionality will be integrated with Shopify.`);
  };

  const handleContactSeller = () => {
    const message = `Hi, I'm interested in the ${product.name}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/237123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPrice = (price: number, originalPrice?: number) => {
    const formatted = marketplaceDataService.formatPrice(price);
    if (originalPrice && originalPrice > price) {
      return (
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-[#4eba86]">{formatted}</span>
          <span className="text-xl text-gray-500 line-through">
            {marketplaceDataService.formatPrice(originalPrice)}
          </span>
          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}% OFF
          </span>
        </div>
      );
    }
    return <span className="text-3xl font-bold text-[#4eba86]">{formatted}</span>;
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button
              onClick={() => navigate('/marketplace')}
              className="hover:text-[#4eba86] transition-colors"
            >
              Marketplace
            </button>
            <span>/</span>
            <span className="capitalize">{product.categoryLabel}</span>
            <span>/</span>
            <span className="text-black font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate('/marketplace')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Marketplace
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}% OFF
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-[#4eba86] text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index ? 'border-[#4eba86]' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-[#2e92c6] font-medium uppercase">
                  {product.categoryLabel}
                </span>
                {product.brand && (
                  <span className="text-sm text-gray-500 ml-2">by {product.brand}</span>
                )}
              </div>

              <h1 className="font-['Barlow:Bold',sans-serif] text-[36px] text-black mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-6">
                {formatPrice(product.price, product.originalPrice)}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#4eba86] mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="font-medium">In Stock</span>
                    {product.stockCount && (
                      <span className="text-gray-500">({product.stockCount} available)</span>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="font-medium">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  {/* <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div> */}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    className="flex-1 bg-[#4eba86] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#45a878] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </button>
                  {/* <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="px-6 py-3 border-2 border-[#4eba86] text-[#4eba86] rounded-lg font-semibold hover:bg-[#4eba86] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button> */}
                </div>

                {/* <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#4eba86] transition-colors">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div> */}
              </div>

              {/* Contact Seller */}
              {/* <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Need Help?</h3>
                <div className="flex gap-3">
                  <button
                    onClick={handleContactSeller}
                    className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button className="flex items-center gap-2 bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-12">
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-8">
                {['description', 'specifications', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-1 border-b-2 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'border-[#4eba86] text-[#4eba86]'
                        : 'border-transparent text-gray-600 hover:text-black'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="prose max-w-none">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3">Features & Benefits</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#4eba86] mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-600">{key}:</span>
                        <span className="text-black">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Truck className="w-6 h-6 text-[#4eba86]" />
                      <div>
                        <p className="font-medium">Delivery</p>
                        <p className="text-sm text-gray-600">{product.deliveryTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-6 h-6 text-[#4eba86]" />
                      <div>
                        <p className="font-medium">Warranty</p>
                        <p className="text-sm text-gray-600">{product.warranty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <RotateCcw className="w-6 h-6 text-[#4eba86]" />
                      <div>
                        <p className="font-medium">Returns</p>
                        <p className="text-sm text-gray-600">30-day return</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="text-center py-8 text-gray-500">
                    <p>Reviews feature coming soon!</p>
                    <p className="text-sm">Be the first to review this product.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-['Barlow:Bold',sans-serif] text-[32px] text-black mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/marketplace/product/${relatedProduct.slug}`)}
                  >
                    <div className="aspect-square relative">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-black mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(relatedProduct.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          ({relatedProduct.reviewCount})
                        </span>
                      </div>
                      <p className="text-lg font-bold text-[#4eba86]">
                        {marketplaceDataService.formatPrice(relatedProduct.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}