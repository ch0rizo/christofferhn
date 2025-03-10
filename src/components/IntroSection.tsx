import './IntroSection.css';
import TextScrambler from './TextScrambler';

function IntroSection() {
  return (
    <div className="landing-page">
      <div className="name">
        <TextScrambler text="CHRISTOFFER NGUYEN" />
      </div>
      <div className="text-portfolio">
        <TextScrambler text="PORTFOLIO" />
      </div>
    </div>
  );
}

export default IntroSection;
