import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Meal from './Components/Meal.jsx'
import Cocktail from './Components/Cocktail.jsx'; 
import Potter from './Components/Potter.jsx';
import Bank from './Components/Bank.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meal" element={<Meal />} />
        <Route path="/Cocktail" element={<Cocktail />} />
        <Route path="/Potter" element={<Potter />} />
        <Route path="/Bank" element={<Bank />} />
      </Routes>
    </Router>
  </StrictMode>
);

