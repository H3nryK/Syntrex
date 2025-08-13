// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-dark-bg py-20 px-8 text-light-slate">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Image or Graphic */}
        <div className="flex justify-center">
           {/* You can replace this with a relevant image */}
           
           <img 
             src="https://via.placeholder.com/500x350" // Replace with your image URL
             alt="Our Team" 
             className="rounded-lg shadow-lg"
           />
        </div>

        {/* Right Column: Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Syntrex Limited</h2>
          <p className="text-slate mb-4">
            Founded with the mission to fortify Africa's digital landscape, Syntrex Limited stands as a bulwark against evolving cyber threats. We are a team of certified professionals with a passion for security and a commitment to excellence.
          </p>
          <p className="text-slate mb-6">
            Our approach is proactive and client-centric. We partner with organizations to understand their unique challenges, implementing bespoke security strategies that protect critical assets and ensure business continuity. From startups to large enterprises, we provide the expertise needed to navigate the complexities of the digital age securely.
          </p>
          <a href="#contact" className="text-brand-blue font-bold hover:underline">
            Learn More About Our Mission &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;