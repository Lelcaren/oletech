import { contactInfo } from "../../data";
import { cssPerfectShape } from "../../util";
import Socials from "../../components/Socials";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState(""); // Add state for form submission result

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "333e932e-9df9-431d-a139-d121c9ed466d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
          "#contact .contact-info-wrapper .contact-info",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          "#contact .socials .icon",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          [
            "#contact form h2",
            "#contact form .description",
            "#contact form .control",
            "#contact form .btn",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );

  return (
    <section id="contact" ref={container}>
      <div className="container">
        <div className="contact-info-wrapper">
          {contactInfo.map((info, index) => (
            <div className="contact-info" key={index}>
              <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                <info.icon />
              </div>
              <div className="info">
                <h3>{info.title}</h3>
                <p className="description">{info.description}</p>
                <h4 className="value">{info.value}</h4>
              </div>
            </div>
          ))}
          <Socials />
        </div>
        <form onSubmit={onSubmit}> {/* Connect onSubmit to the form */}
          <div className="top">
            <h2>Get In Touch</h2>
            <p className="description">
              Have a project in mind or need expert advice? We're here to help!
              Reach out to our team for personalized consultations, inquiries,
              or to start your next big project today.
            </p>
          </div>
          <div className="middle">
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              className="control"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="control"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              className="control"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="control"
              required
            ></textarea>
          </div>
          <div className="bottom">
            <button type="submit" className="btn primary"> {/* Use type="submit" */}
              Send Message
            </button>
          </div>
          {result && <p className="result-message">{result}</p>} {/* Display result */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
