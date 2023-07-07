import React, { useEffect, useState } from 'react'
import Header from '../../../pages/layout-client/Header/Header'
import Footer from '../../../pages/layout-client/footer/Footer'
import { Link } from 'react-router-dom'

const InfoUser = () => {
    const [users, setUsers] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Header />
            <div className='mt-3 mb-3 container-fluid'>
                <h3 className='text-center mb-5'>Thông tin người dùng</h3>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Họ tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Địa chỉ</th>
                                <th>Giới tính</th>
                                <th>Ngày sinh</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{users.name}</td>
                                <td>{users.numberPhone}</td>
                                <td>{users.email}</td>
                                <td>{users.address}</td>
                                <td>{users.gender}</td>
                                <td>{users.date}</td>
                                <th><Link to={`/cap-nhat-thong-tin-nguoi-dung/${users._id}`} className='btn btn-primary'>Cập nhật</Link></th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default InfoUser