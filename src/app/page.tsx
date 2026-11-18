"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, Plus, X } from "lucide-react";

const projects = [
  { number: "01", name: "Monolith", type: "Architecture / 2026", tone: "tone-sand" },
  { number: "02", name: "Silva", type: "Identity / 2025", tone: "tone-silver" },
  { number: "03", name: "Noma", type: "Digital / 2025", tone: "tone-charcoal" },
];

const services = [
  ["01", "Strategy", "Positioning, research and defining a clear direction."],
  ["02", "Identity", "Visual systems made to live across every touchpoint."],
  ["03", "Digital", "Editorial, expressive and highly usable experiences."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, reduceMotion ? 0 : 100]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Atelier N°9 home">
          <span className="brand-mark">N°9</span>
          <span>Atelier</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="menu-overlay" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}>
            <button className="menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X />
            </button>
            <motion.div className="menu-links" initial="closed" animate="open" exit="closed" variants={{ open: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }, closed: {} }}>
              {["Work", "About", "Contact"].map((item) => (
                <motion.a key={item} href={`#${item === "About" ? "about" : item.toLowerCase()}`} onClick={() => setMenuOpen(false)} variants={{ closed: { y: 30, opacity: 0 }, open: { y: 0, opacity: 1 } }}>
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero" id="top">
        <motion.div className="hero-copy" style={{ y: heroY }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Independent creative studio — Paris
          </motion.p>
          <h1 aria-label="We shape distinct brands">
            <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>We shape</motion.span>
            <motion.span className="italic" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>distinct brands.</motion.span>
          </h1>
        </motion.div>

        <motion.div className="hero-art" initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
          <div className="art-label">
            <span>Selected work</span>
            <span>2024—26</span>
          </div>
        </motion.div>

        <motion.a className="hero-index" href="#work" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <ArrowDownRight />
          <span>Discover<br />our work</span>
        </motion.a>
      </section>

      <div className="marquee" aria-hidden="true">
        <motion.div className="marquee-track" animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              <span>Identity</span><b>✦</b><span>Direction</span><b>✦</b><span>Digital</span><b>✦</b>
            </div>
          ))}
        </motion.div>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 — Selected projects</p>
          <h2>Built with <em>intent.</em></h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className="project" key={project.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7, delay: index * 0.08 }}>
              <a href="#contact" aria-label={`View ${project.name} project`}>
                <div className={`project-image ${project.tone}`}>
                  <div className="project-number">{project.number}</div>
                  {index === 0 && <div className="monolith"><span /><span /><span /></div>}
                  {index === 1 && <div className="silva-mark">S</div>}
                  {index === 2 && <><div className="noma-circle" /><div className="noma-line" /></>}
                  <div className="project-arrow"><ArrowUpRight /></div>
                </div>
                <div className="project-meta">
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <p className="eyebrow">02 — About us</p>
        </div>
        <motion.div className="about-copy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: 0.8 }}>
          <h2>Small by design.<br />Wide in <em>perspective.</em></h2>
          <p>We are an independent team partnering with ambitious people to build meaningful identities and digital experiences.</p>
          <a className="text-link" href="#contact">More about the studio <ArrowUpRight size={16} /></a>
        </motion.div>
        <div className="stats">
          <div><strong>12</strong><span>Years creating</span></div>
          <div><strong>48</strong><span>Brands launched</span></div>
          <div><strong>11</strong><span>Global awards</span></div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading compact">
          <p className="eyebrow">03 — Expertise</p>
        </div>
        <div className="services-list">
          {services.map(([number, title, copy]) => (
            <motion.div className="service-row" key={title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Plus className="service-plus" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">04 — Start a project</p>
        <motion.a href="mailto:hello@atelier9.studio" className="contact-link" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span>Let&apos;s make<br /><em>something matter.</em></span>
          <ArrowUpRight />
        </motion.a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">N°9</span><span>Atelier</span></a>
        <p>Paris, France<br />Available worldwide</p>
        <div className="footer-links"><a href="#">Instagram</a><a href="#">LinkedIn</a></div>
        <p>© 2026 Atelier N°9</p>
      </footer>
    </main>
  );
}
