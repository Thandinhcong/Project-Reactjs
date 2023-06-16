import React from 'react';
import "../main.css";
import { Link } from 'react-router-dom';
const Product = () => {
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
                <div className='product-list-item'>
                    <Link to="./chi-tiet-san-pham"><img src="../aothun.jpg" alt="" /></Link>
                    <div className='products-list-icon d-flex justify-content-between'>
                        <p className='text-secondary'>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p className='fs-5'>Áo khoác thun nam</p>
                    <p className='fs-4 text-primary'>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p className='orinal'>1,300,000đ</p><span className='sale'>-54%</span>
                    </div>
                </div>
                <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div>
                <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div>
                <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div>
                <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div>
                <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div>
                <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div> <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div> <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div> <div className='product-list-item'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='products-list-icon d-flex justify-content-around'>
                        <p>KHÁC</p>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <p>Áo khoác thun nam</p>
                    <p>599,000đ</p>
                    <div className='d-flex justify-content-between'>
                        <p>1,300,000đ</p><span>-54%</span>

                    </div>
                </div>
            </div>
            <div className='paging text-center '>
                <a href="#" className='text-decoration-none btn btn-dark'>Xem thêm</a>

            </div>
        </div>
    )
}

export default Product