import Services from '../Services/Services';
import About from './About';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';

function Home({ isDark }) {
  return (
    <>
      <Info isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Services isDark={isDark} />
    </>
  );
}

export default Home;