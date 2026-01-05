import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, BookOpen, TrendingUp } from 'lucide-react';
import imgCloseupShotBoyDoctorWearingSanitaryMasks from "figma:asset/da93045379979112d51f82f7050c64fddce75e5b.png";
import imgSideShotCodeEditorUsingReactJs from "figma:asset/5d967bf195cf00055fd689d0f7e86b04013330ef.png";
import { LmsSidebar } from './LmsSidebar';
import { Navigation } from './Navigation';
import { authService } from '../utils/auth';
import { lmsDataService, Course } from '../utils/lmsData';

export function LmsDashboardPage() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const [stats, setStats] = useState(lmsDataService.getDashboardStats());
  const [inProgressCourses, setInProgressCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Get in-progress courses for "Continue Learning" section
    const courses = lmsDataService.getCoursesByStatus('in-progress').slice(0, 2);
    setInProgressCourses(courses);
    setStats(lmsDataService.getDashboardStats());
  }, []);

  const handleViewAssignment = (assignmentId: number) => {
    navigate('/lms-assignment', { state: { assignmentId } });
  };

  const handleViewCalendar = () => {
    alert('Calendar view coming soon!');
  };

  const courses = inProgressCourses.length > 0 ? inProgressCourses : [
    {
      id: 1,
      title: "Intro to Community Health",
      category: "Public Health",
      progress: 75,
      image: imgCloseupShotBoyDoctorWearingSanitaryMasks,
      slug: 'intro-community-health'
    },
    {
      id: 2,
      title: "Python for Beginners",
      category: "Programming",
      progress: 12,
      image: imgSideShotCodeEditorUsingReactJs,
      slug: 'python-beginners-local-solutions'
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Completed Module : Sanitation Basics",
      category: "Public Health",
      time: "2 hours ago",
      icon: "check",
      color: "#4EBA86",
    },
    {
      id: 2,
      title: 'New reply in "Sustainable Farming" forum',
      category: "Community",
      time: "5 hours ago",
      icon: "message",
      color: "#2E92C6",
    },
    {
      id: 3,
      title: "Assignments Graded: Solar Energy Report",
      category: "Renewable Energy systems",
      time: "Yesterday",
      icon: "star",
      color: "#FFCD29",
    },
  ];

  const upcomingAssignments = [
    { id: 1, title: "Epidemology Quiz", category: "Public Health", date: "Oct 12" },
    { id: 2, title: "Data Analysis Project", category: "Data science", date: "Oct 12" },
    { id: 3, title: "Soil Sampling Report", category: "Agriculture", date: "Oct 12" },
  ];

  return (
    <div className="bg-white min-h-screen w-full pb-16 md:pb-20">
      {/* Navigation */}
      <Navigation />

      {/* Mobile Sidebar */}
      <LmsSidebar activePage="dashboard" isMobile={true} />

      {/* Main Content Container */}
      <div className="pt-8 md:pt-12 px-4 md:px-6 lg:pl-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <LmsSidebar activePage="dashboard" />

            {/* Right Content Area */}
            <div className="space-y-8">
              {/* Welcome Section */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h1 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[32px] text-black mb-2">
                      Welcome Back, {user?.email.split('@')[0]}!
                    </h1>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[16px] md:text-[18px] text-[#b3b3b3]">
                      You have 3 assignments due this week
                    </p>
                  </div>
                  <button 
                    onClick={() => navigate('/products')}
                    className="bg-[#0c1733] text-white font-['Montserrat:Medium',sans-serif] text-[18px] px-8 py-3 rounded-[10px] hover:bg-[#1a2744] transition-all duration-300 hover:scale-[1.02] whitespace-nowrap flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Browse Courses
                  </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Courses in Progress */}
                  <div className="bg-white rounded-[10px] border border-black p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black">
                        Courses in Progress
                      </p>
                      <BookOpen className="w-6 h-6 text-[#4eba86]" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-[51px] h-[51px] rounded-full bg-[rgba(78,186,134,0.44)] flex items-center justify-center">
                        <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.coursesInProgress}</span>
                      </div>
                      <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#b3b3b3]">
                        Active
                      </p>
                    </div>
                  </div>

                  {/* Overall Progress */}
                  <div className="bg-white rounded-[10px] border border-black p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black">
                        Overall Progress
                      </p>
                      <TrendingUp className="w-6 h-6 text-[#4eba86]" />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.overallProgress}%</span>
                      <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#4eba86]">
                        +2%
                      </p>
                    </div>
                  </div>

                  {/* Completed Courses */}
                  <div className="bg-white rounded-[10px] border border-black p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black">
                        Completed Courses
                      </p>
                      <Calendar className="w-6 h-6 text-[#4eba86]" />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.completedCourses}</span>
                      <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#b3b3b3]">
                        Total
                      </p>
                    </div>
                  </div>

                  {/* Weekly Goal */}
                  <div className="bg-white rounded-[10px] border border-black p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black">
                        Total Courses
                      </p>
                      <Clock className="w-6 h-6 text-[#4eba86]" />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.totalCourses}</span>
                      <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#4eba86]">
                        Enrolled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Learning Section */}
              <div>
                <h2 className="font-['Barlow:Bold',sans-serif] text-[28px] md:text-[32px] text-black mb-6">
                  Continue Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="h-[200px] overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#2e92c6] mb-2">
                          {course.category}
                        </p>
                        <p className="font-['Barlow:Bold',sans-serif] text-[14px] text-black mb-3">
                          {course.title}
                        </p>
                        <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-black mb-2">
                          {course.progress}% complete
                        </p>
                        {/* Progress Bar */}
                        <div className="bg-[#d9d9d9] h-[5px] rounded-[5px] mb-4 overflow-hidden">
                          <div
                            className="bg-[#2e92c6] h-full rounded-[5px] transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <button 
                          onClick={() => navigate(`/lms-course-viewer/${course.slug}`)}
                          className="w-full bg-[#0c1733] text-white font-['Montserrat:Bold',sans-serif] text-[14px] py-2 rounded-[10px] hover:bg-[#1a2744] transition-all duration-300"
                        >
                          Resume
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Grid: Recent Activity + Upcoming Assignments */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-[10px] border border-black p-6">
                  <h3 className="font-['Barlow:Bold',sans-serif] text-[18px] text-black mb-6">
                    Recent Activity
                  </h3>
                  <div className="space-y-6">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4">
                        <div
                          className="w-[51px] h-[51px] rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${activity.color}44` }}
                        >
                          {activity.icon === "check" && (
                            <svg className="w-6 h-6" fill="white" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                          )}
                          {activity.icon === "message" && (
                            <svg className="w-6 h-6" fill="none" stroke="#2E92C6" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          )}
                          {activity.icon === "star" && (
                            <svg className="w-6 h-6" fill="#FFCD29" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-black mb-1">
                            {activity.title}
                          </p>
                          <p className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
                            {activity.category} . {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Assignments */}
                <div className="bg-white rounded-[10px] border border-[#b3b3b3] overflow-hidden">
                  <div className="bg-[rgba(217,217,217,0.36)] px-4 py-3 border-b border-[#b3b3b3] flex items-center justify-between">
                    <h3 className="font-['Barlow:Bold',sans-serif] text-[14px] text-black">
                      Upcoming Assignments
                    </h3>
                    <svg className="w-6 h-6" fill="#B3B3B3" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="divide-y divide-[#d9d9d9]">
                    {upcomingAssignments.map((assignment) => (
                      <button
                        key={assignment.id}
                        onClick={() => handleViewAssignment(assignment.id)}
                        className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="bg-[#f8c9c9] rounded-[10px] w-[42px] h-[42px] flex flex-col items-center justify-center flex-shrink-0">
                          <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-black leading-none">
                            Oct
                          </p>
                          <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-black leading-none">
                            12
                          </p>
                        </div>
                        <div className="flex-1">
                          <p className="font-['Montserrat:Medium',sans-serif] text-[16px] md:text-[18px] text-black mb-1">
                            {assignment.title}
                          </p>
                          <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3]">
                            {assignment.category}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="p-4 text-center">
                    <button 
                      onClick={handleViewCalendar}
                      className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#2e92c6] hover:underline"
                    >
                      View Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}