import React from 'react';
import Border from './component/Border';
import Skills from './component/Skill';

const skills = ['JavaScript', 'React', 'Node.js'];

function App() {
  return (
    <div className="App">
      <Border>
        <h1>My Resume</h1>
        <hr />
        <Skills skills={skills} />
      </Border>
    </div>
  );
}

export default App;


