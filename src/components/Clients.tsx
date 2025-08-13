// src/components/Clients.tsx
import React from 'react';

// You would replace these with the actual logo URLs
const clientLogos = [
  'https://via.placeholder.com/150x60/1e293b/8892b0?text=Client+A',
  'https://via.placeholder.com/150x60/1e293b/8892b0?text=Client+B',
  'https://via.placeholder.com/150x60/1e293b/8892b0?text=Client+C',
  'https://via.placeholder.com/150x60/1e293b/8892b0?text=Client+D',
  'https://via.placeholder.com/150x60/1e293b/8892b0?text=Client+E',
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="bg-dark-bg py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-center text-slate text-xl font-semibold mb-10">
          Trusted by leading organizations across Africa
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {clientLogos.map((logoUrl, index) => (
            <img 
              key={index} 
              src={logoUrl} 
              alt={`Client ${index + 1} Logo`} 
              className="h-10 opacity-60 hover:opacity-100 transition-opacity duration-300" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;