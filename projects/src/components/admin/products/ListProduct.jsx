import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, fetchProducts } from '../../../actions/products';

const ListProduct = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);
    const navigate = useNavigate();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/admin?page=${pageNumber}`);
    };
    const handleDeleteProduct = (productId) => {
        const confilm = window.confirm("Bạn có muốn xóa không ?");
        if (confilm) {
            dispatch(DeleteProduct(productId));

            const updatedProducts = products.filter((product) => product._id !== productId);
            dispatch({ type: 'products/fetchProducts', payload: updatedProducts });
            alert("Xóa thành công");
        }
    };
    useEffect(() => {
        dispatch(fetchProducts())
        const searchParams = new URLSearchParams(window.location.search);
        const pageParam = searchParams.get('page');
        if (pageParam) {
            setCurrentPage(parseInt(pageParam));
        }
    }, []);

    return (
        <div className="col-9 border ">
            <h3 className="text-center">Danh sách sản phẩm</h3>
            <div className="d-flex justify-content-between">
                <select className="form-select" style={{ width: '300px' }}>
                    <option value="" className="form-option">
                        Lọc sản phẩm theo giá
                    </option>
                </select>
                <Link to="/admin/them-san-pham" className="btn btn-outline-primary">
                    Thêm sản phẩm
                </Link>
            </div>
            <div className='mt-3 table-responsive overflow-x-auto w-100'>
                <table className='table table-bordered ' >
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá khuyến mại</th>
                            <th>Giá gốc</th>
                            <th>số lượng</th>
                            <th>Mô tả</th>
                            <th>Mô tả dài</th>
                            <th>Thao tác</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td><img src={item.image} width={100} /></td>
                                <td>{item.price}</td>
                                <td>{item.original_price}</td>
                                <td>{item.quantity}</td>
                                <td style={{ width: "30%" }}>{item.description}</td>
                                <td style={{ width: "30%" }}>{item.salient_features}</td>
                                <td style={{ width: "10%" }} className='d-flex'>
                                    <Link
                                        to={`/admin/cap-nhat-san-pham/${item._id}`}
                                        className=' me-2'
                                    >
                                        <img
                                            width="15"
                                            height="15"
                                            src="https://img.icons8.com/ios/50/edit--v1.png"
                                            alt="edit--v1"
                                        />
                                    </Link>
                                    <button
                                        onClick={() =>
                                            handleDeleteProduct(item._id)}
                                        className='border-0 bg-white'><span className="material-symbols-outlined">delete</span></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Hiển thị các nút phân trang */}
                <div>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            className={`btn btn-primary me-2 ${currentPage === index + 1 ? 'active' : ''}`}
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
