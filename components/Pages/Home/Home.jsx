import Services from '../Services/Services';
import Info from './Info';
import Projects from './Projects';

function Home({ isDark }) {
  return (
    <>
      <Info isDark={isDark} />
      <Projects isDark={isDark} />
      <Services isDark={isDark} />
    </>
  );
}

export default Home;