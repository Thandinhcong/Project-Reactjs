import React from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
    return (
        <div className='col-9 border ' >
            <h3 className='text-center'>Danh sách sản phẩm</h3>
            <div className='d-flex justify-content-between'>
                <select name="" id="" className='form-select' style={{ width: '300px' }}>
                    <option value="" className='form-option'>Lọc sản phẩm theo giá</option>
                </select>
                <Link to="/admin/them-san-pham" className='btn btn-outline-primary'>Thêm sản phẩm</Link>

            </div>
            <div class="table table-responsive-xxl mt-3">
                <table class="table table-bordered table-striped">
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
                        <tr class="">
                            <td >1</td>
                            <td>R1C2</td>
                            <td><img src="https://shopdunk.com/images/thumbs/0008045_gold_550.webp" width={50} /></td>
                            <td >Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/cap-nhat-san-pham" className='btn btn-primary me-2'>Cập nhật</Link>
                                <button className='btn btn-primary'>Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListProduct