import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,


} from "./assets";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
 
  {
    id: "contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];

export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
  },
];

export const services = [
  {
    title: "Mobile Application Development",
    description:
      "Create high-performance mobile apps for iOS and Android that integrate with cloud solutions to boost business mobility and productivity.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "Software Development",
    description:
      "Build custom software solutions that are secure, scalable, and tailored to your business, improving performance and user experience.",
    icon: BsShieldLock,
  },
  {
    title: "Web App Development",
    description:
      "Develop responsive, scalable web apps using the latest technologies to enhance user experience and business efficiency.",
    icon: FaCode,
  },
  {
    title: "IT Consulting",
    description:
      "Get expert IT consulting to optimize your technology and drive business growth with strategic guidance on software ",
    icon: FaRegLightbulb,
  },
  {
    title: "ui/ux Design",
    description:
      "Design intuitive and engaging UI/UX for web and mobile apps, ensuring seamless user experiences that drive satisfaction.",
    icon: BsBarChartLine,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Enhance system reliability and streamline development with cloud and DevOps solutions, including CI/CD automation.",
    icon: IoGitNetworkSharp,
  },
];

export const portfolio = [
  
    {
      title: "Qiksearch Website",
      description: `
        Qiksearch is a Kenyan social enterprise focused on improving agricultural communities' livelihoods 
        and resilience by enhancing farming productivity, minimizing pre- and post-harvest losses, 
        and addressing climate change effects in arid and semi-arid regions.
        
      `,
      image: portfolio1,
    },
    
  {
    title: "Market Place App",
    description:
      "A marketplace like Jiji/OLX where buyers and sellers connect to trade products effortlessly.Post ads, find great deals, and shop with ease all in one place.",
    image: portfolio2,
  },
  {
    title: "Food Yangu App",
    description:
      "Food Yangu brings your favorite meals to your door in minutes.Browse restaurants, explore cuisines like Kenyan, Indian, Chinese and more, and order with a tap.Track your order in real time and enjoy great deals from top spots near you.Fast,easy and convinient food delivery.",
    image: portfolio3,
  },
  {
    title: "E-commerce Webstore",
    description:
      "Ideal for: Shops, Supermarkets, Clothing Stores, Restaurants, etc. Delivery in 7–10 Days. Includes: Payment Integration (Mpesa), Domain, Hosting, SSL, Brand Customization (Logo, Colors, Products). Deliverables: Admin Dashboard & Storefront. Key Features: Product catalog, secure user accounts, cart & checkout, SEO optimization, order tracking, inventory management, and more.",
    image: portfolio4,
  },
  {
    title: "Agroecology Digital App",
    description:
      "Description: A platform connecting producers, processors, logistics, and consumers in the agroecologynetwork. Access real-time weather updates, collaborate, and streamline the supply chain in one place.",
    image: portfolio4,
  },
  {
    title: "Tacky Cabs App",
    description:
      "Tacky Cabs is a reliable ride-hailing app offering fast, safe, and affordable transportation at your fingertips. Order a ride anytime, anywhere.",
    image: portfolio4,
  },
  {
    title: "Ibel Construction Website",
    description:
      "Ibel Construction Limited is a civil and roadworks company that has built a strong reputation for delivering quality service on time and at a competitive price.",
    image: portfolio4,
  },
  {
    title: "Swipehao App",
    description:
      " Swipehao is a real estate app where users swipe through properties to find those available forsale, furnished rentals, or hangouts. With a Tinder-like swipe feature and an Airbnb-style design, it’s yourgo-to app for discovering homes, hotels, and hidden gems nearby.",
    image: portfolio4,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "info@oletechnologies.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "90,James Gichuru Road,Lavington.Nairobi",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+254 079 555 163",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/people/Ole-Technologies-Limited/100094605886372/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Foletechnologies%2F&is_from_rle",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://ke.linkedin.com/company/ole-technologies-limited",
  },
];

export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Our Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },
      {
        title: "Portfolio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Our Services",
    subRoutes: [
      {
        title: "Cloud Solutions",
        id: "",
      },
      {
        title: "Cybersecurity",
        id: "",
      },
      {
        title: "Software Development",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
    ],
  },
];
