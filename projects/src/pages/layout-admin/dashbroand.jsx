import "./index.css";
import React from 'react';
import { Outlet } from 'react-router-dom';
import App from './MenuLeft';
import MenuLeft from "./MenuLeft";
import HeaderAdmin from "./header/Header";

const LayoutAdmin = () => {
    return (
        <div className='layout-admin container-xxl'>
            <HeaderAdmin />
            <MenuLeft />
            <Outlet />
        </div>
    )
}

export default LayoutAdmin