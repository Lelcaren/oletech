import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";
import "./CTA.css";

const CTA = ({ open, onClose }) => {
  return (
    <div className={`cta-container ${open && "active"}`}>
      {/* Close Button */}
      <div
        className="close-btn"
        onClick={onClose}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ff0000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <FaTimes />
      </div>

      {/* CTA Options */}
      <div className="cta-options">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-item whatsapp"
        >
          <FaWhatsapp />
          <span>Chat on WhatsApp</span>
        </a>
        <a href="tel:+1234567890" className="cta-item phone">
          <FaPhoneAlt />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
};

export default CTA;

