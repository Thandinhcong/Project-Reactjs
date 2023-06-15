import "./index.css";
import React from 'react';
import { Outlet } from 'react-router-dom';
import App from './MenuLeft';

const LayoutAdmin = () => {
    return (
        <div className='layout-admin container-xxl'>

            <App />
            <Outlet />
        </div>
    )
}

export default LayoutAdmin