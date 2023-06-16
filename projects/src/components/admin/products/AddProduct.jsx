import React from 'react'
import HeaderAdmin from '../../../pages/layout-admin/header/Header'
import MenuLeft from '../../../pages/layout-admin/MenuLeft'

const AddProduct = () => {
    return (
        <div>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl '>
                <MenuLeft />
                <section className='col-9 '>
                    <h3 className='text-center mt-2 mb-2'>Thêm sản phẩm</h3>
                    <form action="" className=''>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Tên sản phẩm</label>
                                <input type="text" placeholder='Nhập tên sản phẩm' className='form-control' />
                            </div>
                            <div>
                                <label htmlFor="">Số lượng sản phẩm</label>
                                <input type="number" min={0} max={1000} className='form-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'> image</label>
                            <input type="file" placeholder='Chọn hình ảnh cho sản phẩm' className='form-control' />
                        </div>

                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Gía gốc</label>
                                <input type="number" placeholder='Nhập giá gốc sản phẩm ' className='form-control' />
                            </div>
                            <div>
                                <label htmlFor="name" className='form-lable'>Gía khuyến mại</label>
                                <input type="number" min={0} placeholder='Nhập giá khuyến mại sản phẩm' className='form-control' />
                            </div>
                        </div>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="">Danh mục</label>
                                <select className='form-select'>
                                    <option value="">Lựa chọn danh mục</option>
                                </select>

                            </div>
                            <div>
                                <label htmlFor="">Kích cỡ</label>
                                <select className='form-select'>
                                    <option value="">kích cỡ</option>
                                    <option value="">41</option>
                                </select>
                            </div>
                        </div>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="">Mô tả</label>
                                <textarea className='form-control' placeholder='Nhập mô tả' cols="30" rows="5"></textarea>
                            </div>
                            <div>
                                <label htmlFor="">Mô tả dài</label>
                                <textarea className='form-control' placeholder='Nhập mô tả dài' cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3">Thêm sản phẩm</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AddProduct