import React from 'react'
import HeaderAdmin from './header/Header'
import MenuLeft from './MenuLeft'
import ListCate from '../../components/admin/categories/ListCate'
import { Outlet } from 'react-router-dom'

const ListCategorys = () => {
    return (
        <div className='layout-admin container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl '>
                <MenuLeft />
                <ListCate />
            </div>
            <Outlet />
        </div>

    )
}

export default ListCategorys