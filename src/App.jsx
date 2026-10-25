import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin,
  Mail, Menu, X, Code2, Layers3, Database, MonitorSmartphone,
  BriefcaseBusiness, Sparkles, Moon, Sun, Phone, MapPin
} from "lucide-react";

const skills = [
  { name: "React.js", type: "Frontend" },
  { name: "JavaScript", type: "Frontend" },
  { name: "Tailwind / Bootstrap CSS", type: "Frontend" },
  { name: "HTML & CSS", type: "Frontend" },
  { name: "PHP", type: "Backend" },
  { name: "Laravel", type: "Backend" },
  { name: "REST APIs", type: "Backend" },
  { name: "MySQL", type: "Database" },
  { name: "Git & GitHub", type: "Tools" },
  { name: "Vercel", type: "Tools" },
  { name: "GLPI (Asset Management System)", type: "Tools" },
  { name: "Technical Support", type: "Tools" },
];

const projects = [
  {
    number: "01",
    title: "Task Management",
    description:
      "A task management application built with Laravel and Livewire, with user authentication and task organization.",
    tags: ["Laravel", "Livewire", "PHP", "MySQL"],
    type: "Full-Stack project",
    image: "/taskManagement.png",
    sourceCode: "https://github.com/Nada-Gaber02/Task_Management_Project",
    liveDemo: "https://task-management-project-hw73578w0-nada-gabers-projects.vercel.app/login",
    accent: "project-lilac",
  },
  {
    number: "02",
    title: "AllPiq (E-Commerce Platform)",
    description:
      "An online store project planned with Laravel 12, React, Sanctum authentication, and MySQL.",
    tags: ["React", "Tailwind CSS", "Rest API", "Redux"],
    type: "Front-end project",
    image: "/AllPiq.png",
    sourceCode: "https://github.com/Nada-Gaber02/AllPiq",
    liveDemo: "https://nada-gaber02.github.io/AllPiq/#/Login",
    accent: "project-green",
  },
  {
    number: "03",
    title: "Yummy",
    description:
      "Designed an interactive food and recipe listing web application. Integrated external Web APIs to let users explore dishes dynamically with an intuitive user interface.",
    tags: ["JavaScript", "Bootstrap CSS", "Web API", "Responsive UI"],
    type: "Frontend Project",
    image: "/Yummy.png",
    sourceCode: "https://github.com/Nada-Gaber02/Yummy",
    liveDemo: "https://nada-gaber02.github.io/Yummy/",
    accent: "project-orange",
  },
  {
    number: "04",
    title: "Game Over",
    description:
      "Built a dynamic gaming discovery platform featuring real-time game listing, category filtering, and detailed review pages. Integrated RESTful Web APIs to fetch live game data and crafted an interactive, user-friendly interface optimized across all screen sizes.",
    tags: ["JavaScript", "Bootstrap CSS", "Rest API", "Responsive UI"],
    type: "Frontend Project",
    image: "/GameOver.png",
    sourceCode: "https://github.com/Nada-Gaber02/Game-Over",
    liveDemo: "https://nada-gaber02.github.io/Game-Over/",
    accent: "project-orange",
  },
];

