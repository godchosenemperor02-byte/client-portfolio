"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg.jpg')", // <- your bg image in /public folder
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
        
        {/* Image Section */}
        <div className="w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-[45%_55%_60%_40%/50%_45%_55%_50%] shadow-lg border-4 border-white/20 animate-fadeIn">
          <img
            src="/man.jpg" // <- your image in /public folder
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-slideUp">
            Engr. Jason Eirik McCallister
          </h1>

          <p className="text-gray-300 text-lg md:text-xl animate-slideUp delay-200">
           From concept to creation, I engineer mechanical systems that balance efficiency, durability, and design. 
            Every part tells a story — of motion, purpose, and innovation.
          </p>

          <div className="animate-fadeIn delay-500">
            <Link href='/resume' className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-black to-blue-900 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
