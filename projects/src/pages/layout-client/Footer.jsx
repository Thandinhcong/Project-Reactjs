import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="footerr text-center text-lg-start bg-light text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Kết nối với chúng tôi :</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <Link to="https://www.facebook.com/DinhCongThan.official" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin" />
                        </a>
                        <Link to="https://github.com/Thandinhcong" className="me-4 text-reset">
                            <i className="fab fa-github" />
                        </Link>
                    </div>
                    {/* Right */}
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className=" fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />
                                    Về chúng tôi
                                </h6>
                                <p>
                                    Với 20 năm kinh nghiệm trong ngành thời trang , chúng tôi cam kết sẽ mang lại cho quý khách những trải nhiệm tốt nhất
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className=" fw-bold mb-4">Sản phẩm</h6>
                                <p>
                                    <a href="#!" className="text-decoration-none ">
                                        Trang phục
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className=" text-decoration-none">
                                        Giày dép
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">
                                        Túi xách và phụ kiện
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className=" text-decoration-none">
                                        Sale
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className=" fw-bold mb-4">Hỗ trợ khách hàng</h6>
                                <p>
                                    <a href="#!" className=" text-decoration-none">
                                        Liên hệ
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className=" text-decoration-none">
                                        Chính sách khách hàng
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className=" text-decoration-none">
                                        Chính sách giao hàng
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">
                                        Chính sách đổi trả
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className=" fw-bold mb-4">Liên hệ</h6>
                                <p>
                                    <i className="fas fa-home me-3" /> Số 1 đường Cầu Diễn -Hà Nội
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    Thandv03@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print me-3" /> + 01 234 567 89
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                        Than dinh cong
                    </a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>

    )
}

export default Footer