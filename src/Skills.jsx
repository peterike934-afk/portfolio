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
      <div className="skills-header">
        <p className="skills-label">Expertise</p>
        <h2 className="skills-heading">Skills &amp; Tools</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.category}>
            <p className="skills-category">{group.category}</p>
            <div className="skills-tags">
              {group.items.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
