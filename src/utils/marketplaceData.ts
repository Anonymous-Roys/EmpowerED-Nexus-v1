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

class MarketplaceDataService {
  private categories: Category[] = [
    {
      id: 'edtech-hardware',
      name: 'EdTech Hardware',
      description: 'Educational technology devices and equipment',
      icon: '💻',
      productCount: 35,
      subcategories: ['Tablets', 'Laptops', 'Projectors', 'Interactive Boards', 'Audio Equipment']
    },
    {
      id: 'edtech-software',
      name: 'EdTech Software & Services',
      description: 'Digital learning solutions and content',
      icon: '📚',
      productCount: 5,
      subcategories: ['LMS', 'Course Bundles', 'Training Toolkits']
    },
    {
      id: 'healthtech-hardware',
      name: 'HealthTech Hardware',
      description: 'Medical devices and health monitoring equipment',
      icon: '🏥',
      productCount: 15,
      subcategories: ['Monitors', 'Diagnostic Tools', 'Medical Tablets']
    },
    {
      id: 'health-hygiene',
      name: 'Health & Hygiene',
      description: 'Health and hygiene products for schools',
      icon: '🧼',
      productCount: 8,
      subcategories: ['Sanitary Products', 'Hygiene Kits', 'Water Filters']
    },
    {
      id: 'power-connectivity',
      name: 'Power & Connectivity',
      description: 'Solar power and network solutions',
      icon: '⚡',
      productCount: 11,
      subcategories: ['Solar Kits', 'Network Equipment', 'Power Solutions']
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Supporting accessories and peripherals',
      icon: '🔌',
      productCount: 21,
      subcategories: ['Cases & Covers', 'Cables', 'Input Devices']
    },
    {
      id: 'services',
      name: 'Services',
      description: 'Professional services and support',
      icon: '🛠️',
      productCount: 10,
      subcategories: ['Installation', 'Training', 'Consulting']
    }
  ];

