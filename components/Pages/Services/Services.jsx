import { useEffect, useRef } from 'react';
import style from './Services.module.css';
import frontendImg from '../../../src/assets/html css and javascript.jpeg';
import reactImg from '../../../src/assets/react and vite.png';
import expressImg from '../../../src/assets/express.png';
import dotnetImg from '../../../src/assets/.Net.png';
import databaseImg from '../../../src/assets/Database.avif';

const services = [
  {
    name: 'Frontend Development',
    image: frontendImg,
    description:
      'Crafting responsive, accessible, and performant user interfaces with HTML, CSS, and vanilla JavaScript. Pixel-perfect designs that work across all devices and browsers.',
    highlights: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
  },
  {
    name: 'React & Vite',
    image: reactImg,
    description:
      'Building modern, scalable single-page applications using React with a component-based architecture. State management, hooks, and Vite-powered tooling for fast development cycles.',
    highlights: ['React', 'Vite', 'Components', 'SPA'],
  },
  {
    name: 'Backend with Express',
    image: expressImg,
    description:
      'Designing and implementing RESTful APIs and server-side logic using Node.js and Express. Clean architecture, middleware, authentication, and robust error handling.',
    highlights: ['Node.js', 'Express', 'REST APIs', 'Middleware'],
  },
  {
    name: 'Backend with .NET',
    image: dotnetImg,
    description:
      'Building enterprise-grade backend systems with the .NET framework. Cross-platform development, strong typing, and high-performance server applications.',
    highlights: ['C#', '.NET', 'ASP.NET Core', 'Enterprise'],
  },
  {
    name: 'Database Design',
    image: databaseImg,
    description:
      'Designing and optimizing relational databases with efficient schemas, indexes, and queries. Ensuring data integrity, security, and scalability for production workloads.',
    highlights: ['SQL', 'Schema Design', 'Optimization', 'Integrity'],
  },
];

function Services() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.classList.add(style.show);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={style.section} id="services">
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.eyebrow}>What I Offer</span>
          <h2 className={style.title}>Services & Skills</h2>
          <p className={style.subtitle}>
            End-to-end development services, from pixel-perfect interfaces to robust backend systems and databases.
          </p>
        </div>

        <div className={style.grid} ref={cardsRef}>
          {services.map((service, index) => (
            <article
              key={service.name}
              className={style.card}
              style={{ animationDelay: `${index * 0.09}s` }}
            >
              <div className={style.imageBox}>
                <img
                  src={service.image}
                  alt={`${service.name} illustration`}
                  className={style.image}
                  loading="lazy"
                />
              </div>
              <h3 className={style.name}>{service.name}</h3>
              <p className={style.description}>{service.description}</p>
              <div className={style.highlights}>
                {service.highlights.map((item) => (
                  <span key={item} className={style.highlightChip}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
