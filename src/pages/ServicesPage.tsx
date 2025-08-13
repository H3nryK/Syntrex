import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa';

const allServices = [
  { id: 'penetration-testing', icon: <FaShieldAlt size={30} />, title: 'Penetration Testing', description: 'Simulate real-world attacks to identify and fix vulnerabilities in your systems.' },
  { id: 'threat-intelligence', icon: <FaChartLine size={30} />, title: 'Threat Intelligence', description: 'Actionable insights on emerging threats and proactive risk mitigation.' },
  { id: 'security-audits', icon: <FaClipboardCheck size={30} />, title: 'Security Audits', description: 'Ensure compliance with standards like ISO 27001, GDPR, and local data protection laws.' },
  { id: 'incident-response', icon: <FaExclamationTriangle size={30} />, title: 'Incident Response', description: 'Rapid response and recovery services to minimize the impact of a security breach.' },
  // Add more services as needed
];

const ServicesPage: React.FC = () => {
  return (
    <section className="bg-slate-900 pt-24 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-light-slate text-center mb-4">Cybersecurity Services</h1>
        <p className="text-lg text-slate text-center mb-16">
            End-to-end security solutions tailored for businesses in Kenya and across Africa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map(service => (
            <Link to={`/services/${service.id}`} key={service.id} className="block bg-slate-800 p-8 rounded-lg hover:border-brand-blue border-2 border-transparent transition duration-300 transform hover:-translate-y-1">
              <div className="text-brand-blue mb-4 inline-block">{service.icon}</div>
              <h3 className="text-xl font-bold text-light-slate mb-2">{service.title}</h3>
              <p className="text-slate">{service.description}</p>
              <span className="text-brand-blue font-semibold mt-4 block">Learn More &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;