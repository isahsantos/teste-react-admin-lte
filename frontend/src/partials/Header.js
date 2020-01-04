import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="url_fake"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="url_fake">
                <i className="fas fa-th-large" /> Salir
              </a>
            </li>
          </ul>
        </nav>
    )
}

export default Header
