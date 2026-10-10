import { useEffect, useRef } from "react";
import style from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 & CSS3", level: 92 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js & Express", level: 85 },
      { name: "C# & .NET / ASP.NET Core", level: 75 },
      { name: "REST API Design", level: 85 },
      { name: "Authentication & Security", level: 70 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "SQL & Database Design", level: 80 },
      { name: "Git & GitHub", level: 88 },
      { name: "Vite & Modern Tooling", level: 85 },
      { name: "API Integration (Gemini, Weather)", level: 82 },
    ],
  },
];

function SkillBar({ name, level }) {
  const barRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          barRef.current.style.width = `${level}%`;
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className={style.skill}>
      <div className={style.skillHead}>
        <span className={style.skillName}>{name}</span>
        <span className={style.skillLevel}>{level}%</span>
      </div>
      <div className={style.track}>
        <div className={style.bar} ref={barRef}></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className={style.section} id="skills">
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.eyebrow}>My Toolkit</span>
          <h2 className={style.title}>Skills &amp; Technologies</h2>
          <p className={style.subtitle}>
            The technologies I use to take products from idea to deployment.
          </p>
        </div>
        <div className={style.groups}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className={style.group}>
              <h3 className={style.groupTitle}>{group.title}</h3>
              {group.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
