import { ChevronDown, Bot, Camera } from 'lucide-react';
import imgEllipse8 from "figma:asset/07707dd512b6f2bb896dba0ce723c60a867dbf7e.png";

interface LmsCourseViewerPageProps {
  onNavigate: (page: string) => void;
}

export function LmsCourseViewerPage({ onNavigate }: LmsCourseViewerPageProps) {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Main Content */}
      <div className="px-6 mt-8 mb-12">
        <div className="max-w-[1375px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Course Progress Card */}
              <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-8">
                <h2 className="font-['Barlow:Bold',sans-serif] text-[48px] text-black mb-4 tracking-[0.48px]">
                  Solar power for digital devices
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-[rgba(217,217,217,0.7)] h-[23px] rounded-[20px] overflow-hidden">
                    <div className="bg-[#2e92c6] h-full rounded-[20px]" style={{ width: '65%' }}></div>
                  </div>
                  <span className="font-['Barlow:Regular',sans-serif] text-[18px] text-black whitespace-nowrap">
                    Overall Progress: 65%
                  </span>
                </div>
              </div>

              {/* Video Player */}
              <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="relative aspect-video bg-[#d9d9d9]">
                  {/* Video placeholder - replace with actual video embed */}
                  <img 
                    src="https://images.unsplash.com/photo-1616745207210-a98414926a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3MzAwNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Solar panels for digital devices"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video overlay with text */}
                  <div className="absolute top-4 left-4 bg-[rgba(123,97,255,0.8)] px-4 py-2 rounded-lg">
                    <p className="font-['Barlow:Regular',sans-serif] text-[14px] text-white">
                      Sed malesuada felis vitae blandit molestie
                    </p>
                  </div>

                  {/* Info button */}
                  <button className="absolute top-4 right-4 w-8 h-8 bg-[rgba(0,0,0,0.5)] rounded-full flex items-center justify-center hover:bg-[rgba(0,0,0,0.7)] transition-colors">
                    <span className="font-['Barlow:Bold',sans-serif] text-[16px] text-white">i</span>
                  </button>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] px-4 py-3">
                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="h-1 bg-[rgba(255,255,255,0.3)] rounded-full overflow-hidden">
                        <div className="h-full bg-red-600 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>

                    {/* Control buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Play button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                        
                        {/* Next button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                          </svg>
                        </button>

                        {/* Volume button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                          </svg>
                        </button>

                        {/* Time display */}
                        <span className="font-['Barlow:Regular',sans-serif] text-[12px] text-white">
                          0:07 / 1:34
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Captions button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/>
                          </svg>
                        </button>

                        {/* Settings button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                          </svg>
                        </button>

                        {/* Mini player button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/>
                          </svg>
                        </button>

                        {/* Theater mode button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
                          </svg>
                        </button>

                        {/* Fullscreen button */}
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About this Lesson */}
              <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
                <button className="flex items-center justify-between w-full">
                  <h3 className="font-['Barlow:Bold',sans-serif] text-[32px] text-black">
                    About this Lession
                  </h3>
                  <ChevronDown className="w-7 h-7 text-[#444444] opacity-35" />
                </button>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-6">
                <button className="bg-[#d9d9d9] border border-black text-[#0c1733] font-['Barlow:Bold',sans-serif] text-[34px] px-12 py-4 rounded-[40px] hover:bg-[#c9c9c9] transition-colors">
                  Previous Lesson
                </button>
                <button className="bg-[#0c1733] border border-black text-white font-['Barlow:Bold',sans-serif] text-[34px] px-12 py-4 rounded-[40px] hover:bg-[#1a2849] transition-colors">
                  Next Lession
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* User Profile Card */}
              <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 flex items-center gap-4">
                <img 
                  src={imgEllipse8} 
                  alt="Mr Mensah" 
                  className="w-[92px] h-[92px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-['Barlow:Bold',sans-serif] text-[32px] text-black mb-3 tracking-[0.32px]">
                    Mr Mensah
                  </h3>
                  <button className="bg-[rgba(46,146,198,0.5)] border-2 border-[rgba(0,0,0,0.5)] rounded-[20px] px-6 py-2 flex items-center gap-2 hover:bg-[rgba(46,146,198,0.7)] transition-colors">
                    <Bot className="w-[35px] h-[35px] text-[#2E92C6]" />
                    <span className="font-['Montserrat:Bold',sans-serif] text-[18px] text-black tracking-[0.18px]">
                      Ask AI helper
                    </span>
                  </button>
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                {/* Tabs */}
                <div className="border-b border-[#d9d9d9] px-6 py-5 flex gap-8">
                  <button className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black">
                    {'{Curriculum}'}
                  </button>
                  <button className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black border-b-2 border-black pb-1">
                    {'{Notes}'}
                  </button>
                  <button className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black">
                    {'{Downloads}'}
                  </button>
                </div>

                {/* Notes Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <p className="font-['Barlow:SemiBold',sans-serif] text-[24px] text-black">
                      {'{12:30}'}{' '}
                      <span className="font-['Barlow:Regular',sans-serif]">
                        Solar pannels must be kept clean , It should be done every two weeks.
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-['Barlow:SemiBold',sans-serif] text-[24px] text-black">
                      {'{12:30}'}{' '}
                      <span className="font-['Barlow:Regular',sans-serif]">
                        Solar pannels must be kept clean , It should be done every two weeks.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Answer Input Section */}
              <div className="bg-[rgba(181,187,196,0.4)] rounded-[10px] p-6">
                <div className="bg-white border border-black rounded-[10px] p-6 mb-4 min-h-[120px]">
                  <p className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-[#c2c1bd]">
                    Type your answer here...
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Camera className="w-[34px] h-[34px] text-[#b3b3b3]" />
                    <span className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black">
                      Capture screenshot
                    </span>
                  </div>
                  <div className="bg-[rgba(198,216,207,0.4)] rounded-[20px] px-6 py-2 flex items-center gap-2">
                    <svg className="w-[34px] h-[34px]" viewBox="0 0 34 34" fill="none">
                      <path d="M17 2C17.9193 2 18.8295 2.18106 19.6788 2.53284C20.5281 2.88463 21.2997 3.40024 21.9497 4.05025C22.5998 4.70026 23.1154 5.47194 23.4672 6.32122C23.8189 7.1705 24 8.08075 24 9V11H10V9C10 7.14348 10.7375 5.36301 12.0503 4.05025C13.363 2.73748 15.1435 2 17 2ZM17 14C18.3261 14 19.5979 14.5268 20.5355 15.4645C21.4732 16.4021 22 17.6739 22 19C22 20.3261 21.4732 21.5979 20.5355 22.5355C19.5979 23.4732 18.3261 24 17 24C15.6739 24 14.4021 23.4732 13.4645 22.5355C12.5268 21.5979 12 20.3261 12 19C12 17.6739 12.5268 16.4021 13.4645 15.4645C14.4021 14.5268 15.6739 14 17 14ZM28 11C29.0609 11 30.0783 11.4214 30.8284 12.1716C31.5786 12.9217 32 13.9391 32 15V29C32 30.0609 31.5786 31.0783 30.8284 31.8284C30.0783 32.5786 29.0609 33 28 33H6C4.93913 33 3.92172 32.5786 3.17157 31.8284C2.42143 31.0783 2 30.0609 2 29V15C2 13.9391 2.42143 12.9217 3.17157 12.1716C3.92172 11.4214 4.93913 11 6 11H8V9C8 6.61305 8.94821 4.32387 10.636 2.63604C12.3239 0.948211 14.6131 0 17 0C19.3869 0 21.6761 0.948211 23.364 2.63604C25.0518 4.32387 26 6.61305 26 9V11H28Z" fill="#09A258"/>
                    </svg>
                    <span className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black">
                      Saved Offline
                    </span>
                  </div>
                </div>
              </div>

              {/* Downloads Section */}
              <div className="bg-white border border-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                {/* Tabs */}
                <div className="border-b border-[#d9d9d9] px-6 py-5 flex gap-8">
                  <button className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black">
                    {'{Curriculum}'}
                  </button>
                  <button className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black border-b-2 border-black pb-1">
                    {'{Notes}'}
                  </button>
                  <button className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-black">
                    {'{Downloads}'}
                  </button>
                </div>

                {/* Downloads Content */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-[55px] h-[55px] flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 55 55" fill="none">
                        <path d="M9.16667 4.58333V50.4167H45.8333V15.5833L34.375 4.58333H9.16667Z" fill="#EF5350"/>
                      </svg>
                    </div>
                    <p className="font-['Barlow:Regular',sans-serif] text-[24px] text-black">
                      Course syllabus.pdf (150kb)
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-[55px] h-[55px] flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 55 55" fill="none">
                        <rect x="14.5" y="5" width="26" height="45" rx="2" fill="#107C41"/>
                        <rect x="33.5" y="16" width="11" height="11" fill="#107C41"/>
                        <path d="M21 25L26 30L21 35M29 25L24 30L29 35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="font-['Barlow:Regular',sans-serif] text-[24px] text-black">
                      Maintenance Checklist.xlsx (45kb)
                    </p>
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