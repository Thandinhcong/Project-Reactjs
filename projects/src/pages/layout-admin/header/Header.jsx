import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./headeradmin.css";

const HeaderAdmin = () => {
    const navigate = useNavigate();
    const [isDropDow, setIsDropDow] = useState(false);
    const [isLogin, setIsLogin] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });

    const toggleDropDow = () => {
        setIsDropDow(!isDropDow);
    };

    const handleLogOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem("accessToken");
        setIsLogin(null);
        navigate('/');
    };

    return (
        <div className='container-fluid'>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <p className='mt-3 fs-5 me-5 ms-5'>THANDINH.</p>
                            <Link to="/admin" className='ms-5 me-5 text-decoration-none'>ADMIN</Link>
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars" />
                            </button>
                            {/* Topbar Search */}
                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control bg-light border-0 small"
                                        placeholder="Search for..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="alertsDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-bell fa-fw" />
                                        {/* Counter - Alerts */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* Dropdown - Alerts */}
                                    <div
                                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown"
                                    >
                                    </div>
                                </li>
                                {/* Nav Item - Messages */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="messagesDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-envelope fa-fw" />
                                        {/* Counter - Messages */}
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                </li>
                                <div className="topbar-divider d-none d-sm-block" />
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span
                                            className={`mr-2 d-none d-lg-inline text-gray-600 small login-status online ${isDropDow ? 'show' : ''}`}
                                            onClick={toggleDropDow}
                                        >
                                            {isLogin && isLogin.name}
                                        </span>
                                        <img
                                            className="img-profile rounded-circle "
                                            src="./thann.jpg"
                                            alt="User Avatar"
                                        />
                                    </a>
                                    <div
                                        className={`dropdown-menu dropdown-menu-right shadow animated--grow-in  ${isDropDow ? 'show' : ''}`}
                                        aria-labelledby="userDropdown"
                                    >
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider" />
                                        <Link
                                            className="dropdown-item"
                                            to="#"
                                            data-toggle="modal"
                                            data-target="#logoutModal"
                                            onClick={handleLogOut}
                                        >
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                            Logout
                                        </Link>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdmin;
