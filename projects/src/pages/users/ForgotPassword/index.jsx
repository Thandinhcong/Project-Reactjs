import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import "./forgot.css";
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../../instances/accounts';
const ForgotPassword = () => {
    const { register, handleSubmit } = useForm({})
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const onHandleSubmit = async (user) => {
        try {
            const res = await forgotPassword(user)
            console.log(res);
            setSuccessMessage("Đã gửi thành công !")
            setError('')
        } catch (error) {
            setSuccessMessage('')
            setError("Email không tồn tại, Vui lòng thử lại !")
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className='forgot'>
            <h2 className='text-center mt-5 mb-3'>Quên mật khẩu</h2>
            <p className='text-center'>Nhập email của bạn để lấy lại mật khẩu</p>
            <form className='from-forgot' onSubmit={handleSubmit(onHandleSubmit)}>
                <label htmlFor="name" className='mb-2'>Email</label>
                <input placeholder='abcd@gmail.com '{...register("email")} type="text" className='form-control' />
                <button className='forgot-button mt-3'>Gửi</button> <br />
                <Link to="/signin">Đăng nhập</Link>
            </form>
            {successMessage && <p className=" mt-3 success-message">{successMessage}</p>}
            {error && <p className="mt-3 error-message">{error}</p>}
        </div>
    )
}

export default ForgotPassword