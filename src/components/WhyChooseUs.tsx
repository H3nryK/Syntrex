// src/components/WhyChooseUs.tsx
import React from 'react';
// Importing icons from react-icons
import { IoShieldCheckmarkOutline, IoGlobeOutline, IoPeopleOutline } from 'react-icons/io5';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <IoGlobeOutline size={30} />,
    title: "Africa-Focused Expertise",
    description: "We have deep-rooted experience in the unique threat landscape and regulatory environment of the African continent."
  },
  {
    icon: <IoShieldCheckmarkOutline size={30} />,
    title: "Proactive Security",
    description: "Instead of just reacting to threats, we focus on building a resilient security posture to prevent incidents before they occur."
  },
  {
    icon: <IoPeopleOutline size={30} />,
    title: "Client-Centric Partnership",
    description: "Your security is our priority. We work as an extension of your team to provide tailored strategies and dedicated support."
  }
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="bg-dark-bg p-6 rounded-lg border border-slate-800">
    <div className="text-brand-blue mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-light-slate mb-2">{title}</h3>
    <p className="text-slate">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-slate-900 py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4">Why Partner With Syntrex?</h2>
        <p className="text-lg text-slate mb-12 max-w-3xl mx-auto">
          We are more than just a vendor; we are your dedicated partner in navigating the complexities of cybersecurity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;