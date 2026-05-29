import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "Vite", "Custom CSS", "HTML", "Responsive Design"] },
  { category: "Backend", items: ["Node.js", "Supabase Auth", "REST APIs", "Authentication"] },
  { category: "Payments & Tools", items: ["Stripe", "Git & GitHub", "Figma", "Vercel"] },
  { category: "Focus Areas", items: ["Performance Optimization", "UI/UX Design", "E-Commerce", "SaaS Applications"] },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div className="skills-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}>
        <p className="skills-label">Expertise</p>
        <h2 className="skills-heading">Skills &amp; Tools</h2>
      </motion.div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <motion.div className="skills-group" key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}>
            <p className="skills-category">{group.category}</p>
            <div className="skills-tags">
              {group.items.map((skill, j) => (
                <motion.span className="skill-tag" key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.1 + j * 0.04 }}>
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}