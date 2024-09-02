
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './try/navbar';
import Home from './try/home';
import About from './try/about';
import Services from './try/services';
import Contact from './try/contact';



function App() {
  return (
    <div className="App">

      <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>


    
    </div>
  );
}

export default App;
