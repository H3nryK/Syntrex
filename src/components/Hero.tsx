// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-dark-bg min-h-screen flex items-center justify-center text-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-light-slate mb-4">
            Securing the Future of Digital Africa
          </h1>
          <p className="text-lg text-slate mb-8">
            Syntrex Limited is a cybersecurity consulting firm dedicated to protecting organizations across the African continent.
          </p>
          <button className="bg-brand-blue text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300">
            Get Started
          </button>
        </div>
        {/* Image/Graphic */}
        <div className="md:w-1/2 flex justify-center">
         {/* You can use an SVG or an image here */}
         <svg className="w-64 h-64 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;