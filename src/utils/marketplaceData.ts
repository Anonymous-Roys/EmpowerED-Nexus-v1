export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: string;
  categoryLabel: string;
  subcategory?: string;
  images: string[];
  inStock: boolean;
  stockCount?: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  specifications: { [key: string]: string };
  features: string[];
  businessModel: 'direct' | 'dropship' | 'commission';
  deliveryTime: string;
  warranty: string;
  brand?: string;
  origin: string;
  isFeatured: boolean;
  isNew: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
  subcategories?: string[];
}

import { marketplaceImages } from './marketplaceImages';

class MarketplaceDataService {
  private categories: Category[] = [
    {
      id: 'edtech-hardware',
      name: 'EdTech Hardware',
      description: 'Educational technology devices and equipment',
      icon: '💻',
      productCount: 6,
      subcategories: ['Tablets', 'Laptops', 'Projectors', 'Interactive Boards', 'Audio Equipment']
    },
    {
      id: 'edtech-software',
      name: 'EdTech Software & Services',
      description: 'Digital learning solutions and content',
      icon: '📚',
      productCount: 0,
      subcategories: ['LMS', 'Course Bundles', 'Training Toolkits']
    },
    {
      id: 'healthtech-hardware',
      name: 'HealthTech Hardware',
      description: 'Medical devices and health monitoring equipment',
      icon: '🏥',
      productCount: 0,
      subcategories: ['Monitors', 'Diagnostic Tools', 'Medical Tablets']
    },
    {
      id: 'health-hygiene',
      name: 'Health & Hygiene',
      description: 'Health and hygiene products for schools',
      icon: '🧼',
      productCount: 0,
      subcategories: ['Sanitary Products', 'Hygiene Kits', 'Water Filters']
    },
    {
      id: 'power-connectivity',
      name: 'Power & Connectivity',
      description: 'Solar power and network solutions',
      icon: '⚡',
      productCount: 2,
      subcategories: ['Solar Kits', 'Network Equipment', 'Power Solutions']
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Supporting accessories and peripherals',
      icon: '🔌',
      productCount: 2,
      subcategories: ['Cases & Covers', 'Cables', 'Input Devices']
    },
    {
      id: 'services',
      name: 'Services',
      description: 'Professional services and support',
      icon: '🛠️',
      productCount: 0,
      subcategories: ['Installation', 'Training', 'Consulting']
    }
  ];

  private products: Product[] = [
    {
      id: 1,
      slug: 'edutablet-pro',
      name: 'EduTablet Pro',
      description: 'Advanced educational tablet designed specifically for African students with offline-first learning capabilities, rugged design, and pre-loaded educational content.',
      shortDescription: 'Educational tablet with offline learning capabilities',
      price: 60000,
      originalPrice: 75000,
      currency: 'XAF',
      category: 'edtech-hardware',
      categoryLabel: 'EdTech Hardware',
      subcategory: 'Tablets',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500'
      ],
      inStock: true,
      stockCount: 25,
      rating: 4.8,
      reviewCount: 124,
      tags: ['education', 'tablet', 'offline', 'rugged', 'students'],
      specifications: {
        'Screen Size': '10.1 inches',
        'Storage': '64GB',
        'RAM': '4GB',
        'Battery': '8000mAh',
        'OS': 'Android 12',
        'Camera': '8MP rear, 5MP front'
      },
      features: [
        'Offline-first learning platform',
        'Rugged design for school environments',
        'Pre-loaded educational content',
        '12-hour battery life',
        'Parental controls',
        'Multi-language support'
      ],
      businessModel: 'direct',
      deliveryTime: '3-5 business days',
      warranty: '2 years',
      brand: 'EmpowerED',
      origin: 'Designed in Cameroon',
      isFeatured: true,
      isNew: true,
      discount: 20
    },
  
