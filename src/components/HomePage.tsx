import imgGeminiGeneratedImageJ1L58Ij1L58Ij1L5RemovebgPreview1 from "figma:asset/33da7971b94bfdc69c6d536565c01ea1a23f660e.png";
import { MastercardLogo } from './MastercardLogo';

export function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden mb-16 md:mb-20">
      {/* Hero Section */}
      <main className="relative px-4 md:px-6 lg:px-0 pt-12 md:pt-16 lg:pt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-[55%] lg:pl-[100px] pt-0 lg:pt-[62px]">
              {/* Heading */}
              <h1 className="font-['Montserrat:Medium',sans-serif] font-medium text-[28px] md:text-[32px] lg:text-[40px] text-black leading-tight lg:leading-[normal] mb-6 md:mb-8 lg:mb-12">
                Bringing Education & Health to Every Community — Online or Offline
              </h1>

              {/* Description */}
              <div className="font-['Montserrat:Regular',sans-serif] font-normal text-[14px] md:text-[15px] lg:text-[16px] text-black leading-[28px] md:leading-[32px] lg:leading-[35px] tracking-[0.96px] mb-8 md:mb-10 lg:mb-12">
                <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold">EmpowerEd Nexus</span>
                <span>
                  {` empowers schools and individuals with innovative tech solutions — from EdTech and HealthTech to branding, design, and website development.`}
                  <br />
                  {`Our goal is to help you `}
                </span>
                <span className="font-['Montserrat:Bold',sans-serif] font-bold">Grow</span>
                <span>{`, `}</span>
                <span className="font-['Montserrat:Bold',sans-serif] font-bold">Learn</span>
                <span>{`, and `}</span>
                <span className="font-['Montserrat:Bold',sans-serif] font-bold">Thrive</span>
                <span>{` in the digital age.`}</span>
              </div>

              {/* Recognition Section */}
              <div className="mb-6 md:mb-8 lg:mb-10">
                <p className="font-['Montserrat:Bold',sans-serif] font-bold text-[#0c1733] text-[18px] md:text-[20px] leading-[35px] tracking-[0.96px] mb-2">
                  Recognized by:
                </p>
                <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[35px] text-black tracking-[0.96px]">
                  <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold">MasterCard Foundation</span>
                  <span> | Tony Elumelu Foundation</span>
                </p>
                
                {/* MasterCard Logo */}
                <div className="mt-4 md:mt-6">
                  <MastercardLogo />
                </div>
              </div>

              {/* Contact Text */}
              <p className="font-['Montserrat:Bold',sans-serif] font-bold text-[14px] md:text-[16px] text-black leading-[35px] tracking-[0.96px] mb-6 md:mb-8">
                Contact us for tailored solutions and expert support.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button className="bg-[#4eba86] px-6 md:px-8 py-3 md:py-3.5 rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-['Montserrat:Bold',sans-serif] font-bold text-[14px] md:text-[16px] text-[rgba(255,255,255,0.85)] tracking-[0.96px] transition-all duration-300 hover:bg-[#45a878] hover:shadow-[0px_6px_8px_0px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 min-h-[44px]">
                  Request a Demo
                </button>
                <button className="bg-[#2e92c6] px-6 md:px-8 py-3 md:py-3.5 rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-['Montserrat:Bold',sans-serif] font-bold text-[14px] md:text-[16px] text-[rgba(255,255,255,0.85)] tracking-[0.96px] transition-all duration-300 hover:bg-[#2680b0] hover:shadow-[0px_6px_8px_0px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 min-h-[44px]">
                  Browse Digital Products
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end lg:pr-[100px] mt-8 lg:mt-0">
              <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[609px] lg:h-[609px]">
                {/* Background Circle */}
                <div className="absolute inset-0">
                  <svg 
                    className="w-full h-full" 
                    fill="none" 
                    preserveAspectRatio="none" 
                    viewBox="0 0 609 609"
                  >
                    <circle cx="304.5" cy="304.5" fill="#0C1733" r="304.5" />
                    <circle cx="304.5" cy="304.5" fill="white" r="264.015" />
                  </svg>
                </div>
                
                {/* Hero Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%]">
                  <img 
                    alt="Student with books" 
                    className="w-full h-full object-contain" 
                    src={imgGeminiGeneratedImageJ1L58Ij1L58Ij1L5RemovebgPreview1} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}