import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../footer/Footer'
import './card.css'
import { useDispatch, useSelector } from 'react-redux'
import { VND } from '../../../../instances/products'
const Card = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.card)
    return (
        <div className='container-fluid'>
            <Header />
            <div className='cardd mt-5 pb-5 '>
                <h2 className='text-center pt-5'>Giỏ hàng</h2>
                <div className='row row-cols-2'>
                    <div className='card-table col-7'>
                        <table className='cardd-table table '>
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>

                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items?.map((item) => (
                                    <tr key={item.id}>
                                        <td className='d-flex '>
                                            <img src={item.image} className='me-3' alt="" width={90} />
                                            <div>
                                                <p className='fw-bolder'>{item.name}</p>
                                                <p>Màu sắc: <span className='fw-bolder'>Trắng</span></p>
                                                <p>Khích thước: 42</p>
                                            </div>
                                        </td>
                                        <td>{VND.format(item.price)}</td>
                                        <td className='card-table-button'>
                                            <button
                                                className='me-2'
                                                onClick={() => dispatch({ type: "card/decrease", payload: item.id })}
                                            >-</button>
                                            <span className='me-2'>{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch({ type: "card/increase", payload: item.id })}
                                            >+</button>
                                        </td>

                                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='card-pay col-4 mt-2'>
                        <p className='fw-bolder'>GIỎ HÀNG</p>
                        <hr />
                        <div className='d-flex justify-content-between pt-4'>
                            <p>Tổng tiền</p>
                            <p>{VND.format(
                                items.reduce(function (sum, item) {
                                    return sum + item.price * item.quantity
                                }, 0)
                            )
                            }</p>
                        </div>
                        <div className=''>Mã giảm giá</div>
                        <input type="text" placeholder='Nhập mã giảm giá...' className='mt-1 mb-3' />
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bolder'>Tạm tính</p>
                            <p className='fw-bolder'>9.233.332đ</p>
                        </div>
                        <button>Đặt hàng</button>
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default Card