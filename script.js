const webhook = 'https://dxftuiy8upojl.app.n8n.cloud/webhook/bc6ce065-4842-4499-8f05-068067d876cc';

// For Page Views (Run this on window load)
window.addEventListener('load', () => {
  fetch(webhook, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      event_type: "Page View",
      severity: "Low",
      details: "Someone is looking at your site!"
    })
  }).catch(e => console.error("n8n View log error:", e));
});

// For Errors (Add this to your error handler)
window.onerror = function (message) {
  fetch(webhook, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      event_type: "Site Error",
      severity: "Critical",
      details: "The database connection failed."
    })
  }).catch(e => console.error("n8n Error log error:", e));
};

// Small Live Console Error Demonstration to automatically trigger window.onerror verification
setTimeout(() => {
    triggerNonExistentFunction();
}, 2000);

// DOM Elements
const experienceGrid = document.querySelector(".experience-grid")
const projectsGrid = document.getElementById("projects-grid")
const educationGrid = document.querySelector(".education-grid")
const hackathonsGrid = document.querySelector(".hackathons-grid")
const skillsGrid = document.getElementById("skills-grid")
const additionalInfo = document.querySelector(".additional-info")
const projectModal = document.getElementById("project-modal")
const closeModalBtn = document.getElementById("close-modal")
const modalBody = document.getElementById("modal-body")
const currentYearSpan = document.getElementById("current-year")

// Set current year in footer
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear()
}

// Experience Data
const experience = [
  {
    id: 1,
    company: "ASPLTech Solutions Pvt Ltd",
    role: "Software Developer",
    period: "Oct 2025 – Present",
    description: "At ASPLTech Solutions Pvt Ltd, I <strong>lead end-to-end full-stack delivery</strong> for client-facing products and internal platforms, with <strong>ownership of architecture, execution, deployment, and production stability</strong>.",
    points: [
      "Delivered <strong>8+ production web applications</strong> using React.js, Node.js, Express.js, and PostgreSQL, consistently <strong>meeting release timelines</strong> and launching on live infrastructure.",
      "Engineered a full-stack <strong>HRMS</strong> with React and Python Flask, replacing manual paper workflows with digital onboarding, attendance, and leave operations across 4 departments.",
      "Implemented secure <strong>RBAC</strong> with PyJWT and bcrypt across 4 role-specific portals (Admin, HR, Manager, Employee), enforcing <strong>strict per-role data ownership boundaries</strong>.",
      "Designed and shipped <strong>RESTful APIs</strong> using SQLAlchemy ORM on PostgreSQL, enabling complex multi-table workflows and analytics-ready integrations.",
      "Architected a scalable <strong>Next.js 14 monorepo</strong> with NPM Workspaces, <strong>driving system design decisions</strong> across frontend, admin, and backend apps with Prisma ORM and NextAuth.js.",
      "Deployed and maintained <strong>3+ client websites</strong> on Linux VPS using Nginx reverse proxy and SSL/TLS, with <strong>ownership of reusable deployment templates</strong> adopted across subsequent projects.",
    ],
    location: "Bengaluru, India",
    promotion: "Promoted intern → full-time in 3 months",
    metrics: [
      { value: 10, suffix: "+", label: "Projects delivered during tenure" },
      { value: 84.9, suffix: "%", label: "F1-Score on legal AI benchmark", decimals: 1 },
      { value: 8, suffix: "+", label: "Client sites live on Linux VPS" },
      { value: 3, suffix: " mo", label: "From intern to full-time" },
    ],
    projects: [
      {
        name: "Suraksha Hospital Website",
        description: "A comprehensive healthcare website enabling patient appointments, doctor schedules, and service showcasing.",
        link: "https://surakshahosp.com/",
        image: "assets/suraksha.png"
      },
      {
        name: "BlueMind Surf School",
        description: "A dynamic booking and information platform for a surf school, featuring course schedules and instructor profiles.",
        link: "https://bluemindsurfschool.com/",
        image: "assets/surfschool.png"
      },
      {
        name: "Research Visions",
        description: "A technology website for Research Vision Tech Services showcasing modular AV products, visual systems, and implementation services. Structured to highlight enterprise use cases, industry verticals, and end-to-end project delivery capabilities.",
        link: "https://researchvisions.com/",
        image: "assets/researchvisions.png"
      },
      {
        name: "Office Scrap Dismantling Service",
        description: "A service-oriented website for scrapping / dismantling services, including service booking and cost estimation tools.",
        link: "#",
        image: "assets/Akenterprise (1).png"
      },
      {
        name: "Avant Enterprise",
        description: "A business-focused company website presenting Avant Enterprise services across web, app development, UI/UX, and digital marketing. Also emphasizes training, manpower support, and client-first engagement through a clear multi-section service architecture.",
        link: "https://avantenterprise.in/",
        image: "assets/avantenterprise.png"
      },
      {
        name: "Angel's Empyrean Kindergarten",
        description: "A vibrant kindergarten website showcasing admissions, programs, and parent-focused highlights. Built with clear navigation and responsive layouts for a smooth browsing experience across devices.",
        link: "https://angels-empyrean.netlify.app/",
        image: "assets/angel'sempyrean.png"
      }
    ],
    icon: "💼",
  },
]

