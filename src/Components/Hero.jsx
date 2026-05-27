import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("loaded"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <nav className="hero-nav">
        <span className="hero-logo">IP</span>
        <ul className="hero-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-tag">Frontend Developer</p>
          <h1 className="hero-heading">
            I build premium<br />
            web experiences.
          </h1>
         <p className="hero-sub">
  Crafting luxury e-commerce and editorial web experiences
  with React &amp; Node.js. Minimal design. Purposeful detail.
</p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-mockup" ref={imgRef}>
            <div className="mockup-browser">
              <div className="mockup-bar">
                <span /><span /><span />
              </div>
              <div className="mockup-screen">
                <img
                  src="/ald-1.png"
                  alt="Fashion E-Commerce Store Preview"
                  className="mockup-real-img"
                />
              </div>
            </div>
            <div className="mockup-phone">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <img src="/ald-2.png" alt="Fashion E-Commerce Mobile View" />
                </div>
              </div>
            </div>
            <div className="mockup-label">Fashion E-Commerce — Luxury Storefront</div>
          </div>
        </div>
      </div>

      <div className="hero-footer-line">
        <span>React</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Supabase Auth</span>
        <span>Vite</span>
        <span>Custom CSS</span>
        <span>Stripe</span>
        <span>Vercel</span>
      </div>
    </section>
  );
}