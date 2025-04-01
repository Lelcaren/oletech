import React, { useRef } from "react";
import "./Partners.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import images directly from assets
import twilio from "../../assets/twilio.png";
import saf from "../../assets/saf.png";
import littlepay from "../../assets/littlepay.jpeg";
import kra from "../../assets/kra.jpeg";
import afriexim from "../../assets/afriexim.png";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [
            "#partners .section-header h3",
            "#partners .section-header h2",
            "#partners .partners-logos .partner-logo",
          ],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 }
        );
    },
    { scope: container }
  );

  // Partner logos array with imported images
  const partnerLogos = [
    { name: "Twilio", image: twilio },
    { name: "SAF", image: saf },
    { name: "Littlepay", image: littlepay },
    { name: "KRA", image: kra },
    { name: "Afriexim", image: afriexim },
  ];

  return (
    <section id="partners" ref={container}>
      <div className="container">
        <div className="section-header">
          <h3 style={{ color: "#b415ff" }}>Our Partners</h3>
          <h2>Trusted by leading companies worldwide</h2>
        </div>

        <div className="partners-logos">
          {partnerLogos.map((partner, index) => (
            <div className="partner-logo" key={index}>
              <img 
                src={partner.image} 
                alt={`${partner.name} logo`} 
                title={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;