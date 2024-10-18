import React, { useState, useEffect } from 'react';

const LoggingComponent = ({ title }) => {
  // State to simulate some internal change
  const [count, setCount] = useState(0);

  // useEffect to log message when 'count' changes
  useEffect(() => {
    console.log(`Component re-rendered due to count change: ${count}`);

    // Optional: Cleanup function (not needed here, but good to know)
    return () => {
      console.log('Cleanup (if any) before the next render');
    };
  }, [count]); // Dependency array: effect runs only when 'count' changes

  // Function to increment the count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default LoggingComponent;
