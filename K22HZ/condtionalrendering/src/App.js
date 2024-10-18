import React from 'react';
import ItemList from './ItemList'; // Adjust the path as needed
import LoggingComponent from './LoggingComponent'; 
const App = () => {
  return (
    <>
    <div>
      <h1>Item List</h1>
      <ItemList />
    </div>

    <div>
      <LoggingComponent title="Count Logger" />
    </div>
    </>
  );
};

export default App;