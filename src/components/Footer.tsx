// src/components/Footer.tsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-slate py-10 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-brand-blue"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-brand-blue"><FaLinkedin size={24} /></a>
          <a href="#" className="hover:text-brand-blue"><FaGithub size={24} /></a>
        </div>
        <div className="mb-4">
          <a href="#services" className="px-3 hover:text-light-slate">Services</a>|
          <a href="#about" className="px-3 hover:text-light-slate">About Us</a>|
          <a href="#contact" className="px-3 hover:text-light-slate">Contact</a>
        </div>
        <p>&copy; {currentYear} Syntrex Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;