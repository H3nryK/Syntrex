import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-900 pt-24 pb-20 px-8 text-light-slate">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Fortifying Africa's Digital Frontier</h1>
        <p className="text-lg text-slate text-center max-w-3xl mx-auto mb-16">
          Syntrex Limited was founded on a single principle: to provide world-class cybersecurity expertise tailored for the unique challenges and opportunities within Kenya and the broader African continent.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Mission</h2>
                <p className="text-slate">To empower African organizations with the confidence to innovate and thrive securely in a digital-first world. We achieve this by delivering proactive, intelligent, and resilient security solutions that protect critical data and infrastructure.</p>
            </div>
            <div>
                
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold text-center mb-10">Meet the Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member Card */}
                <div className="bg-dark-bg p-6 rounded-lg text-center">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-blue"/>
                    <h3 className="text-xl font-bold text-light-slate">Jane Doe</h3>
                    <p className="text-brand-blue">Founder & CEO</p>
                </div>
                 {/* Team Member Card */}
                <div className="bg-dark-bg p-6 rounded-lg text-center">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-blue"/>
                    <h3 className="text-xl font-bold text-light-slate">John Smith</h3>
                    <p className="text-brand-blue">Head of Threat Intelligence</p>
                </div>
                 {/* Team Member Card */}
                <div className="bg-dark-bg p-6 rounded-lg text-center">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-blue"/>
                    <h3 className="text-xl font-bold text-light-slate">Amina Omar</h3>
                    <p className="text-brand-blue">Lead Security Consultant</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;