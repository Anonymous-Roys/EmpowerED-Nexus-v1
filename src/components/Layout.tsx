import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();
  
  // Pages that should not show navigation and footer
  const hideLayoutPages = [
    '/lms-dashboard',
    '/lms-my-courses',
    '/lms-assignment',
    '/lms-course-viewer'
  ];
  
  const shouldHideLayout = hideLayoutPages.some(path => 
    location.pathname.startsWith(path) || location.pathname === path
  );

  if (shouldHideLayout) {
    return (
      <div className="bg-white min-h-screen w-full overflow-x-hidden">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}