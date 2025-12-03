import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import DashboardLTE from './components/adminLTE/DashboardLTE';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Hero />
                <Servicios />
                <Soluciones />
                <CalculadoraIntegral />
                <Planes />
                <Testimonios />
                <FAQ />
                <Contacto />
                <Footer />
              </main>
            </div>
          }
        />
        <Route path="/admin/*" element={<DashboardLTE />} />
      </Routes>
    </Router>
  );
}

export default App;
