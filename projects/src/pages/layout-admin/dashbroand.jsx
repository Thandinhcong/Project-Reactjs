import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MenuLeft from "./MenuLeft";
import HeaderAdmin from "./header/Header";
import ListProduct from '../../components/admin/products/ListProduct';
import "./header/headeradmin.css";
import "./dashbroand.css"
const LayoutAdmin = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className='layout-admin container-xxl'>
            <HeaderAdmin className="z-3" />
            <div className='main row row-cols-2 container-xxl z-n1'>
                <MenuLeft />
                {loading ? (
                    <div className="col-9 skeleton-container">
                        <div className="skeleton" style={{ height: '150px' }}></div>
                        <div className="skeleton" style={{ height: '150px' }}></div>
                        <div className="skeleton" style={{ height: '150px' }}></div>
                        <div className="skeleton" style={{ height: '150px' }}></div>
                    </div>
                ) : (
                    <ListProduct />
                )}
            </div>
            <Outlet />
        </div>
    );
};

export default LayoutAdmin;
