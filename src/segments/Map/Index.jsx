import React from 'react';
import './map.css';

const Map = () => {
  return (
    <section id="map" className="map-section">
      <div className="container">
        <div className="section-header">
          <h3>Our Location</h3>
          <h2>Find Us Here</h2>
        </div>
        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8187257934293!2d36.82054637480645!3d-1.2920644357531463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0fedea39b%3A0xf6053709b161701c!2sNairobi!5e0!3m2!1sen!2ske!4v1695571234567!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;