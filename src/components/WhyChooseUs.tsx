import React from 'react';
import { IoShieldCheckmarkOutline, IoGlobeOutline, IoPeopleOutline } from 'react-icons/io5';
import type { IconType } from 'react-icons';

interface Feature {
    Icon: IconType;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        Icon: IoGlobeOutline,
        title: 'Africa-Focused Expertise',
        description:
            'We have deep-rooted experience in the unique threat landscape and regulatory environment of the African continent.',
    },
    {
        Icon: IoShieldCheckmarkOutline,
        title: 'Proactive Security',
        description:
            'Instead of just reacting to threats, we focus on building a resilient security posture to prevent incidents before they occur.',
    },
    {
        Icon: IoPeopleOutline,
        title: 'Client-Centric Partnership',
        description:
            'Your security is our priority. We work as an extension of your team to provide tailored strategies and dedicated support.',
    },
];

const FeatureCard = React.memo(({ Icon, title, description }: Feature) => (
    <li className="p-6 rounded-lg shadow-lg border border-white transition-colors hover:border-brand-blue focus-within:border-brand-blue">
        <div className="text-white mb-4" aria-hidden="true">
            <Icon size={30} focusable="false" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/50">{description}</p>
    </li>
));
FeatureCard.displayName = 'FeatureCard';

const WhyChooseUs: React.FC = () => {
    const headingId = 'why-us-heading';
    return (
        <section id="why-us" aria-labelledby={headingId} className="bg-gradient-to-b from-[#154c79] to-[#122c4a] py-20 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 id={headingId} className="text-3xl font-bold text-white mb-4">
                    Why Partner With Syntrex?
                </h2>
                <p className="text-lg text-white/50 mb-12 max-w-3xl mx-auto">
                    We are more than just a vendor; we are your dedicated partner in navigating the complexities of cybersecurity.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" role="list">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhyChooseUs;