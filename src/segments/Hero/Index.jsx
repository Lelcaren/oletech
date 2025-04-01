import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import BoxAnimation from "../../assets/BoxAnimation";
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
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
           
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Businesses with Innovative Software & Mobile App Development
            </h1>
            <p className="hero-description text-gray-700 mb-8 text-lg">
            At Ole Technologies Limited, we do more than just build software, we craft cutting-edge solutions that solve real-world challenges. Our passion for innovation drives us to create transformative mobile apps, web applications, and custom software solutions that empower businesses to thrive in the digital era. With a team of seasoned developers, creative problem-solvers, and technology visionaries, we are at the forefront of Kenya’s technology evolution.
            </p>
            <div className="buttons-wrapper flex flex-wrap gap-4">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <FaArrowTrendUp />
              </Link>
              <Link 
                to="portfolio" 
                smooth={true} 
                duration={500} 
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
              >
                <span>View Portfolio</span>
                <FaProjectDiagram />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 hero-image">
            <BoxAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;