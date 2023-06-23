
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuLeft from "./MenuLeft";
import HeaderAdmin from "./header/Header";
import ListProduct from '../../components/admin/products/ListProduct';
import "./header/headeradmin.css"
const LayoutAdmin = () => {
    return (
        <div className='layout-admin container-xxl'>
            <HeaderAdmin className="z-3" />
            <div className='main row row-cols-2 container-xxl z-n1'>
                <MenuLeft />
                <ListProduct />
            </div>
            <Outlet />
        </div>
    )
}

export default LayoutAdmin