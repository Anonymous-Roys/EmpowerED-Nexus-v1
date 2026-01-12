import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, ShoppingCart, Eye, Heart, ChevronDown } from 'lucide-react';
import { marketplaceDataService, Product, Category } from '../utils/marketplaceData';

export function MarketplacePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const allProducts = marketplaceDataService.getProducts();
    const allCategories = marketplaceDataService.getCategories();
    setProducts(allProducts);
    setCategories(allCategories);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = marketplaceDataService.searchProducts(searchQuery);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.isNew ? 1 : -1;
        case 'featured':
        default:
          return b.isFeatured ? 1 : -1;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, priceRange, sortBy, products]);

  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    setSearchParams(params);
  }, [searchQuery, selectedCategory, setSearchParams]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleProductClick = (product: Product) => {
    navigate(`/marketplace/product/${product.slug}`);
  };

  const handleExploreStore = () => {
    document.getElementById('market-products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuyNow = (product: Product) => {
    // Future: Redirect to Shopify
    alert(`Redirecting to purchase ${product.name}. This will integrate with Shopify in the future.`);
  };

  const formatPrice = (price: number, originalPrice?: number) => {
    const formatted = marketplaceDataService.formatPrice(price);
    if (originalPrice && originalPrice > price) {
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#4eba86]">{formatted}</span>
          <span className="text-sm text-gray-500 line-through">
            {marketplaceDataService.formatPrice(originalPrice)}
          </span>
        </div>
      );
    }
    return <span className="text-lg font-bold text-[#4eba86]">{formatted}</span>;
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-4 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-[1375px] mx-auto bg-[#0c1733] rounded-[20px] px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
          <h1 className="font-['Barlow:Bold',sans-serif] text-white text-[32px] md:text-[40px] lg:text-[48px] leading-tight mb-4">
            EmpowerED Marketplace
          </h1>
          <p className="font-['Barlow:Regular',sans-serif] text-white text-[16px] md:text-[18px] mb-8 max-w-[700px]">
               EdTech, HealthTech, and Educational Solutions for African Schools
          </p>
          <button 
            onClick={handleExploreStore}
            className="bg-[#14ae5c] hover:bg-[#12a054] text-white font-['Barlow:Bold',sans-serif] text-[18px] px-8 py-3 rounded-[10px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Explore the Store
          </button>
        </div>
      </div>

    {/* Search Bar */}
     <div className="px-4 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10">
          <div className="max-w-[1375px] mx-auto mt-4 mx-4 px-8 relative border border-gray-300 rounded-lg mt-10">
            {/* <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" /> */}
            <input
              type="text"
              placeholder="Search for products, categories, or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          </div>
      {/* Categories */}
      {/* <div className="py-12 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <h2 className="font-['Barlow:Bold',sans-serif] text-[32px] text-black mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-center ${
                  selectedCategory === category.id
                    ? 'border-[#4eba86] bg-[#4eba86] bg-opacity-10'
                    : 'border-gray-200 hover:border-[#4eba86] bg-white'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-sm text-black mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.productCount} items</p>
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="py-4">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86]"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86]"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="hidden md:block border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#4eba86] text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#4eba86] text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range (XAF)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Min"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div id="market-products-section" className={`grid gap-6 mb-12 ${
            viewMode === 'grid' 
              ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                   {product.isNew && (
                    <div className="absolute top-2 right-2 bg-[#4eba86] text-white px-4 py-1 rounded text-xs font-bold">
                      NEW
                    </div>
                  )}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      -{product.discount}%
                    </div>
                  )}
                 
                  <div className="absolute inset-0 bg-[#000] bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-[#2e92c6] font-medium uppercase">
                      {product.categoryLabel}
                    </span>
                    {/* <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button> */}
                  </div>
                  
                  <p className="font-semibold text-sm text-black mb-2 line-clamp-2">
                    {product.name}
                  </p>
                  
                  <p className="text-gray-600 text-[5px] mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div> */}

                  <div className="flex flex-wrap items-center justify-between">
                    {formatPrice(product.price, 
                    // product.originalPrice

                      )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(product);
                      }}
                      className="bg-[#4eba86] text-white px-4 py-2 rounded-lg hover:bg-[#45a878] transition-colors flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </button>
                  </div>

                  {/* <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <span>📦 {product.deliveryTime}</span>
                    <span>•</span>
                    <span>🛡️ {product.warranty}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-[#4eba86] text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}