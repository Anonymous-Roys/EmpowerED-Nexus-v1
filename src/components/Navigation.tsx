import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgWhatsAppImage20251022At014430RemovebgPreview1 from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";
import { DropdownMenu } from './DropdownMenu';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding
        setDropdownOpen(false); // Close dropdown when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/service' },
    { label: 'Digital Products', path: '/products' },
    { label: 'Impact', path: '/impact' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-4 md:mx-6 lg:mx-[27px] mt-6 md:mt-8 lg:mt-[32px]">
        <div className="bg-[#0c1733] rounded-[45px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 relative shadow-lg">
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

          {/* Request Demo Button - Desktop */}
          <button 
            onClick={() => window.open('/contact', '_blank')}
            className="hidden lg:block bg-[#4eba86] px-8 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[20px] transition-all duration-300 hover:bg-[#45a878] hover:scale-105 hover:shadow-lg active:scale-95 flex-shrink-0"
          >
            Request a Demo
          </button>

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
            <button 
              onClick={() => window.open('/contact', '_blank')}
              className="w-full bg-[#4eba86] px-6 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[18px] transition-all duration-300 hover:bg-[#45a878] active:scale-95 mt-2"
            >
              Request a Demo
            </button>
          </div>
        )}        
        </div>
      </div>
    </nav>
  );
}