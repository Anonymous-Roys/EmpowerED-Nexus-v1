import { useNavigate, useLocation } from 'react-router-dom';
import imgWhatsAppImage from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";
import imgUserAvatar from "figma:asset/385aea917df772ff6cd9a2c50e64d3edac8a2fee.png";

interface LmsSidebarProps {
  activePage: 'dashboard' | 'my-courses' | 'assignment' | 'community';
}

export function LmsSidebar({ activePage }: LmsSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
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

        {/* Settings */}
        <button className="w-full flex items-center gap-4 text-left font-['Montserrat:Bold',sans-serif] text-[18px] text-black hover:text-[#4eba86] transition-colors mt-12">
          <svg className="w-[42px] h-[42px] flex-shrink-0" fill="#757575" viewBox="0 0 42 42">
            <path d="M32.2 20.125L29.575 17.325C29.4375 17.1875 29.3688 17.0156 29.3688 16.8094C29.3688 16.6031 29.4375 16.3969 29.575 16.1906L32.2 13.4594C32.4063 13.2531 32.5438 13.0125 32.6125 12.7375C32.6813 12.4625 32.6125 12.1875 32.475 11.9125L30.0375 7.49376C29.9 7.21876 29.7281 7.04688 29.4531 6.97813C29.1781 6.90938 28.9031 6.97813 28.6281 7.11563L25.2 8.87501C25.0281 8.94376 24.8563 8.94376 24.6156 8.87501C24.375 8.80626 24.2375 8.70313 24.1 8.56563L22.575 5.89063C22.4031 5.65001 22.1625 5.47813 21.8875 5.44376C21.6125 5.40938 21.3375 5.47813 21.0969 5.58126L16.3688 8.01876C16.1625 8.12188 16.025 8.29376 15.9563 8.56876C15.8875 8.84376 15.9219 9.08438 16.0594 9.32501L17.7844 12.6844C17.8875 12.8563 17.9219 13.0281 17.8875 13.2C17.8531 13.3719 17.7844 13.5438 17.6469 13.6813L14.9906 16.2594C14.7844 16.4313 14.6469 16.6719 14.5781 16.9469C14.5094 17.2219 14.5781 17.4969 14.7156 17.7719L17.2594 22.1906C17.3625 22.4656 17.5344 22.6375 17.8094 22.7063C18.0844 22.775 18.3594 22.7063 18.6344 22.5688L22.0625 20.8438C22.2688 20.7406 22.4406 20.7063 22.6469 20.7406C22.8531 20.775 23.025 20.8781 23.1625 21.05L25.6188 23.7594C25.8594 24.0344 26.1688 24.1719 26.4781 24.1719C26.7875 24.1719 27.0969 24.0344 27.3375 23.725L32.0656 19.4188C32.4094 19.1094 32.5125 18.7313 32.4438 18.3188C32.375 17.9063 32.1688 17.5625 31.8594 17.2875L28.6625 15.0063C28.4906 14.9031 28.3875 14.7313 28.3875 14.5594C28.3875 14.3875 28.4906 14.2156 28.6625 14.0781L31.8594 11.8313C32.1688 11.5906 32.375 11.2469 32.4438 10.8344C32.5125 10.4219 32.4094 10.0438 32.0656 9.76876L27.3375 5.42813C27.0969 5.15313 26.7875 5.01563 26.4781 5.01563C26.1688 5.01563 25.8594 5.15313 25.6188 5.42813L23.1625 8.10313C23.025 8.24063 22.8531 8.37813 22.6469 8.41251C22.4406 8.44688 22.2688 8.41251 22.0625 8.30938L18.6344 6.61876C18.3594 6.48126 18.0844 6.37813 17.8094 6.44688C17.5344 6.51563 17.3625 6.65313 17.2594 6.89376L14.7156 11.3125C14.5781 11.5875 14.5094 11.8625 14.5781 12.1375C14.6469 12.4125 14.7844 12.6531 14.9906 12.8594L17.6469 15.4375C17.7844 15.575 17.8531 15.7469 17.8875 15.9531C17.9219 16.1594 17.8875 16.3313 17.7844 16.5031L16.0594 19.8625C15.9219 20.1375 15.8875 20.4125 15.9563 20.6875C16.025 20.9625 16.1625 21.1688 16.3688 21.3063L21.0969 23.6063C21.3375 23.7438 21.6125 23.7781 21.8875 23.7438C22.1625 23.7094 22.4031 23.5375 22.575 23.2969L24.1 20.6219C24.2375 20.4156 24.4094 20.3125 24.6156 20.2781C24.8219 20.2438 24.9938 20.3125 25.2 20.4156L28.6281 22.1406C28.9031 22.2781 29.1781 22.3125 29.4531 22.2781C29.7281 22.2438 29.9 22.0719 30.0375 21.7969L32.475 17.3781C32.6125 17.1031 32.6813 16.8281 32.6125 16.5531C32.5438 16.2781 32.4063 16.0375 32.2 15.8656V20.125Z" />
          </svg>
          <span>Settings</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="mt-12 flex items-center gap-4">
        <div className="w-[78px] h-[78px] rounded-full overflow-hidden flex-shrink-0">
          <img src={imgUserAvatar} alt="User" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-['Montserrat:Bold',sans-serif] text-[18px] text-black">
            Mina Addo
          </p>
          <p className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
            Student
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