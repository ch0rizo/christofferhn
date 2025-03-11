import { useState, useEffect } from 'react';
import './IntroLoader.css';
import StartButton from './StartButton';

function IntroLoader({ onContinue }: { onContinue: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 20);

      return () => clearInterval(timer);
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
      }, 800);

      const showNextTimer = setTimeout(() => {
        setShowNext(true);
      }, 1800);

      return () => {
        clearTimeout(completeTimer);
        clearTimeout(showNextTimer);
      };
    }
  }, [progress]);

  return (
    <>
      {!showNext ? (
        <div className={`loader-container ${isComplete ? 'fade-out' : ''}`}>
          <div className="progress-percent">
            <h1>{progress} %</h1>
            <div className="progress-bar-background">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <StartButton onClick={onContinue} />
      )}
    </>
  );
}

export default IntroLoader;
