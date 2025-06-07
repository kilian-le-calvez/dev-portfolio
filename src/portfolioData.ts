import { TimelineData } from "./components/Timeline";

const portfolioData: TimelineData[] = [
  {
    id: "2024",
    year: "2024",
    title: "XR Innovation Lead",
    subtitle: "Leading next-generation immersive experiences",
    status: "current",
    content: [
      {
        id: "text-1",
        type: "text",
        data: {
          title: "Current Focus",
          content:
            "Pioneering the future of extended reality through cutting-edge development and innovative user experiences. Leading cross-functional teams to deliver immersive solutions that push the boundaries of what's possible.",
          highlight: true,
        },
      },
      {
        id: "project-1",
        type: "project",
        data: {
          title: "Neural Interface VR Platform",
          description:
            "Revolutionary VR platform that interprets neural signals for intuitive interaction. Built with Unity, custom hardware integration, and advanced machine learning algorithms.",
          technologies: [
            "Unity",
            "C#",
            "OpenXR",
            "Machine Learning",
            "Neural Networks",
          ],
          status: "in-progress",
          highlights: [
            "95% accuracy in gesture recognition",
            "Sub-10ms latency for real-time interaction",
            "Cross-platform compatibility with major VR headsets",
          ],
        },
      },
      {
        id: "skills-1",
        type: "skills",
        data: {
          title: "Current Tech Stack",
          skills: [
            { name: "Unity", level: 95, category: "XR Development" },
            { name: "Unreal Engine", level: 85, category: "XR Development" },
            { name: "WebXR", level: 90, category: "Web Technologies" },
            { name: "Three.js", level: 88, category: "Web Technologies" },
            { name: "React", level: 92, category: "Frontend" },
            { name: "Node.js", level: 80, category: "Backend" },
          ],
        },
      },
    ],
  },
  {
    id: "2023",
    year: "2023",
    title: "Senior VR Developer",
    subtitle: "Architecting immersive experiences at scale",
    status: "completed",
    content: [
      {
        id: "text-2",
        type: "text",
        data: {
          content:
            "Spearheaded the development of enterprise VR training platforms, reducing training costs by 60% while improving retention rates by 85%. Led a team of 8 developers across multiple time zones.",
        },
      },
      {
        id: "project-2",
        type: "project",
        data: {
          title: "Enterprise Training Simulator",
          description:
            "Comprehensive VR training platform for industrial safety procedures. Features realistic physics simulation, multiplayer collaboration, and detailed analytics dashboard.",
          technologies: ["Unity", "Photon", "C#", "Azure", "Analytics"],
          status: "completed",
          highlights: [
            "Deployed to 50+ locations worldwide",
            "10,000+ users trained successfully",
            "Award-winning safety training solution",
          ],
        },
      },
      {
        id: "links-1",
        type: "links",
        data: {
          title: "Project Resources",
          links: [
            {
              title: "Demo Video",
              url: "#",
              description: "See the platform in action",
              type: "demo",
            },
            {
              title: "Technical Documentation",
              url: "#",
              description: "Complete technical overview",
              type: "external",
            },
          ],
        },
      },
    ],
  },
  {
    id: "2022",
    year: "2022",
    title: "AR/VR Developer",
    subtitle: "Building the foundation of immersive technology",
    status: "completed",
    content: [
      {
        id: "text-3",
        type: "text",
        data: {
          content:
            "Transitioned from traditional web development to immersive technologies. Completed intensive VR development bootcamp and immediately began contributing to cutting-edge AR applications.",
        },
      },
      {
        id: "project-3",
        type: "project",
        data: {
          title: "AR Shopping Experience",
          description:
            "Mobile AR application allowing customers to visualize products in their space before purchase. Integrated with e-commerce platforms and real-time inventory systems.",
          technologies: ["ARCore", "ARKit", "Unity", "Firebase", "REST APIs"],
          status: "completed",
          highlights: [
            "300% increase in customer engagement",
            "45% reduction in product returns",
            "Featured in Google Play Store",
          ],
        },
      },
      {
        id: "skills-2",
        type: "skills",
        data: {
          title: "Developed Skills",
          skills: [
            { name: "ARCore", level: 85, category: "AR Development" },
            { name: "ARKit", level: 80, category: "AR Development" },
            { name: "Unity", level: 75, category: "Game Engines" },
            { name: "C#", level: 70, category: "Programming" },
            { name: "3D Modeling", level: 60, category: "Design" },
            { name: "Blender", level: 65, category: "Design" },
          ],
        },
      },
    ],
  },
  {
    id: "2021",
    year: "2021",
    title: "Full-Stack Developer",
    subtitle: "Mastering modern web technologies",
    status: "completed",
    content: [
      {
        id: "text-4",
        type: "text",
        data: {
          content:
            "Specialized in building scalable web applications with modern frameworks. Gained expertise in cloud architecture, microservices, and performance optimization.",
        },
      },
      {
        id: "project-4",
        type: "project",
        data: {
          title: "Real-time Collaboration Platform",
          description:
            "Multi-user web application with real-time collaboration features, video conferencing, and document sharing. Built to handle 10,000+ concurrent users.",
          technologies: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
          status: "completed",
          highlights: [
            "Zero-downtime deployment pipeline",
            "Sub-100ms real-time synchronization",
            "SOC 2 compliant security architecture",
          ],
        },
      },
    ],
  },
  {
    id: "2025",
    year: "2025",
    title: "Metaverse Architect",
    subtitle: "Designing the future of digital worlds",
    status: "future",
    content: [
      {
        id: "text-5",
        type: "text",
        data: {
          title: "Vision for the Future",
          content:
            "Working towards creating interconnected virtual worlds that seamlessly blend with physical reality. Focusing on ethical AI integration and sustainable virtual economies.",
          highlight: true,
        },
      },
      {
        id: "project-5",
        type: "project",
        data: {
          title: "Metaverse Protocol",
          description:
            "Open-source protocol for cross-platform metaverse experiences. Enabling seamless avatar and asset portability across virtual worlds.",
          technologies: [
            "Blockchain",
            "WebAssembly",
            "Rust",
            "AI/ML",
            "Quantum Computing",
          ],
          status: "planned",
          highlights: [
            "Interoperable virtual identity system",
            "Decentralized asset ownership",
            "Carbon-neutral virtual infrastructure",
          ],
        },
      },
    ],
  },
];

export default portfolioData;
