// About section data for Team ZENITH RUET
// This file exports a JSON-like object for use in the about page

export const aboutData = {
  teamName: "Team ZENITH RUET",
  tagline: "We build the future.",
  description:
    "Team Zenith RUET is a student-led engineering team dedicated to advancing robotics and space exploration through innovation, research, and practical application. Formed in 2023 by a group of talented and passionate engineering students from RUET, Team Zenith is dedicated to designing and developing advanced robotic systems and competing in prestigious engineering contests worldwide.",
  
  // Timeline/History
  founded: "2023",
  roverReveal: "2024",
  
  // Vision and Mission
  vision: "To become a leading robotics and space exploration team in Bangladesh, inspiring the next generation of engineers and innovators while representing RUET on international platforms.",
  mission: "To push the boundaries of engineering excellence through innovative robotics solutions, fostering interdisciplinary collaboration, and competing at the highest levels of international robotics competitions.",

  // Team Sub-divisions
  teams: {
    design: {
      name: "Design Team",
      description: "Responsible for CAD modeling, 3D design, and visual prototyping of all robotic systems. The team uses advanced software like SolidWorks and Fusion 360 to create detailed designs before manufacturing.",
      icon: "🎨",
      highlights: ["CAD Modeling", "3D Printing", "Prototyping", "Visual Design"]
    },
    electrical: {
      name: "Electrical Team",
      description: "Handles all electrical systems including power distribution, circuit design, sensor integration, and PCB development. They ensure reliable power delivery and signal processing for all robotic systems.",
      icon: "⚡",
      highlights: ["Circuit Design", "PCB Development", "Sensor Integration", "Power Systems"]
    },
    mechanical: {
      name: "Mechanical Team",
      description: "Focuses on the physical construction, chassis design, and mechanical systems of our robots. They handle material selection, manufacturing, and assembly of all mechanical components.",
      icon: "⚙️",
      highlights: ["Chassis Design", "Manufacturing", "Assembly", "Material Selection"]
    },
    control: {
      name: "Control Team",
      description: "Develops the software and control systems that bring our robots to life. From autonomous navigation to remote control interfaces, they handle all programming and control algorithms.",
      icon: "🎮",
      highlights: ["Embedded Systems", "Autonomous Navigation", "Control Algorithms", "Software Development"]
    },
    science: {
      name: "Science Team",
      description: "Conducts research and develops scientific instruments for specialized tasks. They handle soil analysis, life detection systems, and scientific documentation.",
      icon: "🔬",
      highlights: ["Research", "Instrumentation", "Data Analysis", "Scientific Documentation"]
    }
  },

  // Rover Capabilities
  rover: {
    name: "ZENITH Rover",
    description: "Our flagship Mars Rover is designed to compete in the International Rover Design Challenge (IRDC) and similar competitions. It features advanced mobility systems, scientific instruments, and autonomous capabilities.",
    features: [
      {
        name: "Mobility System",
        description: "6-wheel rocker-bogie suspension system capable of traversing rough terrain, climbing obstacles, and navigating slopes up to 30 degrees."
      },
      {
        name: "Robotic Arm",
        description: "5-DOF manipulator arm with gripper for sample collection, equipment manipulation, and precision tasks."
      },
      {
        name: "Science Payload",
        description: "Integrated soil analysis system, cameras for geological survey, and sensors for environmental monitoring."
      },
      {
        name: "Communication",
        description: "Long-range radio communication with real-time video feed and telemetry data transmission."
      },
      {
        name: "Autonomous Navigation",
        description: "GPS-based waypoint navigation with obstacle detection and avoidance capabilities using LiDAR and computer vision."
      }
    ]
  },

  // Drone Capabilities  
  drone: {
    name: "ZENITH Drone",
    description: "Our aerial reconnaissance platform designed for mapping, surveillance, and support operations during rover missions.",
    features: [
      "High-resolution camera for aerial mapping",
      "GPS-guided autonomous flight",
      "Real-time video transmission",
      "Extended flight time battery system"
    ]
  },

  history: [
    {
      text:
        "Team Zenith develops a variety of innovative projects, including advanced line-following robots, soccer bots, and automated railway line-changing systems. The team has actively participated in several prestigious competitions, showcasing these robots and earning acknowledgment for their technical expertise and creativity. Most notably, Team Zenith competed in the IRDC Mars Rover Competition 2024, where its rover design and performance received significant recognition. Through these initiatives, Team Zenith has not only strengthened its technical capabilities in robotics, automation, and system design but also fostered interdisciplinary collaboration, problem-solving, and leadership skills. Representing RUET's culture of innovation and excellence, the team continues to push the boundaries of engineering and technology, inspiring future generations and showcasing Bangladesh's talent on international platforms.",
    },
  ],
  
  images: [
    {
      src: "/gallery/grinding.jpg",
      alt: "Building the chassis",
      caption: "Building the chassis",
    },
    {
      src: "/gallery/members-24-25.jpg",
      alt: "Team Zenith, Full Team",
      caption: "Team Members 2024-25",
    },
    {
      src: "/gallery/rover-rendered.png",
      alt: "ZENITH Rover Rendered",
      caption: "ZENITH Rover Design",
    },
  ],
  
  logos: {
    dark: "/zenith-white.png",
    light: "/zenith-black.png",
  },

  // Milestones
  milestones: [
    { year: "2023", event: "Team ZENITH founded at RUET", icon: "🚀" },
    { year: "2023", event: "First Line Follower Robot competition", icon: "🤖" },
    { year: "2024", event: "Soccer Bot competitions participation", icon: "⚽" },
    { year: "2024", event: "IRDC Mars Rover Competition", icon: "🔴" },
    { year: "2024", event: "First Rover prototype revealed", icon: "🎉" },
    { year: "2025", event: "Expanded team with new sub-teams", icon: "👥" },
  ]
};
