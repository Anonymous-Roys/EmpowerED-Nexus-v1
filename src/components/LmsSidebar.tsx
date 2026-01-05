import { useNavigate, useLocation } from 'react-router-dom';
import imgWhatsAppImage from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";
import imgUserAvatar from "figma:asset/385aea917df772ff6cd9a2c50e64d3edac8a2fee.png";
import { authService } from '../utils/auth';

interface LmsSidebarProps {
  activePage: 'dashboard' | 'my-courses' | 'assignment' | 'community';
}

export function LmsSidebar({ activePage }: LmsSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = authService.getCurrentUser();
  
  const handleSignOut = () => {
    authService.signOut();
    navigate('/');
  };
  
  const menuItems = [
    { id: '/lms-dashboard', label: 'Dashboard', page: 'dashboard' },
    { id: '/lms-my-courses', label: 'My Courses', page: 'my-courses' },
    { id: '/lms-assignment', label: 'Assignment', page: 'assignment' },
    { id: '/lms-community', label: 'Community', page: 'community' },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 h-fit lg:sticky lg:top-8">
      {/* Dashboard/My Courses Button - Changes based on active page */}
      <button
        onClick={() => navigate(activePage === 'dashboard' ? '/lms-dashboard' : '/lms-my-courses')}
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
        {/* My Courses */}
        <button
          onClick={() => navigate('/lms-my-courses')}
          className={`w-full flex items-center gap-4 text-left font-['Montserrat:Bold',sans-serif] text-[18px] transition-colors ${
            activePage === 'my-courses' ? 'text-[#4eba86]' : 'text-black hover:text-[#4eba86]'
          }`}
        >
          <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 42 42">
            <path
              d="M8.75 33.25V14L21 8.75L33.25 14V33.25H24.5V22.75H17.5V33.25H8.75Z"
              fill={activePage === 'my-courses' ? '#4EBA86' : '#0C1733'}
            />
          </svg>
          <span>My Courses</span>
        </button>

        {/* Assignment */}
        <button
          onClick={() => navigate('/lms-assignment')}
          className={`w-full flex items-center gap-4 text-left font-['Montserrat:Bold',sans-serif] text-[18px] transition-colors ${
            activePage === 'assignment' ? 'text-[#4eba86]' : 'text-black hover:text-[#4eba86]'
          }`}
        >
          <svg className="w-[42px] h-[42px] flex-shrink-0" fill="none" viewBox="0 0 42 42">
            <path
              d="M14 8.75H10.5C9.83696 8.75 9.20107 9.01339 8.73223 9.48223C8.26339 9.95107 8 10.587 8 11.25V31.5C8 32.163 8.26339 32.7989 8.73223 33.2678C9.20107 33.7366 9.83696 34 10.5 34H31.5C32.163 34 32.7989 33.7366 33.2678 33.2678C33.7366 32.7989 34 32.163 34 31.5V11.25C34 10.587 33.7366 9.95107 33.2678 9.48223C32.7989 9.01339 32.163 8.75 31.5 8.75H28M14 8.75C14 9.41304 14.2634 10.0489 14.7322 10.5178C15.2011 10.9866 15.837 11.25 16.5 11.25H25.5C26.163 11.25 26.7989 10.9866 27.2678 10.5178C27.7366 10.0489 28 9.41304 28 8.75M14 8.75C14 8.08696 14.2634 7.45107 14.7322 6.98223C15.2011 6.51339 15.837 6.25 16.5 6.25H25.5C26.163 6.25 26.7989 6.51339 27.2678 6.98223C27.7366 7.45107 28 8.08696 28 8.75M14 21H28M14 26.25H28"
              stroke={activePage === 'assignment' ? '#4EBA86' : '#0C1733'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Assignment</span>
        </button>

        {/* Community */}
        <button
          className={`w-full flex items-center gap-4 text-left font-['Montserrat:Bold',sans-serif] text-[18px] transition-colors ${
            activePage === 'community' ? 'text-[#4eba86]' : 'text-black hover:text-[#4eba86]'
          }`}
        >
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
          <span>Community</span>
        </button>

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
          <span>Sign Out</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="mt-12 flex items-center gap-4">
        <div className="w-[78px] h-[78px] rounded-full overflow-hidden flex-shrink-0">
          <img src={imgUserAvatar} alt="User" className="w-full h-full object-cover" />
        </div>
        <div>
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
    </div>
  );
}