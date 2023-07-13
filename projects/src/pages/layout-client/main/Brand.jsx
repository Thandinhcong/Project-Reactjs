import React, { useEffect, useState } from 'react';
import "./main.css";
import { ListCates } from '../../../instances/categorys';
import { Outlet } from 'react-router-dom';
const Brand = () => {
    const [categorys, setCategorys] = useState([])
    const listCategoryAll = async () => {
        const { data } = await ListCates()
        setCategorys(data.categorys)
    }
    useEffect(() => {
        listCategoryAll();
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center mt-5'>DANH MỤC NỔI BẬT</h3>
            <div className='products'>
                {categorys.map((item) => {
                    return <div className='brand-item' key={item._id}>
                        <img src={item.image} alt="category" />
                        <p>{item.name}</p>
                        <span>Số lượng: {item.products.length}</span>
                    </div>

                })}
            </div>
            <Outlet />
        </div>
    )
}

export default Brand