/* ==========================================================
   EVERYTHING ON THE SITE LIVES HERE.
   Edit text in this file, save, push to GitHub. That's it.
   Set any link to "" to hide it.
   ========================================================== */

window.SITE = {
  name: "Elena Jojic",
  first: "elena",
  last: "jojic",
  role: "Robotics Engineering · University of Michigan",
  tagline: "Robotics (Perception) · Business minor · Premed",
  school: "Class of 2029",
  now: "building lunar hardware with CLAWS",

  email: "elenajojic7@gmail.com",
  linkedin: "",      // e.g. "https://www.linkedin.com/in/your-handle"
  github: "https://github.com/elenajojic",
  resumePdf: "",     // put your PDF in assets/ then set: "assets/Elena_Jojic_Resume.pdf"

  // Your cutout photo (background removed) goes in assets/ with this name.
  photo: "assets/elena.png",

  lede: "I build robots that borrow from animals.",
  pull: "Nature already solved a lot of hard mechanical problems. I want to borrow its answers.",
  about: [
    "I'm a Robotics student at the University of Michigan, concentrating in Perception, with a Business minor and a premed track alongside.",
    "My focus is bio-inspired mechanisms: squid arms, crab pincers, cockroach legs, and how they can shape prosthetics, suits, and the tools people use every day.",
    "I learn by building. Right now that means lunar hardware with CLAWS, wire-bending and legged robots in the BIRDS Lab, and adaptive tools for people with cerebral palsy.",
    "Before engineering I did Model UN and debate, so presenting and pitching are some of my favorite parts of a project."
  ],

  /* ---------- PROJECTS (the file folders) ---------- */
  projects: [
    {
      code: "001", short: "LAMS", title: "Lunar Adjustable Mast Stand",
      team: "CLAWS · NASA Micro-g NExT & SUITS", role: "Hardware Engineer",
      when: "Sep 2026 → now", tools: ["Onshape", "FEA", "Test planning"],
      stat: ["6.1 m", "mast height"],
      points: [
        "Designing a hand-cranked tripod with a self-locking worm gear that raises a rollable composite mast to 6.1 m, lighting astronaut work zones on the Moon.",
        "Ran crank torque, tip-over, mast buckling and Onshape FEA analyses.",
        "Wrote the safety test plan for NASA's Neutral Buoyancy Lab."
      ],
      fig: "mast", link: ""
    },
    {
      code: "002", short: "MESHBOT", title: "MeshBOT",
      team: "BIRDS Lab · University of Michigan", role: "Founder, Lab Manager & Lead Mechanical Engineer",
      when: "Jan 2026 → Sep 2026", tools: ["Autodesk Inventor", "Capstan drives", "Laser cutting"],
      stat: ["1", "continuous wire"],
      points: [
        "Started and led an 8 person team building a robot that bends one continuous metal wire into 3D wireframe structures.",
        "Rebuilt the wire rotator around a new motor and capstan drive, and took the wire bender through multiple Inventor revisions.",
        "Built the zip tie joining mechanism for connecting the frame."
      ],
      fig: "wire", link: ""
    },
    {
      code: "003", short: "MU-ROAM", title: "Multilegged Robots",
      team: "Mu-RoAM · BIRDS Lab", role: "Mechanical Engineer",
      when: "2026", tools: ["CAD", "Fabrication", "Bio-inspired design"],
      stat: ["6", "legs, cockroach style"],
      points: [
        "Designed and assembled multilegged robots that turn principles of animal locomotion into working hardware.",
        "Current focus: cockroach locomotion, and what its gait can teach a robot about rough terrain."
      ],
      fig: "legs", link: ""
    },
    {
      code: "004", short: "M-HEAL", title: "Adaptive Daily Tools",
      team: "M-Heal · CEPEA", role: "Tech & Design Team Lead",
      when: "Sep 2025 → Sep 2026", tools: ["CAD", "Ergonomics", "User testing"],
      stat: ["CP", "inclusive design"],
      points: [
        "Designed and prototyped adaptive spoons, plates and daily-use tools in CAD for people with cerebral palsy.",
        "Refined every prototype with engineers, designers and healthcare stakeholders based on what users actually needed."
      ],
      fig: "spoon", link: ""
    },
    {
      code: "005", short: "AMYNA", title: "Amyna",
      team: "MHacks 2026 · 1st place, Relay Track", role: "Built the phone-calling agent",
      when: "Fall 2026", tools: ["AI agents", "Voice calling", "Hackathon speed"],
      stat: ["1st", "place, first hackathon"],
      points: [
        "An AI agent that calls insurance companies and disputes denied medical claims for patients.",
        "I built the piece that actually places and handles the phone calls.",
        "It was my first hackathon."
      ],
      fig: "phone", link: ""
    },
    {
      code: "006", short: "JUKEBOX", title: "Earth Jukebox",
      team: "NASA Space Apps 2026 · Earth Information Jukebox", role: "Concept, sound & UX",
      when: "Fall 2026", tools: ["Spatial audio", "Accessibility", "UI/UX"],
      stat: ["♪", "data you can hear"],
      points: [
        "An accessible spatial-audio map of NASA Earth data: you hear the planet instead of only reading it.",
        "Includes a guess-the-sound game and a voice guide, designed accessibility first."
      ],
      fig: "sound", link: ""
    },
    {
      code: "007", short: "ATLAS", title: "Atlas Planner",
      team: "Personal tool", role: "Solo builder",
      when: "Fall 2026", tools: ["Claude connector", "Render", "Neon Postgres"],
      stat: ["18", "credits, optimized"],
      points: [
        "A hosted Claude connector for UMich's Atlas course data that plans my schedule from what I've taken, my goals, instructor ratings, time of day and total workload.",
        "Log in once with UMich, then plan registration from any chat."
      ],
      fig: "grid", link: "https://github.com/elenajojic/atlas-planner"
    }
  ],

  /* ---------- EXPERIENCE (filterable log) ---------- */
  // tags: eng, research, health, lead
  experience: [
    { when: "Sep 2026 → now", title: "Hardware Engineer", org: "CLAWS, NASA Micro-g NExT & SUITS", tags: ["eng"],
      note: "Lunar mast stand design, analysis and NBL safety test plan." },
    { when: "Jan 2026 → Sep 2026", title: "Lab Manager & Lead Mechanical Engineer", org: "MeshBOT, BIRDS Lab, University of Michigan", tags: ["eng", "lead"],
      note: "Founded and led an 8 person wire-bending robot team; multilegged robots." },
    { when: "Sep 2025 → Sep 2026", title: "Tech & Design Team Lead", org: "M-Heal, CEPEA", tags: ["eng", "health", "lead"],
      note: "Adaptive tools for people with cerebral palsy." },
    { when: "Fall 2026", title: "Exam Writing Lead", org: "UMSO (Michigan Science Olympiad)", tags: ["lead"],
      note: "Run a group of exam writers for UMSO and Regionals tests: checkpoints, feedback, deadlines." },
    { when: "Sep 2024 → Apr 2025", title: "Research Assistant", org: "Anesthesiology, John D. Dingell VA Medical Center", tags: ["research", "health"],
      note: "Sustainable anesthesia: less nitrous oxide, less medication waste, pre-filled syringes." },
    { when: "Oct 2024 → Dec 2024", title: "Research Assistant", org: "Anesthesia, John D. Dingell VA Medical Center", tags: ["research", "health"],
      note: "How fluid strategies during Hurricane Helene affected patient hemodynamics." },
    { when: "Jul 2024 → Mar 2025", title: "Volunteer", org: "Electrophysiology, Corewell Health", tags: ["health"],
      note: "Assisted with cardiac procedures and shadowed in electrophysiology." },
    { when: "Jun 2022 → Aug 2025", title: "Hospital Volunteer & Job Shadow", org: "Veterans Affairs Hospital", tags: ["health"],
      note: "Patient support and Cardiology department work." },
    { when: "Jun 2024 → Aug 2024", title: "Student Intern", org: "Blueprints for Pangea", tags: ["health"],
      note: "Redistributed surplus medical supplies for global health equity." },
    { when: "Jun 2023 → Aug 2023", title: "Microelectronics Program", org: "MIT Beaver Works", tags: ["eng"],
      note: "Designed and tested circuits in C++ in an intensive 4 week program." },
    { when: "Jan 2023 → Dec 2023", title: "Research Assistant", org: "Neighborhood Health Plan of Rhode Island", tags: ["research", "health"],
      note: "Tracked a diabetes education program that showed a 1% drop in HbA1c over a year." },
    { when: "Dec 2022 → Dec 2023", title: "Data Analyst Intern", org: "Neighborhood Health Plan of Rhode Island", tags: ["research", "health"],
      note: "Medicaid redetermination data during COVID-19; helped patients re-enroll." }
  ],

  awards: [
    ["MHacks 2026", "1st place, Relay Track (Amyna)"],
    ["USA Biology Olympiad", "Semifinalist, 2023 & 2024"],
    ["Biology Department Award", "International Academy, 2025"],
    ["Science Olympiad", "Captain; 3rd at States 2024"]
  ],

  skills: {
    "Design & CAD": ["Onshape", "Autodesk Inventor", "3D modeling", "FEA", "Laser cutting", "Rapid prototyping"],
    "Build & code": ["C++", "Circuits & electronics", "AI agents", "Test planning"],
    "People": ["Team leadership", "Pitching & public speaking", "Graphic design", "Clinical exposure"]
  },

  /* ---------- COURSEWORK (index cards) ---------- */
  // status: "done" or "next"
  courses: [
    { code: "ROB", name: "Robotics", tag: "core", status: "done" },
    { code: "ENGR", name: "Engineering Programming", tag: "core", status: "done" },
    { code: "MATH 116", name: "Calculus II", tag: "math", status: "done" },
    { code: "MATH 215", name: "Multivariable Calculus", tag: "math", status: "done" },
    { code: "HONORS", name: "Honors Mathematics", tag: "math", status: "done" },
    { code: "PHYSICS 140", name: "Mechanics", tag: "physics", status: "done" },
    { code: "PHYSICS 141", name: "Mechanics Lab", tag: "physics", status: "done" },
    { code: "BIOPHYS", name: "Biophysics I", tag: "physics", status: "done" },
    { code: "PHYSICS", name: "Physics II + Lab", tag: "physics", status: "done" },
    { code: "CHEM 210", name: "Organic Chemistry I", tag: "bio", status: "done" },
    { code: "EARTH", name: "Oceanography", tag: "bio", status: "done" },
    { code: "CHEM 215", name: "Organic Chemistry II", tag: "bio", status: "next" },
    { code: "CHEM 216", name: "Organic Chemistry Lab", tag: "bio", status: "next" }
  ],

  /* ---------- HOBBIES (photo tiles) ---------- */
  // add img: "assets/squirrel.jpg" to show a real photo
  hobbies: [
    { label: "squirrel photography", note: "campus squirrels, sometimes by drone", icon: "squirrel", img: "" },
    { label: "skydiving", note: "Albania, age 11", icon: "chute", img: "" },
    { label: "DJing", note: "", icon: "deck", img: "" },
    { label: "piano + clarinet", note: "", icon: "keys", img: "" },
    { label: "basketball", note: "", icon: "ball", img: "" },
    { label: "logo design", note: "for practically every club I'm in", icon: "pen", img: "" },
    { label: "matcha", note: "", icon: "cup", img: "" }
  ]
};
