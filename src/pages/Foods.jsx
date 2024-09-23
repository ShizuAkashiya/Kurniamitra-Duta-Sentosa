import React from 'react';
import BackgroundIMG from '../assets/images/Foods.jpg';
import ChocolatIMG from '../assets/images/Chocolat.png';
import CroustadesIMG from '../assets/images/Croustades.png';
import LemonTartIMG from '../assets/images/LemonTart.png';

const Foods = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

      <img 
        src={BackgroundIMG} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      />


      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


      <h1 className="text-5xl font-bold text-center text-white mb-12 z-20">Our Foods</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20">
        <div className="text-center group">
          <img 
            src={ChocolatIMG} 
            alt="Food 1" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">Pain au Chocolat</h2>
        </div>
        <div className="text-center group">
          <img 
            src={CroustadesIMG} 
            alt="Food 2" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">Peach and Berry Croustades</h2>
        </div>
        <div className="text-center group">
          <img 
            src={LemonTartIMG} 
            alt="Food 3" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">French Lemon Tart</h2>
        </div>
      </div>
    </div>
  );
};

export default Foods;
