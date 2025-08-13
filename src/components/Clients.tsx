// src/components/Clients.tsx
import React from 'react';

type Client = {
    name: string;
    logo: string;
    href?: string;
};

const clients: Client[] = [
    { name: 'Client A', logo: 'https://joombaah.co.ke/assets/white_logo-CjEOtN-j.png', href: '#' },
    { name: 'Client B', logo: 'https://joombaah.co.ke/assets/white_logo-CjEOtN-j.png', href: '#' },
    { name: 'Client C', logo: 'https://joombaah.co.ke/assets/white_logo-CjEOtN-j.png', href: '#' },
    { name: 'Client D', logo: 'https://joombaah.co.ke/assets/white_logo-CjEOtN-j.png', href: '#' },
    { name: 'Client E', logo: 'https://joombaah.co.ke/assets/white_logo-CjEOtN-j.png    ', href: '#' },
];

const Clients: React.FC = () => {
    const renderItems = () =>
        clients.map((c, i) => {
            const content = (
                <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="
                        h-10 w-auto object-contain opacity-70 grayscale
                        transition-all duration-300
                        group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.03]
                    "
                />
            );

            return (
                <li
                    key={`${c.name}-${i}`}
                    className="
                        group relative shrink-0
                    "
                >
                    {c.href ? (
                        <a
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex h-20 w-[180px] items-center justify-center rounded-lg border border-white/5
                                bg-white/[0.02] px-4
                                transition-colors duration-300
                                hover:border-white/10 hover:bg-white/[0.04]
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50
                                md:h-24
                            "
                            title={c.name}
                            aria-label={`Open ${c.name}`}
                        >
                            {content}
                        </a>
                    ) : (
                        <div
                            className="
                                flex h-20 w-[180px] items-center justify-center rounded-lg border border-white/5
                                bg-white/[0.02] px-4
                                md:h-24
                            "
                            title={c.name}
                        >
                            {content}
                        </div>
                    )}
                </li>
            );
        });

    return (
        <section id="clients" className="bg-gradient-to-t from-[#154c79] to-[#122c4a] py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <p className="text-white text-xl font-semibold">
                        Trusted by leading organizations across Africa
                    </p>
                    <p className="text-white/50 text-sm mt-2">
                        A selection of partners and clients we empower with scalable solutions.
                    </p>
                </div>

                <div className="relative">
                    {/* Edge fade hints */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-dark-bg to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-dark-bg to-transparent" />

                    {/* Continuous marquee slider */}
                    <div className="overflow-hidden">
                        <div className="marquee-track will-change-transform">
                            <ul aria-label="Client logos" className="flex flex-nowrap items-center gap-6 md:gap-12">
                                {renderItems()}
                            </ul>
                            {/* duplicate for seamless loop */}
                            <ul aria-hidden="true" className="flex flex-nowrap items-center gap-6 md:gap-12">
                                {renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CSS for marquee animation */}
            <style>{`
                .marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 48px; /* visual spacing between the two lists */
                    transform: translateX(-50%);
                    animation: marquee-right 28s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                @media (min-width: 768px) {
                    .marquee-track {
                        animation-duration: 36s;
                    }
                }
            `}</style>
        </section>
    );
};

export default Clients;
