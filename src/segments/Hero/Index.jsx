import { convertHexToRgba } from "../../util";
import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import BoxAnimation from "../../assets/BoxAnimation"; // Assuming the BoxAnimation component
import gsap from "gsap";
import { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    gsap.timeline({ delay: 0.5 })
      .fromTo("#hero .hero-subtitle", { x: -20, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo("#hero .hero-title", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#hero .hero-image", { y: -20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(["#hero .hero-description", "#hero .buttons-wrapper"], { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });
  }, []);

  return (
    <section id="hero">
      <BoxAnimation style={{ backgroundColor: "#b415ff" }} /> {/* Applied background color here */}
      <div className="container">
        <div>
        
          <h1 className="hero-title">
          App Your Game with Cutting-Edge Digital Solutions
          </h1>
          <p className="hero-description">
          At Ole Technologies Limited, we don't just build software; we craft innovative solutions that 
          solve real-world problems. Driven by a passion for excellence and a vision to transform 
          industries, our team of seasoned developers, creative thinkers, and technology enthusiasts is here 
          to bring your ideas to life.
          With a track record of creating impactful mobile apps, web applications, and software 
          management systems, we stand at the forefront of Kenya's technology revolution.
          </p>
          <div className="buttons-wrapper">
            <Link to="contact" smooth={true} className="btn primary">
              Get Started <FaArrowTrendUp />
            </Link>
            <Link to="portfolio" smooth={true} className="btn"> {/* Changed 'projects' to 'portfolio' */}
              See Our Work <FaProjectDiagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;