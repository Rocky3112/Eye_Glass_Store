import React from "react";
import Slider from "react-slick";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";

// Sample data for flash sale products
const flashSaleProducts = [
  {
    id: 1,
    name: "Gucci Eyeglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s",
    inStock: true,
    price: "$6.22",
    oldPrice: "$8.52",
    discount: "15% OFF",
  },
  {
    id: 2,
    name: "Police Eyeglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s",
    inStock: false,
    price: "$7.22",
    oldPrice: "$8.52",
    discount: "20% OFF",
  },
  {
    id: 3,
    name: "Polo Eyeglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s",
    inStock: true,
    price: "$6.22",
    oldPrice: "$8.52",
    discount: "15% OFF",
  },
  {
    id: 4,
    name: "Ray Ban Eyeglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s",
    inStock: true,
    price: "$7.22",
    oldPrice: "$8.52",
    discount: "30% OFF",
  },
  {
    id: 5,
    name: "Ray Ban Eyeglasses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNooF1G60qJGQux-jIv85MDqB5irbxYPJu5w&s",
    inStock: true,
    price: "$7.22",
    oldPrice: "$8.52",
    discount: "30% OFF",
  },
];

const FlashSaleSlider = () => {
  // Slider settings
  const settings = {
    dots: false,  // Disable dots navigation
    infinite: true,  // Allow infinite scroll
    speed: 500,  // Animation speed
    slidesToShow: 4,  // Number of products visible at once
    slidesToScroll: 1,  // Number of products to scroll per action
    arrows: true,  // Show left and right arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },  // 2 products visible on medium screens
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // 1 product visible on small screens
    ],
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Flash Sale</h2>
      <Slider {...settings}>
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white rounded-xl shadow p-4 relative">
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain mb-3"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className={`text-sm ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
              <div className="flex items-center mt-2 text-sm text-gray-500 line-through">
                {product.oldPrice}
              </div>
              <div className="text-blue-600 font-semibold">{product.price}</div>

              <div className="flex gap-2 mt-4">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100">
                  <AiOutlineEye className="text-blue-600 w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-red-100">
                  <AiOutlineHeart className="text-red-500 w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-green-100">
                  <BiGitCompare className="text-green-600 w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-yellow-100">
                  <AiOutlineShoppingCart className="text-yellow-600 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlashSaleSlider;
