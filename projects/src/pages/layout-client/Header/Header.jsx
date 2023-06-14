import React from 'react'
import "./header.css";
import { Link, Outlet } from 'react-router-dom';
import Menu from './menu/Menu';
import Logo from './menu/Logo';
import Signin from './user/user';
import Clothes from './menu/Clothes';
const Header = () => {
    return (
        <div>
            <section className='header '>
                <Clothes />
                <Logo />
                <Signin />
            </section>
            <Menu />
        </div>
    )
}

export default Header