import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import "./favorite.css"
const Favorite = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <hr />
            <div className='container'>
                <div className='favorite d-flex border mt-4 mb-4 p-3 gap-3'>
                    <img src="../aothun.jpg" alt="" />
                    <div className='mt-2'>
                        <h4>Áo thun nam</h4>
                        <p>Mã sản phẩm :962003</p>
                        <p className='fs-5 text-primary'>200,000</p>
                        <p>400,000</p>
                        <p>Order từ 3-5 ngày là có hàng</p>
                        <button className="btn btn-dark">Thêm vào giỏ</button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favorite