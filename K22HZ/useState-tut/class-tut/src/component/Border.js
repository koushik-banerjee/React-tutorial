import React from 'react';

function Border({ children }) {
  const borderStyle = {
    border: '2px solid #000',
    padding: '20px',
    margin: '10px'
  };

  return <div style={borderStyle}>{children}</div>;
}

export default Border;
