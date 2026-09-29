export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  isCurrent?: boolean;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    category: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  features: string[];
  keyOutcomes: string[];
  githubPlaceholderText: string;
  liveDemoPlaceholderText: string;
  status: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  keyContributions: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sharada M H",
    role: "Computer Science & Engineering Student",
    subRole: "Software Development Enthusiast",
    yearOfStudy: "3rd Year",
    institution: "Alva's Institute of Engineering and Technology",
    email: "mhsharada7@gmail.com",
    phone: "+91 7676736478",
    linkedinUrl: "https://www.linkedin.com/in/sharada-m-h",
    linkedinDisplay: "linkedin.com/in/sharada-m-h",
    githubUrl: "https://github.com/SHARADAMH",
    githubDisplay: "github.com/SHARADAMH",
    location: "Karnataka, India",
    availability: "Seeking Software Development Internships",
    bio: "I am Sharada M H, a Computer Science and Engineering student at Alva’s Institute of Engineering and Technology. I am interested in software development and enjoy building practical applications that solve real-world problems. I have experience working with Java, web technologies, databases, and programming fundamentals. I am continuously improving my problem-solving and development skills while exploring new technologies and opportunities to gain industry experience.",
    photoPath: "/MYPIC.jpeg",
  },

  education: [
    {
      id: "be-cse",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Alva's Institute of Engineering and Technology",
      location: "Moodbidri, Karnataka",
      period: "2024 – Present",
      scoreLabel: "CGPA",
      scoreValue: "9.18 / 10",
      isCurrent: true,
      highlights: [
        "Consistent academic excellence with a 9.18/10 CGPA",
        "Deep coursework in Data Structures, Algorithms, OOP with Java, and Database Systems",
        "Active member of departmental technical committees and student event teams"
      ]
    },
    {
      id: "puc",
      degree: "Pre-University Course (PUC)",
      institution: "MKE Trust College, Ranebennur",
      location: "Ranebennur, Karnataka",
      period: "2022 – 2024",
      scoreLabel: "Percentage",
      scoreValue: "92.8%",
      isCurrent: false,
      highlights: [
        "Secured 92.8% with distinction",
        "Strong foundation in Mathematics, Physics, and Computer Science",
        "Participated in regional science exhibitions and academic contests"
      ]
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Devika English Medium School, Ranebennur",
      location: "Ranebennur, Karnataka",
      period: "2019 – 2022",
      scoreLabel: "Percentage",
      scoreValue: "92.8%",
      isCurrent: false,
      highlights: [
        "Graduated with 92.8% distinction",
        "Ranked among top scholastic performers in the institution",
        "Active participant in extracurricular competitions and school debates"
      ]
    }
  ] as EducationItem[],

  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Core languages used for software development, algorithmic problem solving, and object-oriented systems.",
      skills: [
        { name: "Java", level: "Proficient", category: "Core Backend & OOP" },
        { name: "Python", level: "Intermediate", category: "Scripting & Problem Solving" },
        { name: "C", level: "Intermediate", category: "Systems & Memory Basics" },
        { name: "C++", level: "Intermediate", category: "Data Structures & OOP" }
      ]
    },
    {
      id: "web",
      title: "Web Technologies",
      description: "Frontend technologies for developing structured, responsive, and interactive user interfaces.",
      skills: [
        { name: "HTML", level: "Proficient", category: "Semantic Markup & Accessibility" },
        { name: "CSS", level: "Proficient", category: "Responsive Layouts & Styling" },
        { name: "JavaScript", level: "Intermediate", category: "Client-side Logic & DOM" }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      description: "Relational database querying, structured data modeling, and transaction management.",
      skills: [
        { name: "MySQL", level: "Proficient", category: "Relational DBMS & Queries" },
        { name: "SQL", level: "Proficient", category: "Data Query Language & Joins" }
      ]
    },
    {
      id: "concepts",
      title: "Core Concepts",
      description: "Theoretical and practical computing fundamentals governing efficient software architecture.",
      skills: [
        { name: "Data Structures and Algorithms", level: "Proficient", category: "Arrays, Lists, Trees, Sorting, Complexity" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "farmiq",
      title: "FarmIQ",
      shortDescription: "A smart farming application designed to provide useful digital support for farmers by improving accessibility to agricultural data.",
      fullDescription: "FarmIQ is a practical smart farming application built to bridge the information gap in modern agriculture. The project focuses on empowering farmers with accessible digital tools, simplifying agricultural record-keeping, and providing vital decision-support information to optimize crop planning and resource usage.",
      technologies: ["JavaScript", "HTML", "CSS", "MySQL"],
      image: "/src/assets/images/project_farmiq_visual_1790663652063.jpg",
      status: "Academic Project",
      features: [
        "Accessible, clear digital interface tailored for agricultural practitioners",
        "Centralized information repository for crop management and seasonal practices",
        "Streamlined operational workflows to simplify everyday agricultural record-keeping",
        "Data-driven insights to support smarter farming choices and harvest planning"
      ],
      keyOutcomes: [
        "Designed user workflows prioritizing simplicity and high readability",
        "Implemented structured data schemas in MySQL to store agricultural records",
        "Demonstrated practical technology application for rural and community impact"
      ],
      githubPlaceholderText: "Repository link will be shared during technical interviews or upon request.",
      liveDemoPlaceholderText: "Project demonstration is available locally. Walkthrough available upon request."
    },
    {
      id: "employee-management-system",
      title: "Employee Management System",
      shortDescription: "A software application developed to manage employee records, role allocations, and organizational workflows.",
      fullDescription: "The Employee Management System is a robust software solution engineered to modernize institutional record administration. It centralizes employee records, streamlines role assignments across distinct organizational departments, and automates administrative oversight to eliminate manual bookkeeping errors.",
      technologies: ["Java", "MySQL", "SQL"],
      image: "/src/assets/images/project_ems_visual_1790663664853.jpg",
      status: "Coursework Project",
      features: [
        "Structured employee profile and credential management",
        "Role allocation and departmental categorization hierarchy",
        "Optimized SQL queries for rapid record retrieval, filtering, and updates",
        "Role-based access view ensuring administrative data privacy and consistency"
      ],
      keyOutcomes: [
        "Built modular Java architecture adhering to clean Object-Oriented principles",
        "Executed relational database design with foreign key constraints in MySQL",
        "Enhanced administrative workflow efficiency and organizational data accuracy"
      ],
      githubPlaceholderText: "Source code repository accessible upon request or code review presentation.",
      liveDemoPlaceholderText: "Interactive Java desktop/terminal walkthrough available during placement interviews."
    },
    {
      id: "todo-list",
      title: "To-Do List Application",
      shortDescription: "A task management application designed to help users organize daily activities, track task completion, and manage priorities.",
      fullDescription: "A focused personal productivity and task management utility designed to help users efficiently plan, track, and complete daily tasks. With an intuitive user interface and priority handling, it reduces cognitive friction in personal workflow management.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/src/assets/images/project_todo_visual_1790663678014.jpg",
      status: "Web Utility Project",
      features: [
        "Intuitive task creation, state toggling (completed / pending), and deletion",
        "Priority categorization to highlight critical deadlines and daily targets",
        "Responsive, minimal interface design optimized across mobile and desktop",
        "Persistent state handling for seamless day-to-day workflow continuity"
      ],
      keyOutcomes: [
        "Reinforced core JavaScript DOM manipulation and event-driven architecture",
        "Developed clean CSS layout utilizing flexbox and responsive media queries",
        "Focused on high usability and zero-friction task lifecycle management"
      ],
      githubPlaceholderText: "GitHub repository link available on profile and upon request.",
      liveDemoPlaceholderText: "Direct live demo available in the interactive preview below."
    }
  ] as ProjectItem[],

  activities: [
    {
      id: "hackathons",
      title: "Hackathon Organizer & Coordinator",
      role: "Lead Event Organizer",
      organization: "Alva's Institute of Engineering and Technology",
      period: "College Level",
      description: "Organized and conducted college-level hackathons fostering collaborative problem solving, code sprints, and technological innovation among engineering students.",
      keyContributions: [
        "Structured event problem statements, evaluation criteria, and team guidelines",
        "Coordinated technical infrastructure, team registrations, and timeline management",
        "Mentored junior student teams through initial ideation and pitch presentations"
      ]
    },
    {
      id: "tech-events",
      title: "Technical Events Lead",
      role: "Event Organizer & Anchor",
      organization: "Department of Computer Science & Engineering, AIET",
      period: "College Level",
      description: "Conducted technical symposiums, coding challenges, and interactive workshops to cultivate software engineering knowledge within the student community.",
      keyContributions: [
        "Formulated algorithmic questions and debugging rounds for campus participants",
        "Managed stage moderation, guest speaker sessions, and participant logistics",
        "Promoted active peer-learning culture across academic batches"
      ]
    },
    {
      id: "tech-initiatives",
      title: "Technical & Development Initiatives",
      role: "Active Contributor",
      organization: "AIET Student Technical Forum",
      period: "Ongoing",
      description: "Actively involved in peer study groups, programming practice sessions, and collaborative technology initiatives within the engineering college.",
      keyContributions: [
        "Participated in continuous coding challenges and algorithmic drills",
        "Assisted peers with foundational concepts in Java, C, and Web Technologies",
        "Regularly tracks modern software development paradigms and industry frameworks"
      ]
    }
  ] as ActivityItem[],

  quickStats: [
    { label: "Current CGPA", value: "9.18", suffix: "/ 10", caption: "B.E. Computer Science" },
    { label: "PUC & SSLC", value: "92.8%", suffix: "", caption: "Consistent Distinction" },
    { label: "Key Projects", value: "3+", suffix: "", caption: "Practical Implementations" },
    { label: "Events Led", value: "Multiple", suffix: "", caption: "Hackathons & Tech Symposia" }
  ]
};
