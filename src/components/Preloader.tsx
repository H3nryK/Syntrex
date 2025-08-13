// src/components/Preloader.tsx
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

type PreloaderProps = {
    // Optional: show a "Skip" button and allow Esc/Enter/Space to dismiss
    allowSkip?: boolean;
    // Optional: 0..1 progress. Omit for indeterminate animation
    progress?: number;
    // Optional accessible label
    label?: string;
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const Preloader: React.FC<PreloaderProps> = ({ allowSkip = false, progress, label = 'Loading' }) => {
    const prefersReducedMotion = useReducedMotion();
    const [dismissed, setDismissed] = React.useState(false);

    // Pointer parallax
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
    const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });
    const rotateX = useTransform(sy, [-40, 40], [8, -8]);
    const rotateY = useTransform(sx, [-40, 40], [-8, 8]);

    const resetParallax = () => {
        mx.set(0);
        my.set(0);
    };

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReducedMotion) return;
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mx.set((x / rect.width) * 80);
        my.set((y / rect.height) * 80);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!allowSkip) return;
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setDismissed(true);
        }
    };

    return (
        <motion.div
            role="status"
            aria-live="polite"
            aria-label={`${label} SYNTREX`}
            className="fixed inset-0 z-[100] grid place-items-center bg-white/85 backdrop-blur-sm"
            initial={{ opacity: 1 }}
            animate={{ opacity: dismissed ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ pointerEvents: dismissed ? 'none' as const : 'auto' }}
            onKeyDown={onKeyDown}
        >
            <motion.div
                className="relative w-[min(86vw,32rem)] select-none p-8"
                onMouseMove={onMove}
                onMouseLeave={resetParallax}
                initial={prefersReducedMotion ? { scale: 1 } : { scale: 0.98, y: 8 }}
                animate={prefersReducedMotion ? { scale: 1 } : { scale: dismissed ? 0.98 : 1, y: dismissed ? 8 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={prefersReducedMotion ? {} : { x: sx, y: sy, rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                <div className="text-center">
                    <motion.h1
                        className="font-extrabold tracking-tight text-gray-900 text-3xl sm:text-5xl md:text-6xl"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <span className="bg-gradient-to-b from-[#154c79] to-[#122c4a] bg-clip-text text-transparent">
                            SYNTREX
                        </span>
                    </motion.h1>

                    {/* Progress/indeterminate bar */}
                    <div className="relative mx-auto mt-5 h-1 w-40 overflow-hidden rounded-full bg-gray-200">
                        {typeof progress === 'number' ? (
                            <motion.div
                                className="h-full rounded-full bg-brand-blue"
                                style={{ width: `${clamp01(progress) * 100}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${clamp01(progress) * 100}%` }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            />
                        ) : (
                            <motion.div
                                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand-blue to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: ['-120%', '150%'] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        )}
                    </div>

                    {/* Subtle bouncing dots (reduced motion safe) */}
                    <div className="mt-3 flex h-4 items-center justify-center gap-1.5" aria-hidden>
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="size-2 rounded-full bg-gray-400/80 dark:bg-gray-500"
                                animate={
                                    prefersReducedMotion
                                        ? { opacity: [0.6, 1, 0.6] }
                                        : { y: [0, -6, 0], opacity: [0.5, 1, 0.5] }
                                }
                                transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ transform: 'translateZ(20px)' }}
                            />
                        ))}
                    </div>

                    {/* Optional skip */}
                    {allowSkip && (
                        <button
                            type="button"
                            onClick={() => setDismissed(true)}
                            className="mx-auto mt-6 inline-flex items-center rounded-md border border-transparent bg-transparent px-3 py-1.5 text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label="Skip preloader"
                        >
                            Skip
                        </button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;