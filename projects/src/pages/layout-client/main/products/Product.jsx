import React, { useEffect, useState } from 'react';
import "../main.css";
import "./product.css";
import { Link } from 'react-router-dom';
import { getAllProduct } from '../../../../instances/products';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(10);
    const [sortOption, setSortOption] = useState("");

    const ListProductClient = async () => {
        const { data } = await getAllProduct();
        setProducts(data.products)
    }

    const handleLoadMore = () => {
        setVisibleProducts(prevCount => prevCount + 5);
    };

    const productsToShow = products.slice(0, visibleProducts);

    useEffect(() => {
        ListProductClient();
    }, [])

    const VND = new Intl.NumberFormat('vi-VN', {
        style: "currency",
        currency: "VND"
    })
    const handleSortOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);

        let sortedProducts = [...products];
        if (selectedOption === "highestPrice") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (selectedOption === "lowestPrice") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }

        setProducts(sortedProducts);
    };
    return (
        <div data-aos="fade-up" className='container'>
            <h2 className='text-center m-4'>SẢN PHẨM MỚI</h2>
            <nav className='menu text-center'>
                <a href="#">TẤT CẢ</a>
                <a href="#">QUẦN ÁO</a>
                <a href="#">GIÀY DÉP</a>
                <a href="#">PHỤ KIỆN & TRANG SỨC</a>
                <a href="#">TÚI XÁCH & BALO</a>
            </nav>
            <div className='form-select-cha'>
                <select className='form-select  mt-3 mb-3' value={sortOption} onChange={handleSortOptionChange}>
                    <option value="" className='w-25'>Lọc theo giá tiền</option>
                    <option value="highestPrice">Giá cao nhất</option>
                    <option value="lowestPrice">Giá thấp nhất</option>
                </select>
            </div>
            <div className='product-list'>
                {productsToShow.map((item, index) => {
                    return (
                        <div className='product-list-item' key={index}>
                            <Link to={`/chi-tiet-san-pham/${item._id}`}><img src={item.image} className='mb-2' alt="ảnh sản phẩm" /></Link>
                            <div className='products-list-icon d-flex justify-content-between'>
                                <p className='text-secondary'>KHÁC</p>
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                            </div>
                            <p className='name'>{item.name}</p>
                            <p className='fs-5 text-primary'>{VND.format(item.price)}</p>
                            <div className='d-flex justify-content-between'>
                                <p className='orinal'>{VND.format(item.original_price)}</p>
                                <span
                                    className='sale'
                                >
                                    {Math.round(((item.original_price - item.price) / item.original_price) * 100)}%
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='paging text-center '>
                {visibleProducts < products.length && (
                    <button className='btn btn-dark' onClick={handleLoadMore}>Xem thêm</button>
                )}
            </div>
        </div>
    )
}

export default Product;
