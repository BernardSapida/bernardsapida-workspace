export const yourYearsSinceStart = () => {
  const youStartDate = new Date("2019-01-01T07:00:00.000Z");
  const currentDate = new Date();
  return currentDate.getFullYear() - youStartDate.getFullYear();
};

export const enriqueYearsSinceStart = () => {
  const youStartDate = new Date("2020-01-01T07:00:00.000Z");
  const currentDate = new Date();
  return currentDate.getFullYear() - youStartDate.getFullYear();
};

export const resume = {
  basics: {
    name: "Bernard Sapida",
    label: "Junior Software Engineer",
    image: null,
    email: "sapidabernard@gmail.com",
    phone: null,
    url: "https://bernardsapida.vercel.app",
    summary: `I'm a full-time freelance web developer with over ${yourYearsSinceStart()} years of hands-on experience and passionate about functional programming methodologies. I've successfully delivered 5 custom systems for IT and Computer Science students, including e-commerce platforms, reservation systems, inventory tools, and even engineering-focused learning platforms. All of these projects were tailored to client needs and delivered ahead of schedule.\n
One of my most technically demanding and rewarding projects is a 2D determinate truss analysis learning platform for Civil Engineering students and instructors. Truss analysis is the process of calculating how forces move through structures like bridges and roof supports. This tool doesn't just compute the results, it produces a step-by-step analysis report with detailed reasoning, helping students understand why and how the computations work. The project blends complex engineering logic with clear educational design, turning a tough subject into an intuitive experience.\n
I'm known for being fast, reliable, and quality-driven. I work closely with clients to ensure every requirement is met, and I proactively communicate when improvements or limitations arise. I take pride in producing high-quality outputs that are both functional and user-friendly.\n
Currently, I work part-time as a frontend developer at a private company while continuing my freelance work. I'm also mentored by Enrique Tañada III, a backend developer with ${enriqueYearsSinceStart()} years of industry experience.`,
    location: {
      address: null,
      postalCode: null,
      city: "Imus, Cavite",
      countryCode: "PH",
      region: "4-A",
    },
    // profiles: [
    //   {
    //     network: "Youtube",
    //     url: "https://youtube.com/c/kelvinmai",
    //     username: "kelvinmai",
    //   },
    //   {
    //     network: "Github",
    //     url: "https://github.com/kelvin-mai",
    //     username: "kelvinmai",
    //   },
    //   {
    //     network: "Buy Me A Coffee",
    //     url: "https://www.buymeacoffee.com/kelvinmai",
    //     username: "kelvinmai",
    //   },
    //   {
    //     network: "Linkedin",
    //     url: "https://www.linkedin.com/in/kelvin-mai-461756152/",
    //     username: "Kelvin Mai",
    //   },
    //   {
    //     network: "Instagram",
    //     url: "https://instagram.com/iamnivlek",
    //     username: "iamnivlek",
    //   },
    // ],
  },
  work: [
    {
      name: "Creotec Philippines Inc.",
      location: "Binãn, Laguna",
      locationType: "Work from home",
      description: null,
      skills: ["mitapp"],
      url: "https://creotecworkimmersion.com/",
      image: "gravie.jpg",
      position: "Mobile Application Developer Intern",
      startDate: "2021-01-15T08:00:00.000Z",
      endDate: "2021-02-01T08:00:00.000Z",
      summary: "No summary",
      highlights: [
        "Designed and developed mobile applications using MIT App Inventor, including an attendance tracking system and a payroll app.",
        "Tested and debugged application features to maintain reliability and usability.",
        "Customized app designs and functions based on organizational needs and feedback.",
        "Documented project progress, including system features, revisions, and performance tests.",
        "Independently managed development tasks while coordinating with supervisors for requirements validation and final output review.",
      ],
    },
    {
      name: "Pixel8 Web Solutions & Consultancy Inc.",
      location: "Legazpi, Albay City",
      locationType: "Work from home",
      description: null,
      skills: ["Javascript", "Vue", "Quasar Framework", "PHP", "MySQL"],
      url: "https://pixel8websolutions.com/",
      image: "yieldmos.png",
      position: "Full-stack Web Developer",
      startDate: "2025-07-26T08:00:00.000Z",
      endDate: "2025-09-04T08:00:00.000Z",
      summary: "No summary",
      highlights: [
        "Became team leader by 3rd day of work and led a frontend development team, overseeing task management, daily meetings, and issue resolution.",
        "Developed responsive web interfaces using Vue.js, Quasar Framework, and Axios for dynamic UI functionality.",
        "Implemented mock APIs with JSON Server and integrated backend data using MySQL.",
        "Tested application performance and reliability with Cypress.",
        "Coordinated effective teamwork using Microsoft Teams, Git, and GitLab for version control and communication.",
        "Ensured efficient workflow and consistent project progress through structured team coordination and technical guidance.",
      ],
    },
  ],
  education: [
    {
      institution: "Cavite State University - Main",
      area: "Computer Science Major",
      location: "Indang, Cavite",
      startDate: "2021-09-01T07:00:00.000Z",
      endDate: "2025-09-01T07:00:00.000Z",
      studyType: null,
      gpa: null,
      courses: null,
    },
    {
      institution: "Del Pilar Academy",
      area: "STEM",
      location: "General Elias Topacio Street 4103 Imus Cavite",
      startDate: "2019-06-01T07:00:00.000Z",
      endDate: "2021-04-01T08:00:00.000Z",
      studyType: null,
      gpa: null,
      courses: null,
    },
    {
      institution: "Imus Institute of Science and Technology",
      area: "Business Highschool",
      location: "82 Nueno Ave. 4103 Bacoor Calabarzon",
      startDate: "2015-06-01T07:00:00.000Z",
      endDate: "2019-04-01T08:00:00.000Z",
      studyType: null,
      gpa: null,
      courses: null,
    },
    {
      institution: "Imus Pilot Elementary School",
      area: "",
      location: "Nueno Avenue, Poblacion I-A, Imus",
      startDate: "2015-06-01T07:00:00.000Z",
      endDate: "2008-04-01T08:00:00.000Z",
      studyType: null,
      gpa: null,
      courses: null,
    },
  ],
  skills: [
    {
      name: "Programming Languages",
      keywords: ["HTML & CSS", "TypeScript", "JavaScript"],
    },
    {
      name: "Frontend Technologies",
      keywords: [
        "React",
        "React Router",
        "Tanstack React Query",
        "Zustand",
        "Next.js",
        "Vue",
        "Bootstrap",
        "Hero UI",
        "Material UI",
        "Tailwind CSS",
        "Cypress",
        "Jest",
        "Vitest",
      ],
    },
    {
      name: "Backend & Databases",
      keywords: [
        "Express.js",
        "REST APIs",
        "GraphQL Yoga",
        "MySQL",
        "Postgres",
        "MongoDB",
        "Prisma",
      ],
    },
    {
      name: "Tools",
      keywords: ["Github Actions", "Git"],
    },
  ],
  projects: [
    {
      name: "Trussen",
      url: "https://trussen.vercel.app",
      startDate: "2024-06-01",
      endDate: null,
      description:
        "A 2D determinate truss analysis learning platform built for Civil Engineering students and instructors. The system performs force calculations and generates detailed, step-by-step analysis reports to enhance understanding of structural behavior in truss systems.",
      highlights: [
        "Developed a web-based platform for interactive 2D determinate truss analysis.",
        "Implemented automatic computation of member forces and support reactions using engineering formulas and equilibrium equation.",
        "Generated step-by-step solution reports explaining each computation for educational clarity.",
        "Designed an intuitive UI/UX for students to visualize structural forces and results in real time.",
        "Bridged engineering logic with software design to create an effective learning experience for Civil Engineering education.",
      ],
    },
  ],
};

export type Resume = typeof resume;
