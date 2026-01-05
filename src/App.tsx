import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
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
          <Route path="products/:slug" element={<ProductDetailPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        

        
        {/* Routes without layout (no header/footer) */}
        <Route path="lms-dashboard" element={<LmsDashboardPage />} />
        <Route path="lms-my-courses" element={<LmsMyCoursesPage />} />
        <Route path="lms-assignment" element={<LmsAssignmentPage />} />
        <Route path="lms-course-viewer" element={<LmsCourseViewerPage />} />
      </Routes>
    </Router>
  );
}