// Data - Updated with the exact project descriptions provided
const projects = [
  {
    id: 1,
    title: "Face Recognition-based Employee Attendance System",
    description:
      "Built an IoT-based system using Raspberry Pi and Firebase to automate employee attendance. Used face recognition for identity verification, stored 128-dimensional encodings in Firestore, and implemented edge-cloud architecture for real-time, accurate, and server-independent attendance tracking.",
    technologies: ["Raspberry Pi", "Picamera2", "Firebase Firestore", "Python", "Face Recognition", "OpenCV"],
    icon: "🔍",
    color: { from: "#06B6D4", to: "#3B82F6", tag: "#0e7490" },
    githubLink: "http://github.com/Ruthvikrr/Raspberry_Attendance_System",
  },
  {
    id: 2,
    title: "JARVIS 2nd - Voice AI Assistant",
    description:
      "Built a full-stack voice assistant with a FastAPI WebSocket backend, Claude-powered tool calling, and streaming edge-TTS output. The system handles live text and audio flows, supports tools like opening Windows apps and saving notes, and pairs with a React + Three.js visualizer for a realtime assistant experience.",
    technologies: ["FastAPI", "WebSockets", "Claude API", "edge-tts", "React", "Three.js", "Vite", "Tailwind"],
    icon: "🤖",
    color: { from: "#8B5CF6", to: "#06B6D4", tag: "#6d28d9" },
    githubLink: "https://github.com/Ruthvikrr/jarvis2nd",
  },
  {
    id: 3,
    title: "Personal Portfolio Website — Hosted on AWS S3",
    description:
      "A fully responsive personal portfolio website showcasing my skills, projects, and professional background. Designed using modern frontend technologies and securely hosted on AWS S3 with static website hosting enabled.",
    technologies: ["HTML", "CSS", "JavaScript", "AWS S3"],
    icon: "🧑‍💻",
    color: { from: "#10B981", to: "#06B6D4", tag: "#065f46" },
  },
  {
    id: 4,
    title: "Full-Stack HRMS — Production App",
    description:
      "A client across 4 departments ran everything on paper. I built a complete HRMS from scratch using React and Python Flask, with RBAC across 4 role-isolated portals, SQLAlchemy ORM for complex multi-table queries, and real-time analytics dashboards. It is live in production and replaced manual processes entirely.",
    technologies: ["React.js", "Python Flask", "PostgreSQL", "SQLAlchemy", "PyJWT", "Private client project"],
    icon: "🔒",
    color: { from: "#EF4444", to: "#F97316", tag: "#b91c1c" },
  },
]

const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Application",
    institution: "Community Institute of Commerce and Management",
    period: "2022-2025",
    CGPA: 8.3,
    icon: "🎓",
  },
  {
    id: 2,
    degree: "PRE-UNIVERSITY - Computer Science",
    institution: "MotherTheresa Eci School",
    period: "2020-2022",
    CGPA: 6.2,
    icon: "📚",
  },
]

const hackathons = [
  {
    id: 1,
    name: "SBI Hackathon 2024",
    project: "FraudShield",
    description:
      "Developed an AI-powered fraud detection system integrating a web extension, OCR, and cyber-AI for real-time anomaly detection in insurance transactions.",
    icon: "🛡️",
  },
  {
    id: 2,
    name: "NMIT hacks 2025",
    project: "Smart Ambulance System",
    description:
      "Built an IoT-based Smart Ambulance system that detects and syncs with Green traffic signals to enable faster emergency response and reduce delays.",
    icon: "🚑",
  },
  {
    id: 3,
    name: "Emerging Tech Hackathon",
    project: "Image Recognition System",
    description:
      "Designed an image recognition system integrated with a Telegram bot to automatically detect and classify objects/images in real-time using computer vision techniques.",
    icon: "📷",
  },
  {
    id: 4,
    name: "Pentathon 2025",
    project: "Web Security Challenge",
    description:
      "Tackled web-based challenges like bypassing restricted access using tools such as Wireshark and network traffic analysis.",
    icon: "🔒",
  },
]

