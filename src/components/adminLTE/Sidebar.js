// src/components/adminLTE/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar" style={{ width: 250 }}>
      {/* Panel de usuario (opcional, pero queda bien) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src="https://via.placeholder.com/160"
            className="img-circle elevation-2"
            alt="HelioAndes Admin"
          />
        </div>
        <div className="info">
          <a href="#" className="d-block">Admin HelioAndes</a>
        </div>
      </div>

      {/* Menú principal */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-accordion="false">
          <li className="nav-item">
            <a href="/admin/servicios" className="nav-link">
              <i className="nav-icon fas fa-cog" />
              <p>Servicios</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/admin/planes" className="nav-link">
              <i className="nav-icon fas fa-solar-panel" />
              <p>Planes</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;