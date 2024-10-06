import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar.js';
import Join from './pages/Join';
import Impact from './pages/Impact.js';
import About from './pages/About.js';
import Chapters from './pages/Chapters.js';
import SubmissionForm from './pages/SubmissionForm.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-involved" element={<Join />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/submit" element={<SubmissionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
