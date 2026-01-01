import { useState } from 'react';
import svgPaths from "../imports/svg-6d62hcom9s";
import imgRectangle157 from "figma:asset/8c8aa3ee72847f8415de61027be421fbaf58b3c7.png";
import imgLearning31 from "figma:asset/45ab2855983dc48aa2cbcbe5c51c57189b34e7cf.png";
import imgLearning32 from "figma:asset/f6a5f45ba48fe7e82219a85812eb100fe46a8d89.png";
import imgLearning33 from "figma:asset/ae6b17e4a18b0760d8dff8172b4575428d05ba26.png";

interface ProductData {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  priceXAF: number;
  priceUSD: number;
  mainImage: string;
  thumbnails: string[];
  features: string[];
  requirements: string[];
  reviews: {
    name: string;
    text: string;
    rating: number;
  }[];
}

const productDatabase: Record<number, ProductData> = {
  1: {
    id: 1,
    title: 'Offline Learning Suite for Primary Schools',
    subtitle: 'A comprehensive, offline-first digital curriculum designed for the modern African classroom. Empower students with interactive lessons, even without an internet connection.',
    description: [
      'Unlock the potential of every student, regardless of internet connectivity. The EmpowerEd Nexus Offline Learning Suite is a revolutionary platform that brings a world-class digital curriculum to classrooms across Africa. Our solution is built on a micro-cloud infrastructure, allowing schools to deploy rich, interactive content, track student progress, and provide teachers with powerful tools, all without relying on a stable internet connection.',
      'This package includes a full year\'s access to our core curriculum for primary grades 1-6, covering Mathematics, English, Science, and Social Studies. Lessons are designed by local educators to be culturally relevant and engaging, incorporating video, interactive quizzes, and project-based learning modules.'
    ],
    priceXAF: 8500,
    priceUSD: 14,
    mainImage: imgRectangle157,
    thumbnails: [imgLearning31, imgLearning32, imgLearning33],
    features: [
      'Complete K-6 curriculum for Math, English, Science & Social Studies',
      'Works 100% offline with local micro-cloud deployment',
      'Interactive video lessons & quizzes designed by African educators',
      'Real-time student progress tracking & analytics dashboard',
      'Project-based learning modules & assessment tools',
      'Regular content updates & curriculum enhancements'
    ],
    requirements: [
      'Local server or Raspberry Pi for micro-cloud setup',
      'Minimum 50GB storage space',
      'Compatible devices: Tablets, laptops, or desktop computers',
      'Operating System: Windows 7+, macOS 10.12+, Linux, Android 5.0+',
      'Recommended: 1 device per 3-5 students'
    ],
    reviews: [
      {
        name: 'Kwame H.',
        text: 'A game-changer for our rural school. The students are more engaged than ever, and the offline functionality is flawless.',
        rating: 5
      },
      {
        name: 'Samuel B',
        text: 'The content is excellent and very relevant to our curriculum.',
        rating: 5
      },
      {
        name: 'Akua.L',
        text: 'Fantastic product. The teacher dashboard helps me identify students who need extra help. Highly recommend!',
        rating: 5
      }
    ]
  },
  2: {
    id: 2,
    title: 'Health Worker Template Pack',
    subtitle: 'Essential templates and tools for community health workers to streamline patient care, record keeping, and health education delivery.',
    description: [
      'Empower your community health workers with professional, easy-to-use templates designed specifically for African healthcare contexts. This comprehensive pack includes patient intake forms, health education materials, vaccination schedules, and reporting templates that work offline.',
      'All templates are available in multiple languages and can be customized to fit your community\'s specific needs. Includes training materials and best practice guides for implementing effective community health programs.'
    ],
    priceXAF: 15000,
    priceUSD: 25,
    mainImage: 'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    features: [
      'Patient intake & medical history forms',
      'Vaccination schedule trackers & reminder systems',
      'Health education presentation templates',
      'Daily/weekly/monthly reporting templates',
      'Community health assessment tools',
      'Available in English, French, and Swahili'
    ],
    requirements: [
      'PDF reader or Microsoft Word/Google Docs',
      'Printer for physical forms (optional)',
      'Basic computer literacy',
      'Compatible with mobile devices for field use'
    ],
    reviews: [
      {
        name: 'Dr. Amina K.',
        text: 'These templates have saved our clinic countless hours. Professional, culturally appropriate, and easy to customize.',
        rating: 5
      },
      {
        name: 'Joseph M.',
        text: 'Perfect for our mobile health unit. Everything we need in one package.',
        rating: 5
      }
    ]
  },
  3: {
    id: 3,
    title: 'Digital Literacy Course',
    subtitle: 'A comprehensive self-paced course teaching essential digital skills for the 21st century workplace and education.',
    description: [
      'Bridge the digital divide with our culturally-relevant digital literacy course designed for African learners. This comprehensive program covers everything from basic computer operations to internet safety, productivity software, and digital communication.',
      'The course is structured in modules that can be completed at your own pace, with video tutorials, interactive exercises, and real-world projects. Perfect for students, job seekers, and professionals looking to enhance their digital skills.'
    ],
    priceXAF: 20000,
    priceUSD: 33,
    mainImage: 'https://images.unsplash.com/photo-1610788725779-e51d62d1e571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzEzNTU5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1610788725779-e51d62d1e571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzEzNTU5MHww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1610788725779-e51d62d1e571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzEzNTU5MHww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1610788725779-e51d62d1e571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzEzNTU5MHww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    features: [
      '12 comprehensive modules covering essential digital skills',
      'Video tutorials with downloadable resources',
      'Hands-on projects & practical exercises',
      'Topics: Computer basics, Microsoft Office, Google Suite, Internet skills',
      'Certificate of completion',
      'Lifetime access to course materials & updates'
    ],
    requirements: [
      'Computer, tablet, or smartphone',
      'No prior digital experience required',
      'Internet connection for initial download (can be used offline after)',
      '5GB storage space for course materials'
    ],
    reviews: [
      {
        name: 'Grace N.',
        text: 'Started with zero computer skills, now I\'m confident using all the major software. Life-changing!',
        rating: 5
      },
      {
        name: 'Michael O.',
        text: 'Clear explanations and practical examples. Helped me get my first office job.',
        rating: 5
      }
    ]
  },
  4: {
    id: 4,
    title: 'Rural Clinic Management Kit',
    subtitle: 'Complete digital management system for rural health clinics to streamline operations, patient records, and inventory tracking.',
    description: [
      'Transform your rural clinic operations with our comprehensive management toolkit. Designed specifically for resource-constrained settings, this system helps you manage patient records, track inventory, schedule appointments, and generate reports - all without requiring constant internet connectivity.',
      'The system includes training materials for staff, customizable forms and workflows, and analytics tools to help you make data-driven decisions about clinic operations and resource allocation.'
    ],
    priceXAF: 30000,
    priceUSD: 50,
    mainImage: 'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYWZyaWNhfGVufDF8fHx8MTc2NzIwNzk1NHww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    features: [
      'Electronic patient records & medical history tracking',
      'Appointment scheduling & SMS reminders',
      'Inventory management for medicines & supplies',
      'Financial tracking & billing system',
      'Staff scheduling & task management',
      'Monthly/quarterly reporting & analytics dashboard'
    ],
    requirements: [
      'Computer or tablet for main system',
      'Windows 7+, macOS, or Linux operating system',
      'Minimum 8GB RAM, 100GB storage',
      'Optional: Printer for patient records and reports',
      'Basic training provided for clinic staff'
    ],
    reviews: [
      {
        name: 'Nurse Fatima L.',
        text: 'Finally, a system that understands rural clinic challenges. Easy to use and incredibly helpful for tracking our patients.',
        rating: 5
      },
      {
        name: 'Dr. Kojo A.',
        text: 'Cut our administrative time by 60%. Now we can focus more on patient care.',
        rating: 5
      }
    ]
  },
  5: {
    id: 5,
    title: 'Teacher Training Module',
    subtitle: 'Professional development program for educators covering modern teaching methods, classroom management, and technology integration.',
    description: [
      'Empower your teaching staff with cutting-edge pedagogical training designed for the African educational context. This comprehensive training module covers modern teaching methodologies, effective classroom management, student engagement strategies, and seamless technology integration.',
      'The program includes video lessons, downloadable resources, practical exercises, and assessment tools. Teachers can complete the training at their own pace and receive a certificate upon completion.'
    ],
    priceXAF: 18000,
    priceUSD: 30,
    mainImage: 'https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjcyMDc5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjcyMDc5NTV8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjcyMDc5NTV8MA&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjcyMDc5NTV8MA&ixlib=rb-4.1.0&q=80&w=400'
    ],
    features: [
      '10 comprehensive training modules',
      'Modern pedagogy & student-centered learning approaches',
      'Classroom management & behavioral strategies',
      'Technology integration for offline & online teaching',
      'Assessment & evaluation best practices',
      'Professional certificate upon completion'
    ],
    requirements: [
      'Computer, tablet, or smartphone',
      'Internet for initial download (offline use after)',
      'Teaching experience helpful but not required',
      'Approximately 20-30 hours to complete'
    ],
    reviews: [
      {
        name: 'Teacher Rose M.',
        text: 'Transformed my teaching approach. My students are more engaged and learning outcomes have improved significantly!',
        rating: 5
      },
      {
        name: 'Principal David K.',
        text: 'Rolled this out to all our teachers. Excellent content, very practical and relevant.',
        rating: 5
      }
    ]
  },
  6: {
    id: 6,
    title: 'Public Health Data Toolkit',
    subtitle: 'Comprehensive toolkit for collecting, analyzing, and visualizing public health data to inform community health decisions.',
    description: [
      'Make evidence-based public health decisions with our comprehensive data collection and analysis toolkit. Designed for health departments, NGOs, and community health organizations, this toolkit provides everything you need to gather, analyze, and visualize health data.',
      'Includes customizable survey templates, data collection forms, analysis spreadsheets, and visualization tools. Works completely offline with optional cloud sync when internet is available.'
    ],
    priceXAF: 22000,
    priceUSD: 37,
    mainImage: 'https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NzIwNzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NzIwNzk1NXww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NzIwNzk1NXww&ixlib=rb-4.1.0&q=80&w=400',
      'https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NzIwNzk1NXww&ixlib=rb-4.1.0&q=80&w=400'
    ],
    features: [
      'Customizable health survey & data collection templates',
      'Offline data entry with mobile device support',
      'Automated data analysis & statistical tools',
      'Interactive charts & visualization dashboards',
      'Export reports in PDF & Excel formats',
      'Training videos & documentation included'
    ],
    requirements: [
      'Computer or tablet',
      'Microsoft Excel or Google Sheets',
      'Compatible with mobile devices for field data collection',
      'No advanced statistics knowledge required',
      'Basic training provided'
    ],
    reviews: [
      {
        name: 'Health Officer Jane T.',
        text: 'Makes complex data analysis accessible. We can now make informed decisions backed by solid evidence.',
        rating: 5
      },
      {
        name: 'NGO Director Paul W.',
        text: 'Essential tool for our community health programs. Great value and comprehensive features.',
        rating: 5
      }
    ]
  }
};

