/**
 * Centralized Portfolio Data for Guru Prasanna
 * Edit this file to update your personal details, projects, skills, education, and links!
 */

export const portfolioData = {
  personal: {
    name: "Guru Prasanna",
    initials: "GP",
    greeting: "HELLO, I'M",
    headline: "Aspiring Software Developer & AI/ML Student",
    bio: "I build responsive web experiences and explore intelligent solutions using modern web technologies and programming.",
    animatedTitles: [
      "Web Developer",
      "AI & ML Student",
      "Software Development Enthusiast"
    ],
    avatarUrl: "/images/profile.jpg",
    resumeUrl: "/Guru_Prasanna_Resume.pdf",
    email: "guruprasanna754@gmail.com",
    location: "Andhra Pradesh, India",
    socialLinks: {
      github: "https://github.com/Guruyadav118",
      linkedin: "https://linkedin.com/in/guru-prasanna-b34898295",
      email: "mailto:guruprasanna754@gmail.com"
    }
  },

  about: {
    description: "I am Guru Prasanna, a B.Tech student specializing in Artificial Intelligence and Machine Learning. I am passionate about web development, programming, and building practical applications that solve real-world problems. I enjoy learning new technologies, improving my problem-solving skills, and developing user-friendly digital experiences. I am looking for internship opportunities where I can apply my knowledge, gain practical experience, and grow as a software developer.",
    infoCards: [
      {
        id: "education",
        label: "Education",
        value: "B.Tech in AI & ML",
        subtext: "Class of 2027",
        icon: "GraduationCap"
      },
      {
        id: "gradYear",
        label: "Graduation Year",
        value: "2027",
        subtext: "Expected Completion",
        icon: "Calendar"
      },
      {
        id: "careerInterest",
        label: "Career Interest",
        value: "Web Development",
        subtext: "Frontend & Full-Stack",
        icon: "Code"
      },
      {
        id: "status",
        label: "Current Status",
        value: "Open to Internships",
        subtext: "Available for Opportunities",
        icon: "Sparkles",
        highlight: true
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        description: "Foundational and object-oriented languages for algorithmic problem-solving",
        skills: [
          { name: "Python", category: "AI & Scripting", icon: "FileCode2" },
          { name: "Java", category: "Core & OOP", icon: "Code2" },
          { name: "C++", category: "DSA & Problem Solving", icon: "Terminal" },
          { name: "JavaScript", category: "Modern Web", icon: "Braces" }
        ]
      },
      {
        id: "frontend",
        name: "Frontend Development",
        description: "Crafting intuitive, accessible, and responsive user interfaces",
        skills: [
          { name: "HTML5", category: "Semantic Markup", icon: "Layout" },
          { name: "CSS3", category: "Styling & Flex/Grid", icon: "Palette" },
          { name: "React.js", category: "Component UI", icon: "Atom" },
          { name: "Responsive Web Design", category: "Cross-Device UX", icon: "Smartphone" },
          { name: "DOM Manipulation", category: "Event Handling", icon: "MousePointerClick" }
        ]
      },
      {
        id: "backend",
        name: "Backend Development",
        description: "Server-side logic, routing, and data flow architecture",
        skills: [
          { name: "Node.js", category: "Runtime Environment", icon: "Server" },
          { name: "Django", category: "Python Framework", icon: "Layers" },
          { name: "CRUD Operations", category: "RESTful APIs", icon: "DatabaseZap" }
        ]
      },
      {
        id: "databases",
        name: "Databases",
        description: "Relational modeling and foundational document storage",
        skills: [
          { name: "MySQL", category: "Relational RDBMS", icon: "Database" },
          { name: "NoSQL Fundamentals", category: "Document Storage", icon: "Boxes" }
        ]
      },
      {
        id: "tools",
        name: "Tools & Workflow",
        description: "Version control, collaboration, and modern code editors",
        skills: [
          { name: "Git", category: "Version Control", icon: "GitBranch" },
          { name: "GitHub", category: "Collaboration & CI", icon: "Github" },
          { name: "Visual Studio Code", category: "Development IDE", icon: "Laptop" }
        ]
      }
    ]
  },

  education: [
    {
      id: "btech",
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "Sreenivasa Institute of Technology and Management Studies",
      period: "2023 – 2027",
      status: "Expected Graduation: 2027",
      isCurrent: true,
      description: "Rigorous coursework focusing on Artificial Intelligence concepts, Machine Learning algorithms, Data Structures & Algorithms, Database Management Systems, and Modern Web Application Development."
    },
    {
      id: "intermediate",
      degree: "Intermediate / Higher Secondary Education",
      specialization: "Mathematics, Physics, and Chemistry (MPC)",
      institution: "Bhavana Junior College",
      period: "2021 – 2023",
      status: "Completed: 2023",
      isCurrent: false,
      description: "Comprehensive foundational education strengthening mathematical analysis, logical problem-solving, and scientific inquiry."
    },
    {
      id: "school",
      degree: "Secondary School Education",
      specialization: "General Academic Curriculum",
      institution: "ZPHS School, Velpur",
      period: "2020",
      status: "Completed: 2020",
      isCurrent: false,
      description: "Completed secondary education with strong academic performance and early foundational interest in computer technology."
    }
  ],

  experience: [
    {
      id: "slashmark-intern",
      role: "Full Stack Web Development Intern",
      organization: "Slash Mark IT Solutions",
      duration: "May 2026 – June 2026",
      status: "Completed Internship",
      description: "Participated in practical web development activities focused on frontend and full-stack development. Worked on developing web interfaces, learning application development workflows, and improving programming and problem-solving skills.",
      keyAreas: [
        "Frontend Interface Development",
        "Full-Stack Application Workflows",
        "Modular Component Architecture",
        "Problem Solving & Code Optimization"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Git"]
    }
  ],

  projects: [
    {
      id: "food-delivery",
      title: "Food Delivery Website",
      category: "Frontend Web Application",
      description: "A food delivery web application concept with an interactive interface for browsing food items and managing orders.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/food-delivery.jpg",
      status: "Completed Concept",
      inProgress: false,
      features: [
        "Categorized food menu browsing with live filtering",
        "Interactive shopping cart with real-time order pricing",
        "Simulated order checkout and tracking workflow",
        "Responsive, touch-friendly UI for mobile and tablet"
      ],
      demoNote: "Interactive conceptual prototype. Review architecture and code structure below."
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      category: "Web Development",
      description: "A responsive portfolio website designed to present my skills, education, projects, and career goals.",
      technologies: ["React", "CSS", "JavaScript"],
      image: "/images/portfolio.jpg",
      status: "Live & Active",
      inProgress: false,
      features: [
        "Modern dark and light theme toggle with persistent preferences",
        "Smooth Framer Motion entrance animations & micro-interactions",
        "Modular React architecture and validated contact form",
        "100% mobile-responsive layout with accessible navigation"
      ],
      demoNote: "You are currently viewing this responsive web portfolio!"
    },
    {
      id: "marriage-invitation",
      title: "Marriage Invitation Website",
      category: "Event Web Platform",
      description: "A digital wedding invitation website featuring event information, photographs, location details, and a mobile-friendly design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/marriage-invite.jpg",
      status: "Completed Project",
      inProgress: false,
      features: [
        "Elegant wedding schedule and celebration timeline",
        "Integrated interactive venue map and navigation directions",
        "High-resolution photo gallery showcase",
        "Mobile-first RSVP response form"
      ],
      demoNote: "Digital invitation web interface built for cross-device accessibility."
    },
    {
      id: "coffeedate",
      title: "CoffeeDate Website",
      category: "Social Platform Concept",
      description: "A social coffee-meeting platform concept with profile browsing, registration, and booking-request interfaces.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/images/coffeedate.jpg",
      status: "In Progress",
      inProgress: true,
      features: [
        "User profile discovery and connection cards",
        "Interactive cafe meeting place picker",
        "Time-slot booking request modal interface",
        "Dynamic profile registration and message preview"
      ],
      demoNote: "Under active development. Frontend architecture and mockups in progress."
    }
  ],

  certifications: [
    {
      id: "cert-placeholder-1",
      title: "Artificial Intelligence & Machine Learning Track",
      organization: "Certification Partner / Academy",
      date: "In Progress / 2026",
      status: "Credential Placeholder",
      isPlaceholder: true,
      description: "Comprehensive coursework covering core supervised and unsupervised machine learning models, neural networks, and Python data science libraries.",
      credentialNote: "Replace with your official certificate title, issuing organization, and verification credential."
    },
    {
      id: "cert-placeholder-2",
      title: "Full Stack Web Development Essentials",
      organization: "Technical Learning Platform",
      date: "2026",
      status: "Credential Placeholder",
      isPlaceholder: true,
      description: "Hands-on web engineering curriculum covering modern JavaScript, React component workflows, REST API integration, and responsive CSS styling.",
      credentialNote: "Add your course completion certificates from Coursera, Udemy, HackerRank, or college certifications."
    },
    {
      id: "cert-placeholder-3",
      title: "Problem Solving & Data Structures in C++ / Java",
      organization: "Coding Platform / Institute",
      date: "2025 – 2026",
      status: "Credential Placeholder",
      isPlaceholder: true,
      description: "Algorithmic problem solving, complexity analysis, arrays, recursion, and object-oriented software design paradigms.",
      credentialNote: "Showcase your competitive programming or foundational certification badges here."
    }
  ],

  contact: {
    email: "guruprasanna754@gmail.com",
    linkedin: "https://linkedin.com/in/guru-prasanna-b34898295",
    github: "https://github.com/Guruyadav118",
    statusBadge: "Open for 2026 - 2027 Internships",
    note: "Feel free to reach out via email or connect on LinkedIn. I am always open to discussing new internship roles, software development projects, or learning opportunities."
  }
};
