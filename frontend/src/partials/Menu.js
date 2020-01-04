import React from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <div>
          {/* Main Sidebar Container */}
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                style={{opacity: '.8'}} />
              <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {/* Add icons to the links using the .nav-icon class
                  with font-awesome or any other icon font library */}
                  <li className="nav-item has-treeview menu-open">
                    <Link className="nav-link" to="/dashboard">
                        <i className="nav-icon fas fa-tachometer-alt" /> Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">
                        <i className="nav-icon fas fa-tachometer-alt" /> Home
                    </Link>
                  </li>
                  <li className="nav-item has-treeview">
                    <Link className="nav-link" to="/notas">
                        <i className="nav-icon fas fa-tachometer-alt" /> Notas
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>

      </div>
    )
}

export default Menu
