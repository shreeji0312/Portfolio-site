/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shreeji's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shreeji Patel",
    type: "website",
    url: "http://shreejipatel.com/",
  },
};

//Home Page
const greeting = {
  title: "Shreeji Patel",
  logo_name: "Shreeji Patel",
  nickname: "Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1XMMiFnVPX0f21ZEcrBcLpWwwj8ILTAe9/view?usp=sharing",
  portfolio_repository: "https://github.com/shreeji0312",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/shreeji0312",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreeji-patel-b7b01b166/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shreeji0312@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shreeji.patel.0312",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shreeji0312/?hl=en",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Mining & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed a simulation of Human Anticipation using MediaPipe BlazePose model of TensorFlow library",
        "⚡ Designed and Implemented Anticipation algorithm that evaluate Human concentration by scoring and evaluating multiple points using NumPy",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, Java and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working in the SDLC lifecycle such as reviewing/creating Functionality Specs, System Configuration & Design, Testing, Documenting, and training End Users",
        "⚡ Performed code reviews and provided constructive criticisms to the team",
        "⚡ Designed APIs to cancel and updated previouly imported Data",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Java Script",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "University of Windsor",
      subtitle: "Bachelors of Computer Science",
      logo_path: "uwindsor_logo.svg",
      alt_name: "Universty of Windsor",
      duration: "Jan 2019 - Aug 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Mining, and Full Stack Development.",
        "⚡ Achieved great knowledge of non-technical coursework such as Marketing, Financial Accounting, and Strategy Marketing.",
      ],
      website_link: "https://www.uwindsor.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Bootcamp with Distinction",
      subtitle: "- WPCC",
      logo_path: "python-logo.png",
      color_code: "#111111000",
    },
    {
      title: "Machine Learning",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.svg",
      color_code: "#111111000",
    },
    {
      title: "The complete 2021 Web Development Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy-logo.png",
      color_code: "#111111000",
    },
    {
      title: "Master the Coding interview: Data Structure + Algorithms",
      subtitle: "- Udemy",
      logo_path: "udemy-logo.png",
      color_code: "#111111000",
    },
    {
      title: "Software Design: Modeling with UML",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedlearning.png",
      color_code: "#111111000",
    },
    {
      title: "Java Programming Masterclass for Software Developers",
      subtitle: "- Udemy",
      logo_path: "udemy-logo.png",
      color_code: "#111111000",
    },
  ],
};



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Article",
  description:
    "I have worked on and published a article.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "icon.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ontario, CA",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Ontario/@48.9538382,-93.7247217,5z/data=!3m1!4b1!4m5!3m4!1s0x4cce05b25f5113af:0x70f8425629621e09!8m2!3d51.253775!4d-85.323214",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (226)-757-0312",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
