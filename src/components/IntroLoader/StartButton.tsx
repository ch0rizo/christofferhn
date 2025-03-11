import './StartButton.css';
import '../Navbar/BlinkingArrow';
import Typewriter from 'typewriter-effect';

function StartButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="start-button-container">
      <button className="start-button" onClick={onClick}>
        <span className="blinking">{'>'}</span>
        <Typewriter
          options={{
            strings: ['Start Program'],
            autoStart: true,
            loop: false,
            pauseFor: 100000,
            delay: 60,
          }}
        />
      </button>
    </div>
  );
}

export default StartButton;
