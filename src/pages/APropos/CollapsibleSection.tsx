import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible-section">
            <button
                onClick={toggleSection}
                className="collapsible-header"
                aria-expanded={isOpen}
                aria-controls={`section-${title}`}
            >
                <span>{title}</span>
                {isOpen ? (
                    <FaChevronUp className="arrow" />
                ) : (
                    <FaChevronDown className="arrow" />
                )}
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`section-${title}`}
                        className="collapsible-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                        aria-hidden={!isOpen}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CollapsibleSection;
