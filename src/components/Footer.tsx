import { Link } from 'react-router-dom';
import svgPathsFooter from "../imports/svg-qpcvtlh930";
import imgWhatsAppImage20251022At014430RemovebgPreview1 from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";

export function Footer() {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/products' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/about' }, // Can be updated to a careers page later
  ];

  const resources = [
    { label: 'Blog', path: '/blog' },
    { label: 'Forum', path: '/community-forum' },
    { label: 'Help Center', path: '/contact' }, // Can be updated to help center later
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const socialLinks = [
    { label: 'X.com', url: 'https://twitter.com', icon: svgPathsFooter.p38a22b70 },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: svgPathsFooter.p2c982900, color: '#0A66C2' },
    { label: 'Facebook', url: 'https://facebook.com', icon: svgPathsFooter.p3d66d500, color: '#0866FF' },
  ];
  return (
    <footer className="bg-[#0c1733] py-12 md:py-16 relative z-10">
      <div className="max-w-[1375px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[28px] md:text-[32px] text-white mb-4">
              EmpowerED Nexus
            </h3>
            <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-white mb-6">
              Offline first learning solutions for Africa
            </p>
            <div className="w-[120px] h-[120px]">
              <img 
                src={imgWhatsAppImage20251022At014430RemovebgPreview1} 
                alt="EmpowerED Nexus Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[28px] md:text-[32px] text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[28px] md:text-[32px] text-white mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[28px] md:text-[32px] text-white mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300 group"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={social.icon} fill={social.color || 'currentColor'} className="group-hover:fill-[#4eba86]" />
                    {social.label === 'Facebook' && (
                      <path d={svgPathsFooter.p1e1f20e0} fill="white" />
                    )}
                  </svg>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-gray-300">
              © {new Date().getFullYear()} EmpowerED Nexus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="font-['Montserrat:Regular',sans-serif] text-[16px] text-gray-300 hover:text-[#4eba86] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="font-['Montserrat:Regular',sans-serif] text-[16px] text-gray-300 hover:text-[#4eba86] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
