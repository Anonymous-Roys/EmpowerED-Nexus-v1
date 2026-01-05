import imgBookCompositionWithReadingGlassesBook2 from "figma:asset/7325ffba98817243876f345920a4064617042364.png";
import imgPortraitNurseScrubsClinic1 from "figma:asset/3dbb7634cd18157b436775c0b14d73d0ebcba9dd.png";
import imgCloseupShotBoyGettingCheckup1 from "figma:asset/ae8adf0a0c25fc10ee3d4efd217c5e5175620249.png";
import imgGroupAfricanKidsPayingAttentionClass1 from "figma:asset/cb001d8e1b5bd36e7f6e50bb5448aa473785b758.png";
import imgAfricanAmericanPeopleDoingConsultationWithDiseaseDiagnosisLaptopSittingWaitingAreaLobbyNurseFemalePatientTalkingAboutTreatmentRecoveryHealthcareSupportClinic1 from "figma:asset/e57bb778e4c78300cd2a0b2af6d0aa738745c794.png";
import imgRectangle251 from "figma:asset/9b07e0b5444e1f6bd40decab9d59f7192aa390f1.png";

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  priceXAF: number;
  priceUSD: number;
  image: string;
  category: string;
  subtitle?: string;
  fullDescription?: string[];
  features?: string[];
  requirements?: string[];
  additionalImages?: string[]; // NEW: Array of additional product images
  reviews?: {
    name: string;
    text: string;
    rating: number;
    highlight?: string; // NEW: Optional highlighted text in review
  }[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'offline-k12-curriculum',
    title: 'Offline K-12 curriculum',
    description: 'Complete toolkit for offline-first learning',
    priceXAF: 25000,
    priceUSD: 42,
    image: imgBookCompositionWithReadingGlassesBook2,
    category: 'education',
    additionalImages: [
      imgGroupAfricanKidsPayingAttentionClass1
    ],
    subtitle: 'A comprehensive, offline-first digital curriculum designed for the modern African classroom.',
    fullDescription: [
      'Unlock the potential of every student, regardless of internet connectivity. The EmpowerEd Nexus Offline Learning Suite is a revolutionary platform that brings a world-class digital curriculum to classrooms across Africa.',
      'This package includes a full year\'s access to our core curriculum for primary grades 1-6, covering Mathematics, English, Science, and Social Studies.'
    ],
    features: [
      'Complete K-6 curriculum for Math, English, Science & Social Studies',
      'Works 100% offline with local micro-cloud deployment',
      'Interactive video lessons & quizzes designed by African educators',
      'Real-time student progress tracking & analytics dashboard'
    ],
    requirements: [
      'Local server or Raspberry Pi for micro-cloud setup',
      'Minimum 50GB storage space',
      'Compatible devices: Tablets, laptops, or desktop computers'
    ],
    reviews: [
      { name: 'Kwame H.', text: 'A game-changer for our rural school. Students are more engaged than ever.', rating: 5, highlight: 'A game-changer for our rural school.' },
      { name: 'Samuel B', text: 'The content is excellent and very relevant to our curriculum.', rating: 5, highlight: 'The content is excellent and very relevant to our curriculum.' }
    ]
  },
  {
    id: 2,
    slug: 'health-worker-template-pack',
    title: 'Health Worker Template Pack',
    description: 'Essential templates for community health',
    priceXAF: 15000,
    priceUSD: 25,
    image: imgPortraitNurseScrubsClinic1,
    additionalImages: [
      imgAfricanAmericanPeopleDoingConsultationWithDiseaseDiagnosisLaptopSittingWaitingAreaLobbyNurseFemalePatientTalkingAboutTreatmentRecoveryHealthcareSupportClinic1,
      imgGroupAfricanKidsPayingAttentionClass1,

    ],
    category: 'health',
    subtitle: 'Essential templates and tools for community health workers to streamline patient care.',
    fullDescription: [
      'Empower your community health workers with professional, easy-to-use templates designed specifically for African healthcare contexts.',
      'All templates are available in multiple languages and can be customized to fit your community\'s specific needs.'
    ],
    features: [
      'Patient intake & medical history forms',
      'Vaccination schedule trackers & reminder systems',
      'Health education presentation templates',
      'Available in English, French, and Swahili'
    ],
    requirements: [
      'PDF reader or Microsoft Word/Google Docs',
      'Printer for physical forms (optional)',
      'Basic computer literacy'
    ],
    reviews: [
      { name: 'Dr. Amina K.', text: 'These templates have saved our clinic countless hours.', rating: 5 }
    ]
  },
  {
    id: 3,
    slug: 'digital-literacy-course',
    title: 'Digital Literacy Course',
    description: 'Learn essential digital skills anytime',
    priceXAF: 20000,
    priceUSD: 33,
    image: imgRectangle251,
    additionalImages: [
      imgBookCompositionWithReadingGlassesBook2,
      imgGroupAfricanKidsPayingAttentionClass1
    ],
    category: 'education',
    subtitle: 'A comprehensive self-paced course teaching essential digital skills for the 21st century.',
    fullDescription: [
      'Bridge the digital divide with our culturally-relevant digital literacy course designed for African learners.',
      'The course is structured in modules that can be completed at your own pace, with video tutorials and interactive exercises.'
    ],
    features: [
      '12 comprehensive modules covering essential digital skills',
      'Video tutorials with downloadable resources',
      'Topics: Computer basics, Microsoft Office, Google Suite, Internet skills',
      'Certificate of completion'
    ],
    requirements: [
      'Computer, tablet, or smartphone',
      'No prior digital experience required',
      'Internet connection for initial download'
    ],
    reviews: [
      { name: 'Grace N.', text: 'Started with zero computer skills, now I\'m confident using all major software.', rating: 5, highlight: 'Started with zero computer skills, now I\'m confident using all major software.' }
    ]
  },
  {
    id: 4,
    slug: 'rural-clinic-management-kit',
    title: 'Rural Clinic Management Kit',
    description: 'Streamline your clinic operations',
    priceXAF: 30000,
    priceUSD: 50,
    image: imgCloseupShotBoyGettingCheckup1,
    additionalImages: [
      imgAfricanAmericanPeopleDoingConsultationWithDiseaseDiagnosisLaptopSittingWaitingAreaLobbyNurseFemalePatientTalkingAboutTreatmentRecoveryHealthcareSupportClinic1,
      imgGroupAfricanKidsPayingAttentionClass1
    ],
    category: 'health',
    subtitle: 'Complete digital management system for rural health clinics.',
    fullDescription: [
      'Transform your rural clinic operations with our comprehensive management toolkit.',
      'The system includes training materials for staff, customizable forms and workflows.'
    ],
    features: [
      'Electronic patient records & medical history tracking',
      'Appointment scheduling & SMS reminders',
      'Inventory management for medicines & supplies',
      'Monthly/quarterly reporting & analytics dashboard'
    ],
    requirements: [
      'Computer or tablet for main system',
      'Windows 7+, macOS, or Linux operating system',
      'Minimum 8GB RAM, 100GB storage'
    ],
    reviews: [
      { name: 'Dr. Kojo A.', text: 'Cut our administrative time by 60%. Now we can focus more on patient care.', rating: 5 }
    ]
  },
  {
    id: 5,
    slug: 'teacher-training-module',
    title: 'Teacher Training Module',
    description: 'Upskill your teaching staff effectively',
    priceXAF: 18000,
    priceUSD: 30,
    image: imgGroupAfricanKidsPayingAttentionClass1,
    category: 'education',
    subtitle: 'Professional development program for educators covering modern teaching methods.',
    fullDescription: [
      'Empower your teaching staff with cutting-edge pedagogical training designed for the African educational context.',
      'The program includes video lessons, downloadable resources, practical exercises, and assessment tools.'
    ],
    features: [
      '10 comprehensive training modules',
      'Modern pedagogy & student-centered learning approaches',
      'Classroom management & behavioral strategies',
      'Professional certificate upon completion'
    ],
    requirements: [
      'Computer, tablet, or smartphone',
      'Internet for initial download (offline use after)',
      'Approximately 20-30 hours to complete'
    ],
    reviews: [
      { name: 'Teacher Rose M.', text: 'Transformed my teaching approach. Students are more engaged!', rating: 5 }
    ]
  },
  {
    id: 6,
    slug: 'public-health-data-toolkit',
    title: 'Public Health Data Toolkit',
    description: 'Tools for collecting and analyzing health data.',
    priceXAF: 22000,
    priceUSD: 37,
    image: imgAfricanAmericanPeopleDoingConsultationWithDiseaseDiagnosisLaptopSittingWaitingAreaLobbyNurseFemalePatientTalkingAboutTreatmentRecoveryHealthcareSupportClinic1,
    category: 'health',
    subtitle: 'Comprehensive toolkit for collecting, analyzing, and visualizing public health data.',
    fullDescription: [
      'Make evidence-based public health decisions with our comprehensive data collection and analysis toolkit.',
      'Includes customizable survey templates, data collection forms, analysis spreadsheets, and visualization tools.'
    ],
    features: [
      'Customizable health survey & data collection templates',
      'Offline data entry with mobile device support',
      'Automated data analysis & statistical tools',
      'Interactive charts & visualization dashboards'
    ],
    requirements: [
      'Computer or tablet',
      'Microsoft Excel or Google Sheets',
      'Compatible with mobile devices for field data collection'
    ],
    reviews: [
      { name: 'Health Officer Jane T.', text: 'Makes complex data analysis accessible. Essential tool!', rating: 5 }
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};