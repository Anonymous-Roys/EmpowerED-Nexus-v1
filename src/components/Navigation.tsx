import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imgWhatsAppImage20251022At014430RemovebgPreview1 from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";
import { DropdownMenu } from './DropdownMenu';
import { authService, User } from '../utils/auth';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setUser(authService.getCurrentUser());
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/service' },
    { label: 'Digital Products', path: '/products' },
    { label: 'Impact', path: '/impact' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav ref={navRef} className="mx-4 md:mx-6 lg:mx-[27px] mt-6 md:mt-8 lg:mt-[24px]">
      <div className="bg-[#0c1733] rounded-[45px] px-4 md:px-6 lg:px-6 py-3 md:py-5 lg:py-1 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[87px] lg:w-[86px] flex-shrink-0">
            <img 
              alt="EmpowerEd Nexus Logo" 
              className="w-full h-full object-contain" 
              src={imgWhatsAppImage20251022At014430RemovebgPreview1} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-6 py-2.5 rounded-[8px] font-['Barlow:SemiBold',sans-serif] text-[20px] transition-all duration-300 hover:scale-105 active:scale-95
                  ${location.pathname === item.path 
                    ? 'bg-[#4eba86] text-white hover:bg-[#45a878]' 
                    : 'text-white hover:text-[#4eba86]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Button - Desktop */}
          {user ? (
            <div className="hidden lg:flex items-center gap-4">
              {/* <span className="text-white text-sm">Hi, {user.name}</span> */}
              {/* <button 
                onClick={() => {
                  authService.signOut();
                  setUser(null);
                  navigate('/');
                }}
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold transition-colors"
              >
                Sign Out
              </button> */}
               <button 
                onClick={() => navigate('/contact?type=demo')}
                className="bg-[#4eba86] px-8 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[20px] transition-all duration-300 hover:bg-[#45a878] hover:scale-105 hover:shadow-lg active:scale-95 flex-shrink-0"
              >
                Request a Demo
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-4">
              {/* <button 
                onClick={() => navigate('/signin')}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold transition-colors"
              >
                Sign In
              </button> */}
              <button 
                onClick={() => navigate('/contact?type=demo')}
                className="bg-[#4eba86] px-8 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[20px] transition-all duration-300 hover:bg-[#45a878] hover:scale-105 hover:shadow-lg active:scale-95 flex-shrink-0"
              >
                Request a Demo
              </button>
            </div>
          )}

          {/* Three-dot Menu Button - Desktop */}
          <div className="hidden lg:block relative ml-4 flex-shrink-0">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-transparent p-2 hover:bg-[#1a2744] rounded-lg transition-colors duration-300 group"
              aria-label="More options"
            >
              <div className="flex flex-col gap-[3px] items-center">
                <div className="w-[6px] h-[6px] rounded-full bg-[#4eba86] transition-transform duration-300 group-hover:scale-110" />
                <div className="w-[6px] h-[6px] rounded-full bg-[#4eba86] transition-transform duration-300 group-hover:scale-110" />
                <div className="w-[6px] h-[6px] rounded-full bg-[#4eba86] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </button>
            
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <DropdownMenu onClose={() => setDropdownOpen(false)} />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-[#1a2744] rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-2 space-y-3 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block w-full text-left px-4 py-2.5 rounded-[8px] font-['Barlow:SemiBold',sans-serif] text-[18px] transition-all duration-300 active:scale-95
                  ${location.pathname === item.path 
                    ? 'bg-[#4eba86] text-white hover:bg-[#45a878]' 
                    : 'text-white hover:text-[#4eba86]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <div className="space-y-2">
                <div className="text-white text-sm px-4">Hi, {user.name}</div>
                <button 
                  onClick={() => {
                    authService.signOut();
                    setUser(null);
                    setMobileMenuOpen(false);
                    navigate('/');
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    navigate('/signin');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate('/contact?type=demo')}
                  className="w-full bg-[#4eba86] px-6 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[18px] transition-all duration-300 hover:bg-[#45a878] active:scale-95"
                >
                  Request a Demo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}