import React from 'react'
import "./forgot.css";
const ForgotPassword = () => {
    return (
        <div className='forgot'>
            <h2 className='text-center mt-5 mb-3'>Quên mật khẩu</h2>
            <p className='text-center'>Nhập email của bạn để lấy lại mật khẩu</p>
            <form action="" className='from-forgot'>
                <label htmlFor="name" className='mb-2'>Email</label>
                <input placeholder='abcd@gmail.com' type="text" className='form-control' />
                <button className='forgot-button mt-3'>Gửi</button>
            </form>
        </div>
    )
}

export default ForgotPassword