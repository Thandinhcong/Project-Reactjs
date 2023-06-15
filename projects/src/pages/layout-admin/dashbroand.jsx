import "./index.css";
import React from 'react';
import { Outlet } from 'react-router-dom';
import App from './MenuLeft';
import MenuLeft from "./MenuLeft";

const LayoutAdmin = () => {
    return (
        <div className='layout-admin container-xxl'>

            <MenuLeft />
            <Outlet />
        </div>
    )
}

export default LayoutAdmin