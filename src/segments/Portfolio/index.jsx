import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { portfolio } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

const Portfolio = () => {
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
            "#portfolio .section-header h3",
            "#portfolio .section-header h2",
            "#portfolio .portfolio",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  return (
    <section id="portfolio" ref={container}>
      <div className="container">
        <div className="section-header">
          <h3>Our Portfolio</h3>
          <h2>Showcasing Innovative Mobile App and Software Solutions that Drive Real Results</h2>
        </div>
        <Swiper
          className="portfolio-wrapper"
          slidesPerView={1}
          spaceBetween={50}
          modules={[Autoplay]}
          autoplay={true}
          loop={true}
          speed={1000}
          grabCursor={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {portfolio.map((list, index) => (
            <SwiperSlide className="portfolio" key={index}>
              <div className="phone-frame">
                <div className="image-wrapper">
                  <img src={list.image} alt="" />
                </div>
                <div className="content-wrapper">
                  <h3 className="title">{list.title}</h3>
                  <p className="description">{list.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;