import { useState } from 'react';
import imgBookCompositionWithReadingGlassesBook2 from "figma:asset/7325ffba98817243876f345920a4064617042364.png";
import imgPortraitNurseScrubsClinic1 from "figma:asset/3dbb7634cd18157b436775c0b14d73d0ebcba9dd.png";
import imgCloseupShotBoyGettingCheckup1 from "figma:asset/ae8adf0a0c25fc10ee3d4efd217c5e5175620249.png";
import imgGroupAfricanKidsPayingAttentionClass1 from "figma:asset/cb001d8e1b5bd36e7f6e50bb5448aa473785b758.png";
import imgAfricanAmericanPeopleDoingConsultationWithDiseaseDiagnosisLaptopSittingWaitingAreaLobbyNurseFemalePatientTalkingAboutTreatmentRecoveryHealthcareSupportClinic1 from "figma:asset/e57bb778e4c78300cd2a0b2af6d0aa738745c794.png";
import imgRectangle251 from "figma:asset/9b07e0b5444e1f6bd40decab9d59f7192aa390f1.png";

interface Product {
  id: number;
  title: string;
  description: string;
  priceXAF: number;
  priceUSD: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  currency: 'XAF' | 'USD';
  onProductClick: (productId: number) => void;
}

function ProductCard({ product, currency, onProductClick }: ProductCardProps) {
  const price = currency === 'XAF' ? product.priceXAF : product.priceUSD;
  
  return (
    <div 
      className="bg-white rounded-[20px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.35)] hover:scale-105 cursor-pointer"
      onClick={() => onProductClick(product.id)}
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

interface ProductPageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  const [currency, setCurrency] = useState<'XAF' | 'USD'>('XAF');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');

  const products: Product[] = [
    {
      id: 1,
      title: 'Offline K-12 curriculum',
      description: 'Complete toolkit for offline-first learning',
      priceXAF: 25000,
      priceUSD: 42,
      image: imgBookCompositionWithReadingGlassesBook2,
      category: 'education',
    },
    {
      id: 2,
      title: 'Health Worker Template Pack',
      description: 'Essential templates for community health',
      priceXAF: 15000,
      priceUSD: 25,
      image: imgPortraitNurseScrubsClinic1,
      category: 'health',
    },
    {
      id: 3,
      title: 'Digital Literacy Course',
      description: 'Learn essential digital skills anytime',
      priceXAF: 20000,
      priceUSD: 33,
      image: imgRectangle251,
      category: 'education',
    },
    {
      id: 4,
      title: 'Rural Clinic Management Kit',
      description: 'Streamline your clinic operations',
      priceXAF: 30000,
      priceUSD: 50,
      image: imgCloseupShotBoyGettingCheckup1,
      category: 'health',
    },
    {
      id: 5,
      title: 'Teacher Training Module',
      description: 'Upskill your teaching staff effectively',
      priceXAF: 18000,
      priceUSD: 30,
      image: imgGroupAfricanKidsPayingAttentionClass1,
      category: 'education',
    },
    {
      id: 6,
      title: 'Public Health Data Toolkit',
      description: 'Tools for collecting and analyzing health data.',
      priceXAF: 22000,
      priceUSD: 37,
      image: imgAfricanAmericanPeopleDoingConsultationWithDiseaseDiagnosisLaptopSittingWaitingAreaLobbyNurseFemalePatientTalkingAboutTreatmentRecoveryHealthcareSupportClinic1,
      category: 'health',
    },
  ];

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
          <button className="bg-[#14ae5c] hover:bg-[#12a054] text-white font-['Barlow:Bold',sans-serif] text-[18px] px-8 py-3 rounded-[10px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Explore the Store
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
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

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="w-full lg:w-[200px] flex-shrink-0">
              {/* Categories */}
              <div className="mb-12">
                <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[32px] text-black mb-6">
                  Categories
                </h3>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
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
                      onClick={() => setSortBy(option.id)}
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
                    onProductClick={(productId) => onNavigate('productDetail', productId)}
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