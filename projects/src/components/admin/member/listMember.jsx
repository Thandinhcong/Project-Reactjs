import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../../pages/layout-admin/header/Header'
import MenuLeft from '../../../pages/layout-admin/MenuLeft'
import { ListUsers } from '../../../instances/accounts'


const ListMember = () => {
    const [users, setUsers] = useState([]);
    const ListAllCate = async () => {
        const { data } = await ListUsers();
        setUsers(data.users)
    }
    useEffect(() => {
        ListAllCate()
    }, [])


    return (
        <div className='container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl border'>
                <MenuLeft />
                <section className='col-9 '>
                    <h3 className='text-center mt-2 mb-2'>Danh sách tài khoản</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Ngày sinh</th>
                                    <th>Giới tính</th>
                                    <th>Chức vụ</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.numberPhone}</td>
                                            <td>{item.date}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <button className="btn btn-primary">Xóa</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default ListMember;
