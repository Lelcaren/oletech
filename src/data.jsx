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
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `Over the years, we've built and deployed apps and systems that empower businesses across industries`,
    keywords: ["technology expertise", "proven solutions", "industry leadership", "software innovation", "business empowerment"]
  },
  {
    title: "Innovation at Heart",
    imageIcon: pencilImage,
    description: `Our in-house projects like Memeshot and Safiri reflect our commitment to groundbreaking technology`,
    keywords: ["technological innovation", "creative solutions", "startup projects", "digital creativity", "tech development"]
  },
  {
    title: "Client-Centric Approach",
    imageIcon: headsetImage,
    description: `We work closely with our clients to ensure their goals and visions are realized.`,
    keywords: ["customer-focused", "collaborative approach", "client success", "technology partnership", "custom solutions"]
  },
];

export const ourApproaches = [
  {
    title: "Discovery & Planning",
    icon: FaHandshake,
    description: `The process begins with a detailed consultation to understand your business goals, followed by crafting a comprehensive proposal that outlines project objectives, milestones, timelines, and costs for transparency and clarity.`,
    keywords: ["project planning", "business consultation", "strategic approach", "technology roadmap", "transparent process"]
  },
  {
    title: "Development & Refinement",
    icon: HiOutlineLightBulb,
    description: `Once approved, the project moves into development using agile methodologies. Rigorous testing and iterative feedback ensure the solution meets the highest standards and aligns with your vision.`,
    keywords: ["agile development", "software refinement", "quality assurance", "iterative process", "technology innovation"]
  },
  {
    title: "Deployment & Support",
    icon: GrSync,
    description: `After finalizing the product, it is deployed, integrated, and supported with team training. Post-launch, ongoing support ensures smooth operations and long-term success.`,
    keywords: ["technology deployment", "continuous support", "product integration", "team training", "operational excellence"]
  },
];

export const services = [
  {
    title: "Mobile Application Development",
    description: "Create high-performance mobile apps for iOS and Android that integrate with cloud solutions to boost business mobility and productivity.",
    icon: WiDayCloudyGusts,
    keywords: ["mobile app development", "iOS development", "Android apps", "cloud integration", "business mobility"]
  },
  {
    title: "Software Development",
    description: "Build custom software solutions that are secure, scalable, and tailored to your business, improving performance and user experience.",
    icon: BsShieldLock,
    keywords: ["custom software", "secure solutions", "scalable development", "business software", "performance optimization"]
  },
  {
    title: "Web App Development",
    description: "Develop responsive, scalable web apps using the latest technologies to enhance user experience and business efficiency.",
    icon: FaCode,
    keywords: ["web application", "responsive design", "scalable web solutions", "digital transformation", "user experience"]
  },
  {
    title: "IT Consulting",
    description: "Get expert IT consulting to optimize your technology and drive business growth with strategic guidance on software",
    icon: FaRegLightbulb,
    keywords: ["IT consulting", "technology strategy", "business optimization", "digital advisory", "software guidance"]
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and engaging UI/UX for web and mobile apps, ensuring seamless user experiences that drive satisfaction.",
    icon: BsBarChartLine,
    keywords: ["UI/UX design", "user interface", "user experience", "design optimization", "digital interaction"]
  },
  {
    title: "Cloud & DevOps",
    description: "Enhance system reliability and streamline development with cloud and DevOps solutions, including CI/CD automation.",
    icon: IoGitNetworkSharp,
    keywords: ["cloud solutions", "DevOps services", "CI/CD automation", "system reliability", "infrastructure optimization"]
  },
];

