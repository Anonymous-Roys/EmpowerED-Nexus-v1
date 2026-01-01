import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { ProductPage } from './components/ProductPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CheckoutPage } from './components/CheckoutPage';
import { ImpactPage } from './components/ImpactPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LmsDashboardPage } from './components/LmsDashboardPage';
import { LmsMyCoursesPage } from './components/LmsMyCoursesPage';
import { LmsAssignmentPage } from './components/LmsAssignmentPage';
import { LmsCourseViewerPage } from './components/LmsCourseViewerPage';
import { PodcastPage } from './components/PodcastPage';
import { CommunityForumPage } from './components/CommunityForumPage';
import { BlogPage } from './components/BlogPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleNavigate = (page: string, productId?: number) => {
    // Map dropdown labels to page IDs
    const pageMap: { [key: string]: string } = {
      'LMS Dashboard': 'lms-dashboard',
      'Podcast': 'podcast',
      'Comm.. Foru': 'community-forum',
      'Blog': 'blog',
      'Privacy Poli': 'privacy-policy',
    };
    
    const targetPage = pageMap[page] || page;
    setCurrentPage(targetPage);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStore = () => {
    setCurrentPage('digital-store');
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProductDetail = () => {
    setCurrentPage('productDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Navigation - Only show on non-detail, non-checkout, and non-LMS pages */}
      {currentPage !== 'productDetail' && 
       currentPage !== 'checkout' && 
       currentPage !== 'lms-dashboard' && 
       currentPage !== 'lms-my-courses' && 
       currentPage !== 'lms-assignment' && (
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'service' && <ServicePage />}
      {currentPage === 'digital-store' && <ProductPage onNavigate={handleNavigate} />}
      {currentPage === 'productDetail' && selectedProductId && (
        <ProductDetailPage 
          productId={selectedProductId} 
          onBack={handleBackToStore}
          onAddToCart={handleAddToCart}
        />
      )}
      {currentPage === 'checkout' && selectedProductId && (
        <CheckoutPage 
          productId={selectedProductId} 
          onBack={handleBackToProductDetail}
        />
      )}
      {currentPage === 'impact' && <ImpactPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'lms-dashboard' && <LmsDashboardPage onNavigate={handleNavigate} />}
      {currentPage === 'lms-my-courses' && <LmsMyCoursesPage onNavigate={handleNavigate} />}
      {currentPage === 'lms-assignment' && <LmsAssignmentPage onNavigate={handleNavigate} />}
      {currentPage === 'lms-course-viewer' && <LmsCourseViewerPage onNavigate={handleNavigate} />}
      {currentPage === 'podcast' && <PodcastPage />}
      {currentPage === 'community-forum' && <CommunityForumPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'privacy-policy' && <PrivacyPolicyPage />}

      {/* Footer - Only show on main pages (not on product detail, checkout, or LMS pages) */}
      {currentPage !== 'productDetail' && 
       currentPage !== 'checkout' && 
       currentPage !== 'lms-dashboard' && 
       currentPage !== 'lms-my-courses' && 
       currentPage !== 'lms-assignment' && 
       currentPage !== 'lms-course-viewer' && (
        <Footer />
      )}
    </div>
  );
}