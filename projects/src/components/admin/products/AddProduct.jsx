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
                        <div>
                            <label htmlFor="name" className='form-lable'>Tên sản phẩm</label>
                            <input type="text" placeholder='Nhập tên sản phẩm' className='form-control' />
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'> image</label>
                            <input type="file" placeholder='Nhập tên sản phẩm' className='form-control' />
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'>Name</label>
                            <input type="text" placeholder='Nhập tên sản phẩm' className='form-control' />
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'>Name</label>
                            <input type="text" placeholder='Nhập tên sản phẩm' className='form-control' />
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'>Name</label>
                            <input type="text" placeholder='Nhập tên sản phẩm' className='form-control' />
                        </div>
                        <button className="btn btn-primary">Thêm sản phẩm</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AddProduct