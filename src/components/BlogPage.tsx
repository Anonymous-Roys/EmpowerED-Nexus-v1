import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Calendar, User, Eye } from 'lucide-react';
import imgRectangle132 from "figma:asset/4d5469ae6ea675bf45e40161691e387eab4ded9c.png";
import imgRectangle144 from "figma:asset/63c4c994780c2bb7658f34fe396967a82ff28112.png";
import imgRectangle147 from "figma:asset/f6e8e5a3c053863763a1337af4714240220b49d9.png";
import imgRectangle152 from "figma:asset/ab5b5f579452bdbb6aaa35d54eb0bf870f8872b5.png";
import imgRectangle150 from "figma:asset/467d9f6b82a526b22bf94f43cd3ba0991bc063d3.png";
import imgRectangle154 from "figma:asset/9684d04a2166cbc2f5101f7383b8f3bb687c3c07.png";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
}

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Health' },
    { id: 'technology', label: 'Technology' },
    { id: 'innovation', label: 'Innovation' },
  ];
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of online learning in africa',
      description: 'Discover how offline-first solutions are revolutionizing access to education across the continent.',
      image: imgRectangle132,
      category: 'education',
      author: 'Dr. Kwame Asante',
      date: '2024-01-15',
      readTime: '5 min read',
      views: 1250,
    },
    {
      id: 2,
      title: 'Bridging the health information with tech',
      description: 'Exploring new offline-tech is used to transforms education in remote areas',
      image: imgRectangle152,
      category: 'health',
      author: 'Dr. Amina Hassan',
      date: '2024-01-12',
      readTime: '7 min read',
      views: 980,
    },
    {
      id: 3,
      title: 'Innovations in Micro Cloud for Education',
      description: 'Exploring new offline-tech is used to transforms education in remote areas',
      image: imgRectangle154,
      category: 'technology',
      author: 'John Mensah',
      date: '2024-01-10',
      readTime: '6 min read',
      views: 1100,
    },
    {
      id: 4,
      title: 'Empowering Communities Through Digital Literacy',
      description: 'How EmpowerEd Nexus is fostering skills for the next generation of African Innovators',
      image: imgRectangle144,
      category: 'education',
      author: 'Sarah Okonkwo',
      date: '2024-01-08',
      readTime: '4 min read',
      views: 850,
    },
    {
      id: 5,
      title: "A student's Journey with EmpowerED Nexus",
      description: 'Read a personal story of transformation and growth enabled by our platform',
      image: imgRectangle147,
      category: 'education',
      author: 'Michael Adebayo',
      date: '2024-01-05',
      readTime: '8 min read',
      views: 1350,
    },
    {
      id: 6,
      title: 'The Role of Technology in Preventive Healthcare',
      description: 'Exploring how mobile technology can empower individuals to take control of their health',
      image: imgRectangle150,
      category: 'health',
      author: 'Dr. Fatima Al-Rashid',
      date: '2024-01-03',
      readTime: '6 min read',
      views: 920,
    },
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleReadMore = (postId: number) => {
    alert(`Opening full article for post ${postId}. This would navigate to the full article page.`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="bg-white px-4 md:px-6 pt-8 md:pt-12 pb-12">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="font-['Barlow:Black',sans-serif] text-[48px] md:text-[64px] text-[#0c1733] mb-6">
            Insights and Inspiration
          </h1>
          <p className="font-['Barlow:Regular',sans-serif] text-[20px] md:text-[24px] text-[#0c1733] tracking-wide">
            Articles that help you learn, heal, Innovate and thrive.
          </p>
        </div>
      </div>
{/* Search Bar */}
            <div className="px-4 md:px-6 pb-4 mb-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86] focus:border-transparent"
            />
          </div>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className="px-4 md:px-6 pb-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {/* Category Filter */}  
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-[20px] font-['Barlow:SemiBold',sans-serif] text-[16px] md:text-[18px] transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#4eba86] text-black'
                    : 'bg-[#d9d9d9] text-black hover:bg-[#c0c0c0]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="px-4 md:px-6 pb-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-[20px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="h-[120px] w-full bg-[#d9d9d9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category and Meta Info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#4eba86] text-white text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[18px] text-black leading-[14px] mb-5 text-center min-h-[42px]">
                    {post.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-[15px] mb-4 text-center min-h-[50px]">
                    {post.description}
                  </p>
                  
                  {/* Author and Date */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button 
                      onClick={() => handleReadMore(post.id)}
                      className="font-['Montserrat:Light',sans-serif] text-[14px] text-[#2e92c6] leading-[15px] hover:underline transition-all"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 text-[#b3b3b3]" />
              </button>
              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`font-['Barlow:Regular',sans-serif] text-[18px] transition-colors ${
                      currentPage === page
                        ? 'w-6 h-6 rounded-full bg-[#2e92c6] text-black flex items-center justify-center'
                        : 'text-black hover:text-[#2e92c6]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4 text-[#b3b3b3]" />
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
