import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    HIN: "नमस्ते, मैं अभिजीत हूं",
    en: "Hi, I'm Abhijit Sharma",
  },
  subtitle: "Front-end Developer ",
  description: {
    HIN: "मैं अभिजीत हूं, एक अग्रणी डेवलपर जिसका लक्ष्य अपने करियर को आगे बढ़ाना और प्रेरक परियोजनाओं में भाग लेना है। यहां मैं अपना काम और वेब विकास के प्रति अपना जुनून प्रस्तुत करता हूं। आइए मिलकर डिजिटल समाधानों को आकार दें और भविष्य को आकार दें!",
    en: "I'm Abhijit, a Front-end Developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        HIN: "मुझसे संपर्क करें",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        HIN: "मेरे प्रोजेक्ट",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "एक रेसिपी ऐप जिसे हमने रिएक्ट और मीलडीबी एपीआई के साथ एक टीम के रूप में बनाया है। मैं फ्रंट-एंड डेवलपर था और वॉयस सर्च या पीडीएफ पर प्रिंट जैसी सुविधाओं को प्रोग्राम किया था। डिज़ाइन फिग्मा के साथ बनाया गया था। वेबसाइट उत्तरदायी और मोबाइल-अनुकूलित है।",
    description_EN:
      "A recipe app we built as a team with React and MealDB API. I was a front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description:
      "एक योग और ध्यान ऐप जिसे हमने React, MongoDB, Express और Node.js के साथ एक टीम के रूप में बनाया है। एक गिटमास्टर और बैकएंड डेवलपर के रूप में मेरा काम एक रेस्टफुल एपीआई का उपयोग करके कनेक्शन के साथ बैकएंड को प्रोग्राम करना और MongoDB में डेटाबेस को मॉडल करना था।",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description:
      "एक फ़र्निचर आयोजक ऐप जिसे हमने React, MongoDB, Express और Node.js के साथ एक जोड़ी टीम के रूप में प्रोग्राम किया है। एक गिटमास्टर के रूप में, मैंने फ्रंटएंड से बैकएंड और डेटाबेस मॉडलिंग का कनेक्शन संभाला। ऐप उत्तरदायी और मोबाइल-अनुकूलित है।",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    HIN: "Github पर अधिक परियोजनाएँ",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { HIN: "होम", en: "Home", hash: "#home", icon: GoHome },
  { HIN: "स्किल्स ", en: "Skills", hash: "#skills", icon: GoStack },
  { HIN: "प्रोजेक्ट्स", en: "Projects", hash: "#projects", icon: GoProject },
  { HIN: "मेरे बारे में", en: "About me", hash: "#about-me", icon: GoPerson },
  { HIN: "संपर्क", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { HIN: "छाप", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { HIN: "गोपनीयता", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:abhijitkumarsharma1505@gmail.com",
  text: "abhijitkumarsharma1505@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/abhijit-kumar-sharma-468541133/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/ABHI150595",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "abhijitkumarsharma1505@gmial.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    HIN: '"पहली बार में इसे ठीक करना बिल्कुल भी महत्वपूर्ण नहीं है। पिछली बार इसे ठीक करना अत्यंत महत्वपूर्ण है।"',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    HIN: '"वेब एक कैनवास की तरह है, और कोड पेंट की तरह है। अपनी उत्कृष्ट कृति बनाएं."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "मेरे बारे में",
  title_EN: "About me",
  description: "मेरे बारे में कुछ कोड स्निपेट",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "मेरे दिल के सर्किट",
      description:
        "जब मैं डिजिटल दुनिया में नहीं घूम रहा होता हूं, तो मैं प्रौद्योगिकी और हार्डवेयर के आकर्षक क्षेत्र का पता लगाता हूं। एक रोमांचक साहसिक कार्य में सर्किट और सोल्डर जोड़ मेरे लिए पहेली के टुकड़ों की तरह हैं।",
      icon: hardwareicon,
    },
    {
      title: "जीवन की तेज़ राह पर",
      description:
        "कोडिंग के अलावा, मुझे तेज़ गति से चलना पसंद है - शब्द के सही अर्थों में। कारें मेरा जुनून हैं, और मैं शक्तिशाली मशीनों के साथ अनजान सड़कों पर चलने का आनंद लेता हूं।",
      icon: caricon,
    },
    {
      title: "जीवन के आदर्श वाक्य के रूप में खोज की खुशी",
      description:
        "एक वेब डेवलपर के रूप में मेरी यात्रा मेरे जीवन पथ का केवल एक हिस्सा है। मैं इस आदर्श वाक्य पर कायम हूं कि रोमांच तभी शुरू होता है जब आप परिचित को पीछे छोड़ देते हैं। नई जगहों और संस्कृतियों की खोज करना मेरी रचनात्मक प्रेरणा है।",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    HIN: "संपर्क",
    en: "Contact",
  },
  description: {
    HIN: "मुझे एक संदेश लिखें और मैं आपसे संपर्क करूंगा।",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        HIN: "आपका नाम",
        en: "Your Name",
      },
      type: "text",
      validation: {
        HIN: "कृपया आपका नाम दर्ज करें",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        HIN: "आपका ईमेल",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        HIN: "कृपया अपना ईमेल भरें",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        HIN: "विषय",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        HIN: "कृपया अपना विषय भरें",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      HIN: "आपका संदेश",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      HIN: "कृपया अपना संदेश भरें",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      HIN: "भेजें",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      HIN: "मैं इस बात से सहमत हूं कि अभिजीत मुझसे संपर्क करने के लिए मेरे व्यक्तिगत डेटा abigitkumarsharma1505@gmail.com का उपयोग कर सकता है।",
      en: "I agree that Abhijit may use my personal data abhijitkumarsharma1505@gmail.com to contact me.",
    },
    description: {
      HIN: "यह अनुरोध सबमिट करके, आप स्वीकार करते हैं कि आपने निजी नीति पढ़ ली है",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    HIN: "🦄 लाइव डेमो शीघ्र ही खुलेगा। सर्वर प्रारंभ हो रहे हैं...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    HIN: "🦄 आपके ईमेल के लिए धन्यवाद। मैं यथाशीघ्र आपके पास वापस आऊंगा",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    HIN: "🦄दुर्भाग्य से आपका ईमेल भेजना काम नहीं आया। कृपया बाद में पुन: प्रयास करें",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    HIN: "कृपया आपका नाम दर्ज करें",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    HIN: "HIN",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
