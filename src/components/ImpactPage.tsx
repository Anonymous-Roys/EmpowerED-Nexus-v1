import svgPaths from "../imports/svg-uwvf7a7gtr";
import imgMcfLogoRemovebgPreview1 from "figma:asset/39ff589349dc370f9d93ca6bb48324fdf1955e46.png";
import imgTefSocialBannerRemovebgPreview1 from "figma:asset/25c6705e9021e20d8fe825240366c599f1bc95c7.png";
import imgGlobalNetwork17754241RemovebgPreview1 from "figma:asset/454cfdc93239fd070661d7a7aa83664c079ea8dd.png";

export function ImpactPage() {
  return (
    <div className="bg-white min-h-screen w-full relative overflow-hidden mb-16 md:mb-20">
      {/* Decorative Background Icon - Top Right */}
      <div className="absolute right-0 top-32 w-[150px] h-[150px] md:w-[201px] md:h-[201px] opacity-80 pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.593 185.596">
          <path d={svgPaths.p11128900} fill="#14AE5C" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1375px] mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] text-black mb-8">
            Our Impact
          </h1>
          
          {/* Partners Section */}
          <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black tracking-[1.08px] mb-6">
            Partners
          </p>
          <div className="bg-white rounded-[20px] border border-black shadow-lg max-w-[592px] mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 md:mb-20">
            <div className="w-[113px] h-[113px]">
              <img 
                src={imgMcfLogoRemovebgPreview1} 
                alt="Mastercard Foundation"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[200px] md:w-[231px] h-[100px] md:h-[121px]">
              <img 
                src={imgTefSocialBannerRemovebgPreview1} 
                alt="Tony Elumelu Foundation"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Impact Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
          {/* Card 1 - Education */}
          <div className="bg-white rounded-[15px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 text-center transition-transform duration-300 hover:scale-105">
            <div className="w-[96px] h-[96px] mx-auto mb-4">
              <img 
                src={imgGlobalNetwork17754241RemovebgPreview1} 
                alt="Global Network"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-['Montserrat:SemiBold',sans-serif] text-[48px] text-black tracking-[2.88px] mb-4">
              1500+
            </p>
            <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black">
              Education in low-connectivity zones
            </p>
          </div>

          {/* Card 2 - Teachers */}
          <div className="bg-white rounded-[15px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 text-center transition-transform duration-300 hover:scale-105">
            <div className="w-[96px] h-[96px] mx-auto mb-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
                <path d={svgPaths.p15f03a00} fill="#2E92C6" />
              </svg>
            </div>
            <p className="font-['Montserrat:SemiBold',sans-serif] text-[48px] text-black tracking-[2.88px] mb-4">
              50+
            </p>
            <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black">
              Teacher digital transformation programs
            </p>
          </div>

          {/* Card 3 - Health */}
          <div className="bg-white rounded-[15px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 text-center transition-transform duration-300 hover:scale-105">
            <div className="w-[96px] h-[96px] mx-auto mb-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.5 73.5">
                <g>
                  <path d={svgPaths.p3ef45d00} stroke="#2E92C6" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M52.75 0.75H64.75V12.75" stroke="#2E92C6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p2f8cdf00} stroke="#2E92C6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p196bdc70} stroke="#2E92C6" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
            <p className="font-['Montserrat:SemiBold',sans-serif] text-[48px] text-black tracking-[2.88px] mb-4">
              200+
            </p>
            <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black">
              Health outreach with digital awareness modules
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-['Montserrat:Medium',sans-serif] text-[20px] md:text-[24px] text-black tracking-[1.44px] max-w-[1030px] mx-auto leading-relaxed">
            We empower underserved communities with offline learning, health awareness, and AI-driven insights. We support schools, NGOs, rural communities, and crisis-affected zones.
          </p>
        </div>
      </div>

      {/* Decorative Rocket Icon - Bottom Left */}
      <div className="absolute left-4 md:left-8 bottom-32 w-[120px] h-[120px] md:w-[199px] md:h-[199px] opacity-80 pointer-events-none">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199 199">
          <path d={svgPaths.p282b3c00} fill="#0C1733" transform="translate(60.93, 60.93)" />
          <path d={svgPaths.pa73db80} fill="#0C1733" transform="translate(12.44, 12.44)" />
          <path d={svgPaths.p1da85c00} fill="#0C1733" transform="translate(130.56, 18.66)" />
        </svg>
      </div>
    </div>
  );
}