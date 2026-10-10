import { useEffect, useRef } from 'react';
import style from './About.module.css';

const HIGHLIGHTS = [
  { title: 'Full-Stack Mindset', text: 'Comfortable owning a feature from database schema to UI polish — no hand-offs, no gaps.' },
  { title: 'Clean, Maintainable Code', text: 'Readable, well-structured code with meaningful naming and separation of concerns.' },
  { title: 'API-First Development', text: 'RESTful API design with Express and ASP.NET Core: auth, validation, error handling.' },
  { title: 'Fast, Responsive UI', text: 'Interfaces that look great and load fast on every device, built with React best practices.' },
];

function About() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { sectionRef.current.classList.add(style.show); observer.disconnect(); }
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={style.section} id="about" ref={sectionRef}>
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.eyebrow}>About Me</span>
          <h2 className={style.title}>Turning Ideas Into Working Products</h2>
        </div>
        <div className={style.grid}>
          <div className={style.text}>
            <p className={style.paragraph}>
              I'm a full stack developer based in Egypt who enjoys building complete web
              applications — from the first sketch of a UI to the last line of a database
              query. My core stack is <strong>React</strong> on the frontend and{' '}
              <strong>Node.js/Express</strong> or <strong>.NET</strong> on the backend,
              backed by relational databases.
            </p>
            <p className={style.paragraph}>
              What drives me is shipping things that work. Every project in my portfolio
              was built end-to-end and deployed publicly — a Q&amp;A platform powered by
              the Gemini API, and a learning platform with a real React frontend and
              Express backend. I learn best by building, with the discipline production
              code demands.
            </p>
            <div className={style.infoList}>
              <div className={style.infoItem}><span className={style.infoKey}>Location</span><span className={style.infoValue}>Egypt · Open to Remote</span></div>
              <div className={style.infoItem}><span className={style.infoKey}>Focus</span><span className={style.infoValue}>Full Stack Web Development</span></div>
              <div className={style.infoItem}><span className={style.infoKey}>Languages</span><span className={style.infoValue}>Arabic (Native) · English (Professional)</span></div>
            </div>
          </div>
          <div className={style.highlights}>
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className={style.highlightCard}>
                <svg className={style.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <div>
                  <h3 className={style.highlightTitle}>{item.title}</h3>
                  <p className={style.highlightText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;