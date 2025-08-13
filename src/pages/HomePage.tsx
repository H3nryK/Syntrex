import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import { FaShieldAlt, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

// A summary of services for the homepage
const HomeServicesSummary: React.FC = () => (
    <section className="bg-dark-bg py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-light-slate mb-4">Our Core Security Services</h2>
            <p className="text-lg text-slate mb-12">We provide a comprehensive suite of services to protect your digital assets.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                {/* Featured Service 1 */}
                <div className="bg-slate-800 p-6 rounded-lg">
                    <FaShieldAlt size={30} className="text-brand-blue mb-4" />
                    <h3 className="text-xl font-bold text-light-slate mb-2">Penetration Testing</h3>
                    <p className="text-slate">Identify and fix critical vulnerabilities before attackers can exploit them.</p>
                </div>
                {/* Featured Service 2 */}
                <div className="bg-slate-800 p-6 rounded-lg">
                    <FaChartLine size={30} className="text-brand-blue mb-4" />
                    <h3 className="text-xl font-bold text-light-slate mb-2">Threat Intelligence</h3>
                    <p className="text-slate">Gain actionable insights on emerging threats relevant to your industry.</p>
                </div>
                {/* Featured Service 3 */}
                <div className="bg-slate-800 p-6 rounded-lg">
                    <FaClipboardCheck size={30} className="text-brand-blue mb-4" />
                    <h3 className="text-xl font-bold text-light-slate mb-2">Security Audits</h3>
                    <p className="text-slate">Ensure compliance with industry standards and best practices.</p>
                </div>
            </div>
            <Link to="/services" className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-transform hover:scale-105">
                Explore All Services
            </Link>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeServicesSummary />
      <WhyChooseUs />
      <Clients />
    </>
  );
};

export default HomePage;