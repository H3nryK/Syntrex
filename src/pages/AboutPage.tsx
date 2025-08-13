import React from 'react';

type TeamMember = {
    name: string;
    role: string;
    img: string;
    linkedin?: string;
    twitter?: string;
};

const IconShield = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconRadar = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v9l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const IconLightning = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.8v2.05h.07c.67-1.27 2.31-2.6 4.75-2.6 5.08 0 6.02 3.34 6.02 7.68V24h-5v-6.58c0-1.57-.03-3.58-2.18-3.58-2.19 0-2.52 1.71-2.52 3.46V24h-5V8.98z" />
    </svg>
);

const IconTwitter = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M24 4.56c-.89.39-1.85.65-2.85.77a4.93 4.93 0 0 0 2.17-2.72 9.86 9.86 0 0 1-3.12 1.19A4.92 4.92 0 0 0 11.7 8.1a13.96 13.96 0 0 1-10.14-5.15 4.9 4.9 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.96 4.96 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.41A9.88 9.88 0 0 1 0 19.53a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.42-.02-.62A10.01 10.01 0 0 0 24 4.56z" />
    </svg>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="rounded-lg border border-white p-4 text-center">
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="text-white/50 text-sm">{label}</div>
    </div>
);

const ValueCard = ({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) => (
    <div className="rounded-xl shadow-xl border border-white/60 p-6 hover:-translate-y-1 transition">
        <div className="w-10 h-10 rounded-md text-white flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-white/50">{desc}</p>
    </div>
);

const MemberCard = ({ name, role, img, linkedin, twitter }: TeamMember) => (
    <div className="p-6 rounded-lg shadow-lg text-center border border-white hover:-translate-y-1 transition">
        <img
            src={img}
            alt={`${name} - ${role}`}
            className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-4 border-2 border-white object-cover"
        />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-white/60">{role}</p>
        {(linkedin || twitter) && (
            <div className="flex items-center justify-center gap-3 mt-3 text-white">
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${name} on LinkedIn`}
                        className="hover:text-light-slate"
                    >
                        <IconLinkedIn className="w-5 h-5" />
                    </a>
                )}
                {twitter && (
                    <a
                        href={twitter}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${name} on Twitter`}
                        className="hover:text-light-slate"
                    >
                        <IconTwitter className="w-5 h-5" />
                    </a>
                )}
            </div>
        )}
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <main className="bg-gradient-to-t from-[#154c79] to-[#122c4a] pt-24 pb-24 px-6 text-light-slate">
            <div className="max-w-6xl mx-auto">
                {/* Hero */}
                <section className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-brand-blue/10 text-white border border-white mb-4">
                        Trusted Cybersecurity Partner
                    </span>
                    <h1 className="text-4xl text-white md:text-5xl font-extrabold mb-4">
                        Fortifying Africa&apos;s Digital Frontier
                    </h1>
                    <p className="text-lg text-white/50 text-slate max-w-3xl mx-auto">
                        Syntrex Limited brings world-class cybersecurity expertise tailored to Kenya and the broader African continent—enabling secure innovation and resilient growth.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <a
                            href="/services"
                            className="px-5 py-2.5 rounded-md shadow-md bg-brand-blue text-white hover:opacity-90 transition border border-white"
                        >
                            Explore Services
                        </a>
                        <a
                            href="/contact"
                            className="px-5 py-2.5 rounded-md border border-white text-white hover:bg-dark-bg transition"
                        >
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
                        <Stat value="10+" label="Years Securing Systems" />
                        <Stat value="150+" label="Projects Delivered" />
                        <Stat value="99.9%" label="Uptime Protected" />
                        <Stat value="24/7" label="Threat Monitoring" />
                    </div>
                </section>

                {/* Mission / Vision */}
                <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-white/50 mb-6">
                            To empower African organizations to innovate and thrive securely in a digital-first world—through proactive, intelligent, and resilient security solutions that protect critical data and infrastructure.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                        <p className="text-white/50">
                            A secure, prosperous Africa where every organization has the confidence and capability to operate online without fear of compromise.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="rounded-xl shadow-xl border border-white bg-gradient-to-br from-transparent to-slate-900 p-6 h-full">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <ValueCard
                                    icon={<IconShield className="w-5 h-5" />}
                                    title="Defense-in-Depth"
                                    desc="Layered controls that reduce risk and increase resilience."
                                />
                                <ValueCard
                                    icon={<IconRadar className="w-5 h-5" />}
                                    title="Threat-Led"
                                    desc="Intelligence-driven detections tailored to your environment."
                                />
                                <ValueCard
                                    icon={<IconLightning className="w-5 h-5" />}
                                    title="Rapid Response"
                                    desc="When incidents strike, minutes matter—we act fast."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">Meet the Leadership</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MemberCard
                            name="Jane Doe"
                            role="Founder & CEO"
                            img="https://via.placeholder.com/300x300.png?text=Jane+Doe"
                            linkedin="#"
                            twitter="#"
                        />
                        <MemberCard
                            name="John Smith"
                            role="Head of Threat Intelligence"
                            img="https://via.placeholder.com/300x300.png?text=John+Smith"
                            linkedin="#"
                        />
                        <MemberCard
                            name="Amina Omar"
                            role="Lead Security Consultant"
                            img="https://via.placeholder.com/300x300.png?text=Amina+Omar"
                            twitter="#"
                        />
                    </div>
                </section>

                {/* Call to Action */}
                <section className="rounded-xl shadow-xl border border-white bg-[#265473] p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-white">Ready to strengthen your security posture?</h3>
                    <p className="text-white/60 mb-6">Partner with Syntrex to assess, defend, and evolve your defenses.</p>
                    <div className="flex items-center justify-center gap-3">
                        <a
                            href="/contact"
                            className="px-5 py-2.5 rounded-md shadow-md bg-[#122c4a] text-white hover:opacity-90 transition"
                        >
                            Get a Consultation
                        </a>
                        <a
                            href="/case-studies"
                            className="px-5 py-2.5 rounded-md shadow-md border border-white text-white hover:bg-dark-bg transition"
                        >
                            View Case Studies
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutPage;