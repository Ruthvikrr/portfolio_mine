// DOM Elements
const experienceGrid = document.querySelector(".experience-grid")
const projectsGrid = document.querySelector(".projects-grid")
const educationGrid = document.querySelector(".education-grid")
const hackathonsGrid = document.querySelector(".hackathons-grid")
const skillsGrid = document.querySelector(".skills-grid")
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
    period: "Present",
    description: "Worked in ASPLTech Solutions Pvt Ltd. Developed 5+ live projects which are currently live, contributing to scalable enterprise solutions.",
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
        name: "Triuss Tech Corporate Site",
        description: "Professional corporate website for a technology firm, highlighting services, portfolio, and client testimonials.",
        link: "https://triusstech.com/",
        image: "assets/triuss.png"
      },
      {
        name: "Research Visions",
        description: "An academic research portal designed to publish findings, manage papers, and facilitate collaboration among researchers.",
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
        description: "An enterprise solutions website showcasing business services and corporate offerings.",
        link: "https://avantenterprise.in/",
        image: "assets/avantenterprise.png"
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
  },
  {
    id: 2,
    title: "Badminton E-commerce Web App",
    description:
      "Developed a user-friendly e-commerce platform that allows users to log in, browse a variety of badminton products, add items to their cart, and complete purchases by entering basic delivery details. The app provides an intuitive shopping experience with a responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "🏸",
  },
  {
    id: 3,
    title: "Personal Portfolio Website - Hosted on AWS S3",
    description:
      "A fully responsive personal portfolio website showcasing my skills, projects, and professional background.The website is designed using modern frontend technologies and securely hosted on AWS S3 with static website hosting enabled.",
    technologies: ["HTML", "CSS", "JavaScript", "AWS S3"],
    icon: "🧑‍💻",
  },
  {
    id: 4,
    title: "AI Voice Call Assistant for Cake Shop/Cafe (Personal Project)",
    description:
      "Built a voice-enabled AI agent using n8n to automate order placement, tracking, delivery updates, and stock checks.Integrated webhooks and APIs to enable real-time voice interactions and reduce manual customer service tasks",
    technologies: ["n8n", "Webhooks", "APIs", "Twillio"],
    icon: "📞",
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
  {
    name: "Programming Languages",
    icon: "👨‍💻",
    items: ["Python 🐍", "PHP 🐘", "Java ☕", "C++ 💻"],
  },
  {
    name: "Web Development",
    icon: "🌐",
    items: ["HTML 📄", "CSS 🎨", "JavaScript 🟨", "React ⚛️"],
  },
  {
    name: "Database & Backend",
    icon: "🗄️",
    items: ["Firebase 🔥", "SQL 🗃️"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    items: ["Docker 🐳", "AWS ☁️", "Google Cloud 🌥️", "Linux 🐧", "Cloud Computing ☁️"],
  },
  {
    name: "Tools & Technologies",
    icon: "🧰",
    items: [, "VS Code", "N8N", "VE0.dev", "GitHub", "Bolt", "Claude", "ChatGPT", "Google Studio"],
  },
  {
    name: " AI & Machine Learning",
    icon: "🤖",
    items: [
      "Natural language processing 🤖",
      "AI Agents 🧳",
      "Machine Learning ⚙️",
      "Prompt Engineering 💬",
      "Generative AI 🧠",
    ],
  },
]

const additionalInfoData = [
  { id: 1, title: "Languages", items: ["English", "Kannada", "Hindi", "Tamil", "Telugu"] },
  { id: 2, title: "Certifications", items: ["Utl technologies Certification: Next Gen - AI and ML"] },
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
      <div class="experience-header-content">
        <div class="experience-icon">${exp.icon}</div>
        <div class="experience-details">
          <h3 class="experience-company">${exp.company}</h3>
          <p class="experience-role">${exp.role}</p>
          <p class="experience-period">${exp.period}</p>
        </div>
      </div>
      <p class="experience-description">${exp.description}</p>
    `
    experienceGrid.appendChild(expInfoCard)

    // 2. Projects Grid (Separate Container)
    const projectsContainer = document.createElement("div")
    projectsContainer.className = "experience-projects-full-width"
    projectsContainer.innerHTML = `<h4 class="experience-projects-title">Key Live Projects</h4>`

    const projectsGridDiv = document.createElement("div")
    projectsGridDiv.className = "experience-projects-grid"

    exp.projects.forEach(project => {
      projectsGridDiv.innerHTML += `
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
      `
    })

    projectsContainer.appendChild(projectsGridDiv)
    experienceGrid.appendChild(projectsContainer)
  })
}

// Render Project Cards
function renderProjects() {
  if (!projectsGrid) return

  projectsGrid.innerHTML = ""

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"
    projectCard.dataset.id = project.id

    projectCard.innerHTML = `
<div class="project-icon">${project.icon}</div>
<h3 class="project-title">${project.title}</h3>
<p class="project-description">${project.description}</p>
<div class="project-tags">
  ${project.technologies
        .map(
          (tech) => `
    <span class="project-tag">${tech}</span>
  `,
        )
        .join("")}
</div>
`

    // Remove this line or comment it out:
    // projectCard.addEventListener("click", () => openProjectModal(project));

    projectsGrid.appendChild(projectCard)
  })
}

// Render Education Cards
function renderEducation() {
  if (!educationGrid) return

  educationGrid.innerHTML = ""

  education.forEach((edu) => {
    const educationCard = document.createElement("div")
    educationCard.className = "education-card"

    educationCard.innerHTML = `
    <div class="education-icon">${edu.icon}</div>
    <div class="education-content">
      <h3 class="education-degree">${edu.degree}</h3>
      <p class="education-institution">${edu.institution}</p>
      <p class="education-period">${edu.period}</p>
      <p class="education-CGPA">CGPA: ${edu.CGPA}</p>
    </div>
  `

    educationGrid.appendChild(educationCard)
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

  skillsGrid.innerHTML = ""

  skills.forEach((category) => {
    const skillCard = document.createElement("div")
    skillCard.className = "skill-card"

    skillCard.innerHTML = `
    <div class="skill-header">
      <div class="skill-icon">${category.icon}</div>
      <h3 class="skill-name">${category.name}</h3>
    </div>
    <ul class="skill-list">
      ${category.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `

    skillsGrid.appendChild(skillCard)
  })
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
  // Hero section animations
  gsap.from(".subtitle", { opacity: 0, y: 20, duration: 0.5 })
  gsap.from(".title", { opacity: 0, y: 20, duration: 0.5, delay: 0.2 })
  gsap.from(".description", { opacity: 0, y: 20, duration: 0.5, delay: 0.4 })
  gsap.from(".hero-buttons", { opacity: 0, y: 20, duration: 0.5, delay: 0.6 })
  // gsap.from(".profile-container", { opacity: 0, scale: 0.8, duration: 0.8 })

  // Section animations with ScrollTrigger
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
})
