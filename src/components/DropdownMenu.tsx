import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import svgPaths from "../imports/svg-dnrtjvlofj";

interface DropdownMenuProps {
  onClose: () => void;
}

export function DropdownMenu({ onClose }: DropdownMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const menuItems = [
    { label: 'LMS Dashboard', path: '/lms-dashboard' },
    { label: 'Podcast', path: '/podcast' },
    { label: 'Comm.. Foru', path: '/community-forum' },
    { label: 'Blog', path: '/blog' },
    { label: 'Privacy Poli', path: '/privacy-policy' },
  ];

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-[176px] bg-white rounded-[4px] shadow-[0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_6px_16px_0px_rgba(0,0,0,0.08),0px_9px_28px_8px_rgba(0,0,0,0.05)] overflow-hidden animate-fadeIn z-50"
    >
      {/* Dropdown Header */}
      <div className="bg-white border-b border-[#1890ff] px-3 py-2 flex items-center justify-between">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[14px] text-[#d9d9d9] leading-[22px]">
          More options
        </p>
        <div className="w-3 h-2 flex items-center justify-center">
          <svg 
            className="w-full h-full rotate-[270deg]" 
            fill="none" 
            viewBox="0 0 7.53543 12"
          >
            <path 
              d={svgPaths.p1c75f000} 
              fill="#D9D9D9" 
            />
          </svg>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-[2px]">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={onClose}
            className={`
              block px-3 py-[5px] font-['Montserrat:Regular',sans-serif] font-normal text-[14px] leading-[22px] transition-all duration-200
              ${location.pathname === item.path 
                ? 'bg-[#4eba86] text-white hover:bg-[#45a878]' 
                : 'bg-white text-[#262626] hover:bg-[#f5f5f5]'
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}