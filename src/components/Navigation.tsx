import { useState } from 'react';
import imgWhatsAppImage20251022At014430RemovebgPreview1 from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";
import { DropdownMenu } from './DropdownMenu';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Service', id: 'service' },
    { label: 'Digital Products', id: 'digital-store' },
    { label: 'Impact', id: 'impact' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="mx-4 md:mx-6 lg:mx-[27px] mt-6 md:mt-8 lg:mt-[32px]">
      <div className="bg-[#0c1733] rounded-[45px] px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[87px] lg:w-[86px] flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              alt="EmpowerEd Nexus Logo" 
              className="w-full h-full object-contain" 
              src={imgWhatsAppImage20251022At014430RemovebgPreview1} 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                }}
                className={`
                  px-6 py-2.5 rounded-[8px] font-['Barlow:SemiBold',sans-serif] text-[20px] transition-all duration-300 hover:scale-105 active:scale-95
                  ${currentPage === item.id 
                    ? 'bg-[#4eba86] text-white hover:bg-[#45a878]' 
                    : 'text-white hover:text-[#4eba86]'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Request Demo Button - Desktop */}
          <button className="hidden lg:block bg-[#4eba86] px-8 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[20px] transition-all duration-300 hover:bg-[#45a878] hover:scale-105 hover:shadow-lg active:scale-95 flex-shrink-0">
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
              <DropdownMenu onClose={() => setDropdownOpen(false)} onNavigate={onNavigate} />
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
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2.5 rounded-[8px] font-['Barlow:SemiBold',sans-serif] text-[18px] transition-all duration-300 active:scale-95
                  ${currentPage === item.id 
                    ? 'bg-[#4eba86] text-white hover:bg-[#45a878]' 
                    : 'text-white hover:text-[#4eba86]'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="w-full bg-[#4eba86] px-6 py-3 rounded-[8px] text-black font-['Barlow:SemiBold',sans-serif] text-[18px] transition-all duration-300 hover:bg-[#45a878] active:scale-95 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}