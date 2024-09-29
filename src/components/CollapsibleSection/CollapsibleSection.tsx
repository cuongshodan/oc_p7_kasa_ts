import React, { useState } from 'react';
import './CollapsibleSection.scss'; 

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
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            className="arrow-icon"
          >
            <polyline
              points="5 8 10 13 15 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={`section-${title}`}
        className={`collapsible-content ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
