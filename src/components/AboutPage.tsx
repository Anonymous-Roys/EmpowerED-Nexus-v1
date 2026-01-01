import svgPaths from "../imports/svg-um28t4pato";
import imgSamsungMemory8RebLrCadwUnsplash2 from "figma:asset/c3c8f201a7225bf7003d8d4549824edee35cab07.png";
import imgStudentWearingFaceMasksLibrary2 from "figma:asset/4a0dd1088291b43dc10dac0b9461866dffb0f7c0.png";
import imgLearningEducationIdeasInsightIntelligenceStudyConcept1 from "figma:asset/4bc5342594e72b6c2744f497707d20a807cc4d72.png";
import imgManPreparingFoodOrderDelivery1 from "figma:asset/f5a516f591dbd4f9d9dbfd7f8a47e0cd161c9348.png";
import imgCloseUpCommunityConceptWithHands1 from "figma:asset/5a884d62544a01f771d8f9cde9cde5e04a445642.png";
import imgMcfLogoRemovebgPreview1 from "figma:asset/39ff589349dc370f9d93ca6bb48324fdf1955e46.png";
import imgTefSocialBannerRemovebgPreview1 from "figma:asset/25c6705e9021e20d8fe825240366c599f1bc95c7.png";
import imgEllipse22 from "figma:asset/63d762de2465ac7bf13519586fdb9e4152f6b015.png";

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen w-full relative overflow-hidden">
      {/* Decorative Icon - Top Right */}
      <div className="absolute right-0 top-32 w-[120px] h-[120px] md:w-[185px] md:h-[185px] opacity-80 pointer-events-none z-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.593 185.596">
          <path d={svgPaths.p11128900} fill="#14AE5C" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative w-full mb-16 md:mb-20">
        <div className="max-w-[1375px] mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="relative h-[400px] md:h-[532px] rounded-[8px] overflow-hidden">
            {/* Background Image */}
            <img 
              src={imgSamsungMemory8RebLrCadwUnsplash2}
              alt="Technology and Education"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(12,23,51,0.58)]" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <p className="font-['Montserrat:Bold',sans-serif] text-[#4eba86] text-[16px] md:text-[20px] mb-6 tracking-wider">
                ABOUT EMPOWERED NEXUS
              </p>
              <h1 className="font-['Montserrat:Bold',sans-serif] text-white text-[32px] md:text-[48px] leading-tight mb-6 md:mb-8">
                Building a future where<br />
                everyone learns, heals,<br />
                innovates and thrives
              </h1>
              <p className="font-['Montserrat:Regular',sans-serif] text-white text-[16px] md:text-[20px] max-w-[600px]">
                EmpowerEd Nexus is transforming access to education and<br />
                healthcare across Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bridging the Digital Divide Section */}
      <div className="max-w-[1375px] mx-auto px-6 md:px-8 mb-16 md:mb-20">
        <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-black text-center mb-6">
          Bridging the digital divide
        </h2>
        <p className="font-['Montserrat:Regular',sans-serif] text-[18px] md:text-[24px] text-black text-center max-w-[900px] mx-auto mb-12 leading-relaxed">
          We believe that connectivity shouldn't determine capability. Our ecosystem<br className="hidden md:block" />
          ensures that digital progress reaches the last mile.
        </p>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Mission Card */}
          <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
            <div className="w-[74px] h-[74px] rounded-full bg-[rgba(46,146,198,0.13)] flex items-center justify-center mb-4">
              <svg className="w-[42px] h-[42px]" fill="none" viewBox="0 0 42 42">
                <path d={svgPaths.p3fce6f00} fill="#2E92C6" />
                <path d={svgPaths.pa6c8df0} fill="#2E92C6" />
                <path d={svgPaths.p374df500} fill="#2E92C6" />
              </svg>
            </div>
            <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#0c1733] mb-3 tracking-[1.44px]">
              Our Mission
            </h3>
            <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
              We exist so that people can learn, heal, innovate<br />
              and thrive. We bring digital education and<br />
              healthcare to communities with or without<br />
              internet
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
            <div className="w-[74px] h-[74px] rounded-full bg-[rgba(238,26,38,0.13)] flex items-center justify-center mb-4">
              <svg className="w-[42px] h-[42px]" fill="none" viewBox="0 0 42 42">
                <path d={svgPaths.p8a52370} fill="#14AE5C" />
              </svg>
            </div>
            <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#0c1733] mb-3 tracking-[1.44px]">
              Our Vision
            </h3>
            <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
              A digitally inclusive Africa powered by<br />
              innovation, where every individual has the tools<br />
              to shape their own future.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="max-w-[1375px] mx-auto px-6 md:px-8 mb-16 md:mb-20 relative">
        {/* Decorative Child Image - Left Corner */}
        <div className="absolute left-[-150px] md:left-[-267px] top-[-50px] md:top-0 w-[300px] h-[300px] md:w-[569px] md:h-[569px] pointer-events-none z-0 opacity-80">
          <img 
            src={imgEllipse22}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-black text-center mb-12 relative z-10">
          Our Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Card 1 - Offline Fast Learning */}
          <div className="bg-white border border-black rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-[250px] overflow-hidden">
              <img 
                src={imgStudentWearingFaceMasksLibrary2}
                alt="Offline Learning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-[42px] h-[42px]" fill="none" viewBox="0 0 42 42">
                  <path d={svgPaths.p26dc2800} fill="#14AE5C" />
                </svg>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#0c1733] tracking-[1.44px]">
                  Offline fast learning
                </h3>
              </div>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
                Micro cloud AI powered tools that work without<br />
                internet access, ensuring learning never stops<br />
                regardless of connectivity
              </p>
            </div>
          </div>

          {/* Card 2 - Digital Courses */}
          <div className="bg-white border border-black rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-[250px] overflow-hidden">
              <img 
                src={imgLearningEducationIdeasInsightIntelligenceStudyConcept1}
                alt="Digital Courses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-[42px] h-[42px]" fill="none" viewBox="0 0 42 42">
                  <path d={svgPaths.p15f03180} fill="rgba(46, 146, 198, 0.15)" />
                  <path d={svgPaths.p34576780} fill="#2E92C6" />
                </svg>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#0c1733] tracking-[1.44px]">
                  Digital Courses
                </h3>
              </div>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
                Curated, high-quality educational content localized<br />
                for African curriculums and vocational training<br />
                needs.
              </p>
            </div>
          </div>

          {/* Card 3 - Micro Franchise */}
          <div className="bg-white border border-black rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-[250px] overflow-hidden">
              <img 
                src={imgManPreparingFoodOrderDelivery1}
                alt="Micro Franchise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-[42px] h-[42px]" fill="none" viewBox="0 0 42 42">
                  <path d={svgPaths.p2e622e00} fill="rgba(46, 146, 198, 0.15)" />
                  <path d={svgPaths.p15f91100} fill="#2E92C6" />
                </svg>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#0c1733] tracking-[1.44px]">
                  Micro franchise
                </h3>
              </div>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
                Empowering local entrepreneurs with a<br />
                business-in-a-box model to deliver digital services<br />
                to their communities.
              </p>
            </div>
          </div>

          {/* Card 4 - Community Empowerment */}
          <div className="bg-white border border-black rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-[250px] overflow-hidden">
              <img 
                src={imgCloseUpCommunityConceptWithHands1}
                alt="Community Empowerment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-[42px] h-[42px]" fill="none" viewBox="0 0 42 42">
                  <path d={svgPaths.p2e622e00} fill="rgba(46, 146, 198, 0.15)" />
                  <path d={svgPaths.p15f91100} fill="#2E92C6" />
                </svg>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#0c1733] tracking-[0.48px]">
                  Community Empowerment
                </h3>
              </div>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-relaxed">
                Empowering local entrepreneurs with a<br />
                business-in-a-box model to deliver digital services<br />
                to their communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-[rgba(217,217,217,0.27)] py-16 md:py-20">
        <div className="max-w-[1375px] mx-auto px-6 md:px-8">
          <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black text-center tracking-[1.08px] mb-8">
            Partners
          </p>
          <div className="bg-white rounded-[20px] border border-black shadow-lg max-w-[592px] mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
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
      </div>
    </div>
  );
}