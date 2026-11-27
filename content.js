/* ==========================================================
   EVERYTHING ON THE SITE LIVES HERE.
   Edit text in this file, save, push to GitHub. That's it.
   Set any link to "" to hide it.
   ========================================================== */

window.SITE = {
  first: "elena",
  last: "jojic",
  role: "Robotics Engineering · University of Michigan",
  degree: "B.S.E. Robotics, expected May 2029",
  minors: "Perception concentration · Business minor · Premed",
  now: "Hardware Engineer, CLAWS",

  email: "elenajojic7@gmail.com",
  linkedin: "https://www.linkedin.com/in/elenajojic/",
  github: "https://github.com/elenajojic",
  resumePdf: "",     // put your PDF in assets/ then set: "assets/Elena_Jojic_Resume.pdf"
  photo: "assets/elena.png",

  /* ---------- INTRODUCTION ---------- */
  intro: [
    "Hi, I'm Elena! I'm a robotics engineering student at the University of Michigan. This site collects the projects, research, and teams I've been part of so far.",
    "I'm most interested in how engineering can help people move, heal, and live more independently. A lot of my work borrows from biology: how animals grip, walk, and adapt, and how those ideas could shape prosthetics, wearable suits, and assistive devices.",
    "None of this happens alone. I've been lucky to build with amazing teammates and mentors in the BIRDS Lab, CLAWS, and M-Heal, and I'm grateful for every one of them."
  ],
  interests: ["Bio-inspired robotics", "Prosthetics & assistive devices", "Robot perception", "Space hardware", "Medicine & healthcare"],
  roles: [
    ["Hardware Engineer", "CLAWS (NASA SUITS & Micro-g NExT)"],
    ["Lab Manager", "BIRDS Lab, University of Michigan"],
    ["Exam Writing Lead", "UMSO"]
  ],

  /* ---------- ACADEMIC RECORD ---------- */
  honors: [
    ["MHacks 2026", "1st place, Relay Track"],
    ["USA Biology Olympiad", "Semifinalist, 2023 & 2024"],
    ["Biology Department Award", "International Academy, 2025"]
  ],
  // status: "done" or "next"
  courses: [
    { code: "ROB", name: "Robotics", area: "Engineering", status: "done" },
    { code: "ENGR", name: "Engineering Programming", area: "Engineering", status: "done" },
    { code: "MATH 116", name: "Calculus II", area: "Math", status: "done" },
    { code: "MATH 215", name: "Multivariable Calculus", area: "Math", status: "done" },
    { code: "MATH", name: "Honors Mathematics", area: "Math", status: "done" },
    { code: "PHYSICS 140", name: "General Physics I (Mechanics)", area: "Physics", status: "done" },
    { code: "PHYSICS 141", name: "Elementary Laboratory I", area: "Physics", status: "done" },
    { code: "PHYSICS", name: "Biophysics I", area: "Physics", status: "done" },
    { code: "PHYSICS", name: "Physics II + Lab", area: "Physics", status: "done" },
    { code: "CHEM 210", name: "Organic Chemistry I", area: "Chemistry", status: "done" },
    { code: "EARTH", name: "Oceanography", area: "Science", status: "done" },
    { code: "CHEM 215", name: "Organic Chemistry II", area: "Chemistry", status: "next" },
    { code: "CHEM 216", name: "Organic Chemistry Lab", area: "Chemistry", status: "next" }
  ],

  /* ---------- PROJECTS & RESEARCH (the file folders) ---------- */
  projects: [
    {
      code: "001", short: "LAMS", title: "Lunar Adjustable Mast Stand",
      team: "CLAWS · NASA Micro-g NExT & SUITS", role: "Hardware Engineer",
      when: "Sep 2026 → now", tools: ["Onshape", "FEA", "Test planning"],
      stat: ["6.1 m", "mast height"],
      points: [
        "Astronauts on the Moon need reliable light where they work. I'm designing a hand-cranked tripod with a self-locking worm gear that raises a rollable composite mast to 6.1 m to light their work zones.",
        "I ran the crank torque, tip-over, mast buckling, and Onshape FEA analyses, and wrote the safety test plan for testing at NASA's Neutral Buoyancy Lab."
      ],
      fig: "mast", link: ""
    },
    {
      code: "002", short: "MESHBOT", title: "MeshBOT",
      team: "BIRDS Lab · University of Michigan", role: "Founder & Lead Mechanical Engineer",
      when: "Jan 2026 → Sep 2026", tools: ["Autodesk Inventor", "Capstan drives", "Laser cutting"],
      stat: ["8", "person team"],
      points: [
        "I started MeshBOT and led an 8 person team building a robot that bends a single continuous metal wire into 3D wireframe structures.",
        "I rebuilt the wire rotator around a new motor and capstan drive, took the wire bender through multiple Inventor revisions, and built the zip tie mechanism for joining the frame. Huge thanks to the team for every late night in the lab."
      ],
      fig: "wire", link: ""
    },
    {
      code: "003", short: "MU-ROAM", title: "Multilegged Robots",
      team: "Mu-RoAM · BIRDS Lab", role: "Mechanical Engineer",
      when: "2026", tools: ["CAD", "Fabrication", "Bio-inspired design"],
      stat: ["6", "legs"],
      points: [
        "In the Multilegged Robots and Animal Motion group, I design and assemble robots that turn principles of animal locomotion into working hardware.",
        "Right now we're studying cockroach locomotion, which is how I got hooked on bio-inspired design in the first place."
      ],
      fig: "legs", link: ""
    },
    {
      code: "004", short: "M-HEAL", title: "Adaptive Daily Tools",
      team: "M-Heal · CEPEA", role: "Tech & Design Team Lead",
      when: "Sep 2025 → Sep 2026", tools: ["CAD", "Ergonomics", "User testing"],
      stat: ["CP", "inclusive design"],
      points: [
        "I led the design team building adaptive spoons, plates, and daily-use tools for people with cerebral palsy, with a focus on usability and ergonomics.",
        "Every prototype went through rounds of feedback with engineers, designers, and healthcare stakeholders, and the best changes always came from what users actually told us."
      ],
      fig: "spoon", link: ""
    },
    {
      code: "005", short: "AMYNA", title: "Amyna",
      team: "MHacks 2026 · 1st place, Relay Track", role: "Phone agent developer",
      when: "Fall 2026", tools: ["AI agents", "Voice calling", "Rapid prototyping"],
      stat: ["1st", "place"],
      points: [
        "Amyna is an AI agent that calls insurance companies and disputes denied medical claims on behalf of patients.",
        "I built the part that places and handles the phone calls. It was my first hackathon, and winning the Relay Track with this team was a highlight of my year."
      ],
      fig: "phone", link: ""
    },
    {
      code: "006", short: "JUKEBOX", title: "Earth Jukebox",
      team: "NASA Space Apps 2026 · Earth Information Jukebox", role: "Concept, sound & UX",
      when: "Fall 2026", tools: ["Spatial audio", "Accessibility", "UI/UX"],
      stat: ["♪", "sonified data"],
      points: [
        "An accessible spatial-audio map of NASA Earth data, so you can hear what's happening on the planet instead of only reading charts.",
        "It includes a guess-the-sound game and a voice guide, and was designed accessibility first."
      ],
      fig: "sound", link: ""
    },
    {
      code: "007", short: "ATLAS", title: "Atlas Planner",
      team: "Personal project", role: "Solo builder",
      when: "Fall 2026", tools: ["Claude connector", "Render", "Neon Postgres"],
      stat: ["18", "credits planned"],
      points: [
        "A hosted connector for UMich's Atlas course data that plans my schedule from the classes I've taken, my goals, instructor ratings, time of day, and total workload.",
        "I log in once with UMich and can plan registration from any chat."
      ],
      fig: "grid", link: "https://github.com/elenajojic/atlas-planner"
    }
  ],

  /* ---------- LEADERSHIP ---------- */
  leadership: [
    { title: "Founder & Lab Manager", org: "MeshBOT, BIRDS Lab", when: "2026",
      text: "Started the MeshBOT project and grew it to an 8 person team. As lab manager I answer questions, keep lab chores on track, and handle the laser cutter.",
      tags: ["Team building", "Lab operations"] },
    { title: "Tech & Design Team Lead", org: "M-Heal, CEPEA", when: "2025 → 2026",
      text: "Led the design team creating adaptive tools for people with cerebral palsy, coordinating between engineers, designers, and healthcare partners.",
      tags: ["Inclusive design", "Stakeholders"] },
    { title: "Exam Writing Lead", org: "UMSO", when: "2026",
      text: "Run a group of exam writers for UMSO and Regionals tests, with checkpoint meetings and written feedback on every exam.",
      tags: ["Mentoring", "Science Olympiad"] },
    { title: "Captain", org: "Science Olympiad, International Academy", when: "2023 → 2025",
      text: "Captained one of the largest teams, led recruitment and training, and wrote practice tests. We placed 3rd at States in 2024.",
      tags: ["Recruiting", "Training"] }
  ],

  /* ---------- EXPERIENCE (filterable log) ---------- */
  // tags: eng, research, health
  experience: [
    { when: "Sep 2026 → now", title: "Hardware Engineer", org: "CLAWS, NASA Micro-g NExT & SUITS", tags: ["eng"],
      note: "Lunar mast stand design, analysis and NBL safety test plan." },
    { when: "Jan 2026 → Sep 2026", title: "Lab Manager & Lead Mechanical Engineer", org: "MeshBOT, BIRDS Lab, University of Michigan", tags: ["eng", "research"],
      note: "Wire-bending robot and multilegged robots." },
    { when: "Sep 2025 → Sep 2026", title: "Tech & Design Team Lead", org: "M-Heal, CEPEA", tags: ["eng", "health"],
      note: "Adaptive tools for people with cerebral palsy." },
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

  skills: {
    "Design & CAD": ["Onshape", "Autodesk Inventor", "3D modeling", "FEA", "Laser cutting", "Rapid prototyping"],
    "Build & code": ["C++", "Circuits & electronics", "AI agents", "Test planning"],
    "People": ["Team leadership", "Public speaking", "Graphic design", "Clinical exposure"]
  },

  /* ---------- OUTSIDE ENGINEERING ---------- */
  // add img: "assets/yourphoto.jpg" to show a real photo
  hobbies: [
    { label: "DJing", note: "", img: "" },
    { label: "Piano & clarinet", note: "", img: "" },
    { label: "Basketball", note: "", img: "" }
  ]
};
