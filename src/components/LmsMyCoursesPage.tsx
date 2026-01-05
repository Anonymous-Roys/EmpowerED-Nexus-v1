import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, User, TrendingUp } from 'lucide-react';
import { LmsSidebar } from './LmsSidebar';
import { Navigation } from './Navigation';
import { lmsDataService, Course } from '../utils/lmsData';

export function LmsMyCoursesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [courses, setCourses] = useState<Course[]>([]);
  const [stats, setStats] = useState({ inProgress: 0, completed: 0, overallProgress: 0 });

  useEffect(() => {
    const allCourses = lmsDataService.getCourses();
    setCourses(allCourses);
    
    // Calculate stats
    const inProgress = allCourses.filter(c => c.status === 'in-progress').length;
    const completed = allCourses.filter(c => c.status === 'completed').length;
    const totalProgress = allCourses.reduce((acc, course) => acc + course.progress, 0);
    const overallProgress = Math.round(totalProgress / allCourses.length);
    
    setStats({ inProgress, completed, overallProgress });
  }, []);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'public-health', label: 'Public Health' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'programming', label: 'Programming' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  const statusFilters = [
    { id: 'all', label: 'All Courses' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'not-started', label: 'Not Started' },
  ];

  // Filter courses based on search, category, and status
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || course.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleCourseClick = (course: Course) => {
    navigate(`/lms-course-viewer/${course.slug}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in-progress': return 'text-blue-600';
      case 'not-started': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const getButtonText = (course: Course) => {
    if (course.progress === 0) return 'Start Now';
    if (course.progress === 100) return 'Review';
    return 'Continue';
  };

  const getButtonStyle = (course: Course) => {
    if (course.progress === 0) {
      return 'bg-white border border-[#0c1733] text-[#2e92c6] hover:bg-[#f5f5f5]';
    }
    return 'bg-[#0c1733] text-white hover:bg-[#1a2744]';
  };

  return (
    <div className="bg-white min-h-screen w-full pb-16 md:pb-20">
      {/* Navigation */}
      <Navigation />

      {/* Mobile Sidebar */}
      <LmsSidebar activePage="my-courses" isMobile={true} />

      {/* Main Content Container */}
      <div className="pt-8 md:pt-12 px-4 md:px-6 lg:pl-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <LmsSidebar activePage="my-courses" />

            {/* Right Content Area */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[32px] text-black mb-2">
                  My Courses
                </h1>
                <p className="font-['Montserrat:Medium',sans-serif] text-[16px] md:text-[18px] text-[#b3b3b3]">
                  Track your learning progress and continue your journey
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
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
                      <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.inProgress}</span>
                    </div>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#b3b3b3]">
                      Active
                    </p>
                  </div>
                </div>

                {/* Completed Courses */}
                <div className="bg-white rounded-[10px] border border-black p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black">
                      Completed Courses
                    </p>
                    <TrendingUp className="w-6 h-6 text-[#4eba86]" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.completed}</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#b3b3b3]">
                      Total
                    </p>
                  </div>
                </div>

                {/* Overall Progress */}
                <div className="bg-white rounded-[10px] border border-black p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black">
                      Overall Progress
                    </p>
                    <Clock className="w-6 h-6 text-[#4eba86]" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-['Barlow:Medium',sans-serif] text-[32px] text-black">{stats.overallProgress}%</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#4eba86]">
                      +2%
                    </p>
                  </div>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="bg-white rounded-[10px] border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
                    <input
                      type="text"
                      placeholder="Search courses or instructors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86] focus:border-transparent"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86] focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                  </select>

                  {/* Status Filter */}
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86] focus:border-transparent"
                  >
                    {statusFilters.map(status => (
                      <option key={status.id} value={status.id}>{status.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Courses Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['Barlow:Bold',sans-serif] text-[24px] md:text-[28px] text-black">
                    {selectedStatus === 'all' ? 'All Courses' : 
                     selectedStatus === 'in-progress' ? 'Continue Learning' :
                     selectedStatus === 'completed' ? 'Completed Courses' : 'Not Started'}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => handleCourseClick(course)}
                    >
                      <div className="h-[200px] overflow-hidden relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        {course.progress === 100 && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Completed
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#2e92c6] uppercase">
                            {course.categoryLabel}
                          </p>
                          <span className={`text-xs font-medium ${getStatusColor(course.status)}`}>
                            {course.status.replace('-', ' ')}
                          </span>
                        </div>
                        <h3 className="font-['Barlow:Bold',sans-serif] text-[18px] text-black mb-2 leading-[1.2] tracking-[1.08px]">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3]">
                            {course.instructor}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.totalLessons} lessons</span>
                        </div>
                        <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-black mb-2">
                          {course.progress > 0 ? `${course.progress}% complete` : 'Ready to start'}
                        </p>
                        {/* Progress Bar */}
                        <div className="bg-[#d9d9d9] h-[5px] rounded-[5px] mb-4 overflow-hidden">
                          <div
                            className="bg-[#2e92c6] h-full rounded-[5px] transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCourseClick(course);
                          }}
                          className={`w-full font-['Montserrat:Bold',sans-serif] text-[14px] py-2 rounded-[10px] transition-all duration-300 ${getButtonStyle(course)}`}
                        >
                          {getButtonText(course)}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredCourses.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}