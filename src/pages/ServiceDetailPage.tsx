import React from 'react';
import { useParams, Link } from 'react-router-dom';

// In a real app, this data would come from a CMS or API
const serviceData: any = {
  'penetration-testing': {
    title: 'Penetration Testing',
    details: 'Our CREST-certified experts simulate sophisticated, real-world attacks to provide a realistic assessment of your security posture. We identify vulnerabilities across your network, applications, and cloud infrastructure, delivering a prioritized, actionable report to help you remediate risks effectively.',
    process: ['1. Scoping & Planning', '2. Information Gathering', '3. Threat Modeling', '4. Vulnerability Analysis', '5. Exploitation', '6. Post-Exploitation & Reporting']
  },
  // ... add detailed data for all other service IDs
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return <div className="text-white text-center py-40">Service not found.</div>;
  }

  return (
    <div className="bg-dark-bg pt-24 pb-20 px-8 text-light-slate">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        <p className="text-lg text-slate mb-8">{service.details}</p>
        
        <h3 className="text-2xl font-bold mb-4">Our Methodology</h3>
        <ul className="list-decimal list-inside text-slate space-y-2 mb-12">
          {service.process.map((step: string) => <li key={step}>{step}</li>)}
        </ul>
        
        <div className="bg-slate-800 p-8 rounded-lg text-center border-t-4 border-brand-blue">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Systems?</h4>
            <p className="text-slate mb-6">Let's identify your vulnerabilities before attackers do.</p>
            <Link to="/contact" className="bg-brand-blue text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-transform hover:scale-105">
                Schedule a Consultation
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;