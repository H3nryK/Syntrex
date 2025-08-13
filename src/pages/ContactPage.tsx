import React from 'react';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-900 pt-24 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-light-slate mb-4">Contact Us</h1>
            <p className="text-lg text-slate mb-16">We're here to help. Reach out to us for a consultation or quote.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <form className="w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-slate mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full p-3 bg-dark-bg text-light-slate rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-slate mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full p-3 bg-dark-bg text-light-slate rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-slate mb-2">How can we help?</label>
                    <textarea id="message" rows={5} className="w-full p-3 bg-dark-bg text-light-slate rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition">
                    Send Message
                </button>
            </form>

            {/* Contact Details */}
            <div className="text-light-slate">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-slate mb-8">
                    Prefer to reach us directly? Our team is available during business hours to assist you.
                </p>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <IoLocationSharp size={24} className="text-brand-blue mr-4" />
                        <span>Westlands, Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center">
                        <IoCall size={24} className="text-brand-blue mr-4" />
                        <span>+254 700 000 000</span>
                    </div>
                    <div className="flex items-center">
                        <IoMail size={24} className="text-brand-blue mr-4" />
                        <span>consult@syntrex.co.ke</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;