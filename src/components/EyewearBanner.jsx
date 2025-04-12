// components/EyewearBanner.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const EyewearBanner = () => {
  return (
    <div className="bg-[#eefaff] lg:w-full py-16">
      <div className="lg:max-w-[1250px] lg:mx-auto px-4 lg:flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="lg:flex-1 text-center md:text-left">
          <p className="text-sky-400 font-medium text-sm md:text-base mb-2">
            Coming Soon April
          </p>
          <h1 className="lg:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight font-space_grotesk">
            NEW FASHION <br /> & MODERN <br /> EYEGLASSES
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-300">
            Discover Models <FaArrowRight />
          </div>
        </div>

        <div className="lg:flex-1 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gIfzn0DR6BxHfwfGr58JznE3WtO-Z318Ag&s" 
            alt="Modern Eyeglasses"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full rounded-md "
          />
        </div>
      </div>

      <div className="lg:flex justify-center mt-8 gap-2">
        <span className="h-3 w-3 bg-black rounded-full"></span>
        <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default EyewearBanner;
