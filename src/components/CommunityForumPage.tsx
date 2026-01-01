import { useState } from 'react';
import { ThumbsUp, MessageCircle, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import imgEllipse11 from "figma:asset/98f39cd8b12bdd559b5b7357bb75ac6fc87567f1.png";
import imgEllipse12 from "figma:asset/f0ae8087987a9b82427b95de8e87ee644e19953b.png";
import imgEllipse13 from "figma:asset/a50af27230f73b33f1ceac9acb23aae297b431e1.png";
import imgRectangle130 from "figma:asset/9337a9b1901b192fd2792a969bc031a58bba91e8.png";
import imgRectangle132 from "figma:asset/282e3246abf87bec60f19f7756865f27f694e806.png";
import imgRectangle134 from "figma:asset/669c6235dfa01ed744a2de5e4cc4c6247c49efef.png";

interface Post {
  id: number;
  author: string;
  avatar: string;
  category: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}

export function CommunityForumPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All posts' },
    { id: 'general', label: 'General Discussions' },
    { id: 'teacher', label: 'Teacher Room' },
    { id: 'digital', label: 'Digital Education' },
    { id: 'health', label: 'Health and Wellness' },
    { id: 'tech', label: 'Tech and Beyond' },
  ];

  const posts: Post[] = [
    {
      id: 1,
      author: 'Kwame Danso',
      avatar: imgEllipse11,
      category: 'Tech and innovations',
      title: 'Exploring new digital tools for classroom engagement',
      description: "Let's share our favorite digital tools that have transformed our teaching methods and engage students in new ways. I'll start with...",
      image: imgRectangle130,
      likes: 68,
      comments: 45,
    },
    {
      id: 2,
      author: 'Mamie Kohoe',
      avatar: imgEllipse12,
      category: 'Health & Wellness',
      title: 'Strategies for promoting Mental Wellness in schools',
      description: 'With the increasing pressures on students and educators, what are some effective strategies your school has implemented...',
      image: imgRectangle132,
      likes: 78,
      comments: 28,
    },
    {
      id: 3,
      author: 'Sarah Doe',
      avatar: imgEllipse13,
      category: 'Teacher Room',
      title: 'Parent Teacher communication in the digital age',
      description: 'What platforms are you using for effective parent teacher communication? We are considering moving away from traditional...',
      image: imgRectangle134,
      likes: 110,
      comments: 75,
    },
  ];

  const trendingPosts = [
    'Offline-first learning solutions: a case study',
    'Integrating AI tutors in rural classrooms',
    'The role of community in student success',
    'Gamification techniques for STEM subjects',
  ];

  return (
    <div className="bg-white w-full">
      {/* Decorative circles */}
      <div className="fixed top-[140px] right-[150px] w-[234px] h-[234px] bg-[#4eba86] rounded-full -z-10 opacity-50" />
      <div className="fixed top-[140px] right-[50px] w-[61px] h-[61px] bg-[#4eba86] rounded-full -z-10 opacity-50" />
      <div className="fixed top-[170px] right-[200px] w-[35px] h-[31px] bg-[#2e92c6] rounded-full -z-10 opacity-50" />
      <div className="fixed top-[315px] right-[350px] w-[61px] h-[61px] bg-[#4eba86] rounded-full -z-10 opacity-50" />
      <div className="fixed top-[360px] right-[40px] w-[35px] h-[31px] bg-[#2e92c6] rounded-full -z-10 opacity-50" />

      {/* Hero Section */}
      <div className="bg-white px-4 md:px-6 pt-8 md:pt-12 pb-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="font-['Barlow:Black',sans-serif] text-[48px] md:text-[64px] text-[#0c1733] mb-4">
            EmpowerED Community
            <br />
            Forum
          </h1>
          <p className="font-['Barlow:Regular',sans-serif] text-[20px] md:text-[24px] text-[#0c1733] mb-8 tracking-wide">
            Conversations that inspire learning, healing, and innovation.
          </p>
          <button className="bg-[#0c1733] text-white rounded-[10px] px-8 py-3 font-['Montserrat:Bold',sans-serif] text-[14px] hover:bg-[#1a2847] transition-colors duration-300">
            Start a Discussion
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="px-4 md:px-6 pb-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-[20px] font-['Barlow:SemiBold',sans-serif] text-[16px] md:text-[18px] transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#4eba86] text-black'
                    : 'bg-[#d9d9d9] text-black hover:bg-[#c0c0c0]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-[397px] ml-auto">
            <div className="bg-white border border-black rounded-[10px] px-4 py-2 flex items-center gap-3">
              <Search className="w-6 h-6 text-black" />
              <input
                type="text"
                placeholder="Search Form"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none font-['Barlow:Regular',sans-serif] text-[18px] text-[#0c1733] placeholder-[#0c1733] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 pb-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Posts Section */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white bg-opacity-50 border border-black rounded-[20px] p-6 hover:bg-opacity-70 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-[39px] h-[39px] rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-['Barlow:Regular',sans-serif] text-[20px] text-black">
                        {post.author}
                      </p>
                      <p className="font-['Barlow:Regular',sans-serif] text-[20px] text-black">
                        Posted in <span className="text-[#2e92c6]">{post.category}</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_214px] gap-4">
                    <div>
                      <h3 className="font-['Barlow:SemiBold',sans-serif] text-[24px] text-black mb-4">
                        {post.title}
                      </h3>
                      <p className="font-['Barlow:Regular',sans-serif] text-[20px] text-black leading-normal">
                        {post.description}
                      </p>
                    </div>
                    <div className="rounded-[10px] overflow-hidden h-[129px]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-6">
                    <button className="flex items-center gap-2 hover:text-[#4eba86] transition-colors">
                      <ThumbsUp className="w-6 h-6" />
                      <span className="font-['Barlow:Regular',sans-serif] text-[20px] text-black">
                        {post.likes}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-[#2e92c6] transition-colors">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-['Barlow:Regular',sans-serif] text-[20px] text-black">
                        {post.comments}
                      </span>
                    </button>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-4 h-4 text-[#b3b3b3]" />
                </button>
                <div className="flex items-center gap-3">
                  <button className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                    1
                  </button>
                  <button className="w-6 h-6 rounded-full bg-[#2e92c6] flex items-center justify-center">
                    <span className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                      2
                    </span>
                  </button>
                  <button className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                    3
                  </button>
                  <span className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                    ...
                  </span>
                  <button className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                    20
                  </button>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#b3b3b3]" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Posts */}
              <div className="bg-white border-[0.5px] border-black rounded-[20px] p-6">
                <h3 className="font-['Barlow:SemiBold',sans-serif] text-[32px] text-black mb-6">
                  Trending Posts
                </h3>
                <div className="border-t border-black pt-4 space-y-4">
                  {trendingPosts.map((post, index) => (
                    <button
                      key={index}
                      className="font-['Barlow:Regular',sans-serif] text-[18px] text-black text-left hover:text-[#2e92c6] transition-colors block w-full"
                    >
                      {post}
                    </button>
                  ))}
                </div>
              </div>

              {/* Webinar Card */}
              <div className="bg-[rgba(128,128,128,0.3)] border-[0.5px] border-black rounded-[20px] p-6">
                <h3 className="font-['Barlow:SemiBold',sans-serif] text-[32px] text-black mb-4">
                  Join our Next webinar
                </h3>
                <p className="font-['Barlow:Regular',sans-serif] text-[18px] text-black mb-6">
                  Topic: The Future of EdTech in Africa.
                </p>
                <button className="w-full bg-[#4eba86] text-white rounded-[10px] px-6 py-3 font-['Montserrat:Bold',sans-serif] text-[14px] hover:bg-[#45a878] transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
