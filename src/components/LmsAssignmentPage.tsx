import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Bell, Calendar, Clock, FileText, CheckCircle, AlertCircle, Filter } from 'lucide-react';
import { LmsSidebar } from './LmsSidebar';
import { Navigation } from './Navigation';
import imgUserAvatar from "figma:asset/20e17931f4ae89942da40c3519c4c5acbbcd7753.png";

export function LmsAssignmentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('dueDate');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const assignments = [
    {
      id: 1,
      course: 'Intro to Public Health',
      title: 'Community water supply report',
      dueDate: 'Today, 11:59 PM',
      dueDateSort: new Date(),
      status: 'Pending',
      statusColor: 'bg-[rgba(226,55,16,0.2)]',
      statusTextColor: 'text-[#e23710]',
      grade: '-',
      action: 'Submit',
      actionStyle: 'primary',
      urgent: true,
      category: 'pending',
      description: 'Analyze local water supply systems and propose improvements',
      points: 100,
    },
    {
      id: 2,
      course: 'Python for Beginners',
      title: 'Week 3 coding challenge',
      dueDate: 'Oct 26, 2024',
      dueDateSort: new Date('2024-10-26'),
      status: 'Not Started',
      statusColor: 'bg-[#caedff]',
      statusTextColor: 'text-black',
      grade: '-',
      action: 'Start',
      actionStyle: 'outline',
      urgent: false,
      category: 'upcoming',
      description: 'Complete coding exercises on loops and functions',
      points: 50,
    },
    {
      id: 3,
      course: 'Data science 101',
      title: 'Linear Regression Model',
      dueDate: 'Oct 20, 2024',
      dueDateSort: new Date('2024-10-20'),
      status: 'Submitted',
      statusColor: 'bg-[rgba(46,146,198,0.21)]',
      statusTextColor: 'text-[#2e92c6]',
      grade: 'Grading...',
      gradeStyle: 'italic text-[#d9d9d9]',
      action: 'View',
      actionStyle: 'text',
      actionColor: 'text-[#2e92c6]',
      urgent: false,
      category: 'submitted',
      description: 'Build and evaluate a linear regression model',
      points: 75,
    },
    {
      id: 4,
      course: 'African History',
      title: 'Post-Colonial Analysis Essay',
      dueDate: 'Oct 10, 2024',
      dueDateSort: new Date('2024-10-10'),
      status: 'Graded',
      statusColor: 'bg-[rgba(104,229,66,0.46)]',
      statusTextColor: 'text-[#14ae5c]',
      grade: '92/100',
      action: 'Feedback',
      actionStyle: 'text',
      actionColor: 'text-[#0a66c2]',
      urgent: false,
      category: 'graded',
      description: 'Critical analysis of post-colonial African societies',
      points: 100,
    },
    {
      id: 5,
      course: 'User Experience Design',
      title: 'Heuristic Evaluation',
      dueDate: 'Oct 05, 2024',
      dueDateSort: new Date('2024-10-05'),
      status: 'Overdue',
      statusColor: 'bg-[rgba(251,64,64,0.36)]',
      statusTextColor: 'text-[red]',
      grade: '-',
      action: 'Contact',
      actionStyle: 'text',
      actionColor: 'text-[red]',
      urgent: true,
      category: 'missed',
      description: 'Evaluate interface using Nielsen\'s heuristics',
      points: 80,
    },
  ];

  // Filter assignments based on active tab and search
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assignment.course.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesTab = true;
    switch (activeTab) {
      case 'upcoming':
        matchesTab = assignment.category === 'upcoming' || assignment.category === 'pending';
        break;
      case 'graded':
        matchesTab = assignment.category === 'graded';
        break;
      case 'missed':
        matchesTab = assignment.category === 'missed';
        break;
      default:
        matchesTab = true;
    }
    
    return matchesSearch && matchesTab;
  });

  // Sort assignments
  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    switch (sortBy) {
      case 'dueDate':
        return a.dueDateSort.getTime() - b.dueDateSort.getTime();
      case 'course':
        return a.course.localeCompare(b.course);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedAssignments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAssignments = sortedAssignments.slice(startIndex, startIndex + itemsPerPage);

  // Calculate stats
  const stats = {
    pending: assignments.filter(a => a.category === 'pending').length,
    completed: assignments.filter(a => a.category === 'graded').length,
    completionRate: Math.round((assignments.filter(a => a.category === 'graded').length / assignments.length) * 100),
  };

  const handleAssignmentAction = (assignment: any) => {
    switch (assignment.actionStyle) {
      case 'primary':
        alert(`Opening submission form for: ${assignment.title}`);
        break;
      case 'outline':
        alert(`Starting assignment: ${assignment.title}`);
        break;
      case 'text':
        if (assignment.action === 'Feedback') {
          alert(`Viewing feedback for: ${assignment.title}\nGrade: ${assignment.grade}`);
        } else if (assignment.action === 'View') {
          alert(`Viewing submission for: ${assignment.title}`);
        } else {
          alert(`Contacting instructor about: ${assignment.title}`);
        }
        break;
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white min-h-screen w-full pb-16 md:pb-20">
      {/* Navigation */}
      <Navigation />

      {/* Mobile Sidebar */}
      <LmsSidebar activePage="assignment" isMobile={true} />

      {/* Main Content Container */}
      <div className="pt-8 md:pt-12 px-4 md:px-6 lg:pl-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[400px_1fr] gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <LmsSidebar activePage="assignment" />

            {/* Right Content Area */}
            <div className="space-y-6">
              {/* Header Section */}
              <div className="bg-white border border-black rounded-lg px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="font-['Barlow:Bold',sans-serif] text-[28px] md:text-[32px] text-black">
                    My Assignments
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Manage your coursework and track progress
                  </p>
                </div>
                
                {/* Right side - Search, Sync, Notification, Profile */}
                <div className="flex items-center gap-4">
                  {/* Search */}
                  <div className="bg-[#e7edfb] rounded-[20px] px-4 py-2 flex items-center gap-2 flex-1 sm:flex-none sm:w-[255px]">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search assignments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black placeholder-black w-full"
                    />
                  </div>

                  {/* Synced Badge */}
                  <div className="hidden sm:flex items-center gap-2 bg-[rgba(78,186,134,0.19)] rounded-[15px] px-3 py-1">
                    <CheckCircle className="w-4 h-4 text-[#14AE5C]" />
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-[#4eba86]">
                      synced
                    </span>
                  </div>

                  {/* Notification Bell */}
                  <button className="hidden sm:block relative">
                    <Bell className="w-6 h-6 text-gray-400" />
                    <span className="absolute -top-1 -right-1 bg-[#EE1A26] rounded-full w-3 h-3"></span>
                  </button>

                  {/* User Avatar */}
                  <div className="hidden sm:block w-10 h-10 rounded-full overflow-hidden">
                    <img src={imgUserAvatar} alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {/* Pending Submission */}
                <div className="bg-white rounded-[16px] border border-black p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#dada3b] rounded-[16px] -z-10 opacity-20"></div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black">
                      Pending Submission
                    </p>
                    <Clock className="w-6 h-6 text-[#dada3b]" />
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[32px] text-black">{stats.pending}</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] pb-1">
                      2 due this week
                    </p>
                  </div>
                </div>

                {/* Completed Assignments */}
                <div className="bg-white rounded-[16px] border border-black p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#4eba86] rounded-[16px] -z-10 opacity-20"></div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black">
                      Completed Assignments
                    </p>
                    <CheckCircle className="w-6 h-6 text-[#4eba86]" />
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[32px] text-black">{stats.completed}</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] pb-1">
                      +4 from last month
                    </p>
                  </div>
                </div>

                {/* Completion Rate */}
                <div className="bg-white rounded-[16px] border border-black p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#0866ff] rounded-[16px] -z-10 opacity-20"></div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black">
                      Completion Rate
                    </p>
                    <FileText className="w-6 h-6 text-[#0866ff]" />
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[32px] text-black">{stats.completionRate}%</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] pb-1">
                      Top 15% of class
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs and Filters */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-4 border-b border-[#b3b3b3]">
                  {/* Tabs */}
                  <div className="flex items-center gap-6 overflow-x-auto">
                    {[
                      { id: 'all', label: 'All Assignments' },
                      { id: 'upcoming', label: 'Upcoming' },
                      { id: 'graded', label: 'Graded' },
                      { id: 'missed', label: 'Missed' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] pb-2 whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                            : 'text-black hover:text-[#2e92c6]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-[#b3b3b3]">
                      Sort by:
                    </span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black bg-transparent border-none outline-none"
                    >
                      <option value="dueDate">Due Date (Earliest)</option>
                      <option value="course">Course</option>
                      <option value="status">Status</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Assignments Table */}
              <div className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                {/* Table Header - Hidden on mobile */}
                <div className="hidden md:grid bg-[rgba(217,217,217,0.3)] border-b border-black px-4 py-3 grid-cols-[2fr_3fr_2fr_1.5fr_1fr_1fr] gap-4">
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Course
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Assignment Title
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Due Date
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Status
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Grade
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Action
                  </p>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {paginatedAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-[2fr_3fr_2fr_1.5fr_1fr_1fr] gap-4 items-center">
                        <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black leading-tight">
                          {assignment.course}
                        </p>
                        <div>
                          <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black">
                            {assignment.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{assignment.description}</p>
                        </div>
                        <p className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] leading-tight ${
                          assignment.urgent ? 'text-[#e23710]' : 'text-[#444]'
                        }`}>
                          {assignment.dueDate}
                        </p>
                        <div className="flex items-center">
                          <span className={`${assignment.statusColor} rounded-[15px] px-3 py-1 font-['Montserrat:SemiBold',sans-serif] text-[14px] ${assignment.statusTextColor} inline-block`}>
                            {assignment.status}
                          </span>
                        </div>
                        <p className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] ${assignment.gradeStyle || 'text-black'}`}>
                          {assignment.grade}
                        </p>
                        <div>
                          <button
                            onClick={() => handleAssignmentAction(assignment)}
                            className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] transition-colors ${
                              assignment.actionStyle === 'primary' 
                                ? 'bg-[#2e92c6] text-white rounded-[5px] px-4 py-2 hover:bg-[#2678a8]'
                                : assignment.actionStyle === 'outline'
                                ? 'bg-white border border-black rounded-[5px] px-4 py-2 text-black hover:bg-gray-100'
                                : `${assignment.actionColor || 'text-[#2e92c6]'} hover:underline`
                            }`}
                          >
                            {assignment.action}
                          </button>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-['Montserrat:SemiBold',sans-serif] text-[16px] text-black">
                              {assignment.title}
                            </p>
                            <p className="text-sm text-gray-600">{assignment.course}</p>
                          </div>
                          <span className={`${assignment.statusColor} rounded-[15px] px-3 py-1 font-['Montserrat:SemiBold',sans-serif] text-[12px] ${assignment.statusTextColor}`}>
                            {assignment.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className={assignment.urgent ? 'text-[#e23710] font-medium' : ''}>
                              {assignment.dueDate}
                            </span>
                            <span>•</span>
                            <span>{assignment.points} pts</span>
                            {assignment.grade !== '-' && (
                              <>
                                <span>•</span>
                                <span className={assignment.gradeStyle || 'text-black font-medium'}>
                                  {assignment.grade}
                                </span>
                              </>
                            )}
                          </div>
                          <button
                            onClick={() => handleAssignmentAction(assignment)}
                            className={`font-['Montserrat:SemiBold',sans-serif] text-[12px] transition-colors ${
                              assignment.actionStyle === 'primary' 
                                ? 'bg-[#2e92c6] text-white rounded px-3 py-1 hover:bg-[#2678a8]'
                                : assignment.actionStyle === 'outline'
                                ? 'bg-white border border-black rounded px-3 py-1 text-black hover:bg-gray-100'
                                : `${assignment.actionColor || 'text-[#2e92c6]'} hover:underline`
                            }`}
                          >
                            {assignment.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="border-t border-black px-4 py-4 flex items-center justify-between">
                    <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px]">
                      <span className="text-[#818ea1]">Showing</span>
                      <span className="text-black"> {startIndex + 1} </span>
                      <span className="text-[#818ea1]">to</span>
                      <span className="text-black"> {Math.min(startIndex + itemsPerPage, sortedAssignments.length)} </span>
                      <span className="text-[#818ea1]">of</span>
                      <span className="text-black"> {sortedAssignments.length} </span>
                      <span className="text-[#818ea1]">results</span>
                    </p>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-[10px] border border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="#B3B3B3" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-[10px] border border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                      >
                        <svg className="w-6 h-6" fill="#B3B3B3" viewBox="0 0 24 24">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {sortedAssignments.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No assignments found</h3>
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