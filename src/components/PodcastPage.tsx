import { useState } from 'react';
import imgRectangle95 from "figma:asset/9b07e0b5444e1f6bd40decab9d59f7192aa390f1.png";
import imgRectangle99 from "figma:asset/e4ca6b08459cb4e79279e0a814dcf5d29f783cca.png";
import imgRectangle124 from "figma:asset/9337a9b1901b192fd2792a969bc031a58bba91e8.png";
import imgRectangle125 from "figma:asset/282e3246abf87bec60f19f7756865f27f694e806.png";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, Clock, Calendar } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  episodeNumber: string;
  image: string;
  category: string;
  duration: string;
  publishDate: string;
  isPlaying?: boolean;
}

export function PodcastPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const episodesPerPage = 4;

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'education', label: 'Education' },
    { id: 'digital', label: 'Digital Transformation' },
    { id: 'health', label: 'Health Awareness' },
    { id: 'entrepreneurship', label: 'Entrepreneurship' },
  ];

  const episodes: Episode[] = [
    {
      id: 1,
      title: 'Bridging the Digital Divide in the Rural schools',
      description: 'Exploring new offline-tech is used to transforms education in remote areas',
      episodeNumber: 'Episode 12',
      image: imgRectangle95,
      category: 'education',
      duration: '45:30',
      publishDate: '2024-01-15',
      isPlaying: false,
    },
    {
      id: 2,
      title: "From Idea to Impact: An Entrepreneur's Journey",
      description: 'A conversation with a Tony Eunels Foundation alumuson scaling a busniess',
      episodeNumber: 'Episode 11',
      image: imgRectangle99,
      category: 'entrepreneurship',
      duration: '38:15',
      publishDate: '2024-01-08',
      isPlaying: false,
    },
    {
      id: 3,
      title: 'Mental wellness for Young Entrepreneurs',
      description: 'Discussing the role of AI diagnostics in improving rural healthcare access.',
      episodeNumber: 'Episode 10',
      image: imgRectangle124,
      category: 'health',
      duration: '52:20',
      publishDate: '2024-01-01',
      isPlaying: false,
    },
    {
      id: 4,
      title: 'Innovating for Sustainable Futures',
      description: 'Discussing the role of AI diagnostics in improving rural healthcare access.',
      episodeNumber: 'Episode 9',
      image: imgRectangle125,
      category: 'digital',
      duration: '41:45',
      publishDate: '2023-12-25',
      isPlaying: false,
    },
  ];

  // Filter episodes based on category and search
  const filteredEpisodes = episodes.filter(episode => {
    const matchesCategory = activeCategory === 'all' || episode.category === activeCategory;
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEpisodes.length / episodesPerPage);
  const startIndex = (currentPage - 1) * episodesPerPage;
  const paginatedEpisodes = filteredEpisodes.slice(startIndex, startIndex + episodesPerPage);

  const handlePlayPause = (episodeId: number) => {
    if (playingEpisode === episodeId) {
      setPlayingEpisode(null);
    } else {
      setPlayingEpisode(episodeId);
      // In a real app, this would start audio playback
      alert(`Playing episode ${episodeId}. Audio player would start here.`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="bg-white px-4 md:px-6 pt-8 md:pt-12 pb-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="bg-[#0c1733] rounded-[20px] px-6 md:px-12 py-12 md:py-16 text-center">
            <h1 className="font-['Barlow:Bold',sans-serif] text-[36px] md:text-[48px] text-white mb-4">
              EmpowerED Voices
            </h1>
            <p className="font-['Barlow:Regular',sans-serif] text-[16px] md:text-[18px] text-white">
              Conversations that inspire learning, healing, and innovation.
            </p>
          </div>
        </div>
      </div>
{/* Search Bar */}
      <div className="px-4 md:px-6 pb-4 mb-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4eba86] focus:border-transparent"
            />
          </div>
        </div>
      </div>
      {/* Category Filters */}
      <div className="px-4 md:px-6 pb-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
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
        </div>
      </div>

  

      {/* Episodes Grid */}
      <div className="px-4 md:px-6 pb-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-white rounded-[20px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Episode Image */}
                <div className="relative h-[110px] w-full p-4">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover rounded"
                  />
                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 bg-[#0008] bg-opacity-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handlePlayPause(episode.id)}
                      className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all"
                    >
                      {playingEpisode === episode.id ? (
                        <Pause className="w-6 h-6 text-black" />
                      ) : (
                        <Play className="w-6 h-6 text-black ml-1" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Episode Content */}
                <div className="p-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-[#4eba86] text-white text-xs rounded-full font-medium">
                      {episode.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-black leading-[14px] mb-3 min-h-[32px]">
                    {episode.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black leading-[15px] mb-3 min-h-[35px]">
                    {episode.description}
                  </p>
                  
                  {/* Episode Info */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span className="font-['Montserrat:Light',sans-serif]">
                      {episode.episodeNumber}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Listen Now Button */}
                  <button 
                    onClick={() => handlePlayPause(episode.id)}
                    className={`w-full rounded-[20px] py-2 font-['Montserrat:Bold',sans-serif] text-[14px] transition-colors duration-300 flex items-center justify-center gap-2 ${
                      playingEpisode === episode.id
                        ? 'bg-[#4eba86] text-white hover:bg-[#45a878]'
                        : 'bg-[#0c1733] text-white hover:bg-[#1a2847]'
                    }`}
                  >
                    {playingEpisode === episode.id ? (
                      <>
                        <Pause className="w-4 h-4" />
                        Playing
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Listen Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-[#b3b3b3]" />
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
                <ChevronRight className="w-5 h-5 text-[#b3b3b3]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="bg-[rgba(217,217,217,0.47)] rounded-[20px] px-6 md:px-12 py-12 text-center">
            <h2 className="font-['Barlow:Bold',sans-serif] text-[28px] md:text-[32px] text-[#0c1733] mb-4">
              Never Miss an Episode
            </h2>
            <p className="font-['Barlow:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0c1733] mb-8 max-w-2xl mx-auto">
              Subscribe to get the latest episode, special content,
              <br />
              and updates directly in your inbox
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email address"
                required
                className="w-full sm:w-auto flex-1 bg-white rounded-[10px] px-4 py-2 font-['Barlow:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0c1733] placeholder-[#0c1733] border-none outline-none"
              />
              <button
                type="submit"
                className="bg-[#0c1733] text-white rounded-[10px] px-6 py-2 font-['Barlow:Bold',sans-serif] text-[16px] md:text-[18px] hover:bg-[#1a2847] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
