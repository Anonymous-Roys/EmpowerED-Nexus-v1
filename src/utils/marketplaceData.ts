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
      id: 2,
      slug: "razer-blade-14-ryzen9-rtx3070",
      name: "Razer Blade 14 - RZ09-0370, AMD Ryzen 9 5900HX, NVIDIA® GeForce RTX™ 3070 (8 GB VRAM)",
      description: "Ultra-portable gaming laptop featuring AMD Ryzen 9 5900HX processor and NVIDIA GeForce RTX 3070 graphics with 8GB VRAM, designed for high-performance gaming and creative work in Cameroon.",
      shortDescription: "14-inch QHD gaming laptop with Ryzen 9 and RTX 3070",
      price: 650000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.razer1,
        marketplaceImages.razer2,
        marketplaceImages.razer3
      ],
      inStock: true,
      stockCount: 15,
      rating: 4.7,
      reviewCount: 89,
      tags: ["gaming", "ultra-portable", "amd-ryzen", "rtx-3070", "high-performance", "gaming-laptop", "qhd"],
      specifications: {
        Processor: "AMD Ryzen™ 9 5900HX Processor, 3.3GHz (16 CPUs)",
        RAM: "16GB DDR4 3200MHz",
        Storage: "1TB SSD M.2 NVMe PCIe 3.0",
        Graphics: "NVIDIA® GeForce RTX™ 3070 Laptop GPU, 8 GB GDDR6 VRAM",
        Display: "14-inch QHD (2560 x 1440) 16:9, 165 Hz Refresh Rate",
        Build: "CNC Aluminum, Anodized Black with backlit green Razer logo",
        Power: "230W Power Adapter"
      },
      features: [
        "AMD Ryzen 9 5900HX processor for high-performance computing",
        "NVIDIA RTX 3070 with 8GB GDDR6 VRAM for gaming and creative work",
        "14-inch QHD display with 165Hz refresh rate",
        "Premium CNC aluminum construction",
        "Ultra-portable design for mobility"
      ],
      businessModel: "direct",
      deliveryTime: "7-10 business days",
      warranty: "1 year",
      brand: "Razer",
      origin: "Premium gaming laptop designed for performance users in Cameroon",
      isFeatured: false,
      isNew: true
    },
    {
      id: 3,
      slug: "acer-predator-triton-neo-16-ultra9-rtx4070",
      name: "Acer Predator Triton Neo 16 - Intel Ultra 9, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 4070 8GB",
      description: "Ultimate ultra-portable gaming laptop featuring Intel Core Ultra 9 185H 14th Gen AI processor, 32GB LPDDR5X RAM, and NVIDIA GeForce RTX 4070 with 8GB dedicated VRAM. Includes 16-inch 5K OLED display with 165Hz refresh rate.",
      shortDescription: "16-inch 5K OLED gaming laptop with Intel Ultra 9 and RTX 4070",
      price: 950000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.predatorTriton1,
        marketplaceImages.predatorTriton2,
        marketplaceImages.predatorTriton3,

      ],
      inStock: true,
      stockCount: 8,
      rating: 4.9,
      reviewCount: 42,
      tags: ["gaming", "ultra-portable", "intel-ultra9", "rtx-4070", "oled", "5k", "ai-processor", "premium"],
      specifications: {
        Processor: "Intel Core Ultra 9 185H Processor (14th Gen AI processor, Intel EVO)",
        RAM: "32GB LPDDR5X RAM (6400 MHz)",
        Storage: "1TB PCIe 4.0 NVMe SSD",
        Graphics: "NVIDIA GeForce RTX 4070 8GB dedicated + Intel Arc Graphics GPU",
        NPU: "Intel AI Boost 8GB Graphics",
        Display: "16.0-inch, 5K (3200x2000) OLED 16:10, 0.2ms response, 165Hz, 400-500nits brightness, 100% DCI-P3",
        Audio: "Dual Microphones / Quad Speakers (Woofer 5W x 2, Tweeter 3.3W x 2), Dolby Atmos",
        Ports: "USB-A 3.2, HDMI 2.1 (8K@60Hz), 2 x Thunderbolt 4, Micro SD, Headphone/Mic Combo",
        Battery: "76Wh with 65W USB Type-C Adapter",
        Security: "Fingerprint sensor"
      },
      features: [
        "14th Generation Intel Core Ultra 9 AI processor",
        "32GB LPDDR5X RAM for extreme multitasking",
        "NVIDIA RTX 4070 with 8GB dedicated VRAM",
        "16-inch 5K OLED display with 165Hz refresh rate",
        "Dolby Atmos quad speaker system",
        "Fingerprint sensor for security",
        "Ultra-portable design with premium build"
      ],
      businessModel: "direct",
      deliveryTime: "10-14 business days",
      warranty: "12 months",
      brand: "Acer",
      origin: "New unit without carry-on baggage, designed for Cameroonian gaming enthusiasts",
      isFeatured: true,
      isNew: true
    },
    {
      id: 4,
      slug: "asus-rog-strix-g16-g615lm-ultra9-rtx5060",
      name: "ASUS ROG Strix G16 G615LM - Intel Ultra 9, 16GB RAM, 1TB SSD, NVIDIA RTX 5060 8GB",
      description: "Gaming laptop featuring Intel Ultra 9 12975HX processor and latest NVIDIA GeForce RTX 5060 laptop GPU with 8GB GDDR7 dedicated memory. Includes 16-inch WQXGA display with 240Hz refresh rate.",
      shortDescription: "16-inch gaming laptop with Intel Ultra 9 and RTX 5060",
      price: 1050000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.msiThin1,

      ],
      inStock: true,
      stockCount: 12,
      rating: 4.6,
      reviewCount: 31,
      tags: ["gaming", "asus-rog", "intel-ultra9", "rtx-5060", "wqxga", "240hz", "latest", "performance"],
      specifications: {
        Processor: "Intel® Ultra 9 12975HX (24-core/32-thread, 36MB cache, up to 5.4 GHz max boost)",
        Generation: "14th Generation Ultra (latest Intel processor)",
        RAM: "16GB DDR5-5600 SO-DIMM RAM",
        Storage: "1TB PCIe 4.0 NVMe M.2 SSD",
        Graphics: "NVIDIA® GeForce RTX™ 5060 Laptop GPU, 8GB GDDR7 dedicated",
        NPU: "AI Boost 8G Graphics",
        OS: "Windows 11 Home",
        Display: "16-inch WQXGA (2560 x 1600) 16:10 IPS-level Anti-glare, 100% DCI-P3, 240Hz refresh rate",
        Connectivity: "Webcam, Wi-Fi, Bluetooth, RJ45, USB Type-C, HDMI, SD card reader, USB ports"
      },
      features: [
        "Intel Ultra 9 12975HX processor with 24 cores",
        "Latest NVIDIA RTX 5060 with 8GB GDDR7 memory",
        "16-inch WQXGA display with 240Hz refresh rate",
        "14th Generation Intel processor with AI Boost",
        "RGB keyboard for customization",
        "Comprehensive connectivity options"
      ],
      businessModel: "direct",
      deliveryTime: "7-10 business days",
      warranty: "12 months",
      brand: "ASUS",
      origin: "Manufactured May 2025, designed for Cameroonian gaming market",
      isFeatured: false,
      isNew: true
    },
    {
      id: 5,
      slug: "microsoft-surface-book-3-2in1-detachable",
      name: "Microsoft Surface Book 3 2-in-1 Detachable Business Laptop",
      description: "Premium detachable 2-in-1 laptop featuring 10th Gen Intel Core i7 processor, 3K PixelSense touchscreen display, and dedicated NVIDIA GeForce GTX 1060 with 6GB GDDR6 memory. Perfect for business professionals and creatives in Cameroon.",
      shortDescription: "15-inch detachable 2-in-1 laptop with 3K touchscreen and GTX 1060 graphics",
      price: 350000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.surfaceBook1,
        marketplaceImages.surfaceBook2,
        marketplaceImages.surfaceBook3,

      ],
      inStock: true,
      stockCount: 6,
      rating: 4.4,
      reviewCount: 67,
      tags: ["2-in-1", "detachable", "business", "touchscreen", "surface", "convertible", "premium", "used"],
      specifications: {
        Processor: "10th Gen Intel Core i7-1065G7 @ 1.5GHz up to 4.2GHz Turbo boost (4 CPUs), 12MB L3 cache",
        RAM: "16GB LPDDR4X",
        Storage: "1TB NVMe SSD",
        Display: "15-inch PixelSense™ touchscreen (3240 × 2160) 3K IPS Display",
        Graphics: "NVIDIA GeForce GTX 1060, 6GB GDDR6 dedicated",
        Cameras: "Front: 5MP for Windows Hello, 1080p; Rear: 8MP autofocus, 1080p",
        Ports: "2× USB-A 3.1 Gen 2, 1× USB-C 3.1 Gen 2 with Power Delivery, SDXC card reader, 3.5mm audio jack, 2× Surface Connect",
        Connectivity: "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
        Battery: "Dual battery up to 17.5 hours",
        Condition: "Used - Like new"
      },
      features: [
        "Detachable 2-in-1 design (laptop and tablet modes)",
        "15-inch 3K PixelSense touchscreen display",
        "Dedicated NVIDIA GTX 1060 with 6GB GDDR6 memory",
        "Windows Hello facial recognition with 5MP front camera",
        "8MP rear autofocus camera for documentation",
        "Wi-Fi 6 and Bluetooth 5.0 connectivity",
        "Up to 17.5 hours battery life"
      ],
      businessModel: "direct",
      deliveryTime: "3-5 business days",
      warranty: "3 months",
      brand: "Microsoft",
      origin: "Premium detachable laptop, used - like new condition",
      isFeatured: false,
      isNew: false
    },
    {
      id: 6,
      slug: "lenovo-thinkpad-l13-yoga-convertible",
      name: "Lenovo ThinkPad L13 Yoga Convertible Laptop",
      description: "Super clean, super slim convertible laptop featuring 10th Gen Intel Core i7 processor, 14-inch UHD touchscreen, 360-degree hinge, and versatile 2-in-1 design. Includes fingerprint reader and stylus for professional use in Cameroon.",
      shortDescription: "14-inch convertible laptop with touchscreen and 360-degree hinge",
      price: 250000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.thinkPad1,
        marketplaceImages.thinkPad2,
        marketplaceImages.thinkPad3,
        marketplaceImages.thinkPad4

      ],
      inStock: true,
      stockCount: 8,
      rating: 4.3,
      reviewCount: 53,
      tags: ["convertible", "2-in-1", "thinkpad", "touchscreen", "yoga", "business", "stylus", "fingerprint"],
      specifications: {
        Processor: "Intel Core i7 10th Generation, 2.3GHz × 8 (8 CPUs)",
        RAM: "16GB PC4 RAM",
        Storage: "1TB SSD",
        Graphics: "128MB dedicated, 8GB total graphics memory",
        Display: "14-inch UHD touchscreen",
        Features: "Luminous keyboard, Fingerprint reader, Stylus included",
        Connectivity: "Webcam, Bluetooth, USB 3.0, Wi-Fi, HDMI",
        OS: "Windows 11 Pro",
        Battery: "Excellent condition",
        Design: "X360 convertible (laptop mode & tablet mode)"
      },
      features: [
        "360-degree convertible design for laptop and tablet modes",
        "14-inch UHD touchscreen display",
        "Includes stylus for note-taking and drawing",
        "Fingerprint reader for secure login",
        "Luminous backlit keyboard",
        "Windows 11 Professional edition",
        "Excellent battery condition"
      ],
      businessModel: "direct",
      deliveryTime: "3-5 business days",
      warranty: "3 months",
      brand: "Lenovo",
      origin: "Super clean, super slim convertible business laptop",
      isFeatured: false,
      isNew: false
    },
    {
      id: 7,
      slug: "hp-elitebook-x360-830-g7-convertible",
      name: "HP EliteBook x360 830 G7 Convertible Laptop",
      description: "Premium convertible business laptop featuring 10th Gen Intel Core i7 processor, 13-inch 120Hz touchscreen with 360-degree rotation, and facial recognition. Excellent condition with strong battery life for professionals in Cameroon.",
      shortDescription: "13-inch convertible laptop with 120Hz touchscreen and facial recognition",
      price: 250000,
      currency: "XAF",
      category: "edtech-hardware",
      categoryLabel: "EdTech Hardware",
      subcategory: "Laptops",
      images: [
        marketplaceImages.hpEliteBookX2,
        marketplaceImages.hpEliteBookX3,
        marketplaceImages.hpEliteBookX4
      ],
      inStock: true,
      stockCount: 5,
      rating: 4.5,
      reviewCount: 48,
      tags: ["elitebook", "convertible", "business", "touchscreen", "360-degree", "facial-recognition", "premium"],
      specifications: {
        Processor: "Intel Core i7 10th Generation @ 2.11GHz, 8 cores, 8MB cache",
        RAM: "16GB RAM",
        Graphics: "Intel UHD Graphics 620",
        Storage: "512GB NVMe SSD",
        Display: "13-inch touchscreen, 120Hz refresh rate, 360-degree rotation",
        Ports: "HDMI, USB 3.0 × 1, 3.5mm audio jack, USB Type-C × 2, SD card port",
        Security: "Facial recognition, Webcam",
        Connectivity: "Wi-Fi, Bluetooth",
        Battery: "Excellent condition",
        Condition: "10/10"
      },
      features: [
        "360-degree convertible design for flexible use",
        "13-inch touchscreen with 120Hz refresh rate",
        "Facial recognition for secure Windows Hello login",
        "Dual USB Type-C ports for modern connectivity",
        "Excellent battery life and overall condition",
        "Premium business-grade build quality",
        "Lightweight and portable design"
      ],
      businessModel: "direct",
      deliveryTime: "3-5 business days",
      warranty: "3 months",
      brand: "HP",
      origin: "Premium business convertible in excellent 10/10 condition",
      isFeatured: false,
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
      slug: 'hp-elitebook-840-g8',
      name: 'HP EliteBook 840 G8 Notebook PC',
      description: 'Professional business laptop featuring Intel Core i5-1145G7 processor, touchscreen display, and premium build quality. Perfect for business professionals with Windows 11 Pro and MS Office pre-installed.',
      shortDescription: 'Business laptop with touchscreen and Intel Iris Xe graphics',
      price: 185000,
      currency: 'XAF',
      category: 'edtech-hardware',
      categoryLabel: 'EdTech Hardware',
      subcategory: 'Business Laptops',
      images: [
        marketplaceImages.hpProbook1,
        marketplaceImages.hpProbook2,
        marketplaceImages.hpProbook3
      ],
      inStock: true,
      stockCount: 8,
      rating: 4.7,
      reviewCount: 42,
      tags: ['business', 'touchscreen', 'professional', 'windows-11-pro', 'hp', 'elitebook'],
      specifications: {
        'Processor': 'Intel Core i5-1145G7 (2.6GHz base, up to 4.40GHz boost)',
        'RAM': '16GB DDR4',
        'Storage': '256GB SSD NVMe',
        'Display': '14" touchscreen, 1920×1080 resolution',
        'Graphics': 'Intel Iris Xe Graphics',
        'Operating System': 'Windows 11 Pro',
        'Software': 'MS Office pack pre-installed',
        'Battery': 'Excellent battery life'
      },
      features: [
        'Touchscreen display for enhanced productivity',
        'Intel Iris Xe graphics for professional applications',
        'Windows 11 Pro pre-installed',
        'MS Office pack included',
        'Excellent battery life for all-day use',
        'Premium business-grade build quality'
      ],
      businessModel: 'direct',
      deliveryTime: '3-5 business days',
      warranty: '2 years',
      brand: 'HP',
      origin: 'Professional business laptop available in Cameroon',
      isFeatured: true,
      isNew: true
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