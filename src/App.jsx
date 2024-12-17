import Navbar from "./segments/Navbar";
import Hero from "./segments/Hero/Index";
import Achievement from "./segments/Achievement";
import About from "./segments/About";
import Service from "./segments/Services";
import Portfolio from "./segments/Portfolio";
import Contact from "./segments/Contact";
import Footer from "./segments/Footer";
import whatsappIcon from "./assets/whatsapp.png"; // Correctly imported the WhatsApp icon.

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
      <Contact />
      <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="whatsapp-floating">
        <a
          href="https://wa.me/+254790555163" // Replace with your actual phone number (include country code).
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsappIcon} // Use the imported image correctly here.
            alt="WhatsApp"
            width={50}
            height={50}
          />
        </a>
      </div>
    </>
  );
}

export default App;

