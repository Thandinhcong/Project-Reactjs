import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../../pages/layout-admin/header/Header'
import MenuLeft from '../../../pages/layout-admin/MenuLeft'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addCate } from '../../../instances/categorys'
import { schemaAddCate } from '../../../pages/schemas/categorys'

const AddCateries = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaAddCate)
    })
    const onHandleSubmit = async (cate) => {
        try {
            const { response } = await addCate(cate);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl border'>
                <MenuLeft />
                <section className='col-9 '>
                    <h3 className='text-center mt-2 mb-2'>Thêm danh mục</h3>
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Tên danh mục</label>
                                <input type="text" placeholder='Nhập tên sản phẩm' className='form-control'{...register('name')} />
                                <div className='text-danger'>{errors.name && errors.name.message}</div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'> image</label>
                            <input
                                type="file"
                                placeholder='Chọn hình ảnh cho danh mục'
                                className='form-control'
                                {...register("image")}
                            />
                            <div className='text-danger'>{errors.image && errors.image.message}</div>
                        </div>
                        <button className="btn btn-primary mt-3">Thêm </button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AddCateries