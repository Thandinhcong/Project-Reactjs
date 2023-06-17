import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllProduct } from '../../../instances/products'

const ListProduct = () => {
    const [products, setProducts] = useState([])
    const ListProduct = async () => {
        const { data } = await getAllProduct();
        setProducts(data.products)
        console.log(data);
        console.log(products);
    }
    useEffect(() => {
        ListProduct()
    }, [])
    return (
        <div className='col-9 border ' >
            <h3 className='text-center'>Danh sách sản phẩm</h3>
            <div className='d-flex justify-content-between'>
                <select name="" id="" className='form-select' style={{ width: '300px' }}>
                    <option value="" className='form-option'>Lọc sản phẩm theo giá</option>
                </select>
                <Link to="/admin/them-san-pham" className='btn btn-outline-primary'>Thêm sản phẩm</Link>

            </div>
            <div className="table-responsive  mt-3">
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá khuyến mại</th>
                            <th>Giá gốc</th>
                            <th>số lượng</th>
                            <th>Mô tả</th>
                            <th>Mô tả dài</th>
                            <th>Thao tác</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => {
                            return <tr key={item._id} >
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td><img src={item.image} width={50} /></td>
                                <td>{item.price}</td>
                                <td>{item.original_price}</td>
                                <td>{item.quantity}</td>
                                <td >{item.description}</td>
                                <td className=''>{item.salient_features}</td>
                                <td>
                                    <Link to="/admin/cap-nhat-san-pham" className=' me-2'><img width="15" height="15" src="https://img.icons8.com/ios/50/edit--v1.png" alt="edit--v1" /></Link>
                                    <button className='border-0 bg-white'><span class="material-symbols-outlined">delete</span></button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListProduct