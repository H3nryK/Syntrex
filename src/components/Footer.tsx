// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300" role="contentinfo">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                    {/* Brand & Socials */}
                    <div>
                        <Link to="/" aria-label="Syntrex home" className="inline-block">
                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                SYNTREX<span className="text-brand-blue">.</span>
                            </h3>
                        </Link>
                        <p className="mt-3 text-gray-400">
                            Securing Africa&apos;s Digital Frontier.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition"
                            >
                                <FaTwitter size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition"
                            >
                                <FaGithub size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <nav aria-labelledby="footer-company" className="sm:mt-2">
                        <h4 id="footer-company" className="text-sm font-semibold text-white tracking-wide uppercase">
                            Company
                        </h4>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Core Services */}
                    <nav aria-labelledby="footer-services" className="sm:mt-2">
                        <h4 id="footer-services" className="text-sm font-semibold text-white tracking-wide uppercase">
                            Core Services
                        </h4>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    to="/services/penetration-testing"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Penetration Testing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/threat-intelligence"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Threat Intelligence
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/security-audits"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Security Audits
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/incident-response"
                                    className="text-gray-300 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    Incident Response
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div className="sm:mt-2">
                        <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                            Get in Touch
                        </h4>
                        <ul className="mt-4 space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-0.5 text-brand-blue" />
                                <span>Westlands, Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiPhone className="mt-0.5 text-brand-blue" />
                                <a
                                    href="tel:+254700000000"
                                    className="hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    +254 700 000 000
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMail className="mt-0.5 text-brand-blue" />
                                <a
                                    href="mailto:consult@syntrex.co.ke"
                                    className="hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                                >
                                    consult@syntrex.co.ke
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-400">
                        © {currentYear} Syntrex Limited. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link
                            to="/privacy"
                            className="text-gray-400 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-400 hover:text-brand-blue transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;