import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ListCates } from '../../../instances/categorys';

const ListCate = () => {
    const [categorys, setCategorys] = useState([]);
    const ListAllCate = async () => {
        const { data } = await ListCates();
        setCategorys(data.categorys)
    }
    useEffect(() => {
        ListAllCate()
    }, [])
    return (
        <div className='col-9 border ' >
            <h3 className='text-center'>Danh sách loại hàng</h3>
            <div className='d-flex justify-content-between'>
                <Link to="/admin/them-san-pham" className='btn btn-outline-primary mb-2'>Thêm mới</Link>
            </div>
            <div classNames="table table-responsive-xxl mt-3">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên danh mục</th>
                            <th>Số lượng</th>
                            <th>Thao tác</th>

                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map((item, index) => {
                            return (
                                <tr key={item._id} >
                                    <td >{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td >{item.products.length}</td>
                                    <td>
                                        <Link to="/admin/cap-nhat-san-pham" className='btn btn-primary me-2'>Cập nhật</Link>
                                        <button className='btn btn-primary'>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Outlet />
        </div>
    )
}

export default ListCate