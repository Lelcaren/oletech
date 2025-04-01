import Navbar from "./segments/Navbar";
import Hero from "./segments/Hero/Index";
import Achievement from "./segments/Achievement";
import About from "./segments/About";
import Service from "./segments/Services";
import Portfolio from "./segments/Portfolio";
import Partners from "./segments/Partners";
import Contact from "./segments/Contact";
import Map from "./segments/Map";
import Footer from "./segments/Footer";
import whatsappIcon from "./assets/whatsapp.png";
import topIcon from "./assets/top.png";
import "swiper/css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <About />
      <Service />
      <Portfolio />
      <Partners/>
      <Contact />
      <Map /> 
      <Footer />
      
      <div className="whatsapp-floating">
        <a
          href="https://wa.me/+254790555163"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            width={50}
            height={50}
          />
        </a>
      </div>
      

      <div className="back-to-top">
        <a href="#top">
          <img
            src={topIcon}
            alt="Back to Top"
            width={50}
            height={50}
          />
        </a>
      </div>
    </>
  );
}

export default App;

