import React from 'react'
import { Link } from 'react-router-dom'

const Clothes = () => {
    return (
        <div className='mt-3 fs-5'>
            <Link className='text-decoration-none text-secondary' to="#">Nam</Link>|
            <Link className='text-decoration-none text-secondary' to="#">Nữ</Link>
        </div>
    )
}

export default Clothes