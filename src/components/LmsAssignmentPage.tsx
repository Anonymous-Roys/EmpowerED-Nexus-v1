import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LmsSidebar } from './LmsSidebar';
import { Navigation } from './Navigation';
import imgUserAvatar from "figma:asset/20e17931f4ae89942da40c3519c4c5acbbcd7753.png";

export function LmsAssignmentPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const assignments = [
    {
      id: 1,
      course: 'Intro to Public Health',
      title: 'Community water supply report',
      dueDate: 'Today, 11:59 PM',
      status: 'Pending',
      statusColor: 'bg-[rgba(104,229,66,0.36)]',
      statusTextColor: 'text-[#e23710]',
      grade: '-',
      action: 'Submit',
      actionStyle: 'primary',
      urgent: true,
    },
    {
      id: 2,
      course: 'Python for Beginners',
      title: 'Week 3 coding challenge',
      dueDate: 'Oct 26, 2024',
      status: 'Not Started',
      statusColor: 'bg-[#caedff]',
      statusTextColor: 'text-black',
      grade: '-',
      action: 'Start',
      actionStyle: 'outline',
      urgent: false,
    },
    {
      id: 3,
      course: 'Data science 101',
      title: 'Liner Regression Model',
      dueDate: 'Oct 20, 2024',
      status: 'Submitted',
      statusColor: 'bg-[rgba(46,146,198,0.21)]',
      statusTextColor: 'text-[#2e92c6]',
      grade: 'Grading...',
      gradeStyle: 'italic text-[#d9d9d9]',
      action: 'Submit',
      actionStyle: 'text',
      actionColor: 'text-[#2e92c6]',
      urgent: false,
    },
    {
      id: 4,
      course: 'African History',
      title: 'Post-Colonial Analysis Essay',
      dueDate: 'Oct 10, 2024',
      status: 'Graded',
      statusColor: 'bg-[rgba(104,229,66,0.46)]',
      statusTextColor: 'text-[#14ae5c]',
      grade: '92/100',
      action: 'Feedback',
      actionStyle: 'text',
      actionColor: 'text-[#0a66c2]',
      urgent: false,
    },
    {
      id: 5,
      course: 'User Experience Design',
      title: 'Heuristic Evaluation',
      dueDate: 'Oct 05, 2024',
      status: 'Pending',
      statusColor: 'bg-[rgba(251,64,64,0.36)]',
      statusTextColor: 'text-[red]',
      grade: '-',
      action: 'Contact',
      actionStyle: 'text',
      actionColor: 'text-[red]',
      urgent: true,
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
            <LmsSidebar activePage="assignment" />

            {/* Right Content Area */}
            <div className="space-y-6">
              {/* Header Section */}
              <div className="bg-white border border-black px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="font-['Barlow:Bold',sans-serif] text-[28px] md:text-[32px] text-black">
                  My Assignments
                </h1>
                
                {/* Right side - Search, Sync, Notification, Profile */}
                <div className="flex items-center gap-4">
                  {/* Search */}
                  <div className="bg-[#e7edfb] rounded-[20px] px-4 py-2 flex items-center gap-2 flex-1 sm:flex-none sm:w-[255px]">
                    <svg className="w-6 h-6 flex-shrink-0" fill="#B3B3B3" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
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
                    <svg className="w-5 h-5" fill="#14AE5C" viewBox="0 0 20 20">
                      <path d="M16.5 9.5C16.5 9.5 16.24 7.875 15.25 6.5C14.26 5.125 12.875 4.375 11.25 4.125V5.625C12.375 5.875 13.375 6.375 14.125 7.25C14.875 8.125 15.125 9.125 15.125 9.5H13.25L15.875 12.125L18.5 9.5H16.5ZM8.75 14.375C7.625 14.125 6.625 13.625 5.875 12.75C5.125 11.875 4.875 10.875 4.875 10.5H6.75L4.125 7.875L1.5 10.5H3.5C3.5 10.5 3.76 12.125 4.75 13.5C5.74 14.875 7.125 15.625 8.75 15.875V14.375Z" />
                    </svg>
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-[#4eba86]">
                      synced
                    </span>
                  </div>

                  {/* Notification Bell */}
                  <button className="hidden sm:block relative">
                    <svg className="w-6 h-6" fill="#B3B3B3" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                    </svg>
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
                <div className="bg-white rounded-[16px] border border-black p-6 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#dada3b] rounded-[16px] -z-10"></div>
                  <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black mb-4">
                    Pending Submission
                  </p>
                  <div className="flex items-end gap-4">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[32px] text-black">3</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] pb-1">
                      2 due this week
                    </p>
                  </div>
                </div>

                {/* Completed Assignments */}
                <div className="bg-white rounded-[16px] border border-black p-6 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#4eba86] rounded-[16px] -z-10"></div>
                  <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black mb-4">
                    Pending Submission
                  </p>
                  <div className="flex items-end gap-4">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[32px] text-black">12</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] pb-1">
                      +4 from last month
                    </p>
                  </div>
                </div>

                {/* Completion Rate */}
                <div className="bg-white rounded-[16px] border border-black p-6 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#0866ff] rounded-[16px] -z-10"></div>
                  <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-black mb-4">
                    Pending Submission
                  </p>
                  <div className="flex items-end gap-4">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[32px] text-black">88%</span>
                    <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#b3b3b3] pb-1">
                      Top 15% of class
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs and Filters */}
              <div className="bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-4 border-b border-[#b3b3b3]">
                  {/* Tabs */}
                  <div className="flex items-center gap-6 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] pb-2 whitespace-nowrap ${
                        activeTab === 'all'
                          ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                          : 'text-black'
                      }`}
                    >
                      All Assignments
                    </button>
                    <button
                      onClick={() => setActiveTab('upcoming')}
                      className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] pb-2 whitespace-nowrap ${
                        activeTab === 'upcoming'
                          ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                          : 'text-black'
                      }`}
                    >
                      Upcoming
                    </button>
                    <button
                      onClick={() => setActiveTab('graded')}
                      className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] pb-2 whitespace-nowrap ${
                        activeTab === 'graded'
                          ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                          : 'text-black'
                      }`}
                    >
                      Graded
                    </button>
                    <button
                      onClick={() => setActiveTab('missed')}
                      className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] pb-2 whitespace-nowrap ${
                        activeTab === 'missed'
                          ? 'text-[#2e92c6] border-b-2 border-[#2e92c6]'
                          : 'text-black'
                      }`}
                    >
                      Missed
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-[#b3b3b3]">
                      Sort by:
                    </span>
                    <button className="flex items-center gap-2 font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black">
                      Due Date (Earliest)
                      <svg className="w-6 h-6" fill="#B3B3B3" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Assignments Table */}
              <div className="bg-white rounded-[10px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                {/* Table Header */}
                <div className="bg-[rgba(217,217,217,0.3)] border-b border-black px-4 py-3 grid grid-cols-[2fr_3fr_2fr_1.5fr_1fr_1fr] gap-4">
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    Course
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    ASSIGNMENT TITLE
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    DUE DATE
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    STATUS
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    GRADE
                  </p>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black">
                    ACTION
                  </p>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-black">
                  {assignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="px-4 py-6 grid grid-cols-[2fr_3fr_2fr_1.5fr_1fr_1fr] gap-4 items-center hover:bg-gray-50 transition-colors"
                    >
                      {/* Course */}
                      <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] text-black leading-tight">
                        {assignment.course}
                      </p>

                      {/* Assignment Title */}
                      <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black">
                        {assignment.title}
                      </p>

                      {/* Due Date */}
                      <p
                        className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[18px] leading-tight ${
                          assignment.urgent ? 'text-[#e23710]' : 'text-[#444]'
                        }`}
                      >
                        {assignment.dueDate}
                      </p>

                      {/* Status */}
                      <div className="flex items-center">
                        <span
                          className={`${assignment.statusColor} rounded-[15px] px-3 py-1 font-['Montserrat:SemiBold',sans-serif] text-[14px] ${assignment.statusTextColor} inline-block`}
                        >
                          {assignment.status}
                        </span>
                      </div>

                      {/* Grade */}
                      <p
                        className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] ${
                          assignment.gradeStyle || 'text-black'
                        }`}
                      >
                        {assignment.grade}
                      </p>

                      {/* Action */}
                      <div>
                        {assignment.actionStyle === 'primary' && (
                          <button className="bg-[#2e92c6] text-white rounded-[5px] px-4 py-2 font-['Montserrat:SemiBold',sans-serif] text-[14px] hover:bg-[#2678a8] transition-colors">
                            {assignment.action}
                          </button>
                        )}
                        {assignment.actionStyle === 'outline' && (
                          <button className="bg-white border border-black rounded-[5px] px-4 py-2 font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black hover:bg-gray-100 transition-colors">
                            {assignment.action}
                          </button>
                        )}
                        {assignment.actionStyle === 'text' && (
                          <button
                            className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] ${
                              assignment.actionColor || 'text-[#2e92c6]'
                            } hover:underline`}
                          >
                            {assignment.action}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="border-t border-black px-4 py-4 flex items-center justify-between">
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px]">
                    <span className="text-[#818ea1]">Showing</span>
                    <span className="text-black"> 1 </span>
                    <span className="text-[#818ea1]">to</span>
                    <span className="text-black"> 5 </span>
                    <span className="text-[#818ea1]">of</span>
                    <span className="text-black"> 15 </span>
                    <span className="text-[#818ea1]">results</span>
                  </p>

                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-[10px] border border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="#B3B3B3" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-[10px] border border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-6 h-6" fill="#B3B3B3" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
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