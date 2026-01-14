import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ServicePage } from './components/ServicePage';
import { ProductPage } from './components/ProductPage';
import { MarketplacePage } from './components/MarketplacePage';
import { MarketProductDetailPage } from './components/MarketProductDetailPage';
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
import SignInPage from './components/SignInPage';
import { authService } from './utils/auth';
import { ProductDetailPage } from './components/ProductDetailPage';
import { NotFoundPage } from './components/NotFoundPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = authService.getCurrentUser();
  return user ? <>{children}</> : <Navigate to="/signin" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="podcast" element={<PodcastPage />} />
          <Route path="community-forum" element={<CommunityForumPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="marketplace/product/:slug" element={<MarketProductDetailPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        

        <Route path="signin" element={<SignInPage />} />
        
        {/* Routes without layout (no header/footer) */}
        {/* <Route path="lms" element={<ProtectedRoute><LmsDashboardPage /></ProtectedRoute>} />
        <Route path="lms-dashboard" element={<ProtectedRoute><LmsDashboardPage /></ProtectedRoute>} />
        <Route path="lms-my-courses" element={<ProtectedRoute><LmsMyCoursesPage /></ProtectedRoute>} />
        <Route path="lms-assignment" element={<ProtectedRoute><LmsAssignmentPage /></ProtectedRoute>} />
        <Route path="lms-course-viewer" element={<ProtectedRoute><LmsCourseViewerPage /></ProtectedRoute>} />
        <Route path="lms-course-viewer/:slug" element={<ProtectedRoute><LmsCourseViewerPage /></ProtectedRoute>} /> */}
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}