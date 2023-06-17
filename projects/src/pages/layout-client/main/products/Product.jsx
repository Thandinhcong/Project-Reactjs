import React, { useEffect, useState } from 'react';
import "../main.css";
import { Link } from 'react-router-dom';
import { getAllProduct } from '../../../../instances/products';
const Product = () => {
    const [products, setProducts] = useState([])
    const ListProductClient = async () => {
        const { data } = await getAllProduct();
        setProducts(data.products)
    }
    useEffect(() => {
        ListProductClient();
    }, [])
    const VND = new Intl.NumberFormat('vi-VN', {
        style: "currency",
        currency: "VND"
    })
    return (
        <div className='container'>
            <h2 className='text-center m-4'>SẢN PHẨM MỚI</h2>
            <nav className='menu text-center'>
                <a href="#">TẤT CẢ</a>
                <a href="#">QUẦN ÁO</a>
                <a href="#">GIÀY DÉP</a>
                <a href="#">PHỤ KIỆN & TRANG SỨC</a>
                <a href="#">TÚI XÁCH & BALO</a>
            </nav>
            <div>
                <select className='form-select w-25 mt-3 mb-3'>
                    <option value="" className='w-25'>Lọc theo giá tiền</option>
                    <option value="">Giá cao nhất</option>
                    <option value="">Giá thấp nhất</option>
                </select>
            </div>
            <div className='product-list'>
                {products.map((item, index) => {
                    return (
                        <div className='product-list-item'>
                            <Link to={`/chi-tiet-san-pham/${item._id}`}><img src={item.image} className='mb-2' alt="ảnh sản phẩm" /></Link>
                            <div className='products-list-icon d-flex justify-content-between'>
                                <p className='text-secondary'>KHÁC</p>
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                            </div>
                            <p className='fs-5'>{item.name}</p>
                            <p className='fs-4 text-primary'>{VND.format(item.price)}</p>
                            <div className='d-flex justify-content-between'>
                                <p className='orinal'>{VND.format(item.original_price)}</p>
                                <span
                                    className='sale'
                                >
                                    {Math.round(((item.original_price - item.price) / item.original_price) * 100)}%
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='paging text-center '>
                <a href="#" className='text-decoration-none btn btn-dark'>Xem thêm</a>
            </div>
        </div>
    )
}

export default Product