const skills = [
  // PROGRAMMING LANGUAGES
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Programming languages" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Programming languages" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Programming languages" },
  { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Programming languages" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Programming languages", invert: true },
  { name: "NextAuth.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Programming languages", invert: true },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming languages" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Programming languages" },

  // DATABASES & CLOUD
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Databases & Cloud" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases & Cloud" },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Databases & Cloud" },
  { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "Databases & Cloud" },
  { name: "AWS Cloud", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", category: "Databases & Cloud" },

  // DEVOPS & TOOLING
  { name: "Linux VPS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "DevOps & Tooling" },
  { name: "Nginx", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", category: "DevOps & Tooling" },
  { name: "Docker", image: "assets/Technical skills/docker.png", category: "DevOps & Tooling" },
  { name: "SSL/TLS", image: null, category: "DevOps & Tooling" },
  { name: "Git / GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "DevOps & Tooling", invert: true },
  { name: "Netlify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", category: "DevOps & Tooling" },
  { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "DevOps & Tooling", invert: true },
  { name: "NPM Workspaces", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", category: "DevOps & Tooling", invert: true },
  { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "DevOps & Tooling" },
  { name: "Jira / Agile", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", category: "DevOps & Tooling" },

  // CURRENTLY EXPLORING
  { name: "LLMs", image: "assets/Technical skills/llms.png", category: "Currently Exploring" },
  { name: "LangChain", image: "assets/Technical skills/langchain.png", category: "Currently Exploring" },
  { name: "Vector DB", image: null, category: "Currently Exploring" },
  { name: "LLM Fine-tuning", image: null, category: "Currently Exploring" },
  { name: "RAG Architectures", image: null, category: "Currently Exploring" },
  { name: "LangGraph", image: null, category: "Currently Exploring" },
  { name: "Vector Databases", image: null, category: "Currently Exploring" },
  { name: "Prompt Engineering", image: null, category: "Currently Exploring" },
  { name: "n8n", image: "https://cdn.simpleicons.org/n8n/EA4B71", category: "Currently Exploring" },
  { name: "Make AI", image: null, category: "Currently Exploring" },
]

const additionalInfoData = [
  { id: 1, title: "Languages", items: ["English", "Kannada", "Hindi", "Tamil", "Telugu"] },
  { id: 2, title: "Certifications", items: ["Utl technologies", "Certification: Next Gen - AI and ML"] },
  { id: 3, title: "Awards", items: ["Winner in IT Quiz", "IT Manager", "Photography"] },
  { id: 4, title: "Cloud Badges", items: ["Cloud Computing", "Generative AI"] },
]

// Copy Email Function
function copyEmailToClipboard() {
  const email = "ruthvikarh@gmail.com"

  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showCopySuccess(this)
      })
      .catch(() => {
        // Fallback to older method
        fallbackCopyTextToClipboard(email, this)
      })
  } else {
    // Fallback for older browsers
    fallbackCopyTextToClipboard(email, this)
  }
}

function fallbackCopyTextToClipboard(text, button) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.position = "fixed"
  textArea.style.left = "-999999px"
  textArea.style.top = "-999999px"
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand("copy")
    showCopySuccess(button)
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err)
  }

  document.body.removeChild(textArea)
}

function showCopySuccess(button) {
  const originalHTML = button.innerHTML
  button.innerHTML = '<i class="fas fa-check"></i> Gmail copied'
  button.style.background = "linear-gradient(to right, #10b981, #059669)"

  setTimeout(() => {
    button.innerHTML = originalHTML
    button.style.background = ""
  }, 2000)
}

// Initialize Three.js Background
function initThreeJsBackground() {
  if (typeof THREE === "undefined") return

  const container = document.getElementById("canvas-container")
  if (!container) return

  // Create scene
  const scene = new THREE.Scene()

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // Create particles for starry background
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 2000
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

  // Create particle material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x8a2be2,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  })

  // Create particle mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(10, 10, 5)
  scene.add(directionalLight)

  // Add purple point light
  const pointLight = new THREE.PointLight(0x8a2be2, 1, 100)
  pointLight.position.set(-5, 5, 5)
  scene.add(pointLight)

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // Animation loop
  function animate() {
    requestAnimationFrame(animate)

    // Animate particles
    particlesMesh.rotation.x += 0.0005
    particlesMesh.rotation.y += 0.0005

    // Pulse the point light
    const time = Date.now() * 0.001
    pointLight.intensity = 1 + 0.5 * Math.sin(time * 2)

    renderer.render(scene, camera)
  }

  animate()
}

// Initialize 3D backgrounds for each section
function initSectionBackgrounds() {
  // Experience section background
  const experienceBg = document.getElementById("experience-bg")
  if (experienceBg) createSectionBackground(experienceBg, 0x3b82f6, 0.1)

  // Projects section background
  const projectsBg = document.getElementById("projects-bg")
  createSectionBackground(projectsBg, 0x8a2be2, 0.1)

  // Education section background
  const educationBg = document.getElementById("education-bg")
  createSectionBackground(educationBg, 0x3b82f6, 0.1)

  // Hackathons section background
  const hackathonsBg = document.getElementById("hackathons-bg")
  createSectionBackground(hackathonsBg, 0x8a2be2, 0.1)

  // Skills section background
  const skillsBg = document.getElementById("skills-bg")
  createSectionBackground(skillsBg, 0x3b82f6, 0.1)

  // Contact section background
  const contactBg = document.getElementById("contact-bg")
  createSectionBackground(contactBg, 0x8a2be2, 0.1)

  // Create 3D scene for contact section
  createContactScene()
}

