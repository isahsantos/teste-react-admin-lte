import React from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                </div>
                <div className="info">
                    <Link className="d-block" to="/">
                        Lucas Sequeira
                    </Link>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">
                            <i className="nav-icon fas fa-th" /><p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/notas">
                            <i className="nav-icon fas fa-th" /><p>Notas</p>
                        </Link>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>
    )
}

export default Menu
