// CollapsibleSection.tsx
import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className={`collapsible-section${isOpen ? ' open' : ''}`}>
            <button
                onClick={toggleSection}
                className="collapsible-header"
                aria-expanded={isOpen}
                aria-controls={`section-${title}`}
            >
                <span>{title}</span>
                {isOpen ? (
                    <FaChevronDown className="arrow" />
                ) : (
                    <FaChevronUp className="arrow" />
                )}
            </button>
            <div
                id={`section-${title}`}
                className="collapsible-content"
                aria-hidden={!isOpen}
            >
                {children}
            </div>
        </div>
    );
};

export default CollapsibleSection;
