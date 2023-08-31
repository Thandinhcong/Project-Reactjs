import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../footer/Footer'
import './card.css'
const Card = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='cardd mt-5 '>
                <h2 className='text-center'>Giỏ hàng</h2>
                <div className='row row-cols-2'>
                    <div className='card-table col-7'>
                        <table className='cardd-table table '>
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='d-flex '>
                                        <img src="https://d2308c07sw6r8q.cloudfront.net/media/catalog/product/cache/088e653b19efbf8c3f3f59980f4bd43b/S/a/Sandro_SHACH00255-10_V_1.webp" className='me-3' alt="" width={90} />
                                        <div>
                                            <p className='fw-bolder'>Giày thể thao</p>
                                            <p>Màu sắc: <span className='fw-bolder'>Trắng</span></p>
                                            <p>Khích thước: 42</p>
                                        </div>

                                    </td>
                                    <td>8.420.000đ</td>
                                    <td>2</td>
                                    <td>Tổng tiền</td>
                                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                    </svg></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='card-pay col-4 mt-2'>
                        <p className='fw-bolder'>GIỎ HÀNG</p>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p>Tổng tiền</p>
                            <p>8.430.000đ</p>
                        </div>
                        <div className=''>Mã giảm giá</div>
                        <input type="text" placeholder='Nhập mã giảm giá...' className='mt-1' />
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bolder'>Tạm tính</p>
                            <p className='fw-bolder'>9.233.332đ</p>
                        </div>
                        <button>Đặt hàng</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Card