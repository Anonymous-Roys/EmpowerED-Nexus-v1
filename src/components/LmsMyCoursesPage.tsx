import { useNavigate } from 'react-router-dom';
import imgCloseupShotBoyDoctorWearingSanitaryMasks from "figma:asset/da93045379979112d51f82f7050c64fddce75e5b.png";
import imgFullShotWomenWorkingTogether from "figma:asset/980ca31a37e931370485260965df813062d1f2fc.png";
import imgEmployeeWorkingMarketingSetting from "figma:asset/96776002ef849fba844a97b648112be288e4db0d.png";
import imgProgrammingBackground from "figma:asset/7ad00823a6486e81517db4cba14912a20819e09c.png";
import imgWomanExpectingChild from "figma:asset/a897330c0252f7b7ed162fe504778d870d48aa1f.png";
import imgManWorkingEnvironment from "figma:asset/c5c2c4a655c9ea3db3ae9b60fac04620ae148042.png";
import { LmsSidebar } from './LmsSidebar';
import { Navigation } from './Navigation';

export function LmsMyCoursesPage() {
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      title: "Introduction to Community Health Strategies",
      category: "Public Health",
      instructor: "Dr. Samuel Abiola",
      progress: 75,
      image: imgCloseupShotBoyDoctorWearingSanitaryMasks,
      buttonText: "Continue",
    },
    {
      id: 2,
      title: "Sustainable Farming Tech",
      category: "AGRICULTURE",
      instructor: "Prof Kenya Mbatha",
      progress: 35,
      image: imgFullShotWomenWorkingTogether,
      buttonText: "Continue",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      category: "Data Science",
      instructor: "Tech4Africa initiative",
      progress: 0,
      image: imgEmployeeWorkingMarketingSetting,
      buttonText: "Start Now",
      buttonStyle: "outline",
    },
    {
      id: 4,
      title: "Python for Beginners: Local Solutions",
      category: "Programming",
      instructor: "Dr. Samuel Abiola",
      progress: 75,
      image: imgProgrammingBackground,
      buttonText: "Continue",
    },
    {
      id: 5,
      title: "Maternal Health Basic",
      category: "HEALTHCARE",
      instructor: "Dr. Kofi yaw",
      progress: 50,
      image: imgWomanExpectingChild,
      buttonText: "Continue",
    },
    {
      id: 6,
      title: "Renewable Energy Systems",
      category: "SUSTAINABILITY",
      instructor: "Dr. Green",
      progress: 97,
      image: imgManWorkingEnvironment,
      buttonText: "Continue",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full pb-16 md:pb-20">
      {/* Navigation */}
      <Navigation />

      {/* Main Content Container */}
      <div className="pt-8 md:pt-12 px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
            {/* Left Sidebar */}
            <LmsSidebar activePage="my-courses" />

            {/* Right Content Area */}
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {/* Courses in Progress */}
                <div className="bg-white rounded-[10px] border border-black p-6">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black mb-4">
                    Courses in Progress
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-[51px] h-[51px] rounded-full bg-[rgba(78,186,134,0.44)] flex items-center justify-center">
                      <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">4</span>
                    </div>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#b3b3b3]">
                      Active
                    </p>
                  </div>
                </div>

                {/* Completed Courses */}
                <div className="bg-white rounded-[10px] border border-black p-6">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black mb-4">
                    Completed courses
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">12</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#b3b3b3]">
                      Total
                    </p>
                  </div>
                </div>

                {/* Overall Progress */}
                <div className="bg-white rounded-[10px] border border-black p-6">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black mb-4">
                    Overrall Progress
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">88%</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#4eba86]">
                      +2%
                    </p>
                  </div>
                </div>
              </div>

              {/* Continue Learning Section */}
              <div>
                <h2 className="font-['Barlow:Bold',sans-serif] text-[28px] md:text-[32px] text-black mb-6">
                  Continue Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
                    >
                      <div className="h-[200px] overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#2e92c6] mb-2 uppercase">
                          {course.category}
                        </p>
                        <p className="font-['Barlow:Bold',sans-serif] text-[18px] text-black mb-2 leading-[1.2] tracking-[1.08px]">
                          {course.title}
                        </p>
                        <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] mb-3">
                          {course.instructor}
                        </p>
                        <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-black mb-2">
                          {course.progress > 0 ? `${course.progress}% complete` : 'Start course'}
                        </p>
                        {/* Progress Bar */}
                        <div className="bg-[#d9d9d9] h-[5px] rounded-[5px] mb-4 overflow-hidden">
                          <div
                            className="bg-[#2e92c6] h-full rounded-[5px]"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <button
                          onClick={() => navigate('/lms-course-viewer')}
                          className={`w-full font-['Montserrat:Bold',sans-serif] text-[14px] py-2 rounded-[10px] transition-all duration-300 ${
                            course.buttonStyle === 'outline'
                              ? 'bg-white border border-[#0c1733] text-[#2e92c6] hover:bg-[#f5f5f5]'
                              : 'bg-[#0c1733] text-white hover:bg-[#1a2744]'
                          }`}
                        >
                          {course.buttonText}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}