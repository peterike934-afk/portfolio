import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-left">
          <p className="about-label">About</p>
          <h2 className="about-heading">
            Crafting digital<br />
            <em>experiences.</em>
          </h2>
          <div className="about-signature">IP</div>
        </div>

        <div className="about-right">
          <p className="about-text">
            I'm a frontend developer focused on building fast, modern and
            conversion-focused web applications.
          </p>
          <p className="about-text">
            I enjoy creating premium user experiences inspired by modern
            fashion and SaaS brands — where every detail is intentional
            and every interaction feels effortless.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Building</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Remote Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
