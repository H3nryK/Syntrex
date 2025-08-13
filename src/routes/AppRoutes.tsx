// src/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all your page components
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import ContactPage from '../pages/ContactPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* You can add a 404 Not Found route here as well */}
      <Route path="*" element={<HomePage />} /> {/* Or a dedicated 404 component */}
    </Routes>
  );
};

export default AppRoutes;