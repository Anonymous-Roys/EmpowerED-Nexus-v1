import svgPaths from "../imports/svg-mp9a5pwomx";
import imgCode15922659RemovebgPreview1 from "figma:asset/bfe5ee5ef7270a7ba665fe3fa7773b2cab043400.png";
import imgProjectManagement18645402RemovebgPreview1 from "figma:asset/2c242fa789cf451fde930e88338f2971b79c4a19.png";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.35)] hover:scale-105">
      <div className="mb-6 flex items-center justify-center h-[166px]">
        {icon}
      </div>
      <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[#0c1733] text-[20px] md:text-[22px] lg:text-[24px] leading-[35px] tracking-[0.48px] mb-4">
        {title}
      </h3>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[14px] leading-[35px] text-black tracking-[0.84px]">
        {description}
      </p>
    </div>
  );
}

// Database Icon
function DatabaseIcon() {
  return (
    <svg className="w-[166px] h-[179px]" fill="none" viewBox="0 0 166 179">
      <path d={svgPaths.p136ff300} fill="#2E92C6" />
    </svg>
  );
}

// Graduation Cap Icon
function GraduationCapIcon() {
  return (
    <svg className="w-[190px] h-[159px]" fill="none" viewBox="0 0 190.5 159.5">
      <path 
        d={svgPaths.pb66ba00} 
        stroke="#2E92C6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        fill="none"
      />
    </svg>
  );
}

// Coding Icon
function CodingIcon() {
  return (
    <div className="relative w-[166px] h-[166px]">
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 166 166">
        <path 
          d={svgPaths.p1ff8b200} 
          fill="#2E92C6" 
          transform="translate(52, 87)"
        />
        <path 
          d={svgPaths.p27a99b00} 
          fill="#2E92C6" 
          transform="translate(28, 0)"
        />
        <path 
          d={svgPaths.p8b8d100} 
          fill="#2E92C6" 
          transform="translate(36, 39.5)"
        />
      </svg>
    </div>
  );
}

// LinkedIn Icon
function LinkedInIcon() {
  return (
    <svg className="w-[118px] h-[118px]" fill="none" viewBox="0 0 118 118">
      <g clipPath="url(#clip0_linkedin)">
        <path d={svgPaths.p1ab4a1f1} fill="#0077B7" />
      </g>
      <defs>
        <clipPath id="clip0_linkedin">
          <rect fill="white" height="118" width="118" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ServicePage() {
  const services = [
    {
      icon: <DatabaseIcon />,
      title: 'Micro-Cloud Deployment',
      description: 'Offline servers delivering digital learning without internet.',
    },
    {
      icon: <GraduationCapIcon />,
      title: 'Digital Courses and Products',
      description: 'Curriculum-aligned offline content, teacher guides, and certification modules.',
    },
    {
      icon: <CodingIcon />,
      title: 'Design and Branding',
      description: 'Identity design, marketing materials, UI/UX, and digital storytelling.',
    },
    {
      icon: <img src={imgCode15922659RemovebgPreview1} alt="Code" className="w-[169px] h-[169px] object-contain" />,
      title: 'Website and App Development',
      description: 'LMS platforms, digital stores, telehealth portals, and mobile apps.',
    },
    {
      icon: <img src={imgProjectManagement18645402RemovebgPreview1} alt="Project Management" className="w-[158px] h-[158px] object-contain" />,
      title: 'Project Management & Consulting',
      description: 'Grant writing, digital transformation, monitoring and evaluation.',
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn Optimization & Career Branding',
      description: 'Curriculum-aligned offline content, teacher guides, and certification modules.',
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden pb-16">
      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Page Title */}
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[32px] md:text-[40px] lg:text-[48px] text-black text-center mb-12 md:mb-16 lg:mb-20">
            What do we do ?
          </h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Bottom Description */}
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-black text-center max-w-[1021px] mx-auto leading-[normal] px-4">
            We design, build, and scale digital education and health solutions for schools, NGOs, governments, and communities.
          </p>
        </div>
      </main>
    </div>
  );
}
