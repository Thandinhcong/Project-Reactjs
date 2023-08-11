import React from 'react'
import "./header.css";
import { Link, Outlet } from 'react-router-dom';
import Menu from './menu/Menu';
import Logo from './menu/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Clothes from './menu/Clothes';
import Signin from './user/user';
const Header = () => {
    return (
        <>
            <div data-aos="fade-down" className='Header container-fluid'>
                <section className='header '>
                    <Clothes />
                    <Logo />
                    <Signin />
                </section>
                <Menu />
            </div>
            <div className='mobile '>
                <nav className="mobile-item navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <Link className="navbar-brand fs-4 text-center fw-bold" to="/">
                            Thandinh.
                        </Link>
                        <FontAwesomeIcon icon={faCartShopping} className='me-2' />
                        <div className="collapse navbar-collapse p-3 " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium" aria-current="page" to="#">
                                        SALE
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium" to="#">
                                        BTS XUÂN/HÈ 2023
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium" to="#">
                                        TRANG PHỤC
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium" to="#">
                                        GIÀY DÉP
                                    </Link>
                                </li>
                                <a className="nav-link ">TRANG PHỤC</a>
                                <li className="nav-item fw-medium">
                                    <Link className="nav-link fw-medium" to="#">
                                        TÚI XÁCH VÀ SỰ KIỆN
                                    </Link>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <Link className="nav-link fw-medium" to="/signin">
                                        <FontAwesomeIcon icon={faUser} className='me-4' />
                                        <span className='fs-4'>Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="submit"
                                    fdprocessedid="lf051c"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </>

    )
}

export default Header