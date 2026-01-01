import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  category?: string;
}

export function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of online learning in africa',
      description: 'Discover how offline-first solutions are revolutionizing access to education across the continent.',
      image: imgRectangle132,
    },
    {
      id: 2,
      title: 'Bridging the health information with tech',
      description: 'Exploring new offline-tech is used to transforms education in remote areas',
      image: imgRectangle152,
    },
    {
      id: 3,
      title: 'Innovations in Micro Cloud for Education',
      description: 'Exploring new offline-tech is used to transforms education in remote areas',
      image: imgRectangle154,
    },
    {
      id: 4,
      title: 'Empowering Communities Through Digital Literacy',
      description: 'How EmpowerEd Nexus is fostering skills for the next generation of African Innovators',
      image: imgRectangle144,
    },
    {
      id: 5,
      title: "A student's Journey with EmpowerED Nexus",
      description: 'Read a personal story of transformation and growth enabled by our platform',
      image: imgRectangle147,
    },
    {
      id: 6,
      title: 'The Role of Technology in Preventive Healthcare',
      description: 'Exploring how mobile technology can empower individuals to take control of their health',
      image: imgRectangle150,
    },
  ];

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

      {/* Blog Posts Grid */}
      <div className="px-4 md:px-6 pb-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
                  <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[18px] text-black leading-[14px] mb-5 text-center min-h-[42px]">
                    {post.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-[15px] mb-6 text-center min-h-[50px]">
                    {post.description}
                  </p>
                  <button className="font-['Montserrat:Light',sans-serif] text-[14px] text-[#2e92c6] leading-[15px] hover:underline transition-all w-full text-center">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-4 h-4 text-[#b3b3b3]" />
            </button>
            <div className="flex items-center gap-3">
              <button className="font-['Barlow:Regular',sans-serif] text-[18px] text-black hover:text-[#2e92c6] transition-colors">
                1
              </button>
              <button className="w-6 h-6 rounded-full bg-[#2e92c6] flex items-center justify-center">
                <span className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                  2
                </span>
              </button>
              <button className="font-['Barlow:Regular',sans-serif] text-[18px] text-black hover:text-[#2e92c6] transition-colors">
                3
              </button>
              <span className="font-['Barlow:Regular',sans-serif] text-[18px] text-black">
                ...
              </span>
              <button className="font-['Barlow:Regular',sans-serif] text-[18px] text-black hover:text-[#2e92c6] transition-colors">
                20
              </button>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-[#b3b3b3]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
