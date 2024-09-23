import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import FactorySupplies from './pages/FactorySupplies';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/factory-supplies" element={<FactorySupplies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
