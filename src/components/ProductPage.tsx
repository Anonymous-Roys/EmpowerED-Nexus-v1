import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';

interface ProductCardProps {
  key: number;
  product: Product;
  currency: 'XAF' | 'USD';
}

function ProductCard({ product, currency }: ProductCardProps) {
  const navigate = useNavigate();
  const price = currency === 'XAF' ? product.priceXAF : product.priceUSD;
  
  return (
    <div 
      className="bg-white rounded-[20px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.35)] hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/products/${product.slug}`)}
    >
      {/* Product Image */}
      <div className="h-[220px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="p-6">
        <h3 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px] text-black mb-3">
          {product.title}
        </h3>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[14px] leading-[15px] text-black mb-4">
          {product.description}
        </p>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold text-[18px] leading-[15px] text-black">
          {price.toLocaleString()} {currency}
        </p>
      </div>
    </div>
  );
}

export function ProductPage() {
  const [currency, setCurrency] = useState<'XAF' | 'USD'>('XAF');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Health' },
    { id: 'templates', label: 'Templates' },
    { id: 'toolkits', label: 'Toolkits' },
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Popularity' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
  ];

  // Filter products
  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => 
      (currency === 'XAF' ? a.priceXAF : a.priceUSD) - (currency === 'XAF' ? b.priceXAF : b.priceUSD)
    );
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => 
      (currency === 'XAF' ? b.priceXAF : b.priceUSD) - (currency === 'XAF' ? a.priceXAF : a.priceUSD)
    );
  }

  const handleExploreStore = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="px-4 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-[1375px] mx-auto bg-[#0c1733] rounded-[20px] px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
          <h1 className="font-['Barlow:Bold',sans-serif] text-white text-[32px] md:text-[40px] lg:text-[48px] leading-tight mb-4">
            Empower Your Learning &<br />Health Journey
          </h1>
          <p className="font-['Barlow:Regular',sans-serif] text-white text-[16px] md:text-[18px] mb-8 max-w-[700px]">
            Digital Toolkits, templates, and resources designed for online and offline<br className="hidden md:block" />
            access across Africa.
          </p>
          <button 
            onClick={handleExploreStore}
            className="bg-[#14ae5c] hover:bg-[#12a054] text-white font-['Barlow:Bold',sans-serif] text-[18px] px-8 py-3 rounded-[10px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Explore the Store
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div id="products-section" className="px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        <div className="max-w-[1375px] mx-auto">
          {/* Header with Currency Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="font-['Barlow:Bold',sans-serif] text-[#0c1733] text-[28px] md:text-[32px]">
              Our Digital Products
            </h2>
            
            {/* Currency Toggle */}
            <div className="bg-[#d9d9d9] rounded-[10px] p-[5px] flex gap-1">
              <button
                onClick={() => setCurrency('XAF')}
                className={`
                  px-6 py-2 rounded-[10px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px] transition-all duration-300
                  ${currency === 'XAF' 
                    ? 'bg-white text-black border border-black' 
                    : 'bg-transparent text-black hover:bg-white/50'
                  }
                `}
              >
                XAF
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`
                  px-6 py-2 rounded-[10px] font-['Montserrat:SemiBold',sans-serif] font-semibold text-[18px] transition-all duration-300
                  ${currency === 'USD' 
                    ? 'bg-white text-black border border-black' 
                    : 'bg-transparent text-black hover:bg-white/50'
                  }
                `}
              >
                USD
              </button>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 bg-[#0c1733] text-white px-4 py-2 rounded-[8px] font-['Montserrat:SemiBold',sans-serif] text-[16px]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              Filters & Sort
            </button>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className={`w-full lg:w-[200px] flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Categories */}
              <div className="mb-12">
                <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[32px] text-black mb-6">
                  Categories
                </h3>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setShowMobileFilters(false);
                      }}
                      className={`
                        block w-full text-left font-['Montserrat:Regular',sans-serif] font-normal text-[18px] transition-colors duration-300
                        ${selectedCategory === category.id 
                          ? 'text-[#4eba86] font-semibold' 
                          : 'text-black hover:text-[#4eba86]'
                        }
                      `}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-['Barlow:Bold',sans-serif] text-[32px] text-black mb-6">
                  Sort by
                </h3>
                <div className="space-y-4">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowMobileFilters(false);
                      }}
                      className={`
                        block w-full text-left font-['Barlow:Regular',sans-serif] text-[18px] tracking-[0.36px] transition-colors duration-300
                        ${sortBy === option.id 
                          ? 'text-[#4eba86] font-semibold' 
                          : 'text-black hover:text-[#4eba86]'
                        }
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1 mb-16 md:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    currency={currency}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}