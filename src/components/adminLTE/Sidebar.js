// src/components/adminLTE/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <aside 
      className="main-sidebar sidebar-dark-primary elevation-4" 
      style={{ height: '100vh', position: 'fixed', left: 0, top: 0 }}
    >
      <a href="/admin/servicios" className="brand-link">
        <span className="brand-image">
          <i className="fas fa-sun text-warning" style={{ fontSize: '30px' }} />
        </span>
        <span className="brand-text font-weight-light">HelioAndes Admin</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <i className="fas fa-user-circle text-white" style={{ fontSize: '30px' }}></i>
          </div>
          <div className="info">
            <a href="#" className="d-block">Administrador</a>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-accordion="false">
            <li className="nav-item">
              <a href="/admin/servicios" className="nav-link">
                <i className="nav-icon fas fa-cogs" />
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
    </aside>
  );
}

export default Sidebar;