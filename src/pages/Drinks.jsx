import React from 'react';
import DrinksIMG from '../assets/images/Drinks.jpg';
import BubblegumIMG from '../assets/images/Bubble Gum.jpg';
import AlmondIMG from '../assets/images/Almond.jpg';
import BlueberryIMG from '../assets/images/Blueberry.jpg';

const Drinks = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

      <img 
        src={DrinksIMG} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      />


      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


      <h1 className="text-5xl font-bold text-center text-white mb-12 z-20">Our Drinks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20">
        <div className="text-center group">
          <img 
            src={BubblegumIMG} 
            alt="Drink 1" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">MONIN BUBBLE GUM SYRUP</h2>
        </div>
        <div className="text-center group">
          <img 
            src={AlmondIMG} 
            alt="Drink 2" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">MONIN ALMOND SYRUP</h2>
        </div>
        <div className="text-center group">
          <img 
            src={BlueberryIMG} 
            alt="Drink 3" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">MONIN BLUEBERRY SYRUP</h2>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
