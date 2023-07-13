import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../../pages/layout-client/Header/Header';
import Footer from '../../../../pages/layout-client/footer/Footer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ListOneUser, updateUser } from '../../../../instances/accounts';
import { schemaUser } from '../../../../pages/schemas/account';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateInfoUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaUser),
        defaultValues: async () => {
            return await getById(id)
        }
    })
    const onHandleSubmit = async (user) => {
        try {
            const response = await updateUser(id, user)
            toast.success('Cập nhật thành công!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate("/thong-tin-nguoi-dung")
            }, 2000)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const getById = async (id) => {
        const { data } = await ListOneUser(id);
        return data.users;
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Header />
            <h3 className='text-center mt-5 mb-3'>Cập nhật thông tin người dùng</h3>
            <form className='container mb-5' onSubmit={handleSubmit(onHandleSubmit)}>
                <div className='row row-cols-2'>
                    <div>
                        <label htmlFor="">Tên người dùng</label>
                        <input type="text" className='form-control' {...register("name")} />
                        <div className='text-danger'>
                            {errors.name && errors.name.message}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control'{...register("email")} />
                    </div>
                </div>
                <div className='row row-cols-2'>
                    <div>
                        <label htmlFor="">Mật khẩu</label>
                        <input type="password" className='form-control' {...register("password")} />
                    </div>
                    <div>
                        <label htmlFor="">Địa chỉ</label>
                        <input type="text" className='form-control' {...register("address")} />
                        <i>*Nhập đúng địa chỉ để tránh tình trạng chuyển sai nơi nhận</i>
                    </div>
                </div>
                <div className='row row-cols-2'>

                    <div>
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" className='form-control' {...register("numberPhone")} />
                    </div>
                    <div>
                        <label htmlFor="">Giới tính</label>
                        <input type="text" className='form-control'{...register("gender")} />
                    </div>
                </div>
                <div className='row row-cols-2'>
                    <div>
                        <label htmlFor="">Ngày sinh</label>
                        <input type="date" className='form-control' {...register("date")} />
                    </div>

                </div>
                <div className='text-center'>
                    <button className='btn btn-primary mt-3 '>
                        <ToastContainer />
                        Cập nhật
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default UpdateInfoUser