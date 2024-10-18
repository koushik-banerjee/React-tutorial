import React, { useState } from 'react';

const ItemList = () => {
  const [isVisible, setIsVisible] = useState(true);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const toggleListVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleListVisibility}>
        {isVisible ? 'Hide List' : 'Show List'}
      </button>

      {/* Step 3: Conditional Rendering */}
      {isVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