    {
      id: 2,
      slug: "hp-zbook-studio-16-g11-workstation",
      name: "HP ZBook Studio 16 G11 Mobile Workstation",
      description: "Premium mobile workstation designed for professionals and creatives in Cameroon, featuring Intel Core Ultra 7 processor, NVIDIA RTX 1000 Ada graphics, and stunning 16-inch 4K UHD display for demanding workloads.",
      shortDescription: "Professional mobile workstation with 4K display and RTX 1000 Ada graphics",
      price: 1750000,
      originalPrice: 1950000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.hpZbook1,
        marketplaceImages.hpZbook2,
        marketplaceImages.hpZbook3
      ],
      inStock: true,
      stockCount: 25,
      rating: 4.8,
      reviewCount: 124,
      tags: ["workstation", "professional", "creatives", "4k", "graphics", "high-performance", "premium", "design"],
      specifications: {
        Processor: "Intel Core Ultra 7-165H (14th Gen), 16 cores, up to 5.00 GHz max boost",
        RAM: "16GB DDR5 5600MHz (expandable to 64GB)",
        Storage: "1TB NVMe SSD",
        Display: "16-inch UHD (3840 x 2400) 4K",
        Graphics: "NVIDIA RTX 1000 Ada 6GB GDDR6",
        Ports: "Thunderbolt 4, USB Type-C, USB-A 3.0, Headphone/microphone",
        Connectivity: "Wi-Fi 7 (802.11be), Bluetooth 5.4",
        Security: "Fingerprint reader, Facial recognition, Webcam blocker"
      },
      features: [
        "16-inch 4K UHD display for stunning visuals",
        "NVIDIA RTX 1000 Ada graphics with ray tracing support",
        "AI-enhanced graphics and compute workloads",
        "Professional-grade security features",
        "Wi-Fi 7 and Bluetooth 5.4 connectivity",
        "Premium build quality for professionals"
      ],
      businessModel: "direct",
      deliveryTime: "5-7 business days",
      warranty: "3 years",
      brand: "HP",
      origin: "Premium workstation designed for professional use in Cameroon",
      isFeatured: true,
      isNew: true,
      discount: 10
    },
    {
      id: 3,
      slug: 'solar-power-kit-classroom',
      name: 'Solar Power Kit for Classrooms',
      description: 'Complete solar power solution for classrooms, providing reliable electricity for educational devices and lighting.',
      shortDescription: 'Complete solar power solution for schools',
      price: 150000,
      originalPrice: 180000,
      currency: 'XAF',
      category: 'power-connectivity',
      categoryLabel: 'Power & Connectivity',
      subcategory: 'Solar Kits',
      images: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500'
      ],
      inStock: true,
      stockCount: 12,
      rating: 4.9,
      reviewCount: 67,
      tags: ['solar', 'power', 'renewable', 'classroom', 'sustainable'],
      specifications: {
        'Solar Panel': '100W monocrystalline',
        'Battery': '100Ah lithium',
        'Inverter': '500W pure sine wave',
        'Charge Controller': '30A MPPT',
        'Output': '12V DC, 220V AC',
        'Installation': 'Plug and play'
      },
      features: [
        'Powers 10+ tablets simultaneously',
        'LED lighting included',
        'Weather-resistant components',
        'Easy installation',
        'Remote monitoring',
        '10-year panel warranty'
      ],
      businessModel: 'direct',
      deliveryTime: '7-10 business days',
      warranty: '5 years',
      origin: 'China/Local Assembly',
      isFeatured: true,
      isNew: true,
      discount: 17
    },
    {
      id: 4,
      slug: 'digital-writing-tablet',
      name: 'Digital Writing Tablet',
      description: 'Paperless writing tablet for students and teachers.',
      shortDescription: 'Digital note-taking tablet',
      price: 18000,
      currency: 'XAF',
      category: 'edtech-hardware',
      categoryLabel: 'EdTech Hardware',
      subcategory: 'Writing Tablets',
      images: ['https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500'],
      inStock: true,
      rating: 4.3,
      reviewCount: 45,
      tags: ['writing', 'paperless'],
      specifications: {
        'Screen': 'LCD',
        'Pen': 'Pressure sensitive',
        'Battery': 'CR2032'
      },
      features: ['Lightweight', 'Erase button'],
      businessModel: 'direct',
      deliveryTime: '2–4 days',
      warranty: '1 year',
      origin: 'China',
      isFeatured: false,
      isNew: true
    },
    {
      id: 5,
      slug: "msi-thin-gf63-gaming-laptop",
      name: "MSI Thin GF63 Gaming Laptop",
      description: "Powerful gaming laptop featuring Intel Core i5-12650H processor and NVIDIA GeForce RTX 4050 6GB graphics, delivering smooth gameplay at 144Hz refresh rate. Perfect for gamers and content creators with Windows 11 Home pre-installed.",
      shortDescription: "Gaming laptop with RTX 4050 graphics and 144Hz display",
      price: 285000,
      originalPrice: 300000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Gaming Laptops",
      images: [
        marketplaceImages.msiThin1,
        marketplaceImages.msiThin2,
        marketplaceImages.msiThin3,
      ],
      inStock: true,
      stockCount: 15,
      rating: 4.6,
      reviewCount: 89,
      tags: ["gaming", "laptop", "rtx", "144hz", "gaming-laptop", "msi", "windows-11"],
      specifications: {
        "Processor": "Intel Core i5-12650H (16 CPUs, ~2.3GHz base, up to 4.7GHz boost)",
        "RAM": "16GB DDR4",
        "Storage": "512GB NVMe SSD",
        "Display": "15.6\" Full HD (1920 x 1080), 144Hz refresh rate",
        "Graphics": "NVIDIA GeForce RTX 4050 6GB GDDR6",
        "Operating System": "Windows 11 Home",
        "Keyboard": "QWERTY RGB (4-Zone Backlight)",
        "Battery": "100% Health"
      },
      features: [
        "144Hz high refresh rate display for smooth gaming",
        "RGB 4-Zone Backlight keyboard",
        "Thin and portable gaming design",
        "NVIDIA DLSS 3 technology support",
        "Cooler Boost 5 thermal system",
        "MSI Center gaming optimization software",
        "Windows 11 Home pre-installed"
      ],
      businessModel: "direct",
      deliveryTime: "3-5 business days",
      warranty: "2 years",
      brand: "MSI",
      origin: "International warranty, available in Cameroon",
      isFeatured: true,
      isNew: false,
      discount: 9.5
    },
    {
      id: 6,
      slug: 'wireless-mouse',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse for computers.',
      shortDescription: 'Wireless computer mouse',
      price: 12000,
      currency: 'XAF',
      category: 'accessories',
      categoryLabel: 'Accessories',
      subcategory: 'Input Devices',
      images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'],
      inStock: true,
      stockCount: 50,
      rating: 4.4,
      reviewCount: 32,
      tags: ['mouse', 'wireless', 'ergonomic'],
      specifications: {
        'Connection': 'Wireless 2.4GHz',
        'Battery': 'AA x2',
        'DPI': '1600'
      },
      features: ['Ergonomic design', 'Long battery life'],
      businessModel: 'direct',
      deliveryTime: '1-3 business days',
      warranty: '1 year',
      origin: 'China',
      isFeatured: false,
      isNew: false
    },
    {
      id: 7,
      slug: 'solar-kit',
      name: 'Solar Power Kit',
      description: 'Solar energy kit for schools.',
      shortDescription: 'School solar kit',
      price: 350000,
      currency: 'XAF',
      category: 'power-connectivity',
      categoryLabel: 'Power & Connectivity',
      images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500'],
      inStock: true,
      rating: 4.7,
      reviewCount: 41,
      tags: ['solar', 'power'],
      specifications: {
        'Capacity': '1kW',
        'Battery': 'Lithium'
      },
      features: ['Off-grid power'],
      businessModel: 'direct',
      deliveryTime: '7–10 days',
      warranty: '3 years',
      origin: 'Cameroon',
      isFeatured: true,
      isNew: false
    },
    {
      id: 8,
      slug: "hp-probook-450-g9-ultra-slim",
      name: "HP ProBook 450 G9 Ultra Slim",
      description: "Ultra-slim professional laptop featuring 12th Gen Intel Core i7 processor, 16GB RAM, 512GB SSD storage, and fingerprint reader. Perfect for business professionals with Windows 11 Pro and premium security features.",
      shortDescription: "Ultra-slim business laptop with 12th Gen i7 and fingerprint security",
      price: 850000,
      originalPrice: 950000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Business Laptops",
      images: [
       marketplaceImages.hpProbook1,
       marketplaceImages.hpProbook2,
       marketplaceImages.hpProbook3
      ],
      inStock: true,
      stockCount: 12,
      rating: 4.7,
      reviewCount: 56,
      tags: ["business", "ultra-slim", "professional", "fingerprint", "windows-11-pro", "hp"],
      specifications: {
        "Processor": "Intel Core i7-1255U 12th Gen (1.7GHz base, up to 4.5GHz Turbo-boost)",
        "RAM": "16GB DDR4 (expandable to 64GB)",
        "Storage": "512GB M.2 NVMe SSD",
        "Display": "15.6 Full HD (1920 x 1080)",
        "Graphics": "Intel Iris Xe Graphics (8GB total graphics memory)",
        "Operating System": "Windows 11 Professional 64-bit",
        "Security": "Fingerprint Reader",
        "Condition": "11/10"
      },
      features: [
        "Ultra-slim professional design",
        "Fingerprint reader for enhanced security",
        "Windows 11 Professional pre-installed",
        "Multiple connectivity ports including USB Type-C",
        "Intel Iris Xe graphics for professional applications",
        "Business-grade durability and reliability"
      ],
      businessModel: "direct",
      deliveryTime: "3-5 business days",
      warranty: "2 years",
      brand: "HP",
      origin: "Professional business laptop available in Cameroon",
      isFeatured: true,
      isNew: true,
      discount: 10.5
    },
    {
      id: 9,
      slug: 'bluetooth-speaker',
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker for classrooms.',
      shortDescription: 'Portable classroom speaker',
      price: 25000,
      currency: 'XAF',
      category: 'edtech-hardware',
      categoryLabel: 'EdTech Hardware',
      subcategory: 'Audio Equipment',
      images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'],
      inStock: true,
      stockCount: 30,
      rating: 4.6,
      reviewCount: 28,
      tags: ['speaker', 'bluetooth', 'portable'],
      specifications: {
        'Power': '10W',
        'Battery': '2000mAh',
        'Range': '10m'
      },
      features: ['Portable design', 'Clear sound'],
      businessModel: 'direct',
      deliveryTime: '2-4 business days',
      warranty: '1 year',
      origin: 'China',
      isFeatured: false,
      isNew: true
    },
    {
      id: 10,
      slug: 'charging-adapter',
      name: 'Charging Adapter',
      description: 'Fast charging adapter for phones and tablets.',
      shortDescription: 'Power adapter',
      price: 6000,
      currency: 'XAF',
      category: 'accessories',
      categoryLabel: 'Accessories',
      subcategory: 'Charging Adapters',
      images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500'],
      inStock: true,
      stockCount: 180,
      rating: 4.5,
      reviewCount: 75,
      tags: ['charger', 'power'],
      specifications: {
        'Output': '20W',
        'Port': 'USB-C'
      },
      features: ['Fast charging'],
      businessModel: 'direct',
      deliveryTime: '1–2 business days',
      warranty: '1 year',
      origin: 'China',
      isFeatured: false,
      isNew: false
    }
  ];

  // Get all categories
  getCategories(): Category[] {
    return this.categories;
  }

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Get product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  // Get product by slug
  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(product => product.slug === slug);
  }

  // Get products by category
  getProductsByCategory(categoryId: string): Product[] {
    return this.products.filter(product => product.category === categoryId);
  }

  // Get featured products
  getFeaturedProducts(): Product[] {
    return this.products.filter(product => product.isFeatured);
  }

  // Get new products
  getNewProducts(): Product[] {
    return this.products.filter(product => product.isNew);
  }

  // Search products
  searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Filter products
  filterProducts(filters: {
    category?: string;
    priceRange?: [number, number];
    inStock?: boolean;
    businessModel?: string;
    rating?: number;
  }): Product[] {
    return this.products.filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.priceRange && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) return false;
      if (filters.inStock !== undefined && product.inStock !== filters.inStock) return false;
      if (filters.businessModel && product.businessModel !== filters.businessModel) return false;
      if (filters.rating && product.rating < filters.rating) return false;
      return true;
    });
  }

  // Get related products
  getRelatedProducts(productId: number, limit: number = 4): Product[] {
    const product = this.getProductById(productId);
    if (!product) return [];

    return this.products
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, limit);
  }

  // Format price
  formatPrice(price: number, currency: string = 'XAF'): string {
    return new Intl.NumberFormat('fr-CM', {
      style: 'currency',
      currency: currency === 'XAF' ? 'XAF' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
}

export const marketplaceDataService = new MarketplaceDataService();