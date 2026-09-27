import { useEffect, useRef } from 'react';
import style from './Projects.module.css';
import hangmanImg from '../../../src/assets/HangmanPic.png';
import guessWordImg from '../../../src/assets/guess the word game.png';
import askHubImg from '../../../src/assets/askhub.png';
import oneLearnImg from '../../../src/assets/OneLearn.png';
import weatherAppImg from '../../../src/assets/WeatherApp.png';
import ticTacToeImg from '../../../src/assets/TicTacToe.png';

const projects = [
  {
    name: 'Hangman Game',
    image: hangmanImg,
    description:
      'A classic word-guessing game where players try to discover a hidden word by suggesting letters within a limited number of attempts. Features a clean, interactive interface and smooth animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://3bdelrahman-hany.github.io/Hangman/',
    repo: null,
  },
  {
    name: 'Guess the Word',
    image: guessWordImg,
    description:
      'An engaging word-guessing game that reveals letters in their correct positions with each successful guess. Includes feedback mechanics, scoring, and a polished user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://3bdelrahman-hany.github.io/Guess-The-Word/',
    repo: null,
  },
  {
    name: 'AskHub',
    image: askHubImg,
    description:
      'A full-stack Q&A web application with a traditional HTML/CSS/JS frontend and a Node.js + Express backend. Integrated the Gemini API to power intelligent question answering and content generation.',
    tags: ['Node.js', 'Express', 'Gemini API', 'JavaScript'],
    link: 'https://github.com/3bdelrahman-hany/AskHub',
    repo: 'https://github.com/3bdelrahman-hany/AskHub',
  },
  {
    name: 'OneLearn',
    image: oneLearnImg,
    description:
      'A learning platform for quizzes and educational content. Features a responsive React interface with dark mode, live score tracking, and an Express.js backend handling APIs and data flow.',
    tags: ['React', 'Express', 'Node.js', 'Full Stack'],
    link: 'https://github.com/3bdelrahman-hany/OneLearn',
    repo: 'https://github.com/3bdelrahman-hany/OneLearn',
  },
  {
    name: 'Weather App',
    image: weatherAppImg,
    description:
      'A clean weather application that displays current conditions for any city worldwide. Shows temperature, humidity, wind speed, and weather status using real-time data from a weather API.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    link: 'https://3bdelrahman-hany.github.io/Weather-app/',
    repo: null,
  },
  {
    name: 'Tic Tac Toe',
    image: ticTacToeImg,
    description:
      'The classic two-player game on a 3x3 grid, built with React. Players take turns placing X and O in empty cells, with win detection for horizontal, vertical, and diagonal lines.',
    tags: ['React', 'Vite', 'Game'],
    link: 'https://github.com/3bdelrahman-hany/tic-tac-toe-react',
    repo: 'https://github.com/3bdelrahman-hany/tic-tac-toe-react',
  },
];

function Projects() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.classList.add(style.show);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={style.section} id="projects">
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.eyebrow}>Portfolio</span>
          <h2 className={style.title}>Featured Projects</h2>
          <p className={style.subtitle}>
            A selection of projects I've built, showcasing both frontend and full-stack work.
          </p>
        </div>

        <div className={style.grid} ref={cardsRef}>
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={style.card}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={style.imageWrap}>
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className={style.image}
                  loading="lazy"
                />
                <div className={style.imageOverlay}></div>
              </div>

              <div className={style.body}>
                <h3 className={style.name}>{project.name}</h3>
                <p className={style.description}>{project.description}</p>

                <div className={style.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={style.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={style.actions}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.btnPrimary}
                  >
                    {project.repo ? 'View Project' : 'Live Demo'}
                    <svg className={style.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.btnSecondary}
                      aria-label={`${project.name} source code`}
                      title="View source code"
                    >
                      <svg className={style.btnIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.5 10.42.55.1.75-.24.75-.53 0-.26-.01-.96-.02-1.88-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.6-1.22-1.6-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.37 2.75-.37.93 0 1.87.13 2.75.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1 .74 2.02 0 1.46-.01 2.63-.01 2.99 0 .29.2.64.76.53 4.36-1.46 7.49-5.57 7.49-10.42C23.01 5.24 18.27.5 12 .5z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
