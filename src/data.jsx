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
  portfolio9,
  portfolio7,
  portfolio12,
  portfolio11,
  portfolio10,
  portfolio8,
  portfolio13,
  portfolio14,
  portfolio15,
  portfolio16,

} from "./assets";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
    keywords: ["technology solutions", "digital innovation", "software development", "tech services", "startup"]
  },
  {
    id: "about",
    name: "About Us",
    keywords: ["company overview", "tech expertise", "innovation leaders", "software consulting", "digital transformation"]
  },
  {
    id: "services",
    name: "Our Services",
    keywords: ["technology services", "digital solutions", "software development", "IT consulting", "tech innovation"]
  },
  {
    id: "portfolio",
    name: "Portfolio",
    keywords: ["project showcase", "digital solutions", "tech achievements", "software portfolio", "innovative projects"]
  },
  {
    id: "contact",
    name: "Contact",
    keywords: ["get in touch", "tech consultation", "business inquiry", "support contact", "technology partnership"]
  },
];

export const whyChooseUs = [
  {
    title: "✔ Proven Track Record",
    imageIcon: shieldImage,
    description: `Years of experience building impactful apps and software across industries.`,
    keywords: ["technology expertise", "proven solutions", "industry leadership", "software innovation", "business empowerment"]
  },
  {
    title: "✔ Innovation at Our Core",
    imageIcon: pencilImage,
    description: `Our in-house projects, including Memeshot and Safiri, showcase our commitment to groundbreaking technology.`,
    keywords: ["technological innovation", "creative solutions", "startup projects", "digital creativity", "tech development"]
  },
  {
    title: "✔ Client-Centric Approach",
    imageIcon: headsetImage,
    description: `We collaborate closely with our clients to align our solutions with their business goals.`,
    keywords: ["customer-focused", "collaborative approach", "client success", "technology partnership", "custom solutions"]
  },
];

export const ourApproaches = [
  {
    title: "Discovery & Planning",
    icon: FaHandshake,
    description: `We begin with a comprehensive consultation to understand your business objectives, followed by a detailed project roadmap, including objectives, milestones, timelines, and transparent pricing.`,
    keywords: ["project planning", "business consultation", "strategic approach", "technology roadmap", "transparent process"]
  },
  {
    title: "Development & Refinement",
    icon: HiOutlineLightBulb,
    description: `Our agile development process ensures high-quality solutions through iterative testing, feedback loops, and rigorous quality assurance.`,
    keywords: ["agile development", "software refinement", "quality assurance", "iterative process", "technology innovation"]
  },
  {
    title: "Deployment & Support",
    icon: GrSync,
    description: `We ensure a smooth deployment with seamless integration, training, and ongoing post-launch support for long-term success.`,
    keywords: ["technology deployment", "continuous support", "product integration", "team training", "operational excellence"]
  },
];

export const services = [
  {
    title: "Mobile App Development",
    description: "Develop high-performance mobile applications for iOS and Android with cloud integrations to enhance business mobility and productivity.",
    icon: WiDayCloudyGusts,
    keywords: ["mobile app development", "iOS development", "Android apps", "cloud integration", "business mobility"]
  },
  {
    title: "Custom Software Development",
    description: "Build secure, scalable, and tailored software solutions to improve operational efficiency and customer experience.",
    icon: BsShieldLock,
    keywords: ["custom software", "secure solutions", "scalable development", "business software", "performance optimization"]
  },
  {
    title: "Web App Development",
    description: "Create responsive, scalable web applications using the latest technologies to improve user engagement and business processes.",
    icon: FaCode,
    keywords: ["web application", "responsive design", "scalable web solutions", "digital transformation", "user experience"]
  },
  {
    title: "IT Consulting",
    description: "Leverage expert guidance to optimize technology strategies, enhance security, and drive digital transformation.",
    icon: FaRegLightbulb,
    keywords: ["IT consulting", "technology strategy", "business optimization", "digital advisory", "software guidance"]
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive, visually appealing, and user-friendly digital experiences that enhance user engagement.",
    icon: BsBarChartLine,
    keywords: ["UI/UX design", "user interface", "user experience", "design optimization", "digital interaction"]
  },
  {
    title: "Cloud & DevOps",
    description: "Improve system reliability, scalability, and development efficiency with cloud solutions and DevOps automation.",
    icon: IoGitNetworkSharp,
    keywords: ["cloud solutions", "DevOps services", "CI/CD automation", "system reliability", "infrastructure optimization"]
  },
];