  private products: Product[] = [
    // EdTech Hardware
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
      slug: 'student-laptop-basic',
      name: 'Student Laptop Basic',
      description: 'Affordable laptop designed for students with essential features for learning, research, and basic computing tasks.',
      shortDescription: 'Budget-friendly laptop for students',
      price: 120000,
      currency: 'XAF',
      category: 'edtech-hardware',
      categoryLabel: 'EdTech Hardware',
      subcategory: 'Laptops',
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500'
      ],
      inStock: true,
      stockCount: 15,
      rating: 4.3,
      reviewCount: 89,
      tags: ['laptop', 'student', 'budget', 'portable'],
      specifications: {
        'Screen Size': '14 inches',
        'Processor': 'Intel Celeron N4020',
        'Storage': '128GB SSD',
        'RAM': '4GB',
        'Battery': '6 hours',
        'OS': 'Windows 11'
      },
      features: [
        'Lightweight and portable',
        'Fast SSD storage',
        'Full-size keyboard',
        'HD webcam for online classes',
        'Multiple USB ports',
        'Wi-Fi 6 support'
      ],
      businessModel: 'dropship',
      deliveryTime: '7-14 business days',
      warranty: '1 year',
      origin: 'China',
      isFeatured: false,
      isNew: false
    },
    {
      id: 3,
      slug: 'smart-projector-classroom',
      name: 'Smart Projector for Classrooms',
      description: 'High-brightness smart projector with wireless connectivity, perfect for classroom presentations and interactive learning.',
      shortDescription: 'Wireless smart projector for education',
      price: 85000,
      currency: 'XAF',
      category: 'edtech-hardware',
      categoryLabel: 'EdTech Hardware',
      subcategory: 'Projectors',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500'
      ],
      inStock: true,
      stockCount: 8,
      rating: 4.6,
      reviewCount: 45,
      tags: ['projector', 'wireless', 'classroom', 'presentation'],
      specifications: {
        'Brightness': '3500 lumens',
        'Resolution': '1080p Full HD',
        'Connectivity': 'Wi-Fi, HDMI, USB',
        'Lamp Life': '15000 hours',
        'Throw Distance': '1.2-12m',
        'Weight': '2.8kg'
      },
      features: [
        'Wireless screen mirroring',
        'Built-in Android OS',
        'Keystone correction',
        'Low noise operation',
        'Multiple input options',
        'Portable design'
      ],
      businessModel: 'direct',
      deliveryTime: '5-7 business days',
      warranty: '2 years',
      origin: 'China',
      isFeatured: true,
      isNew: false
    },
    // HealthTech Hardware
    {
      id: 4,
      slug: 'digital-blood-pressure-monitor',
      name: 'Digital Blood Pressure Monitor',
      description: 'Accurate and easy-to-use digital blood pressure monitor for health monitoring in schools and clinics.',
      shortDescription: 'Professional blood pressure monitoring device',
      price: 25000,
      currency: 'XAF',
      category: 'healthtech-hardware',
      categoryLabel: 'HealthTech Hardware',
      subcategory: 'Monitors',
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500'
      ],
      inStock: true,
      stockCount: 30,
      rating: 4.7,
      reviewCount: 156,
      tags: ['health', 'monitor', 'blood pressure', 'medical'],
      specifications: {
        'Measurement Range': '0-300 mmHg',
        'Accuracy': '±3 mmHg',
        'Memory': '99 readings',
        'Cuff Size': '22-42cm',
        'Display': 'Large LCD',
        'Power': '4 AA batteries'
      },
      features: [
        'WHO blood pressure classification',
        'Irregular heartbeat detection',
        'Average calculation',
        'Large, clear display',
        'Memory for multiple users',
        'Automatic inflation'
      ],
      businessModel: 'dropship',
      deliveryTime: '10-15 business days',
      warranty: '3 years',
      origin: 'China',
      isFeatured: false,
      isNew: false
    },
    // Power & Connectivity
    {
      id: 5,
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
    // Services
    {
      id: 6,
      slug: 'teacher-digital-training',
      name: 'Teacher Digital Training Program',
      description: 'Comprehensive digital literacy training program for teachers, covering modern educational technology and online teaching methods.',
      shortDescription: 'Professional development for educators',
      price: 45000,
      currency: 'XAF',
      category: 'services',
      categoryLabel: 'Services',
      subcategory: 'Training',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500'
      ],
      inStock: true,
      rating: 4.8,
      reviewCount: 234,
      tags: ['training', 'teachers', 'digital', 'education', 'professional development'],
      specifications: {
        'Duration': '40 hours (5 days)',
        'Format': 'In-person + Online',
        'Participants': 'Up to 25 teachers',
        'Materials': 'Digital handbook included',
        'Certificate': 'Completion certificate',
        'Follow-up': '3 months support'
      },
      features: [
        'Hands-on technology training',
        'Online teaching methodologies',
        'Digital content creation',
        'Student engagement techniques',
        'Assessment tools training',
        'Ongoing support community'
      ],
      businessModel: 'direct',
      deliveryTime: 'Schedule within 2 weeks',
      warranty: 'N/A',
      origin: 'Local Service',
      isFeatured: true,
      isNew: false
    },



  {
    id: 7,
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
    id: 8,
    slug: 'android-tablet',
    name: 'Android Learning Tablet',
    description: 'Affordable Android tablet for digital learning.',
    shortDescription: 'Android tablet',
    price: 45000,
    currency: 'XAF',
    category: 'edtech-hardware',
    categoryLabel: 'EdTech Hardware',
    subcategory: 'Android Tablets',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500'],
    inStock: true,
    rating: 4.4,
    reviewCount: 88,
    tags: ['android', 'tablet'],
    specifications: {
      'Screen Size': '8 inches',
      'Storage': '32GB',
      'RAM': '3GB'
    },
    features: ['Wi-Fi', 'Google Play'],
    businessModel: 'direct',
    deliveryTime: '3–5 days',
    warranty: '1 year',
    origin: 'Nigeria',
    isFeatured: false,
    isNew: false
  },

  {
    id: 10,
    slug: 'mini-laptop',
    name: 'Mini Laptop',
    description: 'Compact laptop for students.',
    shortDescription: 'Mini student laptop',
    price: 120000,
    currency: 'XAF',
    category: 'edtech-hardware',
    categoryLabel: 'EdTech Hardware',
    subcategory: 'Mini Laptops',
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500'],
    inStock: true,
    rating: 4.5,
    reviewCount: 62,
    tags: ['laptop', 'portable'],
    specifications: {
      'Screen Size': '11.6 inches',
      'RAM': '4GB',
      'Storage': '128GB SSD'
    },
    features: ['Lightweight', 'HD display'],
    businessModel: 'direct',
    deliveryTime: '5–7 days',
    warranty: '2 years',
    origin: 'Ghana',
    isFeatured: false,
    isNew: false
  },

  {
    id: 31,
    slug: 'lms-subscription',
    name: 'LMS Subscription',
    description: 'Annual learning management system access for schools.',
    shortDescription: 'School LMS access',
    price: 150000,
    currency: 'XAF',
    category: 'edtech-software',
    categoryLabel: 'EdTech Software & Services',
    images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500'],
    inStock: true,
    rating: 4.6,
    reviewCount: 34,
    tags: ['lms', 'software'],
    specifications: {},
    features: ['Student tracking', 'Assignments', 'Analytics'],
    businessModel: 'commission',
    deliveryTime: 'Instant access',
    warranty: 'N/A',
    origin: 'Global',
    isFeatured: true,
    isNew: false
  },

  /* =========================
     HEALTH TECH (EXAMPLE)
     ========================= */

  {
    id: 36,
    slug: 'blood-pressure-monitor',
    name: 'Digital Blood Pressure Monitor',
    description: 'Automatic BP monitor for clinics.',
    shortDescription: 'BP monitor',
    price: 25000,
    currency: 'XAF',
    category: 'healthtech-hardware',
    categoryLabel: 'HealthTech Hardware',
    images: ['https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500'],
    inStock: true,
    rating: 4.5,
    reviewCount: 76,
    tags: ['health', 'monitor'],
    specifications: {
      'Display': 'LCD',
      'Power': 'Battery'
    },
    features: ['Automatic reading'],
    businessModel: 'direct',
    deliveryTime: '2–4 days',
    warranty: '1 year',
    origin: 'Germany',
    isFeatured: false,
    isNew: false
  },

  /* =========================
     POWER & CONNECTIVITY (EXAMPLE)
     ========================= */

  {
    id: 59,
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

  /* =========================
     SERVICES (EXAMPLE)
     ========================= */

  {
    id: 91,
    slug: 'delivery-service-cm',
    name: 'Delivery Service (Cameroon)',
    description: 'Nationwide delivery service.',
    shortDescription: 'Product delivery',
    price: 15000,
    currency: 'XAF',
    category: 'services',
    categoryLabel: 'Services',
    images: ['https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500'],
    inStock: true,
    rating: 4.8,
    reviewCount: 210,
    tags: ['delivery', 'logistics'],
    specifications: {},
    features: ['Nationwide coverage'],
    businessModel: 'direct',
    deliveryTime: '1–3 days',
    warranty: 'N/A',
    origin: 'Cameroon',
    isFeatured: true,
    isNew: false
  },


  {
    id: 73,
    slug: 'tablet-cover',
    name: 'Tablet Cover',
    description: 'Shock-resistant protective cover for tablets.',
    shortDescription: 'Tablet protective cover',
    price: 8000,
    currency: 'XAF',
    category: 'accessories',
    categoryLabel: 'Accessories',
    subcategory: 'Tablet Covers',
    images: ['https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500'],
    inStock: true,
    stockCount: 150,
    rating: 4.4,
    reviewCount: 41,
    tags: ['tablet', 'protection'],
    specifications: {
      'Material': 'Silicone',
      'Compatibility': '10–11 inch tablets'
    },
    features: ['Shock absorption', 'Easy grip'],
    businessModel: 'direct',
    deliveryTime: '1–3 business days',
    warranty: '6 months',
    brand: 'TabShield',
    origin: 'China',
    isFeatured: false,
    isNew: true
  },

 

  {
    id: 76,
    slug: 'projector-screen',
    name: 'Projector Screen',
    description: 'Wall-mountable projector screen for classrooms.',
    shortDescription: 'Projection screen',
    price: 40000,
    currency: 'XAF',
    category: 'accessories',
    categoryLabel: 'Accessories',
    subcategory: 'Projector Screens',
    images: ['https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500'],
    inStock: true,
    stockCount: 25,
    rating: 4.5,
    reviewCount: 22,
    tags: ['projector', 'screen'],
    specifications: {
      'Size': '100 inches',
      'Mount': 'Wall'
    },
    features: ['Matte surface', 'Easy installation'],
    businessModel: 'direct',
    deliveryTime: '4–6 business days',
    warranty: '1 year',
    origin: 'China',
    isFeatured: true,
    isNew: false
  },

  {
    id: 77,
    slug: 'usb-hub',
    name: 'USB Hub',
    description: 'Multi-port USB hub for laptops and PCs.',
    shortDescription: 'USB expansion hub',
    price: 9000,
    currency: 'XAF',
    category: 'accessories',
    categoryLabel: 'Accessories',
    subcategory: 'USB Hubs',
    images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500'],
    inStock: true,
    stockCount: 90,
    rating: 4.4,
    reviewCount: 37,
    tags: ['usb', 'connectivity'],
    specifications: {
      'Ports': '4 USB-A',
      'Speed': 'USB 3.0'
    },
    features: ['Plug & play'],
    businessModel: 'direct',
    deliveryTime: '2–3 business days',
    warranty: '1 year',
    origin: 'China',
    isFeatured: false,
    isNew: false
  },

  {
    id: 78,
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
  },

  {
    id: 79,
    slug: 'charging-station',
    name: 'Charging Station',
    description: 'Multi-device charging station for classrooms.',
    shortDescription: 'Device charging station',
    price: 85000,
    currency: 'XAF',
    category: 'accessories',
    categoryLabel: 'Accessories',
    subcategory: 'Charging Stations',
    images: ['https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=500'],
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviewCount: 18,
    tags: ['charging', 'school'],
    specifications: {
      'Slots': '20 devices',
      'Power': 'AC'
    },
    features: ['Secure storage', 'Overcharge protection'],
    businessModel: 'direct',
    deliveryTime: '5–7 business days',
    warranty: '2 years',
    origin: 'China',
    isFeatured: true,
    isNew: true
  },


  {
    id: 52,
    slug: 'reusable-sanitary-kit',
    name: 'Reusable Sanitary Kit',
    description: 'Eco-friendly reusable sanitary kit for girls and women.',
    shortDescription: 'Reusable sanitary kit',
    price: 12000,
    currency: 'XAF',
    category: 'health-hygiene',
    categoryLabel: 'Health & Hygiene Products',
    subcategory: 'Sanitary Products',
    images: ['https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500'],
    inStock: true,
    stockCount: 200,
    rating: 4.6,
    reviewCount: 88,
    tags: ['reusable', 'sanitary', 'eco-friendly'],
    specifications: {
      'Reusable Cycles': 'Up to 2 years',
      'Material': 'Cotton fabric',
      'Includes': 'Pads, storage pouch'
    },
    features: ['Washable', 'Cost-effective'],
    businessModel: 'direct',
    deliveryTime: '2–4 business days',
    warranty: '6 months',
    brand: 'EcoCare',
    origin: 'Kenya',
    isFeatured: false,
    isNew: true
  },

  {
    id: 53,
    slug: 'school-hygiene-kit',
    name: 'School Hygiene Kit',
    description: 'Complete hygiene kit designed for primary and secondary schools.',
    shortDescription: 'School hygiene kit',
    price: 25000,
    currency: 'XAF',
    category: 'health-hygiene',
    categoryLabel: 'Health & Hygiene Products',
    subcategory: 'Hygiene Kits',
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500'],
    inStock: true,
    stockCount: 120,
    rating: 4.8,
    reviewCount: 64,
    tags: ['school', 'hygiene'],
    specifications: {
      'Includes': 'Soap, sanitizer, tissues',
      'Target': 'Schools'
    },
    features: ['Promotes hygiene', 'Bulk-friendly'],
    businessModel: 'direct',
    deliveryTime: '3–5 business days',
    warranty: 'N/A',
    origin: 'Cameroon',
    isFeatured: true,
    isNew: false
  },

  {
    id: 54,
    slug: 'dental-hygiene-pack',
    name: 'Dental Hygiene Pack',
    description: 'Dental care pack for students and community health programs.',
    shortDescription: 'Dental hygiene pack',
    price: 8000,
    currency: 'XAF',
    category: 'health-hygiene',
    categoryLabel: 'Health & Hygiene Products',
    subcategory: 'Dental Care',
    images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500'],
    inStock: true,
    stockCount: 300,
    rating: 4.5,
    reviewCount: 95,
    tags: ['dental', 'hygiene'],
    specifications: {
      'Includes': 'Toothbrush, toothpaste',
      'Age Group': 'All ages'
    },
    features: ['Promotes oral health'],
    businessModel: 'direct',
    deliveryTime: '1–3 business days',
    warranty: 'N/A',
    origin: 'Nigeria',
    isFeatured: false,
    isNew: false
  },






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