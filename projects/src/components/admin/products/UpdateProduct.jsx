import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../../pages/layout-admin/header/Header'
import MenuLeft from '../../../pages/layout-admin/MenuLeft'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getOneProduct } from '../../../instances/products'
import { schemaUpdateProduct } from '../../../pages/schemas/products'
import { ListCates } from '../../../instances/categorys'

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [selectCate, setSelectCate] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaUpdateProduct),
        defaultValues: async () => {
            return await fetchProductById(id)
        }
    })

    const onHandleSubmit = async (products) => {
        products.categoryId = selectCate
        const response = await UpdateProduct(id, products)
        navigate('/admin')
    }
    const fetchProductById = async (id) => {
        const { data } = await getOneProduct(id);
        console.log("data :", data);
        return data.products;
    }
    const handleCate = async () => {
        const { data } = await ListCates(data)
        setCategories(data.categorys)
    }
    useEffect(() => {
        handleCate()
    }, [])
    return (
        <div className='container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl '>
                <MenuLeft />
                <section className='col-9 border '>
                    <h3 className='text-center mt-2 mb-2'>Cập nhật sản phẩm</h3>
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Tên sản phẩm</label>
                                <input type="text" {...register('name')} placeholder='Nhập tên sản phẩm' className='form-control' />
                            </div>
                            <div>
                                <label htmlFor="">Số lượng sản phẩm</label>
                                <input type="number" {...register("quantity")} className='form-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className='form-lable'> image</label>
                            <input type="file" placeholder='Chọn hình ảnh cho sản phẩm' className='form-control'{...register("image")} />
                        </div>

                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Gía gốc</label>
                                <input type="number" placeholder='Nhập giá gốc sản phẩm ' className='form-control' {...register("original_price")} />
                            </div>
                            <div>
                                <label htmlFor="name" className='form-lable'>Gía khuyến mại</label>
                                <input type="number" min={0} placeholder='Nhập giá khuyến mại sản phẩm' className='form-control' {...register("price")} />
                            </div>
                        </div>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="">Danh mục</label>
                                <select
                                    className='form-select'
                                    {...register('categoryId')}
                                    value={selectCate}
                                    onChange={(e) => setSelectCate(e.target.value)}
                                >
                                    {categories.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item.name}</option>
                                        );
                                    })}
                                </select>

                            </div>
                            <div>
                                <label htmlFor="">Kích cỡ</label>
                                <input type="text" className='form-control' {...register("size")} />
                            </div>
                        </div>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="">Mô tả</label>
                                <textarea className='form-control' placeholder='Nhập mô tả' cols="30" rows="5" {...register("description")}></textarea>
                            </div>
                            <div>
                                <label htmlFor="">Mô tả dài</label>
                                <textarea className='form-control' placeholder='Nhập mô tả dài' cols="30" rows="5" {...register("salient_features")}></textarea>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3">Cập nhật sản phẩm</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UpdateProduct