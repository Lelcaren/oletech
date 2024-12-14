import React from "react";
import "./CTA.css"; // Create a CSS file for styling

const CTA = () => {
  return (
    <div className="cta-popup">
      <a href="tel:+123456789" target="_blank" rel="noopener noreferrer" title="Call Us">
        <img src="/path/to/call-icon.png" alt="Call Us" />
      </a>
      <a
        href="https://wa.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Us"
      >
        <img src="/path/to/whatsapp-icon.png" alt="WhatsApp Us" />
      </a>
    </div>
  );
};

export default CTA;
