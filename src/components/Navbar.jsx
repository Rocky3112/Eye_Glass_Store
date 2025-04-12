import { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [brandMenuOpen, setBrandMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 lg:w-full">
      <div className="lg:w-full px-4 sm:px-6 lg:px-8">
        
        <div className="lg:flex justify-between items-center py-2 text-sm text-gray-500">
          <div className="lg:flex items-center gap-4">
            <a href="#" className="hover:underline">📍 Find Store</a>
            <a href="mailto:admin@trynow.com" className="hover:underline">admin@trynow.com</a>
          </div>
          <div className="lg:flex items-center gap-4">
            <span>English ▾</span>
            <span>USD ▾</span>
          </div>
        </div>

      
        <div className="lg:flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <div className="text-2xl font-bold text-blue-600">
            Eye Glass <span className="text-gray-800">LOGO</span>
          </div>

          <div className="lg:flex flex-1 max-w-2xl w-full gap-2 items-center">
            <select className="border border-gray-300 px-3 py-2 rounded-l-md bg-black text-white">
              <option>All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for products"
              className="lg:w-full border border-gray-300 px-3 py-2"
            />
            <div className="bg-black text-white p-3 rounded-md">
              <IoSearchOutline />
            </div>
          </div>

          <div className="lg:flex items-center gap-6 text-gray-600 text-lg">
            <FaUser className="hover:text-black cursor-pointer" />
            <FaHeart className="hover:text-black cursor-pointer" />
            <FaShoppingCart className="hover:text-black cursor-pointer" />
          </div>
        </div>

        
        <div className="lg:flex flex-col md:flex-row md:items-center justify-between py-3 border-t border-gray-100 text-sm gap-4">
          <div className="relative">
            <div
              onClick={() => setBrandMenuOpen(!brandMenuOpen)}
              className="lg:flex items-center gap-1 px-4 py-2 bg-black text-white rounded cursor-pointer"
            >
              Categories by Brand <IoIosArrowDown />
            </div>

            {brandMenuOpen && (
              <div className="absolute bg-white shadow-md rounded mt-2 py-2 w-48 z-50">
                {[
                  "Police", "Ray Ban", "Titan", "Bvlgari", "Emporio",
                  "Hugo Boss", "Harley", "Oakley", "Dior"
                ].map((brand, idx) => (
                  <a key={idx} href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {brand}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="lg:flex flex-wrap gap-6 text-[16px]">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Shop</a>
            <a href="#" className="hover:text-blue-600">Eyeglasses</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
          </div>

          <div className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 cursor-pointer">
            Get 20% off - Download Now
          </div>
        </div>
      </div>
    </nav>
  );
}
