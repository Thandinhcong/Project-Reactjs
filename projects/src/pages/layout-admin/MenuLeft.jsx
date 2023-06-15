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
        <Link to="danh-sach-binh-luan" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    laptop_mac
                </span>
                <p className="mt-2">Comment</p>
            </div>
        </Link>
        <Link to="" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    tablet_mac
                </span>
                <p className="mt-2">Máy tính bảng</p>
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
        <Link to="user" className="text-decoration-none text-dark">
            <div className="d-flex gap-1 mt-4">
                <span className="material-symbols-outlined fs-1">
                    account_circle
                </span>
                <p className="mt-2">User</p>
            </div>
        </Link>
    </div>
}

export default MenuLeft