import React from 'react'
import "./header.css";
import { Link, Outlet } from 'react-router-dom';
import Menu from './menu/Menu';
import Logo from './menu/Logo';
import Signin from './user/user';
const Header = () => {
    return (
        <div>
            <section className='header '>
                <Logo />
                <Signin />
            </section>
            <Menu />
        </div>
    )
}

export default Header