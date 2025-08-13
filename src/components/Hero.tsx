// src/components/Hero.tsx
import React from 'react';
import { motion, type Variants, cubicBezier } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SyntrexLogo from '../assets/s_logo.png';
import HeroBg from '../assets/HeroBG.webp';

// Animation variants for the container to orchestrate animations of children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

// Animation variants for individual text/button elements
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: cubicBezier(0.42, 0, 0.58, 1),
        },
    },
};

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroBg}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#154c79]/80 to-[#122c4a]/90 pointer-events-none" />

            <motion.div
                className="relative z-20 max-w-7xl mx-auto w-full px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left: Text + Buttons */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-100 leading-tight mb-6"
                            variants={itemVariants}
                        >
                            State-of-the-Art Cyber Defense
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg text-gray-200/90 max-w-2xl mx-auto lg:mx-0 mb-8"
                            variants={itemVariants}
                        >
                            We provide elite cybersecurity services to protect your organization from the world's most advanced threats.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <Link to="/contact" className="w-full sm:w-auto">
                                <motion.button
                                    className="w-full sm:w-auto sm:min-w-[220px] bg-brand-blue text-white font-semibold text-base sm:text-lg py-3 sm:py-3.5 px-6 sm:px-7 rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue border border-white/20"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Get a Free Consultation"
                                >
                                    Get a Free Consultation
                                </motion.button>
                            </Link>

                            <Link to="/services" className="w-full sm:w-auto">
                                <motion.button
                                    className="w-full sm:w-auto sm:min-w-[220px] bg-white/95 backdrop-blur border border-gray-300 text-gray-800 font-semibold text-base sm:text-lg py-3 sm:py-3.5 px-6 sm:px-7 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="View Our Services"
                                >
                                    Our Services <FiArrowRight />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Logo */}
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <motion.img
                            src={SyntrexLogo}
                            alt="Company logo"
                            className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 h-auto drop-shadow-lg"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;