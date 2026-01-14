import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-['Barlow:Bold',sans-serif] text-[120px] md:text-[150px] text-[#4eba86] leading-none mb-4">
          404
        </h1>
        <h2 className="font-['Barlow:Bold',sans-serif] text-[32px] md:text-[40px] text-black mb-4">
          Page Not Found
        </h2>
        <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#868181] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#4eba86] text-white font-['Montserrat:Bold',sans-serif] text-[18px] px-8 py-3 rounded-[10px] transition-all duration-300 hover:bg-[#45a878] hover:scale-105 active:scale-95 shadow-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}