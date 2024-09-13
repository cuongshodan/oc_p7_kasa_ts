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
        <div className="collapsible-section">
            <button
                onClick={toggleSection}
                className="collapsible-header"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                {isOpen ? <FaChevronDown /> : <FaChevronUp />}
            </button>
            {isOpen && <div className="collapsible-content">{children}</div>}
        </div>
    );
};

export default CollapsibleSection;