export const portfolio = [
  {
    title: "Swipehao App",
    description: `A revolutionary real estate app with a Tinder-like swipe feature, helping users discover homes, rentals, and hangouts effortlessly.`,
    image: portfolio13,
    projectLink: "https://www.swipehao.com",
    keywords: ["real estate app", "property discovery", "rental platform", "mobile real estate", "property search"]
  },
  {
    title: "Qiksearch Website",
    description: `A social enterprise platform improving agricultural productivity, reducing losses, and addressing climate change challenges.`,
    image: portfolio8,
    projectLink: "https://www.qiksearch.org",
    keywords: ["agricultural technology", "farming innovation", "climate resilience", "agritech", "Kenya"]
  },
  {
    title: "Market Place App",
    description: `A dynamic e-commerce platform connecting buyers and sellers for seamless trading experiences, similar to Jiji and OLX.`,
    image: portfolio9,
    projectLink: "https://marketplace.example.com",
    keywords: ["e-commerce platform", "online marketplace", "buy and sell", "digital trading", "mobile commerce"]
  },
  {
    title: "Food Yangu App",
    description: `A fast and convenient food delivery app that brings top restaurant meals to your doorstep, offering real-time tracking and great deals.`,
    image: portfolio14,
    projectLink: "https://www.foodyangu.com",
    keywords: ["food delivery", "restaurant app", "meal ordering", "urban dining", "food tech"]
  },
  {
    title: "E-commerce Webstore",
    description: `An all-in-one online store solution for shops, supermarkets, and restaurants, featuring secure payment integration (Mpesa), SEO optimization, order tracking, and inventory management.`,
    image: portfolio11,
    projectLink: "https://webstore.example.com",
    keywords: ["e-commerce website", "online store", "digital retail", "payment integration", "business website"]
  },
  {
    title: "Agroecology Digital App",
    description: `A networking platform for farmers, processors, and consumers, offering real-time weather updates and an optimized supply chain.`,
    image: portfolio10,
    projectLink: "https://agroecology.digital",
    keywords: ["agricultural networking", "sustainable farming", "supply chain", "agritech platform", "digital agriculture"]
  },
  {
    title: "Tacky Cabs App",
    description: `A user-friendly ride-hailing app ensuring safe, reliable, and affordable transportation on demand.`,
    image: portfolio12,
    projectLink: "https://www.tackycabs.com",
    keywords: ["ride-hailing", "transportation app", "urban mobility", "taxi service", "digital transportation"]
  },
  {
    title: "Ibel Construction Website",
    description: `A professional website for Ibel Construction Limited, a leading firm in civil and roadworks, showcasing their expertise and projects.`,
    image: portfolio7,
    projectLink: "https://www.ibelconstruction.com",
    keywords: ["construction website", "civil engineering", "infrastructure", "project portfolio", "corporate website"]
  },
  {
    title: "Scenic Wilderness",
    description: `Scenic Wilderness is a flight booking system for a local charter flight that connects one to their wildest dreams around the vast ranges of The Mara and Amboseli.`,
    image: portfolio15,
    projectLink: "https://scenicflights.vercel.app",
    keywords: ["healthcare technology", "patient management", "telemedicine", "digital health", "medical software"]
  },
  {
    title: "PangaSquadii",
    description: `PangaSquadii is the first Kenyan football fantasy challenge where users create virtual teams using real-world players, join/create leagues and compete for real cash prices with friends based on actual game performance.`,
    image: portfolio16,
    projectLink: "https://pangasquadii.digitlogic.co.ke",
    keywords: ["e-learning platform", "online education", "learning management", "digital classroom", "educational technology"]
  }
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "info@oletechnologies.com",
    icon: MdOutlineAlternateEmail,
    keywords: ["customer support", "email contact", "technical assistance", "business communication", "instant support"]
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "90,James Gichuru Road,Lavington.Nairobi",
    icon: FaLocationCrosshairs,
    keywords: ["office location", "business address", "Nairobi tech hub", "company headquarters", "tech company location"]
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+254 790 555 163",
    icon: FiPhoneCall,
    keywords: ["contact number", "customer service", "technical support", "business communication", "immediate assistance"]
  }
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/people/Ole-Technologies-Limited/100094605886372/",
    keywords: ["social media", "Facebook page", "technology community", "business networking", "digital presence"]
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Foletechnologies%2F&is_from_rle",
    keywords: ["Instagram profile", "visual content", "technology showcase", "brand storytelling", "digital marketing"]
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://ke.linkedin.com/company/ole-technologies-limited",
    keywords: ["LinkedIn company", "professional networking", "business connections", "tech industry", "corporate profile"]
  }
];

export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "Home",
        id: "hero",
        keywords: ["technology homepage", "digital solutions", "tech services", "company overview", "innovation landing"]
      },
      {
        title: "Our Services",
        id: "services",
        keywords: ["technology offerings", "digital solutions", "software services", "tech capabilities", "business solutions"]
      },
      {
        title: "About",
        id: "about",
        keywords: ["company background", "tech expertise", "innovation story", "leadership team", "company mission"]
      },
      {
        title: "Portfolio",
        id: "portfolio",
        keywords: ["project showcase", "completed works", "technology achievements", "digital solutions", "client projects"]
      },
      {
        title: "Contact",
        id: "contact",
        keywords: ["get in touch", "business inquiry", "support contact", "technical consultation", "partnership"]
      },
    ],
  },
  {
    title: "Our Services",
    subRoutes: [
      {
        title: "Mobile Application Development",
        id: "",
        keywords: ["mobile app creation", "iOS development", "Android solutions", "mobile technology", "app engineering"]
      },
      {
        title: "Software Development",
        id: "",
        keywords: ["custom software", "software engineering", "business solutions", "technology development", "digital transformation"]
      },
      {
        title: "Web App Development",
        id: "",
        keywords: ["web application", "responsive design", "web solutions", "digital platforms", "online services"]
      },
      {
        title: "IT Consulting",
        id: "",
        keywords: ["technology consulting", "digital strategy", "IT advisory", "business optimization", "tech guidance"]
      },
    ],
  },
];