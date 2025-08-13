import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import { FaShieldAlt, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

// A summary of services for the homepage (accessible, clickable cards)
const HomeServicesSummary: React.FC = () => {
    type Service = {
        title: string;
        description: string;
        icon: React.ComponentType<{ size?: number; className?: string }>;
    };

    const services: Service[] = [
        {
            title: 'Penetration Testing',
            description: 'Identify and fix critical vulnerabilities before attackers can exploit them.',
            icon: FaShieldAlt,
        },
        {
            title: 'Threat Intelligence',
            description: 'Gain actionable insights on emerging threats relevant to your industry.',
            icon: FaChartLine,
        },
        {
            title: 'Security Audits',
            description: 'Ensure compliance with industry standards and best practices.',
            icon: FaClipboardCheck,
        },
    ];

    return (
        <section id="services" aria-labelledby="services-heading" className="py-20 px-8 bg-gradient-to-t from-[#154c79] to-[#122c4a]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <p className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-brand-blue/10 rounded">
                        What we do
                    </p>
                    <h2 id="services-heading" className="mt-4 text-3xl font-bold text-white">
                        Our Core Security Services
                    </h2>
                    <p className="mt-3 text-lg text-white">
                        We provide a comprehensive suite of services to protect your digital assets.
                    </p>
                </div>

                <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map(({ title, description, icon: Icon }) => (
                        <li key={title} className="h-full">
                            <Link
                                to="/services"
                                aria-label={`${title} — Learn more`}
                                className="group block h-full focus:outline-none"
                            >
                                <div className="h-full p-6 border-white border rounded-2xl shadow-2xl transition transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 focus-visible:ring-2 focus-visible:ring-brand-blue/70 focus-visible:ring-offset-0">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-blue/10 ring-1 ring-white mb-4">
                                        <Icon size={24} className="text-white" />
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                                    <p className="text-white/50 mb-4">{description}</p>
                                    <span className="inline-flex items-center text-white font-medium">
                                        Learn more <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="text-center">
                    <Link
                        to="/services"
                        className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/70"
                    >
                        Explore All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

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