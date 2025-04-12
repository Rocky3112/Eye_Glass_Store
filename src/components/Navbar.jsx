import { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [brandMenuOpen, setBrandMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Top Row */}
        <div className="flex justify-between items-center py-2 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">📍 Find Store</a>
            <a href="mailto:admin@trynow.com" className="hover:underline">admin@trynow.com</a>
          </div>
          <div className="flex items-center gap-4">
            <span>English ▾</span>
            <span>USD ▾</span>
          </div>
        </div>

        {/* Main Row */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Eye Glass <span className="text-gray-800">LOGO</span>
          </div>

          {/* Search */}
          <div className="flex gap-2 items-center w-1/2">
            <select className="border border-gray-300 px-3 py-2 rounded-l-md bg-black text-white">
              <option >All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <div className="bg-black text-white rounded-md px-4 py-3">
            <IoSearchOutline className=""/>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-600 text-lg">
            <FaUser className="hover:text-black cursor-pointer" />
            <FaHeart className="hover:text-black cursor-pointer" />
            <FaShoppingCart className="hover:text-black cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-100 text-sm">
          <div className="relative">
            <div
              className="flex items-center gap-1 px-4 py-2 bg-black text-white rounded"
              onClick={() => setBrandMenuOpen(!brandMenuOpen)}
            >
              Categories by Brand <IoIosArrowDown />
            </div>

            {brandMenuOpen && (
              <div className="absolute bg-white shadow-md rounded mt-2 py-2 w-40">
                {["Police", "Ray Ban", "Titan", "Bvlgari", "Emporio", "Hugo Boss", "Harley", "Oakley", "Dior"].map((brand, idx) => (
                  <a key={idx} href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {brand}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-6 text-[16px]">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Shop</a>
            <a href="#" className="hover:text-blue-600">Eyeglasses</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
          </div>

          <div className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
            Get 20% off - Download Now
          </div>
        </div>
      </div>
      </div>

    </nav>
  );
}
