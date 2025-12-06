// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Landing
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
import ServiciosAdmin from './components/adminLTE/Servicios';     
import ServicioDetail from './components/adminLTE/ServicioDetail';
import PlanesAdmin from './components/adminLTE/Planes';          
import PlanDetail from './components/adminLTE/PlanDetail';     

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing pública */}
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

        {/* Rutas del dashboard: cada una es un componente completo */}
        <Route path="/admin" element={<ServiciosAdmin />} />
        <Route path="/admin/servicios" element={<ServiciosAdmin />} />
        <Route path="/admin/servicios/:id" element={<ServicioDetail />} />
        <Route path="/admin/planes" element={<PlanesAdmin />} />
        <Route path="/admin/planes/:id" element={<PlanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;