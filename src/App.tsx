import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <Projects></Projects>
    </>
  );
}

export default App;
