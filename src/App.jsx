import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import MobileStickyBar from './components/MobileStickyBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Ceramic from './pages/Ceramic';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
import './App.css';

// Placeholders for other pages
const Placeholder = ({ title }) => (
  <div className="container section">
    <h1>{title}</h1>
    <p>Coming Soon</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ceramic" element={<Ceramic />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        <Footer />

        <MobileStickyBar />
      </div>
    </Router>
  );
}

export default App;
