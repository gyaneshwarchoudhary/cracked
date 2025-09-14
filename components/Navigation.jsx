import React, { useState } from 'react';
import { Users, Menu, X } from 'lucide-react';

const Navigation = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Crac<span className='text-[#6A0DAD]'>ked</span> </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#sponsers" className="text-gray-300 hover:text-white transition-colors">Sponsers</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#community" className="block text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#events" className="block text-gray-300 hover:text-white transition-colors">Events</a>
            <a href="#sponsers" className="block text-gray-300 hover:text-white transition-colors">Sponsers</a>
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;