import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoIMG from '../assets/images/logo.jpg'; // Import your logo image

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`py-4 shadow-lg transform transition-all duration-500 ease-in-out ${isSticky ? 'bg-gray-900 text-white fixed w-full top-0 left-0 z-50 opacity-95' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img 
              src={LogoIMG} 
              alt="Kurniamitra Duta Sentosa Logo" 
              className="w-12 h-12 object-cover rounded-full" // Keep the logo circular
            />
          </Link>
          <span className="text-2xl font-bold text-white">Kurniamitra Duta Sentosa</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Home</Link>
          <Link to="/drinks" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Drinks</Link>
          <Link to="/foods" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Foods</Link>
          <Link to="/factory-supplies" className="hover:text-yellow-500 transition-all duration-300 ease-in-out">Factory Supplies</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
