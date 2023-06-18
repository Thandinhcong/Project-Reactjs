import React from 'react'
import "./header.css";
import { Link, Outlet } from 'react-router-dom';
import Menu from './menu/Menu';
import Logo from './menu/Logo';

import Clothes from './menu/Clothes';
import Signin from './user/user';
const Header = () => {
    return (
        <div className='Header container-fluid'>
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