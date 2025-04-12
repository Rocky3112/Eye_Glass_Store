import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Autoplay } from 'swiper/modules';
import SlideCard from './SlideCard';
import { allReviews } from '../data/allReviews';

const AllProducts = () => {
  const [swiper, setSwiper] = useState(null);

  const handleRightClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleLeftClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const settings = {
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
    onSwiper: (swiper) => setSwiper(swiper),
  };

  return (
    <div className="bg-[#f4fdff] py-12 md:py-12 lg:py-12">
      <div className="max-w-[1250px] mx-auto px-4 md:px-0">
        {/* Title with lines */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <h2 className="text-2xl md:text-4xl font-space_grotesk font-semibold text-center whitespace-nowrap">
            All Products
          </h2>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="relative">
          <Swiper modules={[Autoplay]} {...settings}>
            {allReviews.map((item) => (
              <SwiperSlide key={item.name}>
                <SlideCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={handleLeftClick}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#F26924] hover:bg-[#dd5815] p-4 rounded-full text-black z-10 shadow-md hidden md:block"
          >
            <FaArrowLeft className="text-xl" />
          </button>

          <button
            onClick={handleRightClick}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-200 hover:bg-[#dd5815] p-4 rounded-full text-black z-10 shadow-md hidden md:block"
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;