import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Detailspage from './components/Detailspage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/country/:name" element={<Detailspage />} />
      </Routes>
    </Router>
  );
}

export default App;