interface ProductDetailPageProps {
  productId: number;
  onBack: () => void;
  onAddToCart?: (productId: number) => void;
}

export function ProductDetailPage({ productId, onBack, onAddToCart }: ProductDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'requirements'>('description');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productDatabase[productId];

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] text-black mb-4">
            Product not found
          </h2>
          <button
            onClick={onBack}
            className="bg-[#4eba86] hover:bg-[#3da670] text-white font-['Barlow:SemiBold',sans-serif] text-[18px] px-8 py-3 rounded-[8px] transition-all duration-300"
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(productId);
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute h-[641px] left-[-325px] top-[-275px] w-[570px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 570 641">
          <ellipse cx="285" cy="320.5" fill="#0C1733" rx="285" ry="320.5" />
        </svg>
      </div>
      <div className="absolute h-[420px] right-[-100px] top-[436px] w-[448px] pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 420">
          <ellipse cx="224" cy="210" fill="#4EBA86" rx="224" ry="210" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1375px] mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 font-['Montserrat:SemiBold',sans-serif] text-[16px] text-[#0c1733] hover:text-[#4eba86] transition-colors duration-300 group"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Store
        </button>

        {/* Product Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image Section */}
          <div>
            <div className="bg-[#d9d9d9] rounded-[8px] overflow-hidden mb-4 h-[350px] md:h-[450px]">
              <img
                src={selectedImage === 0 ? product.mainImage : product.thumbnails[selectedImage - 1]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedImage(0)}
                className={`rounded-[8px] overflow-hidden h-[89px] w-[134px] flex-shrink-0 transition-all duration-300 ${
                  selectedImage === 0 ? 'ring-4 ring-[#4eba86]' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={product.mainImage}
                  alt="Main"
                  className="w-full h-full object-cover"
                />
              </button>
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx + 1)}
                  className={`rounded-[8px] overflow-hidden h-[89px] w-[134px] flex-shrink-0 transition-all duration-300 ${
                    selectedImage === idx + 1 ? 'ring-4 ring-[#4eba86]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <h1 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[32px] text-black mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3] mb-6 leading-relaxed">
              {product.subtitle}
            </p>
            <p className="font-['Montserrat:Bold',sans-serif] text-[32px] text-black mb-6">
              {product.priceXAF.toLocaleString()} XAF
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-[#0c1733] hover:bg-[#162847] text-white font-['Montserrat:SemiBold',sans-serif] text-[14px] px-12 py-3 rounded-[8px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg mb-4"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-8">
          <div className="flex gap-8 mb-6 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`font-['Montserrat:SemiBold',sans-serif] text-[18px] pb-2 transition-colors duration-300 ${
                activeTab === 'description'
                  ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                  : 'text-black hover:text-[#2e92c6]'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`font-['Montserrat:SemiBold',sans-serif] text-[18px] pb-2 transition-colors duration-300 ${
                activeTab === 'features'
                  ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                  : 'text-black hover:text-[#2e92c6]'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`font-['Montserrat:SemiBold',sans-serif] text-[18px] pb-2 transition-colors duration-300 ${
                activeTab === 'requirements'
                  ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                  : 'text-black hover:text-[#2e92c6]'
              }`}
            >
              Requirements
            </button>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === 'description' && (
              <div className="space-y-4">
                {product.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3] leading-relaxed flex items-start"
                  >
                    <span className="text-[#4eba86] mr-3 text-[20px]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'requirements' && (
              <ul className="space-y-3">
                {product.requirements.map((requirement, idx) => (
                  <li
                    key={idx}
                    className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3] leading-relaxed flex items-start"
                  >
                    <span className="text-[#0c1733] mr-3 text-[20px]">•</span>
                    {requirement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mb-16">
          <h2 className="font-['Montserrat:SemiBold',sans-serif] text-[24px] text-black text-center mb-8">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white border border-black rounded-[10px] p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[14px] text-black mb-3">
                  {review.name}
                </h3>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#4eba86] text-[18px]">★</span>
                  ))}
                </div>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}