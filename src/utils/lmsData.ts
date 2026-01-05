import imgCloseupShotBoyDoctorWearingSanitaryMasks from "figma:asset/da93045379979112d51f82f7050c64fddce75e5b.png";
import imgFullShotWomenWorkingTogether from "figma:asset/980ca31a37e931370485260965df813062d1f2fc.png";
import imgEmployeeWorkingMarketingSetting from "figma:asset/96776002ef849fba844a97b648112be288e4db0d.png";
import imgProgrammingBackground from "figma:asset/7ad00823a6486e81517db4cba14912a20819e09c.png";
import imgWomanExpectingChild from "figma:asset/a897330c0252f7b7ed162fe504778d870d48aa1f.png";
import imgManWorkingEnvironment from "figma:asset/c5c2c4a655c9ea3db3ae9b60fac04620ae148042.png";

export interface Lesson {
  id: number;
  title: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  duration: number; // in minutes
  videoUrl?: string;
  content?: string;
  completed: boolean;
  locked: boolean;
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  instructor: string;
  image: string;
  duration: string;
  totalLessons: number;
  completedLessons: number;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
  enrolledDate: string;
  lastAccessed?: string;
  lessons: Lesson[];
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
}

export interface UserProgress {
  courseId: number;
  lessonId: number;
  progress: number;
  completed: boolean;
  timeSpent: number;
  lastAccessed: string;
}

