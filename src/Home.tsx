import Navbar from './components/Navbar/Navbar';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import './components/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <Projects></Projects>
    </>
  );
}

export default Home;
