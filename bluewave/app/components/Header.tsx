import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-blue-500 flex items-center justify-around">
      <div className="text-white text-2xl font-inter font-light">BlueWave Analytics</div>
      <div className="text-white text-xl font-inter font-light">Home</div>
      <div className="text-white text-xl font-inter font-light">Features</div>
      <div className="text-white text-xl font-inter font-light">Contact</div>
      <div className="text-white text-xl font-inter font-light">Get Started</div>
    </div>
  );
};

export default Navbar;