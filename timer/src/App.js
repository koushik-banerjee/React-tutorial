import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <h1 className="timer">{seconds} seconds</h1>
      <button onClick={handleStart} disabled={isActive || seconds === 0}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isActive}>
        Pause
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <CountdownTimer initialSeconds={60} />
    </div>
  );
};

export default App;
