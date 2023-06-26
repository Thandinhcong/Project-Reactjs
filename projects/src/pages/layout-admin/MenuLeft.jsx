import React from 'react'
import { Link } from 'react-router-dom'

const MenuLeft = () => {
    return <div className="admin-cate container col-3  pt-5  border">
        <Link to="/admin" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 border ">
                <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/clothes.png" alt="clothes" />
                <p className="mt-2 ">Quần áo</p>
            </div>
        </Link>
        <Link to="/admin/loai-hang" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <img width="50" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-trademark-copyright-law-flaticons-flat-flat-icons-2.png" alt="external-trademark-copyright-law-flaticons-flat-flat-icons-2" />
                <p className="mt-3">Loại hàng</p>
            </div>
        </Link>
        <Link to="/admin/tai-khoan" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
                <p className="mt-2">Tài khoản</p>
            </div>
        </Link>
        <Link to="" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    earbuds_battery
                </span>
                <p className="mt-2">ÂM thanh</p>
            </div>
        </Link>
        <Link to="/admin/thong-ke" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <img width="30" height="30" src="https://img.icons8.com/dotty/80/analytics.png" alt="analytics" />
                <p className="mt-2">Thống kê</p>
            </div>
        </Link>
    </div>
}

export default MenuLeft