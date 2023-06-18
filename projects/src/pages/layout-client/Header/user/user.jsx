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
    const handleSearchInputBlur = () => {
        // Reset kết quả tìm kiếm khi rời khỏi khu vực tìm kiếm
        setSearchKeyword("");
        setSearchResults([]);
    };
    useEffect(() => {
        ListProduct();
    }, []);

    return (
        <div className='signinn' >
            <div className='item-signin'>
                <Link to='/signin' className='text-dark'>
                    <FontAwesomeIcon icon={faUser} className='me-4' />
                </Link>
                <Link to='' className='text-dark me-4'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <div className='search'>
                    <input

                        type='text'
                        className='border'
                        placeholder='Tìm kiếm sản phẩm'
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                        onBlur={handleSearchInputBlur}
                    />
                </div>

            </div>

            <div className='keywrod'>

                {searchKeyword && (
                    <div className='search-results'>
                        {searchResults.map((product) => (
                            <div key={product._id} className='search-result-item'   >
                                <Link to={`/chi-tiet-san-pham/${product._id}`} className='text-decoration-none'>
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
