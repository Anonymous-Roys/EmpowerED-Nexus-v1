import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Play, Pause, SkipBack, SkipForward, BookOpen, Clock, CheckCircle, Lock, ArrowLeft, ArrowRight } from 'lucide-react';
import { lmsDataService, Course, Lesson } from '../utils/lmsData';

export function LmsCourseViewerPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showLessonList, setShowLessonList] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Get course from slug or state
    let foundCourse: Course | undefined;
    
    if (slug) {
      foundCourse = lmsDataService.getCourseBySlug(slug);
    } else if (location.state?.courseId) {
      foundCourse = lmsDataService.getCourseById(location.state.courseId);
    }

    if (foundCourse) {
      setCourse(foundCourse);
      // Set first unlocked lesson as current
      const firstUnlocked = foundCourse.lessons.find(l => !l.locked && !l.completed) || foundCourse.lessons[0];
      setCurrentLesson(firstUnlocked);
    } else {
      // Redirect to courses if no valid course found
      navigate('/lms-my-courses');
    }
  }, [slug, location.state, navigate]);

  const handleLessonComplete = () => {
    if (!course || !currentLesson) return;

    lmsDataService.updateCourseProgress(course.id, currentLesson.id, true);
    
    // Update local state
    const updatedCourse = lmsDataService.getCourseById(course.id);
    if (updatedCourse) {
      setCourse(updatedCourse);
    }

    // Auto-advance to next lesson
    const nextLesson = lmsDataService.getNextLesson(course.id, currentLesson.id);
    if (nextLesson && !nextLesson.locked) {
      setCurrentLesson(nextLesson);
    }
  };

  const handleLessonSelect = (lesson: Lesson) => {
    if (lesson.locked) return;
    setCurrentLesson(lesson);
    setVideoProgress(0);
    setIsPlaying(false);
  };

  const handlePreviousLesson = () => {
    if (!course || !currentLesson) return;
    const prevLesson = lmsDataService.getPreviousLesson(course.id, currentLesson.id);
    if (prevLesson) {
      setCurrentLesson(prevLesson);
    }
  };

  const handleNextLesson = () => {
    if (!course || !currentLesson) return;
    const nextLesson = lmsDataService.getNextLesson(course.id, currentLesson.id);
    if (nextLesson && !nextLesson.locked) {
      setCurrentLesson(nextLesson);
    }
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getLessonIcon = (lesson: Lesson) => {
    if (lesson.completed) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (lesson.locked) return <Lock className="w-5 h-5 text-gray-400" />;
    
    switch (lesson.type) {
      case 'video': return <Play className="w-5 h-5 text-blue-500" />;
      case 'reading': return <BookOpen className="w-5 h-5 text-purple-500" />;
      case 'quiz': return <CheckCircle className="w-5 h-5 text-orange-500" />;
      case 'assignment': return <BookOpen className="w-5 h-5 text-red-500" />;
      default: return <Play className="w-5 h-5 text-gray-500" />;
    }
  };

  if (!course || !currentLesson) {
    return (
      <div className="bg-white min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4eba86] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/lms-my-courses')}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Courses</span>
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="font-['Barlow:Bold',sans-serif] text-[24px] text-black">
                {course.title}
              </h1>
              <p className="text-sm text-gray-600">by {course.instructor}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Progress</p>
              <p className="font-semibold text-[#4eba86]">{course.progress}%</p>
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#4eba86] h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Left Column - Video/Content */}
            <div className="space-y-6">
              {/* Current Lesson Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="font-['Barlow:Bold',sans-serif] text-[32px] text-black mb-2">
                      {currentLesson.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatDuration(currentLesson.duration)}
                      </span>
                      <span className="capitalize">{currentLesson.type}</span>
                      {currentLesson.completed && (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                  {!currentLesson.completed && (
                    <button
                      onClick={handleLessonComplete}
                      className="bg-[#4eba86] text-white px-6 py-2 rounded-lg hover:bg-[#45a878] transition-colors"
                    >
                      Mark Complete
                    </button>
                  )}
                </div>
              </div>

              {/* Video Player or Content */}
              {currentLesson.type === 'video' && currentLesson.videoUrl ? (
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentLesson.videoUrl}?autoplay=0&rel=0&modestbranding=1`}
                      title={currentLesson.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : currentLesson.type === 'reading' ? (
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {currentLesson.content || 'Reading content would be displayed here. This lesson covers important concepts and provides detailed explanations of the topic.'}
                    </p>
                  </div>
                </div>
              ) : currentLesson.type === 'assignment' ? (
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Assignment</h3>
                    <p className="text-gray-600 mb-6">
                      Complete the assignment requirements and submit your work.
                    </p>
                    <button className="bg-[#2e92c6] text-white px-6 py-3 rounded-lg hover:bg-[#2678a8] transition-colors">
                      View Assignment Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Quiz</h3>
                    <p className="text-gray-600 mb-6">
                      Test your knowledge with this interactive quiz.
                    </p>
                    <button className="bg-[#ff6b35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors">
                      Start Quiz
                    </button>
                  </div>
                </div>
              )}

              {/* About this Lesson */}
              <div className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => setShowAbout(!showAbout)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <h3 className="font-['Barlow:Bold',sans-serif] text-[24px] text-black">
                    About this Lesson
                  </h3>
                  {showAbout ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {showAbout && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      This lesson covers essential concepts and provides practical knowledge that you can apply in real-world scenarios. 
                      Make sure to take notes and complete any exercises to reinforce your learning.
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handlePreviousLesson}
                  disabled={!lmsDataService.getPreviousLesson(course.id, currentLesson.id)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SkipBack className="w-5 h-5" />
                  Previous Lesson
                </button>
                <button
                  onClick={handleNextLesson}
                  disabled={!lmsDataService.getNextLesson(course.id, currentLesson.id) || lmsDataService.getNextLesson(course.id, currentLesson.id)?.locked}
                  className="flex items-center gap-2 bg-[#4eba86] text-white px-6 py-3 rounded-lg hover:bg-[#45a878] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Lesson
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Course Info & Lessons */}
            <div className="space-y-6">
              {/* Course Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-black">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {course.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">
                        ⭐ {course.rating} ({course.students} students)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Progress:</span>
                    <span className="font-medium text-[#4eba86]">{course.completedLessons}/{course.totalLessons} lessons</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span>{course.categoryLabel}</span>
                  </div>
                </div>
              </div>

              {/* Lessons List */}
              <div className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => setShowLessonList(!showLessonList)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <h3 className="font-['Barlow:Bold',sans-serif] text-[20px] text-black">
                    Course Content
                  </h3>
                  {showLessonList ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {showLessonList && (
                  <div className="px-6 pb-6">
                    <div className="space-y-2">
                      {course.lessons.map((lesson, index) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleLessonSelect(lesson)}
                          disabled={lesson.locked}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                            currentLesson.id === lesson.id
                              ? 'bg-[#4eba86] bg-opacity-10 border border-[#4eba86]'
                              : lesson.locked
                              ? 'bg-gray-50 cursor-not-allowed opacity-60'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {getLessonIcon(lesson)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-sm ${
                              currentLesson.id === lesson.id ? 'text-[#4eba86]' : 'text-black'
                            }`}>
                              {index + 1}. {lesson.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatDuration(lesson.duration)} • {lesson.type}
                            </p>
                          </div>
                          {lesson.completed && (
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Skills You'll Learn */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-['Barlow:Bold',sans-serif] text-[18px] text-black mb-4">
                  Skills You'll Learn
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
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