// Create 3D background for sections
function createSectionBackground(container, color, opacity) {
  // Create scene
  const scene = new THREE.Scene()

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 500
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

  // Create particle material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.03,
    color: color,
    transparent: true,
    opacity: opacity,
    blending: THREE.AdditiveBlending,
  })

  // Create particle mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Handle window resize
  window.addEventListener("resize", () => {
    renderer.setSize(container.clientWidth, container.clientHeight)
  })

  // Animation loop
  function animate() {
    requestAnimationFrame(animate)

    particlesMesh.rotation.x += 0.0002
    particlesMesh.rotation.y += 0.0002

    renderer.render(scene, camera)
  }

  animate()
}

// Create 3D scene for contact section
function createContactScene() {
  const container = document.getElementById("contact-3d-scene")
  if (!container) {
    console.error("Contact 3D scene container not found")
    return
  }

  // Create scene
  const scene = new THREE.Scene()

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
  camera.position.z = 5

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  // Create torus geometry
  const torusGeometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)

  // Create material
  const material = new THREE.MeshStandardMaterial({
    color: 0x8a2be2,
    roughness: 0.3,
    metalness: 0.7,
    emissive: 0x4d4dff,
    emissiveIntensity: 0.2,
  })

  // Create mesh
  const torus = new THREE.Mesh(torusGeometry, material)
  scene.add(torus)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0x8a2be2, 1, 100)
  pointLight.position.set(5, 5, 5)
  scene.add(pointLight)

  // Handle window resize
  window.addEventListener("resize", () => {
    if (container.clientWidth > 0 && container.clientHeight > 0) {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  })

  // Animation loop
  function animate() {
    requestAnimationFrame(animate)

    torus.rotation.x += 0.01
    torus.rotation.y += 0.005

    const time = Date.now() * 0.001
    pointLight.intensity = 1 + 0.5 * Math.sin(time * 2)

    renderer.render(scene, camera)
  }

  animate()

  console.log("Contact 3D scene initialized")
}

// Render Experience Cards
function renderExperience() {
  if (!experienceGrid) return

  experienceGrid.innerHTML = ""

  experience.forEach((exp) => {
    // 1. Company Info Card
    const expInfoCard = document.createElement("div")
    expInfoCard.className = "experience-card experience-info-only"
    expInfoCard.innerHTML = `
      <div class="experience-card-top">
        <div class="experience-header-content">
          <div class="experience-icon">${exp.icon}</div>
          <div class="experience-details">
            <h3 class="experience-company">${exp.company}</h3>
            <p class="experience-promo-note">${exp.promotion}</p>
          </div>
        </div>
        <div class="experience-meta">
          <span class="experience-role-top">${exp.role}</span>
          <span class="experience-meta-line">${exp.period} · ${exp.location}</span>
        </div>
      </div>
      <p class="experience-description">${exp.description}</p>
      <div class="experience-points-grid">
        ${(exp.points || []).map((point) => `
          <div class="experience-point-item">
            <span class="experience-point-dot" aria-hidden="true"></span>
            <p class="experience-point-text">${point}</p>
          </div>
        `).join("")}
      </div>
    `
    experienceGrid.appendChild(expInfoCard)

    // 2. Projects Grid (Separate Container) — skip if no projects
    if (!exp.projects || exp.projects.length === 0) return
    const projectsContainer = document.createElement("div")
    projectsContainer.className = "experience-projects-full-width"
    projectsContainer.innerHTML = `<h4 class="experience-projects-title">Projects Delivered During Tenure</h4>`

    const projectsGridDiv = document.createElement("div")
    projectsGridDiv.className = "experience-projects-grid"

    const marqueeDiv = document.createElement("div")
    marqueeDiv.className = "experience-project-marquee"

    // Render projects twice for seamless loop
    const projectsHTML = exp.projects.map(project => `
        <div class="experience-project-card">
          <div class="experience-project-image">
             <img src="${project.image}" alt="${project.name}" />
          </div>
          <div class="experience-project-content">
            <h5 class="experience-project-title">${project.name}</h5>
            <p class="experience-project-desc">${project.description}</p>
            <a href="${project.link}" class="experience-project-link-card" target="_blank">
              <i class="fas fa-external-link-alt"></i> Visit Live
            </a>
          </div>
        </div>
    `).join("")

    marqueeDiv.innerHTML = projectsHTML + projectsHTML // Duplicate for looping
    projectsGridDiv.appendChild(marqueeDiv)

    projectsContainer.appendChild(projectsGridDiv)
    experienceGrid.appendChild(projectsContainer)

  })
}

