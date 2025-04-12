import React from 'react';
import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';

const SlideCard = ({ item }) => {
  return (
    <div className="relative p-4 bg-white rounded-xl shadow-xl hover:shadow-xl transition-all duration-300 w-[300px] mx-auto h-[390px]">
   
      <span className="absolute top-8 left-3 bg-black text-white text-xs px-2 py-1 rounded-md">
        {item.discount}
      </span>

      <div className="relative flex justify-center items-center h-[180px] mb-4">
        <div className="absolute w-[180px] h-[190px] bg-gray-100 rounded-tl-full rounded-tr-full"></div>
        <img
          src={item.image}
          alt={item.name}
          className="relative z-10 w-[130px] h-[100px] object-contain"
        />

        <div className="absolute top-7 right-3 space-y-5">
          <AiOutlineEye className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
          <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer" />
          <BiGitCompare className="w-5 h-5 text-gray-600 hover:text-green-500 cursor-pointer" />
          <AiOutlineShoppingCart className="w-5 h-5 text-gray-600 hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-600'} font-medium`}>
        {item.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <div className="flex items-center text-sm text-blue-500 mt-1">
        ★★★★☆ &nbsp;
        <span className="text-gray-500 ml-1 text-xs">({item.reviews || '0'})</span>
      </div>

      <div className="mt-2 text-sm">
        <span className="line-through text-gray-400 mr-2">{item.oldPrice}</span>
        <span className="text-blue-600 font-bold">{item.price}</span>
      </div>
    </div>
  );
};

export default SlideCard;
