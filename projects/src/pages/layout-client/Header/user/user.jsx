import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './user.css';
import { getAllProduct } from '../../../../instances/products';

const User = () => {
    const [products, setProducts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLogin, setIsLogin] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    })
    const navigate = useNavigate();
    const ListProduct = async () => {
        try {
            const { data } = await getAllProduct();
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearchInputChange = (event) => {
        setSearchKeyword(event.target.value);
        searchProducts(event.target.value);
    };

    const searchProducts = (keyword) => {
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setSearchResults(results);
    };
    useEffect(() => {
        ListProduct();
    }, []);

    const handleLogout = () => {
        alert("Đăng xuất thành công");
        navigate("/")
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setIsLogin(null);
    };

    return (
        <div className='signinn' >
            <div className='item-signin ms-5'>
                {isLogin ? (
                    <div>
                        <div className="user-icon-wrapper">
                            <FontAwesomeIcon icon={faUser} className='me-4' />
                            <div className="user-menu">
                                <ul>
                                    <li className='d-flex gap-1'>
                                        <span class="material-symbols-outlined">manage_accounts</span>
                                        <Link to="/thong-tin-nguoi-dung">Thông tin </Link>
                                    </li>
                                    <li className='d-flex gap-1'>
                                        <span class="material-symbols-outlined">logout</span>
                                        <button onClick={handleLogout}>Đăng xuất</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Link to='/signin' className='user-icon text-dark'>
                        <FontAwesomeIcon icon={faUser} className='me-4' />
                    </Link>
                )}
                <Link to='/' className='cart text-dark me-4'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <Link to='/san-pham-yeu-thich' className='favoriteicon text-decoration-none text-dark'>
                    <span className="material-symbols-outlined mt-1 me-3">favorite</span>
                </Link>
                <div className='search'>
                    <input
                        type='text'
                        className='border'
                        placeholder='Tìm kiếm sản phẩm'
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                    />
                </div>

            </div>

            <div className='keywrod'>

                {searchKeyword && (
                    <div className='search-results'>
                        {searchResults.map((product) => (
                            <div
                                key={product._id}
                                className='search-result-item'
                            >
                                <Link
                                    to={`/chi-tiet-san-pham/${product._id}`}
                                    className='text-decoration-none'
                                >
                                    <p>{product.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
