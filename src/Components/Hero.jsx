import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
          <motion.p className="hero-tag"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}>
            Frontend Developer
          </motion.p>
          <motion.h1 className="hero-heading"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            I build premium<br />web experiences.
          </motion.h1>
          <motion.p className="hero-sub"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}>
            Crafting luxury e-commerce and editorial web experiences
            with React &amp; Node.js. Minimal design. Purposeful detail.
          </motion.p>
          <motion.div className="hero-cta"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </motion.div>
        </div>

        <motion.div className="hero-right"
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="hero-mockup" ref={imgRef}>
            <div className="mockup-browser">
              <div className="mockup-bar">
                <span /><span /><span />
              </div>
              <div className="mockup-screen">
                <img src="/ald-1.png" alt="Fashion E-Commerce Store Preview" className="mockup-real-img" />
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
        </motion.div>
      </div>

      <motion.div className="hero-footer-line"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}>
        <span>React</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Supabase Auth</span>
        <span>Vite</span>
        <span>Custom CSS</span>
        <span>Stripe</span>
        <span>Vercel</span>
      </motion.div>
    </section>
  );
}