import React from 'react';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
import FAQItem from '../components/FAQItem';

const faqs = [
    { question: "How long does a security audit take?", answer: "The duration varies depending on the scope, but a typical audit takes between 2 to 4 weeks from start to finish." },
    { question: "Do you serve clients outside of Kenya?", answer: "Yes, while our headquarters are in Nairobi, we serve clients across the entire East African region and beyond." }
];

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

                {(() => {
                    const enhancedTestimonials = [
                        {
                            quote: "Syntrex transformed our security posture. Their team is professional, thorough, and world-class.",
                            name: "John K.",
                            company: "CEO, FinTech Innovators",
                            initials: "JK",
                            rating: 5,
                        },
                        {
                            quote: "Fast, pragmatic, and deeply knowledgeable. We shipped with confidence.",
                            name: "Aisha M.",
                            company: "CTO, HealthLink Africa",
                            initials: "AM",
                            rating: 5,
                        },
                        {
                            quote: "Clear reports and actionable fixes. Exactly what we needed.",
                            name: "Peter O.",
                            company: "Head of Engineering, AgroChain",
                            initials: "PO",
                            rating: 4,
                        },
                        {
                            quote: "Outstanding communication and on-time delivery every sprint.",
                            name: "Grace N.",
                            company: "Product Manager, PayWave",
                            initials: "GN",
                            rating: 5,
                        },
                        {
                            quote: "Their cloud security review saved us from a costly incident.",
                            name: "Samuel T.",
                            company: "VP Infrastructure, CargoGo",
                            initials: "ST",
                            rating: 5,
                        },
                        {
                            quote: "Professional team with strong domain expertise in fintech.",
                            name: "Linet W.",
                            company: "Security Lead, KopaPay",
                            initials: "LW",
                            rating: 4,
                        },
                    ];

                    const Star = ({ filled = true }: { filled?: boolean }) => (
                        <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${filled ? 'text-amber-400' : 'text-slate-600'}`}>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    );

                    return (
                        <section className="mt-20">
                            <div className="max-w-6xl mx-auto px-6 md:px-8">
                                <div className="text-center">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Our Clients Say</h2>
                                    <p className="mt-3 text-white/60">Real feedback from teams we’ve partnered with.</p>
                                </div>

                                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {enhancedTestimonials.map((t, i) => (
                                        <figure
                                            key={i}
                                            className="group rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-[#154c79] grid place-items-center text-white font-semibold">
                                                        {t.initials}
                                                    </div>
                                                    <figcaption>
                                                        <p className="font-semibold text-white">{t.name}</p>
                                                        <p className="text-sm text-white/60">{t.company}</p>
                                                    </figcaption>
                                                </div>
                                                <div className="flex gap-0.5">
                                                    {[0, 1, 2, 3, 4].map((n) => (
                                                        <Star key={n} filled={n < (t.rating ?? 5)} />
                                                    ))}
                                                </div>
                                            </div>
                                            <blockquote className="mt-4 text-white/80">&ldquo;{t.quote}&rdquo;</blockquote>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                })()}

                {/* --- FAQ Section --- */}
                <section id="faq" className="mt-20">
                    <div className="max-w-4xl mx-auto px-6 md:px-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Frequently Asked Questions</h2>
                        <p className="mt-3 text-white/60 text-center">Answers to common questions about our services.</p>
                        <div className="mt-8 space-y-3">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ContactPage;