// src/components/FAQItem.tsx
import React, { useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export interface FAQItemProps {
    // Optional external id for aria-controls linkage
    id?: string;
    question: React.ReactNode;
    answer: React.ReactNode;
    // Controlled mode (use with a parent accordion)
    isOpen?: boolean;
    onToggle?: (id: string) => void;
    className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({
    id,
    question,
    answer,
    isOpen,
    onToggle,
    className = '',
}) => {
    const autoId = useId();
    const itemId = id ?? autoId;
    const contentId = `${itemId}-content`;
    const labelId = `${itemId}-label`;

    const isControlled = typeof isOpen === 'boolean' && typeof onToggle === 'function';
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const open = isControlled ? (isOpen as boolean) : uncontrolledOpen;
    const reduceMotion = useReducedMotion();

    const handleToggle = () => {
        if (isControlled) onToggle!(itemId);
        else setUncontrolledOpen((v) => !v);
    };

    const contentVariants = {
        collapsed: { opacity: 0, height: 0, marginTop: 0 },
        expanded: { opacity: 1, height: 'auto', marginTop: 16 },
    };

    return (
        <div className={`py-2 border-b border-gray-200 ${className}`}>
            <button
                type="button"
                onClick={handleToggle}
                aria-expanded={open}
                aria-controls={contentId}
                id={labelId}
                className="group w-full flex items-center justify-between text-left gap-3 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
                <span className="font-semibold text-white">{question}</span>
                <motion.span
                    aria-hidden
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex shrink-0 text-white/60"
                >
                    <FiChevronDown size={20} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.section
                        key="content"
                        id={contentId}
                        role="region"
                        aria-labelledby={labelId}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={contentVariants}
                        transition={
                            reduceMotion
                                ? { duration: 0 }
                                : { type: 'tween', duration: 0.2, ease: 'easeOut' }
                        }
                        className="overflow-hidden pl-2 pr-1"
                    >
                        <div className="text-white/60 leading-relaxed">
                            {answer}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQItem;