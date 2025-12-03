// src/components/adminLTE/NavbarDash.js
import React from 'react';

function NavbarDash() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/admin/servicios" className="nav-link">Servicios</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/admin/planes" className="nav-link">Planes</a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/" className="nav-link" title="Volver a la landing">
            <i className="fas fa-home" />
            <span className="d-none d-md-inline ms-1">Landing</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDash;