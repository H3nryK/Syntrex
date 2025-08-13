// src/components/Services.tsx
import React from 'react';
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa'; // Example icons

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  { icon: <FaShieldAlt size={40} />, title: "Penetration Testing", description: "Prevent, build, and retesting compliance testing." },
  { icon: <FaChartLine size={40} />, title: "Threat Intelligence", description: "Security audits, vulnerability assessment, and risk management." },
  { icon: <FaClipboardCheck size={40} />, title: "Security Audits", description: "Verification and diligent audit reporting." },
  { icon: <FaExclamationTriangle size={40} />, title: "Incident Response", description: "Incident response assessment and management." },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition duration-300">
    <div className="text-brand-blue mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-light-slate mb-2">{title}</h3>
    <p className="text-slate">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-dark-bg py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4">Our Services</h2>
        <p className="text-lg text-slate mb-12">We offer a wide range of cybersecurity services to safeguard your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;