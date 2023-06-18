import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../../pages/layout-admin/header/Header'
import MenuLeft from '../../../pages/layout-admin/MenuLeft'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ListCates } from '../../../instances/categorys'
import { schmeAddProduct } from '../../../pages/schemas/products'
import { addProduct } from '../../../instances/products'

const AddProduct = () => {
    const [categorys, setCategorys] = useState([]);
    const ListAllCate = async () => {
        const { data } = await ListCates();
        setCategorys(data.categorys)
    }
    useEffect(() => {
        ListAllCate()
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schmeAddProduct)
    })
    const onHandleSubmit = async (product) => {
        try {
            const { response } = await addProduct(product);
            console.log(response);
        } catch (error) {

        }
    }
    return (
        <div className='container-xxl'>
            <HeaderAdmin />
            <div className='row row-cols-2 container-xxl border'>
                <MenuLeft />
                <section className='col-9 '>
                    <h3 className='text-center mt-2 mb-2'>Thêm sản phẩm</h3>
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Tên sản phẩm</label>
                                <input type="text" placeholder='Nhập tên sản phẩm' className='form-control'{...register('name')} />
                                <div className='text-danger'>{errors.name && errors.name.message}</div>
                            </div>
                            <div>
                                <label htmlFor="">Số lượng sản phẩm</label>
                                <input type="number" className='form-control' {...register('quantity')} />
                                <div className='text-danger'>{errors.quantity && errors.quantity.message}</div>
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
                            <div className='text-danger'>{errors.image && errors.image.message}</div>
                        </div>

                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="name" className='form-lable'>Gía gốc</label>
                                <input type="number"
                                    placeholder='Nhập giá gốc sản phẩm '
                                    className='form-control'
                                    {...register('original_price')}
                                />
                                <div className='text-danger'>{errors.original_price && errors.original_price.message}</div>
                            </div>
                            <div>
                                <label htmlFor="name" className='form-lable'>Gía khuyến mại</label>
                                <input type="number"
                                    placeholder='Nhập giá khuyến mại sản phẩm'
                                    className='form-control'
                                    {...register('price')}
                                />
                                <div className='text-danger'>{errors.price && errors.price.message}</div>
                            </div>
                        </div>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="">Danh mục</label>
                                <select className='form-select'{...register('categoryId')} >
                                    <option value="">Vui lòng chọn</option>
                                    {categorys.map((item) => {
                                        return (
                                            <option key={item._id} value={item._id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                                <div className='text-danger'>{errors.categoryId && errors.categoryId.message}</div>
                            </div>
                            <div>
                                <label htmlFor="">Kích cỡ</label>
                                <select className='form-select'>
                                    <option value="">kích cỡ</option>
                                    <option value="">41</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Số lượng</label>
                                <input
                                    type="number"
                                    className='form-control'
                                    {...register('quantity')}
                                />
                                <div className='text-danger'>{errors.quantity && errors.quantity.message}</div>
                            </div>
                        </div>
                        <div className='row row-cols-2'>
                            <div>
                                <label htmlFor="">Mô tả</label>
                                <textarea
                                    className='form-control'
                                    placeholder='Nhập mô tả'
                                    cols="30" rows="5"
                                    {...register("description")}
                                ></textarea>
                                <div className='text-danger'>{errors.description && errors.description.message}</div>
                            </div>
                            <div>
                                <label htmlFor="">Mô tả dài</label>
                                <textarea
                                    className='form-control'
                                    placeholder='Nhập mô tả dài'
                                    cols="30"
                                    rows="5"
                                    {...register("salient_features")}
                                ></textarea>
                                <div className='text-danger'>{errors.salient_features && errors.salient_features.message}</div>
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