export const portfolio = [
  {
    title: "Qiksearch: Agricultural Innovation Platform",
    description: `Innovative agricultural technology solution empowering farming communities in Kenya. Helps smallholder farmers optimize crop productivity, reduce post-harvest losses, and build climate resilience through data-driven insights and technological interventions.`,
    image: portfolio8,
    projectLink: "https://www.qiksearch.org",
    keywords: ["agricultural technology", "farming innovation", "climate resilience", "agritech", "Kenya"]
  },
  {
    title: "Market Place E-Commerce App",
    description: `Comprehensive online marketplace platform connecting buyers and sellers seamlessly. Features robust ad posting, secure transactions, and user-friendly interface for effortless product discovery and trading across multiple categories.`,
    image: portfolio9,
    projectLink: "https://marketplace.example.com",
    keywords: ["e-commerce platform", "online marketplace", "buy and sell", "digital trading", "mobile commerce"]
  },
  {
    title: "Food Yangu Delivery App",
    description: `Cutting-edge food delivery application revolutionizing urban dining experiences. Offers real-time restaurant browsing, diverse cuisine options, instant order tracking, and convenient meal delivery services across multiple food categories.`,
    image: portfolio14,
    projectLink: "https://www.foodyangu.com",
    keywords: ["food delivery", "restaurant app", "meal ordering", "urban dining", "food tech"]
  },
  {
    title: "E-commerce Webstore Solution",
    description: `Comprehensive e-commerce website development package tailored for businesses. Includes advanced features like Mpesa payment integration, custom branding, responsive design, and robust admin dashboard for seamless online retail management.`,
    image: portfolio11,
    projectLink: "https://webstore.example.com",
    keywords: ["e-commerce website", "online store", "digital retail", "payment integration", "business website"]
  },
  {
    title: "Agroecology Digital Networking Platform",
    description: `Advanced digital ecosystem connecting agricultural stakeholders from production to consumption. Provides real-time weather insights, collaborative tools, and streamlined supply chain management for sustainable agricultural practices.`,
    image: portfolio10,
    projectLink: "https://agroecology.digital",
    keywords: ["agricultural networking", "sustainable farming", "supply chain", "agritech platform", "digital agriculture"]
  },
  {
    title: "Tacky Cabs Ride-Hailing App",
    description: `Modern transportation solution offering reliable, safe, and affordable ride-hailing services. Features instant ride booking, transparent pricing, and user-friendly interface for convenient urban mobility.`,
    image: portfolio12,
    projectLink: "https://www.tackycabs.com",
    keywords: ["ride-hailing", "transportation app", "urban mobility", "taxi service", "digital transportation"]
  },
  {
    title: "Ibel Construction Corporate Website",
    description: `Professional web presence for a leading civil and roadworks construction company. Showcases company expertise, project portfolio, and commitment to delivering high-quality infrastructure solutions on time and within budget.`,
    image: portfolio7,
    projectLink: "https://www.ibelconstruction.com",
    keywords: ["construction website", "civil engineering", "infrastructure", "project portfolio", "corporate website"]
  },
  {
    title: "Swipehao Real Estate Discovery App",
    description: `Innovative real estate mobile application with Tinder-like property exploration interface. Enables users to discover properties for sale, rentals, and local accommodations through an intuitive and engaging user experience.`,
    image: portfolio13,
    projectLink: "https://www.swipehao.com",
    keywords: ["real estate app", "property discovery", "rental platform", "mobile real estate", "property search"]
  },
  {
    title: " Scenic Wilderness",
    description: `Scenic Wilderness is a flight booking system for a local charter flight that connects one to their wildest dreams around the vast ranges of The Mara and Amboseli. 
.`,
    image: portfolio15,  // You might want to replace this with an actual project image
    projectLink: "https://scenicflights.vercel.app",
    keywords: ["healthcare technology", "patient management", "telemedicine", "digital health", "medical software"]
  },
  {
    title: "PangaSquadii ",
    description: ` PangaSquadii is the first Kenyan football fantasy challenge where users create virtual teams using real-world players, join/ create leagues and compete for real cash prices with friends based on actual game performance.

`,
    image: portfolio16,  // You might want to replace this with an actual project image
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