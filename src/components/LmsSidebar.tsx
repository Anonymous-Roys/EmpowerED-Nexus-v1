import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import imgWhatsAppImage from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";
import imgUserAvatar from "figma:asset/385aea917df772ff6cd9a2c50e64d3edac8a2fee.png";
import { authService } from '../utils/auth';

interface LmsSidebarProps {
  activePage: 'dashboard' | 'my-courses' | 'assignment' | 'community';
  isMobile?: boolean;
}

export function LmsSidebar({ activePage, isMobile = false }: LmsSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = authService.getCurrentUser();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSignOut = () => {
    authService.signOut();
    navigate('/');
  };
  
  const menuItems = [
    { 
      id: '/lms-dashboard', 
      label: 'Dashboard', 
      page: 'dashboard',
      icon: (
        <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 42 42" stroke="currentColor">
          <path
            d="M8.75 33.25V14L21 8.75L33.25 14V33.25H24.5V22.75H17.5V33.25H8.75Z"
            fill={activePage === 'dashboard' ? '#4EBA86' : '#0C1733'}
          />
        </svg>
      )
    },
    { 
      id: '/lms-my-courses', 
      label: 'My Courses', 
      page: 'my-courses',
      icon: (
        <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path 
    d="M12 14l9-5-9-5-9 5 9 5z" 
    fill={activePage === 'my-courses' ? '#4EBA86' : '#0C1733'} 
  />
  <path 
    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
    fill={activePage === 'my-courses' ? '#4EBA86' : '#0C1733'}
  />
  
</svg>
      )
    },
    { 
      id: '/lms-assignment', 
      label: 'Assignment', 
      page: 'assignment',
      icon: (
        <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 42 42" stroke="currentColor">
          <path
            d="M14 8.75H10.5C9.83696 8.75 9.20107 9.01339 8.73223 9.48223C8.26339 9.95107 8 10.587 8 11.25V31.5C8 32.163 8.26339 32.7989 8.73223 33.2678C9.20107 33.7366 9.83696 34 10.5 34H31.5C32.163 34 32.7989 33.7366 33.2678 33.2678C33.7366 32.7989 34 32.163 34 31.5V11.25C34 10.587 33.7366 9.95107 33.2678 9.48223C32.7989 9.01339 32.163 8.75 31.5 8.75H28M14 8.75C14 9.41304 14.2634 10.0489 14.7322 10.5178C15.2011 10.9866 15.837 11.25 16.5 11.25H25.5C26.163 11.25 26.7989 10.9866 27.2678 10.5178C27.7366 10.0489 28 9.41304 28 8.75M14 8.75C14 8.08696 14.2634 7.45107 14.7322 6.98223C15.2011 6.51339 15.837 6.25 16.5 6.25H25.5C26.163 6.25 26.7989 6.51339 27.2678 6.98223C27.7366 7.45107 28 8.08696 28 8.75M14 21H28M14 26.25H28"
            stroke={activePage === 'assignment' ? '#4EBA86' : '#0C1733'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    { 
      id: '/community-forum', 
      label: 'Community', 
      page: 'community',
      icon: (
        <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 42 42">
          <path
            d="M21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z"
            stroke={activePage === 'community' ? '#4EBA86' : '#0C1733'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.75V11.25M21 30.75V33.25M11.9913 11.9913L13.7588 13.7588M28.2412 28.2412L30.0087 30.0087M8.75 21H11.25M30.75 21H33.25M11.9913 30.0087L13.7588 28.2412M28.2412 13.7588L30.0087 11.9913"
            stroke={activePage === 'community' ? '#4EBA86' : '#0C1733'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) setIsOpen(false);
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg border border-gray-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
        )}

        {/* Mobile Sidebar */}
        <div className={`lg:hidden fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 pt-16">
            <SidebarContent 
              activePage={activePage} 
              menuItems={menuItems} 
              user={user} 
              handleNavigation={handleNavigation} 
              handleSignOut={handleSignOut} 
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="hidden lg:block">
      <div className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 h-fit lg:sticky lg:top-8">
        <SidebarContent 
          activePage={activePage} 
          menuItems={menuItems} 
          user={user} 
          handleNavigation={handleNavigation} 
          handleSignOut={handleSignOut} 
        />
      </div>
    </div>
  );
}

function SidebarContent({ activePage, menuItems, user, handleNavigation, handleSignOut }: {
  activePage: string;
  menuItems: any[];
  user: any;
  handleNavigation: (path: string) => void;
  handleSignOut: () => void;
}) {
  return (
    <>
      {/* Main Action Button */}
      <button
        onClick={() => handleNavigation(activePage === 'dashboard' ? '/lms-dashboard' : '/lms-my-courses')}
        className={`w-full rounded-[8px] px-6 py-4 mb-8 font-['Montserrat:Bold',sans-serif] text-[18px] transition-all duration-300 hover:scale-[1.02] ${
          activePage === 'dashboard'
            ? 'bg-[#4eba86] text-black hover:bg-[#45a878]'
            : 'bg-white border border-[#4eba86] text-[#4eba86] hover:bg-[#4eba86] hover:text-black'
        }`}
      >
        {activePage === 'dashboard' ? 'Dashboard' : 'My Courses'}
      </button>

      {/* Menu Items */}
      <div className="space-y-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`w-full flex items-center gap-4 text-left font-['Montserrat:Bold',sans-serif] text-[18px] transition-colors ${
              activePage === item.page ? 'text-[#4eba86]' : 'text-black hover:text-[#4eba86]'
            }`}
          >
            {item.icon}
            <span className="sm:inline">{item.label}</span>
          </button>
        ))}

        {/* Sign Out */}
        <button 
          onClick={handleSignOut}
          className="w-full flex items-center gap-4 text-left font-['Montserrat:Bold',sans-serif] text-[18px] text-red-600 hover:text-red-700 transition-colors mt-6"
        >
          <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 42 42">
            <path
              d="M15.75 37.625H8.75C7.75544 37.625 6.80161 37.2299 6.09835 36.5267C5.39509 35.8234 5 34.8696 5 33.875V8.125C5 7.13044 5.39509 6.17661 6.09835 5.47335C6.80161 4.77009 7.75544 4.375 8.75 4.375H15.75M28 29.75L37 21L28 12.25M37 21H15.75"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sm:inline">Sign Out</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="mt-12 flex items-center gap-4">
        <div className="w-[78px] h-[78px] rounded-full overflow-hidden flex-shrink-0">
          <img src={imgUserAvatar} alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="hidden sm:block">
          <p className="font-['Montserrat:Bold',sans-serif] text-[18px] text-black">
            {user?.name || 'Student'}
          </p>
          <p className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
            {user?.email || 'student@example.com'}
          </p>
        </div>
      </div>

      {/* Logo at Bottom */}
      <div className="mt-12 flex justify-center">
        <img src={imgWhatsAppImage} alt="Logo" className="w-[138px] h-[138px] object-contain" />
      </div>
    </>
  );
}