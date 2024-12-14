import vision from "../../assets/vision1.jpg";
import hero from "../../assets/hero2.jpg";
import { whyChooseUs, ourApproaches } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../util";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [
            "#about .vision-item",
            "#about .vision-item .image-container",
            "#about h2",
            "#about .approach",
            "#about .contact-us",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          [
            "#about .spotlight",
            "#about .why-choose-us-container .why-choose-us",
          ],
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  return (
    <section id="about" ref={container}>
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          {/* Spotlight */}
          <div className="spotlight" />
          {/* Vision Section */}
          <div className="vision-container">
            {[{
              title: "Our Vision",
              subtitle: "Transforming Technology into Progress",
              description: "Ole Technologies strives to empower businesses by providing innovative IT solutions that enhance efficiency, drive growth, and increase competitiveness. Our vision is to deliver cutting-edge technologies tailored to meet unique business needs, streamlining processes and improving productivity. With a focus on quality and excellence, we aim to be a trusted partner in transforming your technology challenges into opportunities.",
              image: vision,
            },
            {
              title: "Who We Are",
              subtitle: "Your Trusted Technology Partner",
              description: "Ole Technologies Limited is a leading technology company in Kenya dedicated to providing quality mobile app and software solutions for your business. With our staunch stand on quality, timely delivery and fueled by a drive to innovate, we don’t just work for our clients, we work with them to turn dreams into reality.Our vision is to revolutionize the digital landscape by providing innovative, user-centric, and impactful technology solutions that empower businesses, streamline operations, and unlock new oportunities",
              image: hero,
            }].map((vision, index) => (
              <div className="vision-item" key={index}>
                <div className="vision-content">
                  <h2>{vision.title}</h2>
                  <h4 className="title">{vision.subtitle}</h4>
                  <p className="description">{vision.description}</p>
                </div>
                <div className="image-container">
                  <img src={vision.image} alt={vision.title} />
                </div>
              </div>
            ))}
          </div>
          {/* Why Choose Us Section */}
          <div className="why-choose-us-container">
            {whyChooseUs.map((list, index) => (
              <div
                className="blur why-choose-us"
                style={{
                  background: convertHexToRgba("#3415FF", 0.3), // Updated background color to #3415FF
                }}
                key={index}
              >
                <div className="icon">
                  <img src={list.imageIcon} alt={list.title} />
                </div>
                <h3 className="title">{list.title}</h3>
                <p className="description">{list.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <h2 className="title">Our Process</h2>
          <div className="boxes-wrapper">
            {/* Our Approaches */}
            {ourApproaches.map((approach, index) => (
              <div className="approach" key={index}>
                <div
                  className="icon"
                  style={{
                    ...cssPerfectShape(50, 50),
                    background: convertHexToRgba("--primary", 0.1),
                    color: "#b415ff", // Icon color updated here
                  }}
                >
                  <approach.icon />
                </div>
                <div>
                  <h3 className="title">{approach.title}</h3>
                  <p className="description">{approach.description}</p>
                </div>
              </div>
            ))}
            {/* Contact Us */}
            <div className="contact-us">
              <h2 className="title">
                Reach out to see how our IT solutions can boost your success.
              </h2>
              <Link to="contact" smooth={true} className="btn primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
