import React, { useState } from 'react'
import HeaderAdmin from '../../../pages/layout-admin/header/Header'
import MenuLeft from '../../../pages/layout-admin/MenuLeft'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addCate } from '../../../instances/categorys'
import { schemaAddCate } from '../../../pages/schemas/categorys'
import { UploadImage } from '../../../instances/products'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddCateries = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaAddCate)
    })
    const onHandleSubmit = async (cate) => {
        if (typeof image !== "string") return;
        cate.image = image;
        try {
            await addCate(cate);
            alert("Thêm thành công");
            toast.success("Thêm thành công ", {
                position: toast.POSITION.TOP_RIGHT
            })
            setTimeout(() => {
                navigate('/admin')
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }
    const onChangeFile = async (e) => {
        const files = e.target.files[0];
        if (files) {
            try {
                const Res = await UploadImage({
                    file: files,
                    upload_preset: "demo-upload",
                });
                if (Res) {
                    setImage(Res.data.url);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
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
                                <input type="text"
                                    placeholder='Nhập tên sản phẩm'
                                    className='form-control'{...register('name')}
                                />
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
                                onChange={onChangeFile}
                            />
                            <div className='text-danger'>{errors.image && errors.image.message}</div>
                        </div>
                        <button className="btn btn-primary mt-3">
                            <ToastContainer />
                            Thêm
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AddCateries