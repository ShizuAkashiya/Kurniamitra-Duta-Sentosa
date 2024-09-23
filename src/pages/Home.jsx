import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundIMG from '../assets/images/Background.jpg';
import DrinksIMG from '../assets/images/Drinks.jpg';
import EquipmentIMG from '../assets/images/Equipment.jpeg';
import FoodsIMG from '../assets/images/Foods.jpg';


const Home = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <img 
        src={BackgroundIMG} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <h1 className="text-5xl font-bold text-center text-white mb-12 z-20">Welcome to KMDS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20">
        <div className="text-center group">
          <Link to="/drinks">
            <img 
              src={DrinksIMG} 
              alt="Drinks" 
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
            />
            <h2 className="mt-4 text-2xl font-semibold text-white">Drinks</h2>
          </Link>
        </div>
        <div className="text-center group">
          <Link to="/foods">
            <img 
              src={FoodsIMG} 
              alt="Foods" 
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
            />
            <h2 className="mt-4 text-2xl font-semibold text-white">Foods</h2>
          </Link>
        </div>
        <div className="text-center group">
          <Link to="/factory-supplies">
            <img 
              src={EquipmentIMG} 
              alt="Factory Supplies" 
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
            />
            <h2 className="mt-4 text-2xl font-semibold text-white">Factory Supplies</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
