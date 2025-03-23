import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About.Jsx';
import Contect from './Components/Contect';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/contact" element={<Contect />} />
        <Route path="/about" element={<About />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
