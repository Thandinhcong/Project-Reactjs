import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ListCate = () => {
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
                            <th scope="col">Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th scope="col">Giá khuyến mại</th>
                            <th>Giá gốc</th>
                            <th>Loại áo</th>
                            <th>Mô tả</th>
                            <th>Mô tả dài</th>
                            <th>Thao tác</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td >1</td>
                            <td>R1C2</td>
                            <td><img src="https://shopdunk.com/images/thumbs/0008045_gold_550.webp" width={50} /></td>
                            <td >Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/admin/cap-nhat-san-pham" className='btn btn-primary me-2'>Cập nhật</Link>
                                <button className='btn btn-primary'>Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Outlet />
        </div>
    )
}

export default ListCate