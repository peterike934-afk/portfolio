import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    name: "Fashion E-Commerce Platform",
    description: "Luxury streetwear-inspired storefront with editorial lookbook, product filtering, authentication, and Stripe checkout.",
    stack: ["React", "Vite", "Node.js", "Supabase Auth", "Stripe", "Custom CSS"],
    live: "https://dev-iykeee.netlify.app/",
    github: "https://github.com/peterike934-afk/Aime-Leon-Dore",
    desktop: "/ald-1.png",
    mobile: "/ald-2.png",
    tag: "E-Commerce",
  },
  {
    id: 2,
    number: "02",
    name: "Chef Claude",
    description: "AI-powered cooking assistant that generates personalized recipes from ingredients you already have — conversational, fast, and designed for everyday use.",
    stack: ["React", "Vite", "JavaScript", "Claude AI API"],
    live: "https://chefclaude01.netlify.app/",
    github: null,
    desktop: "/chef-1.png",
    mobile: "/chef-2.png",
    tag: "SaaS · AI",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p className="projects-label">Selected Work</p>
        <h2 className="projects-heading">Featured Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <motion.div
            className={`project-card ${i % 2 === 1 ? "project-card--reverse" : ""}`}
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="project-image-wrap">
              <div className="project-tag">{project.tag}</div>
              <img src={project.desktop} alt={project.name + " desktop"} className="project-image-desktop" />
              <div className="project-image-phone">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <img src={project.mobile} alt={project.name + " mobile"} />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <span className="project-number">{project.number}</span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-tech">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                  Live Demo
                </a>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    GitHub
                  </a>
                ) : (
                  <span className="btn-secondary btn-disabled">GitHub Soon</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}