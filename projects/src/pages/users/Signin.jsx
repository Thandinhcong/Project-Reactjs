import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./signin.css";
import Clothes from '../layout-client/Header/menu/Clothes';
import Logo from '../layout-client/Header/menu/Logo';
import User from '../layout-client/Header/user/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../layout-client/footer/Footer';
import Logistics from '../layout-client/main/Logistics';
import Blog from '../layout-client/main/Blog';
const Signin = () => {
    return (
        <div>
            <div className='header'>
                <Clothes />
                <Logo />
                <User />
            </div>
            <div className='container p-5'>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} /><Link to="/" className='text-decoration-none text-dark'> <span>Trở lại</span></Link>
                    <h6 className='mt-2 mb-3'>ĐĂNG NHẬP</h6>
                </div>
                <section className='d-flex border'>
                    <div className='left'>
                        <img src="./login.jpg" alt="" width={500} height={450} />
                        <div className='text'>
                            <h5 className='mb-5 fs-4'>Khách hàng mới</h5>
                            <p>Bằng cách tạo tài khoản , bạn có thể</p>
                            <li>Đặt hàng , Tra cứu đơn hàng trên website</li>
                            <li>Tích lũy chỉ tiêu và xếp hạng</li>
                            <li>Nhận các ưu đãi đặc biệt của Thandinh và các nhãn hàng khác thuộc hệ thống Thái Bình</li>
                            <i className='mb-3 mt-3'>(*) Khách hàng là thành viên thuộc Chương trình Khách hàng thân thiết Tam Sơn Elite Club, vui lòng điền đúng SĐT đã đăng ký thành viên tại Tam Sơn khi tạo tài khoản mới để được hưởng các ưu đãi đặc biệt tại Sandro.</i> <br />
                            <a href="/dang-ki" className='btn btn-dark mt-4 mb-5'>Tạo tài khoản</a>
                        </div>
                    </div>
                    <div className='form'>
                        <h5 className='text-center'>KHÁCH HÀNG ĐÃ CÓ TÀI KHOẢN</h5>
                        <div className='fb pt-4'>
                            <img width="48" height="48" className='me-3' src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
                        </div>
                        <div className='item mt-3'>
                            <div>
                                --------
                            </div>
                            <p className='me-2 ms-2'>Hoặc</p>
                            <div>
                                --------
                            </div>
                        </div>
                        <form action="" className='form-login'>
                            <label htmlFor="">Email</label>
                            <input type="email" className='form-control' />
                            <label htmlFor="">Mật khẩu</label>
                            <input type="password" className='form-control' />
                            <button className='btn btn-primary'>Đăng nhập</button>
                        </form>
                        <a href="" >Quên mật khẩu?</a>
                    </div>
                </section>
            </div>
            <Logistics />
            <Blog />
            <Footer />
            <Outlet />
        </div>
    )

}

export default Signin