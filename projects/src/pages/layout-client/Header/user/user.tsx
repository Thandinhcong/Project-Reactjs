import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import "./user.css";
import { Link } from 'react-router-dom';
const User = () => {
    return (
        <div className='signinn ' style={{ marginLeft: "100px" }}>
            <Link to="/signin" className='text-dark'>
                <FontAwesomeIcon icon={faUser} className=' me-4' />
            </Link>
            <Link to="" className='text-dark me-4'>
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <input type="text" className='border border-end-0' placeholder='Tìm kiếm sản phẩm' />
        </div>
    )
}

export default User