// Render Project Cards — Animated color-coded cards with scroll effects
function renderProjects() {
  if (!projectsGrid) return

  projectsGrid.innerHTML = ""
  projectsGrid.className = "projects-grid"

  projects.forEach((project, index) => {
    const num = String(index + 1).padStart(2, "0")
    const { from, to } = project.color

    const card = document.createElement("div")
    card.className = "project-card"
    card.dataset.id = project.id
    card.style.setProperty("--ac-from", from)
    card.style.setProperty("--ac-to", to)

    card.innerHTML =
      '<div class="pc-mouse-glow"></div>' +
      '<div class="pc-accent-bar"></div>' +
      '<div class="pc-body">' +
      '<div class="pc-header">' +
      '<span class="pc-num">' + num + '</span>' +
      '<span class="pc-icon">' + project.icon + '</span>' +
      '</div>' +
      '<h3 class="pc-title">' + project.title + '</h3>' +
      '<p class="pc-desc">' + project.description + '</p>' +
      '<div class="pc-footer">' +
      '<div class="pc-tags">' +
      project.technologies.map(t => '<span class="pc-tag">' + t + '</span>').join("") +
      '</div>' +
      '<div class="pc-links-divider"></div>' +
      '<div class="pc-links">' +
      (project.githubLink
        ? '<a class="pc-link-btn" href="' + project.githubLink + '" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i><span>GitHub Project</span></a>'
        : '<span class="pc-link-note">No public repository</span>') +
      '</div>' +
      '</div>' +
      '</div>'

    const glow = card.querySelector(".pc-mouse-glow")
    card.addEventListener("mousemove", function (e) {
      const r = card.getBoundingClientRect()
      glow.style.background =
        "radial-gradient(500px circle at " + (e.clientX - r.left) + "px " + (e.clientY - r.top) + "px, " + from + "30, transparent 65%)"
    })
    card.addEventListener("mouseleave", function () { glow.style.background = "transparent" })

    projectsGrid.appendChild(card)
  })

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)

    // Keep cards visible by animating position only (no opacity-based hiding).
    gsap.from(".project-card", {
      scrollTrigger: { trigger: "#projects", start: "top 88%", once: true },
      y: 50, scale: 0.97,
      duration: 0.75, stagger: 0.15, ease: "power3.out",
      clearProps: "all"
    })

    // Accent bars sweep in
    gsap.from(".pc-accent-bar", {
      scrollTrigger: { trigger: "#projects", start: "top 85%", once: true },
      scaleX: 0, transformOrigin: "left center",
      duration: 0.9, stagger: 0.15, delay: 0.2, ease: "expo.out",
      clearProps: "all"
    })

    // Numbers burst in
    gsap.from(".pc-num", {
      scrollTrigger: { trigger: "#projects", start: "top 86%", once: true },
      opacity: 0, scale: 1.8,
      duration: 0.6, stagger: 0.15, delay: 0.1, ease: "back.out(1.7)",
      clearProps: "all"
    })
  }
}

// Render Education Cards — Timeline layout
function renderEducation() {
  if (!educationGrid) return

  educationGrid.innerHTML = ""
  educationGrid.className = "education-timeline"

  education.forEach((edu, index) => {
    const cgpaPercent = (edu.CGPA / 10) * 100
    const isFirst = index === 0

    const item = document.createElement("div")
    item.className = "edu-timeline-item"

    item.innerHTML = `
      <div class="edu-timeline-left">
        <span class="edu-period-badge">${edu.period}</span>
      </div>

      <div class="edu-timeline-center">
        <div class="edu-dot ${isFirst ? "edu-dot--active" : ""}">
          <div class="edu-dot-inner"></div>
        </div>
        ${index < education.length - 1 ? '<div class="edu-line"></div>' : ""}
      </div>

      <div class="edu-timeline-right">
        <div class="edu-card">
          <div class="edu-card-top">
            <span class="edu-icon">${edu.icon}</span>
            <span class="edu-status-badge ${isFirst ? "badge--primary" : "badge--secondary"}">
              ${isFirst ? "Graduated" : "Completed"}
            </span>
          </div>
          <h3 class="edu-degree">${edu.degree}</h3>
          <p class="edu-institution">
            <i class="fas fa-map-marker-alt"></i> ${edu.institution}
          </p>
          <div class="edu-cgpa-row">
            <span class="edu-cgpa-label">CGPA</span>
            <div class="edu-cgpa-track">
              <div class="edu-cgpa-fill" style="width:${cgpaPercent}%"></div>
            </div>
            <span class="edu-cgpa-value">${edu.CGPA} <span class="edu-cgpa-max">/ 10</span></span>
          </div>
        </div>
      </div>
    `

    educationGrid.appendChild(item)
  })
}

// Render Hackathon Cards
function renderHackathons() {
  if (!hackathonsGrid) return

  hackathonsGrid.innerHTML = ""

  hackathons.forEach((hackathon) => {
    const hackathonCard = document.createElement("div")
    hackathonCard.className = "hackathon-card"

    hackathonCard.innerHTML = `
    <div class="hackathon-icon">${hackathon.icon}</div>
    <h3 class="hackathon-name">${hackathon.name}</h3>
    <p class="hackathon-project">${hackathon.project}</p>
    <p class="hackathon-description">${hackathon.description}</p>
  `

    hackathonsGrid.appendChild(hackathonCard)
  })
}

