import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

type Service = {
    title: string;
    details: string;
    process: string[];
};

const serviceData: Record<string, Service> = {
    'penetration-testing': {
        title: 'Penetration Testing',
        details:
            'Our CREST-certified experts simulate sophisticated, real-world attacks to provide a realistic assessment of your security posture. We identify vulnerabilities across your network, applications, and cloud infrastructure, delivering a prioritized, actionable report to help you remediate risks effectively.',
        process: [
            '1. Scoping & Planning',
            '2. Information Gathering',
            '3. Threat Modeling',
            '4. Vulnerability Analysis',
            '5. Exploitation',
            '6. Post-Exploitation & Reporting',
        ],
    },
    // Add other services here...
};

const ServiceDetailPage: React.FC = () => {
    const { serviceId } = useParams<{ serviceId?: string }>();
    const service = serviceId ? serviceData[serviceId] : undefined;

    useEffect(() => {
        document.title = service
            ? `${service.title} | Syntrex`
            : 'Service Not Found | Syntrex';
    }, [service]);

    if (!service) {
        return (
            <main className="bg-gradient-to-t from-[#154c79] to-[#122c4a] min-h-screen pt-24 pb-20 px-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4 text-white">Service not found</h1>
                    <p className="text-slate mb-8">
                        The service you’re looking for doesn’t exist or has moved.
                    </p>
                    <Link to="/services" className="text-brand-blue underline">
                        Back to Services
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-gradient-to-t from-[#154c79] to-[#122c4a] min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-3 text-white">{service.title}</h1>
                    <p className="text-lg text-white/60">{service.details}</p>
                </header>

                <section aria-labelledby="methodology" className="mb-12">
                    <h2 id="methodology" className="text-2xl font-bold mb-4 text-white/80">
                        Our Methodology
                    </h2>
                    <ol className="list-decimal list-inside text-white/50 space-y-2">
                        {service.process.map((step, idx) => (
                            <li key={`${idx}-${step}`}>{step}</li>
                        ))}
                    </ol>
                </section>

                <aside className="bg-slate-800 p-8 rounded-lg text-center border-t-4 border-brand-blue">
                    <h3 className="text-2xl font-bold text-white mb-3">
                        Ready to Secure Your Systems?
                    </h3>
                    <p className="text-white/60 mb-6">
                        Let's identify your vulnerabilities before attackers do.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-[#122c4a] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform hover:scale-105"
                    >
                        Schedule a Consultation
                    </Link>
                </aside>
            </div>
        </main>
    );
};

export default ServiceDetailPage;