import React from 'react';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';

const ContactPage: React.FC = () => {
    return (
        <section className="bg-gradient-to-t from-[#154c79] to-[#122c4a]">
            <div className="mx-auto max-w-7xl pt-24 pb-20 px-6 md:px-8">
                {/* Header */}
                <header className="text-center mb-12 md:mb-16">
                    <p className="text-white/70 text-sm font-semibold tracking-wider uppercase">Get in touch</p>
                    <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
                    <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                        We're here to help. Reach out to us for a consultation or quote.
                    </p>
                </header>

                <div className="grid gap-8 lg:gap-10 lg:grid-cols-5">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form className="bg-slate-800/50 rounded-2xl border border-slate-700/60 shadow-xl backdrop-blur-sm p-6 md:p-8">
                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        required
                                        className="w-full rounded-xl bg-dark-bg/60 border border-white/60 text-light-slate placeholder-slate-400 px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="jane@company.com"
                                        required
                                        className="w-full rounded-xl bg-dark-bg/60 border border-white/60 text-light-slate placeholder-slate-400 px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
                                    />
                                </div>
                            </div>

                            <div className="mt-5">
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell us about your project or question..."
                                    required
                                    className="w-full rounded-xl bg-dark-bg/60 border border-white/60 text-light-slate placeholder-slate-400 px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition resize-y"
                                />
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center items-center gap-2 w-full sm:w-auto bg-[#122c4a] text-white font-semibold px-6 py-3 rounded-xl shadow-xl hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-blue/70 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
                                >
                                    Send Message
                                </button>
                                <p className="text-sm text-white">
                                    Prefer email?{' '}
                                    <a
                                        href="mailto:consult@syntrex.co.ke"
                                        className="text-white/60 hover:text-white hover:underline underline-offset-4"
                                    >
                                        consult@syntrex.co.ke
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <aside className="lg:col-span-2">
                        <div className="bg-slate-800/30 rounded-2xl border border-slate-700/60 shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                            <p className="mt-2 text-white/60">
                                Prefer to reach us directly? Our team is available during business hours to assist you.
                            </p>

                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a
                                        href="https://maps.google.com/?q=Westlands,+Nairobi,+Kenya"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-start gap-4 rounded-xl border border-transparent hover:border-slate-700/60 hover:bg-slate-800/50 p-4 transition"
                                    >
                                        <IoLocationSharp size={22} className="text-white mt-0.5" />
                                        <span className="text-white/80">Westlands, Nairobi, Kenya</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+254700000000"
                                        className="group flex items-start gap-4 rounded-xl border border-transparent hover:border-slate-700/60 hover:bg-slate-800/50 p-4 transition"
                                    >
                                        <IoCall size={22} className="text-white mt-0.5" />
                                        <span className="text-white/80">+254 700 000 000</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:consult@syntrex.co.ke"
                                        className="group flex items-start gap-4 rounded-xl border border-transparent hover:border-slate-700/60 hover:bg-slate-800/50 p-4 transition"
                                    >
                                        <IoMail size={22} className="text-white mt-0.5" />
                                        <span className="text-white/80">consult@syntrex.co.ke</span>
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                                <div className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-4">
                                    <p className="text-xs uppercase tracking-wider text-white">Hours</p>
                                    <p className="mt-1 text-white/60">Mon–Fri</p>
                                    <p className="text-white">9:00–18:00 EAT</p>
                                </div>
                                <div className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-4">
                                    <p className="text-xs uppercase tracking-wider text-white">Response</p>
                                    <p className="mt-1 text-white/60">Within 1 business day</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;