// Render Skill Cards
function renderSkills() {
  if (!skillsGrid) return

  const categoryConfig = {
    "Programming languages": { color: "#61DAFB" },
    "Databases & Cloud": { color: "#F6AD55" },
    "DevOps & Tooling": { color: "#10B981" },
    "Currently Exploring": { color: "#F97316" },
  }

  // Group skills by category (preserving order)
  const categoryMap = {}
  skills.forEach(skill => {
    const cat = skill.category || "Other"
    if (!categoryMap[cat]) categoryMap[cat] = []
    categoryMap[cat].push(skill)
  })

  const totalSkills = skills.length
  const totalCategories = Object.keys(categoryMap).length

  skillsGrid.innerHTML = ""
  skillsGrid.className = "skills-categories-container skills-layout"
  skillsGrid.innerHTML = `
    <aside class="skills-side-content">
      <div class="skills-side-intro">
        <h2 class="skills-side-headline">Real stack,<br/>not a badge wall.</h2>
        <p class="skills-side-tagline">Every item here is something I've used to ship something real. No padding.</p>
      </div>
      <div class="skills-side-stat-card">
        <div class="skills-side-stat-value" data-target="${totalSkills}" data-suffix="+">0+</div>
        <div class="skills-side-stat-label">Core tools in active stack</div>
      </div>
      <div class="skills-side-stat-card">
        <div class="skills-side-stat-value" data-target="${totalCategories}" data-suffix="">0</div>
        <div class="skills-side-stat-label">Skill categories</div>
      </div>
    </aside>
    <div class="skills-groups-wrap"></div>
  `

  const groupsWrap = skillsGrid.querySelector(".skills-groups-wrap")

  Object.entries(categoryMap).forEach(([catName, catSkills]) => {
    const cfg = categoryConfig[catName] || { color: "#8a2be2", icon: "fa-solid fa-code" }

    const catSection = document.createElement("div")
    catSection.className = "skills-category-section skills-category-pill-layout"

    catSection.innerHTML = `
      <div class="skills-category-header">
        <span class="skills-category-dot" style="background:${cfg.color};box-shadow:0 0 8px ${cfg.color}88"></span>
        <h3 class="skills-category-title" style="color:${cfg.color}">${catName}</h3>
        <div class="skills-category-line" style="background:linear-gradient(to right,${cfg.color}44,transparent)"></div>
      </div>
      <div class="skills-category-grid"></div>
    `

    const catGrid = catSection.querySelector(".skills-category-grid")

    catSkills.forEach((skill) => {
      const pill = document.createElement("div")
      pill.className = "skills-pill"
      pill.style.setProperty("--pill-accent", cfg.color)
      pill.textContent = skill.name
      catGrid.appendChild(pill)
    })

    groupsWrap.appendChild(catSection)
  })

  const statValues = skillsGrid.querySelectorAll(".skills-side-stat-value")
  const animateStat = (el) => {
    if (el.dataset.animated === "true") return
    el.dataset.animated = "true"

    const target = Number(el.dataset.target || 0)
    const suffix = el.dataset.suffix || ""
    const start = performance.now()
    const duration = 1100

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      el.textContent = `${current}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  if (typeof IntersectionObserver !== "undefined") {
    const statObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statValues.forEach(animateStat)
          obs.disconnect()
        }
      })
    }, { threshold: 0.35 })

    statObserver.observe(skillsGrid)
  } else {
    statValues.forEach(animateStat)
  }

  // GSAP Animations
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })

    gsap.from(".skills-main-title", { scrollTrigger: { trigger: "#skills", start: "top 75%" }, x: -80, opacity: 0, duration: 0.8, delay: 0.1, ease: "power2.out" })
    gsap.from(".skills-subtitle", { scrollTrigger: { trigger: "#skills", start: "top 72%" }, x: 80, opacity: 0, duration: 0.8, delay: 0.25, ease: "power2.out" })
    gsap.from(".skills-side-intro", {
      scrollTrigger: { trigger: ".skills-categories-container", start: "top 85%" },
      opacity: 0, x: -35, duration: 0.7, ease: "power2.out"
    })
    gsap.from(".skills-side-stat-card", {
      scrollTrigger: { trigger: ".skills-categories-container", start: "top 85%" },
      opacity: 0, x: -35, y: 20, duration: 0.7, stagger: 0.12, ease: "power2.out"
    })
    gsap.from(".skills-category-section", {
      scrollTrigger: { trigger: ".skills-categories-container", start: "top 85%" },
      opacity: 0, y: 40, duration: 0.7, stagger: 0.18, ease: "power2.out"
    })
    gsap.from(".skills-pill", {
      scrollTrigger: { trigger: ".skills-categories-container", start: "top 80%" },
      opacity: 0, y: 14, duration: 0.4, stagger: 0.05, ease: "power2.out"
    })
  }
}

// Render Additional Info
function renderAdditionalInfo() {
  if (!additionalInfo) return

  additionalInfo.innerHTML = ""

  additionalInfoData.forEach((info) => {
    const infoCard = document.createElement("div")
    infoCard.className = "info-card"

    infoCard.innerHTML = `
    <h3 class="info-title">${info.title}</h3>
    <ul class="info-list">
      ${info.items
        .map(
          (item) => `
        <li class="info-item">
          <span class="info-item-dot"></span>
          ${item}
        </li>
      `,
        )
        .join("")}
    </ul>
  `

    additionalInfo.appendChild(infoCard)
  })
}

// Open Project Modal
function openProjectModal(project) {
  if (!modalBody || !projectModal) return

  modalBody.innerHTML = `
  <div class="modal-icon">${project.icon}</div>
  <h2 class="modal-title">${project.title}</h2>
  
  <div class="modal-section">
    <p class="modal-description">${project.description}</p>
  </div>
  
  <div class="modal-section">
    <h3 class="modal-section-title">Technologies Used</h3>
    <div class="modal-tags">
      ${project.technologies
      .map(
        (tech) => `
        <span class="modal-tag">${tech}</span>
      `,
      )
      .join("")}
    </div>
  </div>
`

  projectModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close Project Modal
function closeProjectModal() {
  if (!projectModal) return

  projectModal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Copy Email
// function copyEmail() {
//   const email = "ruthvikarh@gmail.com"

//   // Create a temporary input element
//   const tempInput = document.createElement("input")
//   tempInput.value = email
//   document.body.appendChild(tempInput)

//   // Select the text
//   tempInput.select()
//   tempInput.setSelectionRange(0, 99999) // For mobile devices

//   // Copy the text
//   document.execCommand("copy")

//   // Remove the temporary element
//   document.body.removeChild(tempInput)

//   // Show feedback to user
//   this.innerHTML = "<i class='fas fa-check'></i> Gmail copied"

//   // Reset after 2 seconds
//   setTimeout(() => {
//     if (this.id === "copy-email") {
//       this.innerHTML = "Copy Gmail <i class='fas fa-envelope'></i>"
//     } else {
//       this.innerHTML = "<i class='fas fa-envelope'></i> Copy Email Address"
//     }
//   }, 2000)
// }

// Smooth Scrolling
function initSmoothScrolling() {
  const scrollButtons = document.querySelectorAll("[data-scroll]")

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-scroll")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Handle Contact Form Submission
const contactForm = document.querySelector(".contact-form")
function handleContactForm() {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console
    console.log("Form submitted:", { name, email, subject, message })

    // Reset form
    contactForm.reset()

    // Show success message (you can replace this with a proper UI notification)
    alert("Message sent successfully!")
  })
}

// Initialize Animations with GSAP
function initAnimations() {
  if (typeof gsap === "undefined") return
  gsap.config({ nullTargetWarn: false })

  // Hero section animations
  gsap.from(".subtitle", { opacity: 0, y: 20, duration: 0.5 })
  gsap.from(".title", { opacity: 0, y: 20, duration: 0.5, delay: 0.2 })
  gsap.from(".description", { opacity: 0, y: 20, duration: 0.5, delay: 0.4 })
  gsap.from(".hero-buttons", { opacity: 0, y: 20, duration: 0.5, delay: 0.6 })
  // gsap.from(".profile-container", { opacity: 0, scale: 0.8, duration: 0.8 })

  // Section animations with ScrollTrigger
  if (typeof ScrollTrigger === "undefined") return
  gsap.registerPlugin(ScrollTrigger)

  // Section headers
  gsap.utils.toArray(".section-header").forEach((header) => {
    gsap.from(header, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
  })

  // Experience cards
  gsap.utils.toArray(".experience-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  })

  // Project cards
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  })

  // Education cards
  gsap.utils.toArray(".education-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  })

  // Hackathon cards
  gsap.utils.toArray(".hackathon-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  })

  // Skill cards
  gsap.utils.toArray(".skill-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })

    // Animate skill progress bars
    const progressBar = card.querySelector(".skill-progress")
    const targetWidth = progressBar.style.width

    gsap.fromTo(
      progressBar,
      { width: "0%" },
      {
        width: targetWidth,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    )
  })

  // Info cards
  gsap.utils.toArray(".info-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
  })

  // Contact section
  gsap.utils.toArray(".contact-info").forEach((info, i) => {
    gsap.from(info, {
      opacity: 0,
      x: i % 2 === 0 ? -30 : 30,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
  })

  // Add hover effects with GSAP
  const cards = document.querySelectorAll(
    ".experience-card, .project-card, .education-card, .hackathon-card, .skill-card, .info-card, .card",
  )

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })
}

// Lazy lag load animation for all main sections
function initLazyLagSections() {
  const sections = document.querySelectorAll("section.section")
  if (!sections.length) return

  if (typeof gsap !== "undefined") {
    gsap.set(sections, { opacity: 0, y: 24, filter: "blur(4px)" })
    gsap.to(sections, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.7,
      stagger: 0.12,
      delay: 0.12,
      ease: "power2.out",
      clearProps: "opacity,transform,filter",
    })
  } else {
    sections.forEach((section) => {
      section.style.opacity = "1"
      section.style.transform = "none"
      section.style.filter = "none"
    })
  }
}

function initRagChatWidget() {
  const root = document.getElementById("rag-chat-root")
  const bubble = document.getElementById("rag-chat-bubble")
  const panel = document.getElementById("rag-chat-panel")
  const closeBtn = document.getElementById("rag-chat-close")
  const form = document.getElementById("rag-chat-form")
  const input = document.getElementById("rag-chat-input")
  const messages = document.getElementById("rag-chat-messages")
  const chips = document.querySelectorAll(".rag-chip")
  const cta = document.getElementById("rag-contact-cta")
  const openers = document.querySelectorAll("[data-open-rag-chat]")

  if (!root || !bubble || !panel || !form || !input || !messages) return

  // Keep widget outside transformed containers so fixed positioning stays viewport-relative.
  if (root.parentElement !== document.documentElement) {
    document.documentElement.appendChild(root)
  }

  // No longer applying JS positioning. CSS handles it via .rag-chat-root { bottom: 1.5rem; right: 1.5rem; }

  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
  const API_URL = isLocal ? "http://localhost:4000/chat" : "/api/chat";

  const addMessage = (text, role = "bot") => {
    const el = document.createElement("div")
    el.className = `rag-msg ${role === "user" ? "rag-msg-user" : "rag-msg-bot"}`
    el.textContent = text
    messages.appendChild(el)
    messages.scrollTop = messages.scrollHeight
    return el
  }

  const openPanel = () => {
    panel.classList.add("open")
    panel.setAttribute("aria-hidden", "false")
    setTimeout(() => input.focus(), 50)
  }

  const closePanel = () => {
    panel.classList.remove("open")
    panel.setAttribute("aria-hidden", "true")
    bubble.focus()
  }

  bubble.addEventListener("click", () => {
    if (panel.classList.contains("open")) {
      closePanel()
    } else {
      openPanel()
    }
  })

  openers.forEach((opener) => {
    opener.addEventListener("click", () => {
      openPanel()
      input.focus()
    })
  })

  closeBtn?.addEventListener("click", closePanel)

  const conversationHistory = []

  const ask = async (question) => {
    if (!question.trim()) return
    addMessage(question, "user")

    const botEl = addMessage("", "bot")
    cta?.classList.remove("visible")

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: question,
          history: conversationHistory
        }),
      })

      if (!res.ok || !res.body) {
        throw new Error("Chat service is unavailable.")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""
      let answer = ""

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split("\n\n")
        buffer = events.pop() || ""

        for (const event of events) {
          if (!event.startsWith("data:")) continue
          const raw = event.slice(5).trim()
          if (!raw) continue

          let payload
          try {
            payload = JSON.parse(raw)
          } catch {
            continue
          }

          if (payload.type === "chunk") {
            answer += payload.text || ""
            botEl.textContent = answer
            messages.scrollTop = messages.scrollHeight
          }

          if (payload.type === "error") {
            botEl.textContent = payload.message || "Something went wrong."
          }
        }
      }

      if (answer.includes("[CTA_CONTACT]")) {
        botEl.textContent = answer.replace("[CTA_CONTACT]", "").trim()
        cta?.classList.add("visible")
      }

      // Add to conversational memory (keep last 6 messages)
      conversationHistory.push({ role: "user", content: question })
      conversationHistory.push({ role: "assistant", content: answer.replace("[CTA_CONTACT]", "").trim() })
      if (conversationHistory.length > 6) {
        conversationHistory.splice(0, conversationHistory.length - 6)
      }

    } catch (err) {
      botEl.textContent = err.message || "Unable to fetch response right now."
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const q = input.value.trim()
    if (!q) return
    input.value = ""
    await ask(q)
  })

  chips.forEach((chip) => {
    chip.addEventListener("click", async () => {
      const q = chip.getAttribute("data-q") || ""
      if (!q) return
      await ask(q)
    })
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Render content
  renderExperience()
  renderProjects()
  renderEducation()
  renderHackathons()
  renderSkills()
  renderAdditionalInfo()

  // Initialize Three.js background
  initThreeJsBackground()

  // Initialize section backgrounds including contact 3D scene
  initSectionBackgrounds()

  // Initialize smooth scrolling
  initSmoothScrolling()

  // Lazy lag animation on page load for all sections
  initLazyLagSections()

  // Add event listeners for copy email buttons
  const copyEmailButtons = document.querySelectorAll(".copy-email-btn")
  copyEmailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const email = "ruthvikarh@gmail.com"

      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            showCopySuccess(this)
          })
          .catch(() => {
            // Fallback to older method
            fallbackCopyTextToClipboard(email, this)
          })
      } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(email, this)
      }
    })
  })

  // Add event listener for close modal button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeProjectModal)
  }

  // Close modal when clicking outside
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        closeProjectModal()
      }
    })
  }

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal?.classList.contains("active")) {
      closeProjectModal()
    }
  })

  // Initialize animations
  initAnimations()

  // Initialize RAG chat widget
  initRagChatWidget()
})