class LmsDataService {
  private courses: Course[] = [
    {
      id: 1,
      slug: 'intro-community-health',
      title: "Introduction to Community Health Strategies",
      description: "Learn fundamental approaches to improving community health outcomes through evidence-based strategies and local interventions.",
      category: "public-health",
      categoryLabel: "Public Health",
      instructor: "Dr. Samuel Abiola",
      image: imgCloseupShotBoyDoctorWearingSanitaryMasks,
      duration: "8 weeks",
      totalLessons: 24,
      completedLessons: 18,
      progress: 75,
      status: 'in-progress',
      enrolledDate: '2024-01-15',
      lastAccessed: '2024-01-20',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      skills: ['Community Assessment', 'Health Promotion', 'Disease Prevention'],
      lessons: [
        {
          id: 1,
          title: "Introduction to Community Health",
          type: 'video',
          duration: 15,
          videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Health Assessment Fundamentals",
          type: 'video',
          duration: 20,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 3,
          title: "Community Engagement Strategies",
          type: 'reading',
          duration: 30,
          content: "Community engagement is crucial for successful health interventions...",
          completed: true,
          locked: false,
        },
        {
          id: 4,
          title: "Water Supply Systems Analysis",
          type: 'assignment',
          duration: 60,
          completed: false,
          locked: false,
        },
        {
          id: 5,
          title: "Health Promotion Planning",
          type: 'video',
          duration: 25,
          videoUrl: 'dQw4w9WgXcQ',
          completed: false,
          locked: true,
        },
      ]
    },
    {
      id: 2,
      slug: 'sustainable-farming-tech',
      title: "Sustainable Farming Technology",
      description: "Explore modern agricultural technologies and sustainable farming practices for improved crop yields and environmental conservation.",
      category: "agriculture",
      categoryLabel: "Agriculture",
      instructor: "Prof Kenya Mbatha",
      image: imgFullShotWomenWorkingTogether,
      duration: "6 weeks",
      totalLessons: 18,
      completedLessons: 6,
      progress: 35,
      status: 'in-progress',
      enrolledDate: '2024-01-10',
      lastAccessed: '2024-01-18',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 890,
      skills: ['Precision Agriculture', 'Soil Management', 'Crop Rotation'],
      lessons: [
        {
          id: 1,
          title: "Introduction to Sustainable Farming",
          type: 'video',
          duration: 18,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Soil Health Assessment",
          type: 'video',
          duration: 22,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 3,
          title: "Modern Irrigation Techniques",
          type: 'reading',
          duration: 25,
          content: "Modern irrigation systems help optimize water usage...",
          completed: false,
          locked: false,
        },
      ]
    },
    {
      id: 3,
      slug: 'data-science-fundamentals',
      title: "Data Science Fundamentals",
      description: "Master the basics of data science including statistics, data analysis, and machine learning concepts with practical applications.",
      category: "data-science",
      categoryLabel: "Data Science",
      instructor: "Tech4Africa Initiative",
      image: imgEmployeeWorkingMarketingSetting,
      duration: "12 weeks",
      totalLessons: 36,
      completedLessons: 0,
      progress: 0,
      status: 'not-started',
      enrolledDate: '2024-01-20',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 2100,
      skills: ['Python', 'Statistics', 'Data Visualization', 'Machine Learning'],
      lessons: [
        {
          id: 1,
          title: "Introduction to Data Science",
          type: 'video',
          duration: 20,
          videoUrl: 'dQw4w9WgXcQ',
          completed: false,
          locked: false,
        },
        {
          id: 2,
          title: "Python Basics for Data Science",
          type: 'video',
          duration: 35,
          videoUrl: 'dQw4w9WgXcQ',
          completed: false,
          locked: true,
        },
      ]
    },
    {
      id: 4,
      slug: 'python-beginners-local-solutions',
      title: "Python for Beginners: Local Solutions",
      description: "Learn Python programming with a focus on solving local community problems and building practical applications.",
      category: "programming",
      categoryLabel: "Programming",
      instructor: "Dr. Samuel Abiola",
      image: imgProgrammingBackground,
      duration: "10 weeks",
      totalLessons: 30,
      completedLessons: 22,
      progress: 75,
      status: 'in-progress',
      enrolledDate: '2024-01-05',
      lastAccessed: '2024-01-19',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 1800,
      skills: ['Python Programming', 'Problem Solving', 'Web Development'],
      lessons: [
        {
          id: 1,
          title: "Python Installation and Setup",
          type: 'video',
          duration: 12,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Variables and Data Types",
          type: 'video',
          duration: 18,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 3,
          title: "Control Structures",
          type: 'video',
          duration: 25,
          videoUrl: 'dQw4w9WgXcQ',
          completed: false,
          locked: false,
        },
      ]
    },
    {
      id: 5,
      slug: 'maternal-health-basics',
      title: "Maternal Health Basics",
      description: "Essential knowledge for maternal health care, prenatal care, and supporting mothers in community health settings.",
      category: "healthcare",
      categoryLabel: "Healthcare",
      instructor: "Dr. Kofi Yaw",
      image: imgWomanExpectingChild,
      duration: "4 weeks",
      totalLessons: 12,
      completedLessons: 6,
      progress: 50,
      status: 'in-progress',
      enrolledDate: '2024-01-12',
      lastAccessed: '2024-01-17',
      difficulty: 'Beginner',
      rating: 4.5,
      students: 650,
      skills: ['Prenatal Care', 'Maternal Nutrition', 'Birth Planning'],
      lessons: [
        {
          id: 1,
          title: "Introduction to Maternal Health",
          type: 'video',
          duration: 15,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Prenatal Care Essentials",
          type: 'video',
          duration: 22,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
      ]
    },
    {
      id: 6,
      slug: 'renewable-energy-systems',
      title: "Renewable Energy Systems",
      description: "Comprehensive guide to renewable energy technologies, solar power systems, and sustainable energy solutions for communities.",
      category: "sustainability",
      categoryLabel: "Sustainability",
      instructor: "Dr. Green",
      image: imgManWorkingEnvironment,
      duration: "8 weeks",
      totalLessons: 24,
      completedLessons: 24,
      progress: 100,
      status: 'completed',
      enrolledDate: '2023-12-01',
      lastAccessed: '2024-01-15',
      difficulty: 'Advanced',
      rating: 4.8,
      students: 920,
      skills: ['Solar Energy', 'Wind Power', 'Energy Storage', 'Grid Integration'],
      lessons: [
        {
          id: 1,
          title: "Introduction to Renewable Energy",
          type: 'video',
          duration: 20,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Solar Panel Technology",
          type: 'video',
          duration: 25,
          videoUrl: 'dQw4w9WgXcQ',
          completed: true,
          locked: false,
        },
      ]
    },
  ];

  private userProgress: UserProgress[] = [];

  // Get all courses
  getCourses(): Course[] {
    return this.courses;
  }

  // Get course by ID
  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  // Get course by slug
  getCourseBySlug(slug: string): Course | undefined {
    return this.courses.find(course => course.slug === slug);
  }

  // Get courses by status
  getCoursesByStatus(status: Course['status']): Course[] {
    return this.courses.filter(course => course.status === status);
  }

  // Get courses by category
  getCoursesByCategory(category: string): Course[] {
    return this.courses.filter(course => course.category === category);
  }

  // Update course progress
  updateCourseProgress(courseId: number, lessonId: number, completed: boolean): void {
    const course = this.getCourseById(courseId);
    if (!course) return;

    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    lesson.completed = completed;

    // Unlock next lesson if current is completed
    if (completed) {
      const currentIndex = course.lessons.findIndex(l => l.id === lessonId);
      if (currentIndex < course.lessons.length - 1) {
        course.lessons[currentIndex + 1].locked = false;
      }
    }

    // Recalculate course progress
    const completedLessons = course.lessons.filter(l => l.completed).length;
    course.completedLessons = completedLessons;
    course.progress = Math.round((completedLessons / course.totalLessons) * 100);
    
    // Update course status
    if (course.progress === 0) {
      course.status = 'not-started';
    } else if (course.progress === 100) {
      course.status = 'completed';
    } else {
      course.status = 'in-progress';
    }

    course.lastAccessed = new Date().toISOString();
  }

  // Get lesson by course and lesson ID
  getLesson(courseId: number, lessonId: number): Lesson | undefined {
    const course = this.getCourseById(courseId);
    return course?.lessons.find(l => l.id === lessonId);
  }

  // Get next lesson
  getNextLesson(courseId: number, currentLessonId: number): Lesson | undefined {
    const course = this.getCourseById(courseId);
    if (!course) return undefined;

    const currentIndex = course.lessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex === -1 || currentIndex === course.lessons.length - 1) return undefined;

    return course.lessons[currentIndex + 1];
  }

  // Get previous lesson
  getPreviousLesson(courseId: number, currentLessonId: number): Lesson | undefined {
    const course = this.getCourseById(courseId);
    if (!course) return undefined;

    const currentIndex = course.lessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex <= 0) return undefined;

    return course.lessons[currentIndex - 1];
  }

  // Get dashboard stats
  getDashboardStats() {
    const inProgress = this.getCoursesByStatus('in-progress').length;
    const completed = this.getCoursesByStatus('completed').length;
    const totalProgress = this.courses.reduce((acc, course) => acc + course.progress, 0);
    const overallProgress = Math.round(totalProgress / this.courses.length);

    return {
      coursesInProgress: inProgress,
      completedCourses: completed,
      overallProgress,
      totalCourses: this.courses.length,
    };
  }
}

export const lmsDataService = new LmsDataService();