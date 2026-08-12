import React from 'react';

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-slate-900 text-white overflow-hidden py-3 border-b border-slate-800 mt-6">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 mx-4 text-xs md:text-sm font-medium">
            <span className="flex items-center gap-2">
              <span className="text-pink-400 font-bold uppercase tracking-wider">New Arrivals:</span>
              <span className="text-slate-200">The Big Shot Trader</span>
            </span>

            <span className="text-pink-500/40">•</span>

            <span className="flex items-center gap-2">
              <span className="text-purple-400 font-bold uppercase tracking-wider">Special Discount:</span>
              <span className="text-slate-200">Up to 20% off on Memberships</span>
            </span>

            <span className="text-pink-500/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;