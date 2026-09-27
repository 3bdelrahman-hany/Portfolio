import { Link } from 'react-router-dom';
import profileImg from '../../../src/assets/Abdelrahman.png';
import style from './Info.module.css';

function Info() {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.content}>
          <span className={style.greeting}>Hello, I'm</span>
          <h1 className={style.name}>Abdelrahman Hany</h1>
          <h2 className={style.role}>
            <span className={style.roleAccent}>Full Stack Developer</span>
          </h2>
          <p className={style.bio}>
            I build modern, responsive web applications with a strong focus on clean code,
            great user experience, and scalable architecture. Experienced in both frontend
            and backend development using React, Node.js, Express, and .NET.
          </p>
          <div className={style.cta}>
            <a
              href="https://github.com/3bdelrahman-hany"
              target="_blank"
              rel="noopener noreferrer"
              className={style.btnPrimary}
            >
              View My Work
              <svg className={style.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <Link to="/Contacts" className={style.btnSecondary}>
              Get in Touch
            </Link>
          </div>
          <div className={style.techRow}>
            <span className={style.techLabel}>Tech Stack:</span>
            <div className={style.techChips}>
              <span className={style.chip}>React</span>
              <span className={style.chip}>Node.js</span>
              <span className={style.chip}>Express</span>
              <span className={style.chip}>.NET</span>
              <span className={style.chip}>SQL</span>
            </div>
          </div>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.imageGlow}></div>
          <div className={style.imageFrame}>
            <img src={profileImg} alt="Abdelrahman Hany - Full Stack Developer" className={style.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