const experience = [
  {
    date: "Professional experience",
    role: "IT Support",
    company: "ASDCO Company",
    description:
      "Add your exact responsibilities and achievements here so this section accurately reflects your CV.",
  },
  {
    date: "Personal projects",
    role: "Full-Stack Developer",
    company: "Independent projects",
    description:
      "Building web applications with PHP, Laravel, React, databases, and API-based workflows.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site-shell ${darkMode ? "theme-dark" : "theme-light"}`}>
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nada Gaber home">
          <span className="brand-mark">N.</span>
          <span>NADA GABER<span className="brand-period">.</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact Me <ArrowUpRight size={15} /></a>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO WORK</div>
            <p className="eyebrow">HELLO, I’M —</p>
            <h1>Nada Gaber</h1>
            <p className="hero-description">
              Full-Stack Developer focused on creating useful, responsive web experiences
              with React, PHP, and Laravel.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Contact Me <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Nada-Gaber02" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/nada-gaber-1b783a270/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <span className="social-line" />
              <span>Based in Egypt · Available remotely</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Nada Gaber">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="floating-tag tag-top"><Code2 size={16} /> clean code</div>
            <div className="floating-tag tag-bottom"><Sparkles size={16} /> curious by nature</div>
            <div className="portrait-card">
              <img className="portrait-image" src="/nadaImg.jpeg" alt="Nada Gaber" />
              <div className="portrait-top"><span>NG / 2026</span><span className="portrait-status">● AVAILABLE</span></div>
              <div className="portrait-caption">
                <span>DEVELOPER</span>
                <strong>Ideas into<br />interfaces.</strong>
              </div>
              <div className="portrait-scribble">build<br />&nbsp;with care ↗</div>
            </div>
            <div className="art-sticker">DESIGN<br />× CODE<br />× IMPACT</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="about-section section-wrap section-space">
          <div className="section-heading">
            <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
            <h2>Curious mind.<br /><span>Practical builder.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I’m a Full-Stack Developer who enjoys turning ideas into clear, reliable,
              and easy-to-use web applications.
            </p>
            <p className="muted-copy">
              I work across frontend interfaces and backend functionality, connecting
              thoughtful UI with APIs, authentication, and databases. I’m always learning
              and looking for opportunities to build products that solve real problems.
            </p>
            <div className="about-facts">
              <div><span className="fact-number">01</span><span>Responsive interfaces</span></div>
              <div><span className="fact-number">02</span><span>Reliable backend logic</span></div>
              <div><span className="fact-number">03</span><span>Continuous learning</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-space">
          <div className="section-wrap">
            <div className="section-heading heading-row">
              <div>
                <SectionLabel>MY TOOLKIT</SectionLabel>
                <h2>Tools I use to<br /><span>make things work.</span></h2>
              </div>
              <p className="muted-copy heading-aside">The right tool for the right problem — from polished interfaces to database-backed applications.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{skill.name}</strong>
                  <span className="skill-type">{skill.type}</span>
                </div>
              ))}
            </div>
            <div className="skill-note"><Layers3 size={18} /><span>Currently building with <strong>Laravel 12 + React + MySQL</strong></span></div>
          </div>
        </section>

        <section id="projects" className="projects-section section-wrap section-space">
          <div className="section-heading heading-row">
            <div>
              <SectionLabel>SELECTED WORK</SectionLabel>
              <h2>Some things I’ve<br /><span>been working on.</span></h2>
            </div>
            <a className="text-link all-projects" href="https://github.com/Nada-Gaber02" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-visual">
                  {project.image ? (
                    <img className="project-image" src={project.image} alt={`${project.title} preview`} />
                  ) : (
                    <div className="visual-window">
                      <div className="window-bar"><span /><span /><span /><i>{project.type}</i></div>
                      <div className="visual-content">
                        <div className="visual-symbol">{project.number === "01" ? <Layers3 /> : project.number === "02" ? <Database /> : <MonitorSmartphone />}</div>
                        <div className="visual-lines"><span /><span /><span /></div>
                        <div className="visual-chip">{project.tags[0]}</div>
                      </div>
                    </div>
                  )}
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  {(project.sourceCode || project.liveDemo) && (
                    <div className="project-actions">
                      {project.sourceCode && <a className="project-link" href={project.sourceCode} target="_blank" rel="noreferrer"><Github size={15} /> Source Code <ArrowUpRight size={15} /></a>}
                      {project.liveDemo && <a className="project-link" href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={15} /></a>}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section section-space">
          <div className="section-wrap experience-layout">
            <div className="section-heading">
              <SectionLabel>THE JOURNEY SO FAR</SectionLabel>
              <h2>Experience that<br /><span>keeps me growing.</span></h2>
              <p className="muted-copy">A mix of professional experience and hands-on learning through real projects.</p>
            </div>
            <div className="timeline">
              {experience.map((item, i) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <span className="timeline-date">{item.date}</span>
                    <h3>{item.role}</h3>
                    <p className="timeline-company"><BriefcaseBusiness size={15} /> {item.company}</p>
                    <p className="muted-copy">{item.description}</p>
                  </div>
                </article>
              ))}
              <p className="edit-reminder">Replace the experience descriptions with the exact details from your CV before publishing.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-heading">
            <h2>Contact me</h2>
            <p>I'm open to new opportunities in Full-Stack Developer. Feel free to reach out!</p>
            <span className="contact-underline" />
          </div>
          <div className="contact-list">
            <a className="contact-item" href="mailto:nadamohamedgaber20@gmail.com">
              <span className="contact-icon"><Mail size={23} /></span>
              <span className="contact-copy"><span>EMAIL</span><strong>nadamohamedgaber20@gmail.com</strong></span>
              <ArrowUpRight className="contact-arrow" size={18} />
            </a>
            <a className="contact-item" href="tel:+201062091936">
              <span className="contact-icon"><Phone size={23} /></span>
              <span className="contact-copy"><span>PHONE</span><strong>+201062091936</strong></span>
              <ArrowUpRight className="contact-arrow" size={18} />
            </a>
            <div className="contact-item">
              <span className="contact-icon"><MapPin size={23} /></span>
              <span className="contact-copy"><span>LOCATION</span><strong>Alexandria, Egypt</strong></span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">N.</span><span>NADA GABER<span className="brand-period">.</span></span></a>
        <span>Designed with intention. Built with code.</span>
        <div className="footer-links">
          <a href="https://github.com/Nada-Gaber02" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;