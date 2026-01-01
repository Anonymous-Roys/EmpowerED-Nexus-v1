import svgPathsFooter from "../imports/svg-qpcvtlh930";
import imgWhatsAppImage20251022At014430RemovebgPreview1 from "figma:asset/21ec550d7fea5dd192a81945d837f7f161ff4ae5.png";

export function Footer() {
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
              {['About Us', 'Courses', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300"
                  >
                    {link}
                  </a>
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
              {['Blog', 'Forum', 'Help Center', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300"
                  >
                    {link}
                  </a>
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
              <a 
                href="#" 
                className="flex items-center gap-3 font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300 group"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsFooter.p38a22b70} fill="currentColor" />
                </svg>
                X.com
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300 group"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsFooter.p2c982900} fill="#0A66C2" className="group-hover:fill-[#4eba86]" />
                </svg>
                LinkedIn
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 font-['Montserrat:Medium',sans-serif] text-[18px] text-white hover:text-[#4eba86] transition-colors duration-300 group"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsFooter.p3d66d500} fill="#0866FF" className="group-hover:fill-[#4eba86]" />
                  <path d={svgPathsFooter.p1e1f20e0} fill="white" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
