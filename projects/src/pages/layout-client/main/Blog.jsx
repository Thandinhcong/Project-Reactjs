import React from 'react';
import "../style.css";
const Blog = () => {
    return (
        <div data-aos="fade-right" className='blog container'>
            <p>BẢN TIN</p>
            <h5>Đăng ký nhận bản tin của chúng tôi để nhận các tin tức,
                ưu đãi đặc biệt và các khuyến mãi độc quyền</h5>
            <form action="" className='form-home'>
                <input type="email" placeholder='Email của bạn' />
                <button>Gửi</button>
            </form>
            <i>Bằng cách tạo tài khoản, bạn đồng ý với Chính sách bảo mật. của chúng tôi</i>
        </div >
    )
}

export default Blog