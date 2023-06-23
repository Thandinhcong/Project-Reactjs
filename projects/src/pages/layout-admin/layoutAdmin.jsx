import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';


const LayoutAdminCheck = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            alert("Vui lòng đăng nhập tài khoản để truy cập");
            return navigate('/');
        }
        else if (user && user.role !== "admin") {
            alert("Đường dẫn không tồn tại")
            return navigate('/');
        }
    }, [])
    return (
        <div><Outlet /></div>
    )
}

export default LayoutAdminCheck