import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../../src/assets/Abdelrahman.png";
import style from "./Info.module.css";

const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js & .NET Engineer",
];
const STATS = [
  { value: "6+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "2", label: "Backend Stacks" },
  { value: "100%", label: "Commitment" },
];

function Info() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    /* same typewriter logic from earlier draft */
  }, [displayed, deleting, roleIndex]);

  return (
    <section className={style.hero} id="home">
      <div className={style.container}>
        <div className={style.content}>
          <span className={style.badge}>
            <span className={style.badgeDot}></span>Available for new
            opportunities
          </span>
          <span className={style.greeting}>Hello, I'm</span>
          <h1 className={style.name}>Abdelrahman Hany</h1>
          <h2 className={style.role} aria-label={ROLES[roleIndex]}>
            <span className={style.roleAccent}>{displayed}</span>
            <span className={style.caret} aria-hidden="true"></span>
          </h2>
          <p className={style.bio}>
            I design and build end-to-end web applications — from pixel-perfect
            React interfaces to robust Node.js and .NET backends. I care deeply
            about clean, maintainable code and shipping products that solve real
            problems.
          </p>
          <div className={style.cta}>
            <a href="#projects" className={style.btnPrimary}>
              View My Work →
            </a>
            <a
              href="/Abdelrahman-Hany-Resume.pdf"
              download
              className={style.btnSecondary}
            >
              ⬇ Download Résumé
            </a>
            <Link to="/Contacts" className={style.btnGhost}>
              Get in Touch
            </Link>
          </div>
          <div className={style.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={style.stat}>
                <span className={style.statValue}>{s.value}</span>
                <span className={style.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* imageWrapper unchanged */}
      </div>
    </section>
  );
}
export default Info;
