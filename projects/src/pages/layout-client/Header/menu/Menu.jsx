import React from 'react';
import { Link } from 'react-router-dom';
import "../header.css"
const Menu = () => {
    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li ><Link to="" className='text-danger'>SALE</Link></li>
                    <li><Link to="">BTS XUÂN/HÈ 2023</Link></li>
                    <li><Link to="">TRANG PHỤC</Link></li>
                    <li><Link to="">GIÀY DÉP</Link></li>
                    <li><Link to="">TÚI SÁCH & PHỤ KIỆN</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;