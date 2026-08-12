import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[65vh] md:min-h-[75vh] bg-slate-950 rounded-2xl shadow-2xl mt-6 overflow-hidden flex items-center p-4 sm:p-8 md:p-12">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')`
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl p-0.5 rounded-3x  bg-transparent">
          <div className="bg-white/10 rounded-[22px] p-6 sm:p-10 border border-white/20">
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-red-400">
              Find Your Next Read
            </h1>
            
            <p className="text-base sm:text-lg mb-8 text-gray-100 leading-relaxed font-medium">
              A seamless and modern web application designed to digitize the traditional library experience.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/all-books">
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white font-semibold shadow-lg shadow-pink-500/30 px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 hover:opacity-95 active:scale-95">
                  Browse Now
                </Button>
              </Link>

              <Link href="#">
                <Button variant="bordered" className="text-white border-white/60 hover:border-white hover:bg-white/20 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;