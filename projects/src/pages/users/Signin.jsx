import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Clothes from '../layout-client/Header/menu/Clothes';
import Logo from '../layout-client/Header/menu/Logo';
import User from '../layout-client/Header/user/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../layout-client/footer/Footer';
import Logistics from '../layout-client/main/Logistics';
import Blog from '../layout-client/main/Blog';
import { useLocalStorage } from '../useLocalStore/useLocalStore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignin } from '../schemas/products';
import { FormSignin } from '../../instances/accounts';
import Header from '../layout-client/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signin.css";
const Signin = () => {
    const navigate = useNavigate();
    const [user, SetUser] = useLocalStorage('user', null)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignin)
    })

    const OnHandleSubmit = async (users) => {
        try {
            const { data: { accessToken, user } } = await FormSignin(users)
            SetUser({
                accessToken,
                ...user
            })
            if (user.role === "admin") {
                toast.success('Đăng nhập admin thành công!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setTimeout(() => {
                    navigate('/admin');
                }, 2000)
                return;
            } else {
                toast.success('Đăng nhập thành công!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                setTimeout(() => {
                    navigate('/');
                }, 2000)
                return;
            }
        } catch (error) {
            toast.error('Thông tin tài khoản hoặc mật khẩu không chính sác!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Header />
            <div className='container mt-5'>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} /><Link to="/" className=' text-decoration-none text-dark'> <span className='back'>Trở lại</span></Link>
                </div>
                <div className='signup container mb-5' >
                    <form className="form_container" onSubmit={handleSubmit(OnHandleSubmit)}>
                        <div className="title_container">
                            <p className="title">ĐĂNG NHẬP</p>
                            <span className="subtitle">
                                Đăng nhập ngay bây giờ để trải nghiệm mua sắm vô cùng tuyệt vời
                            </span>
                        </div>
                        <br />
                        <div className="input_container">
                            <label className="input_label" htmlFor="email_field">
                                Email
                            </label>
                            <input
                                placeholder="name@mail.com"
                                title="Inpit title"
                                name="input-name"
                                type="text"
                                className="input_field"
                                id="email_field"
                                {...register('email')}
                            />
                            <div className='text-danger'>{errors.email && errors.email.message}</div>
                        </div>
                        <div className="input_container">
                            <label className="input_label" htmlFor="password_field">
                                Mật khẩu
                            </label>
                            <input
                                placeholder="Nhập mật khẩu"
                                title="Inpit title"
                                name="input-name"
                                type="password"
                                className="input_field"
                                id="password_field"
                                {...register('password')}
                            />
                            <div className='text-danger'>{errors.password && errors.password.message}</div>
                        </div>
                        <button title="Sign In" type="submit" className="sign-in_btn">
                            <ToastContainer />
                            <span>ĐĂNG NHẬP</span>
                        </button>
                        <div className="separator">
                            <hr className="line" />
                            <span>Hoặc</span>
                            <hr className="line" />
                        </div>
                        <button title="Sign In" type="submit" className="sign-in_ggl">
                            <svg
                                height={18}
                                width={18}
                                viewBox="0 0 32 32"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <path
                                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                        id="A"
                                    />
                                </defs>
                                <clipPath id="B"></clipPath>
                                <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
                                    <path fill="#fbbc05" clipPath="url(#B)" d="M0 37V11l17 13z" />
                                    <path
                                        fill="#ea4335"
                                        clipPath="url(#B)"
                                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                                    />
                                    <path
                                        fill="#34a853"
                                        clipPath="url(#B)"
                                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                                    />
                                    <path fill="#4285f4" clipPath="url(#B)" d="M48 48L17 24l-4-3 35-10z" />
                                </g>
                            </svg>
                            <span>Đăng nhập với Google</span>
                        </button>
                        <button title="Sign In" type="submit" className="sign-in_apl">

                            <svg
                                preserveAspectRatio="xMidYMid"
                                version="1.1"
                                viewBox="0 0 256 315"
                                height="20px"
                                width="16px"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        fill="#ffffff"
                                        d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                                    />
                                </g>
                            </svg>
                            <span>Đăng nhập với Apple</span>
                        </button>
                        <span>Bạn chưa có tài khoản ? <Link to="/dang-ki">Đăng kí</Link></span>

                    </form>

                </div >
            </div >
            <Logistics />
            <Blog />
            <Footer />
            <Outlet />
        </div >
    )

}

export default Signin