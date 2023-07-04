import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { schemaUpdateCate } from '../../../pages/schemas/categorys';
import { ListOneCate, updateCate } from '../../../instances/categorys';
import HeaderAdmin from '../../../pages/layout-admin/header/Header';
import MenuLeft from '../../../pages/layout-admin/MenuLeft';

const UpdateCate = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaUpdateCate),
        defaultValues: async () => {
            return await getById(id)
        }
    })

    const onHandleSubmit = async (product) => {
        try {
            const response = await updateCate(id, product);
            console.log({ response });

        } catch (error) {
            console.log(error);
        }
    }
    const getById = async (id) => {
        try {
            const { data } = await ListOneCate(id);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl '>
                <MenuLeft />
                <section className='col-9 border '>
                    <h3 className='text-center mt-2 mb-2'>Cập nhật danh mục</h3>
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Tên sản phẩm</label>
                                <input
                                    type="text"
                                    {...register('name')}
                                    placeholder='Nhập tên danh mục'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'> image</label>
                            <input
                                type="file"
                                placeholder='Chọn hình ảnh cho sản phẩm'
                                className='form-control'
                                {...register("image")}
                            />
                            <div>

                                {errors.image && errors.image.message}
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3">Cập nhật danh mục</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UpdateCate