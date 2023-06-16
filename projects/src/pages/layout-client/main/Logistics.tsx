import React from 'react'
import "../style.css"
const Logistics = () => {
    return (
        <div className='logistics container '>
            <div className='logistic-item d-flex'>
                <img width="20" className='me-2' height="20" src="https://img.icons8.com/ios/50/product--v1.png" alt="product--v1" />
                <p >CAM KẾT HÀNG CHÍNH HÃNG </p>
            </div>
            <div className='logistic-item d-flex'>
                <img width="20" height="20" className='me-2' src="https://img.icons8.com/dotty/80/cash-in-hand.png" alt="cash-in-hand" />
                <p>THANH TOÁN AN TOÀN</p>
            </div>
            <div className='logistic-item d-flex'>

                <img width="20" height="20" className='me-2 ' src="https://img.icons8.com/ios/50/truck--v1.png" alt="truck--v1" />
                <p>MIỄN PHÍ VẬN CHUYỂN CHO MỌI ĐƠN HÀNG</p>
            </div>
            <div className=' logistic-item d-flex'>
                <img width="20" height="20" className='me-2' src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" />
                <p>HỖ TRỢ KHÁCH HÀNG 19000000</p>
            </div>
        </div>
    )
}

export default Logistics;