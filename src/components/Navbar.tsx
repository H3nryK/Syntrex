// src/components/Navbar.tsx
import React, { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import SyntrexLogo from '../assets/s_logo.png'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const prefersReducedMotion = useReducedMotion();
    const menuId = useId();

    // Scroll behavior (shrink + background)
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Close on Escape
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isMenuOpen]);

    const navVariants: Variants = {
        initial: { y: -16, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: prefersReducedMotion
                ? { type: 'tween', duration: 0.3 }
                : { type: 'spring', stiffness: 300, damping: 24 },
        },
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -12 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
        exit: { opacity: 0, y: -12 },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -6 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.nav
            role="navigation"
            aria-label="Main"
            variants={navVariants}
            initial="initial"
            animate="animate"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-dark-bg/70 backdrop-blur-xl shadow-[0_2px_12px_-2px_rgba(0,0,0,0.35)]'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex h-16 sm:h-20 items-center justify-between transition-all ${scrolled ? 'h-16' : 'h-20'}`}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2" aria-label="Syntrex Home">
                        <img src={SyntrexLogo} alt="Syntrex" className="h-8 sm:h-9 w-auto" loading="eager" decoding="async" />
                        <span className="hidden md:inline text-white text-lg font-semibold tracking-tight">Syntrex</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    [
                                        'px-2 py-1 text-sm lg:text-base border-b-2 transition-colors text-white',
                                        isActive
                                            ? 'border-white'
                                            : 'border-transparent text-slate hover:border-white',
                                    ].join(' ')
                                }
                            >
                                <span>{link.name}</span>
                            </NavLink>
                        ))}
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-4 py-2 text-sm font-bold text-white shadow-md shadow-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-white"
                            >
                                Request a Quote
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen((v) => !v)}
                            aria-expanded={isMenuOpen}
                            aria-controls={menuId}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className="inline-flex items-center justify-center rounded-md p-2 text-light-slate hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
                        >
                            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.button
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            aria-label="Close menu overlay"
                        />
                        {/* Sheet */}
                        <motion.div
                            id={menuId}
                            className="fixed top-0 left-0 right-0 z-50 mt-16 sm:mt-20 md:hidden"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="mx-3 rounded-xl border border-slate-800 bg-dark-bg/95 p-4 shadow-2xl backdrop-blur-xl">
                                <motion.ul className="flex flex-col divide-y divide-slate-800" role="menu">
                                    {navLinks.map((link) => (
                                        <motion.li key={link.name} variants={itemVariants}>
                                            <NavLink
                                                to={link.path}
                                                role="menuitem"
                                                className={({ isActive }) =>
                                                    [
                                                        'block w-full px-3 py-4 text-base font-medium transition-colors',
                                                        isActive ? 'text-brand-blue' : 'text-slate hover:text-brand-blue',
                                                    ].join(' ')
                                                }
                                            >
                                                {link.name}
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                <div className="mt-4">
                                    <Link to="/contact" className="block">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full rounded-lg bg-brand-blue px-4 py-3 text-base font-bold text-white shadow-md shadow-brand-blue/30"
                                        >
                                            Request a Quote
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;