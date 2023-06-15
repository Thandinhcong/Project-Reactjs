
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuLeft from "./MenuLeft";
import HeaderAdmin from "./header/Header";
import ListProduct from '../../components/admin/products/ListProduct';

const LayoutAdmin = () => {
    return (
        <div className='layout-admin container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl '>
                <MenuLeft />
                <ListProduct />
            </div>
            <Outlet />
        </div>
    )
}

export default LayoutAdmin