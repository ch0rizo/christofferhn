import './App.css';
import Home from './Home';
import IntroLoader from './components/IntroLoader/IntroLoader';

import { useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent ? (
        <IntroLoader onContinue={() => setShowContent(true)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
