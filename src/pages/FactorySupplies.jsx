import React from 'react';
import BackgroundIMG from '../assets/images/Equipment.jpeg';
import Q2_PROIMG from '../assets/images/Q2 PRO.jpg';
import Q5_PROIMG from '../assets/images/Q5 PRO.jpg';
import TMIMG from '../assets/images/TM.jpg';

const FactorySupplies = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

      <img 
        src={BackgroundIMG} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      />


      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


      <h1 className="text-5xl font-bold text-center text-white mb-12 z-20">Our Factory Supplies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20">
        <div className="text-center group">
          <img 
            src={Q5_PROIMG} 
            alt="Supply 1" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">Q5 PRO</h2>
        </div>
        <div className="text-center group">
          <img 
            src={Q2_PROIMG} 
            alt="Supply 2" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">Q2 PRO</h2>
        </div>
        <div className="text-center group">
          <img 
            src={TMIMG} 
            alt="Supply 3" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white">TM-800AQ series</h2>
        </div>
      </div>
    </div>
  );
};

export default FactorySupplies;
