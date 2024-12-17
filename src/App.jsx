import Navbar from "./segments/Navbar";
import Hero from "./segments/Hero/Index";
import Achievement from "./segments/Achievement";
import About from "./segments/About";
import Service from "./segments/Services";
import Portfolio from "./segments/Portfolio";
import Contact from "./segments/Contact";
import Footer from "./segments/Footer";


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
    </>
  );
}

export default App;
