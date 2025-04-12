import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Company LOGO</h3>
            <p className="mb-2"><FaMapMarkerAlt className="inline mr-2" /> 1234 Street Name, City, Country</p>
            <p className="mb-2"><FaPhoneAlt className="inline mr-2" /> (123) 456-7890</p>
            <p className="mb-4"><FaEnvelope className="inline mr-2" /> contact@company.com</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Looks</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500">Features</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500">Bio-data</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-l-md text-black"
              />
              <button
                type="submit"
                className="p-2 bg-white text-blue-700 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-6 pt-7">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaLinkedin /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;