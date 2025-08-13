// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark-bg text-light-slate p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="text-xl font-bold">SYNTREX <span className="text-brand-blue">LIMITED</span></div>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-brand-blue">Home</a></li>
        <li><a href="#about" className="hover:text-brand-blue">About</a></li>
        <li><a href="#services" className="hover:text-brand-blue">Services</a></li>
        <li><a href="#contact" className="hover:text-brand-blue">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;