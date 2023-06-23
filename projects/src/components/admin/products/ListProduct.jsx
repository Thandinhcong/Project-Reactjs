import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProduct } from '../../../instances/products';
const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [itemsPerPage] = useState(4);

    const ListProduct = async () => {
        const { data } = await getAllProduct();
        setProducts(data.products);
    };
    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id)
            const confilm = window.confirm("Bạn có muốn xóa không ?")
            if (confilm) {
                const updateProduct = products.filter((item) => item._id !== id)
                setProducts(updateProduct);
                await products.deleteOne
                alert("Xóa thành công")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        ListProduct();
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
                                    <Link to={`/admin/cap-nhat-san-pham/${item._id}`} className=' me-2'><img width="15" height="15" src="https://img.icons8.com/ios/50/edit--v1.png" alt="edit--v1" /></Link>
                                    <button onClick={() => handleDeleteProduct(item._id)} className='border-0 bg-white'><span className="material-symbols-outlined">delete</span></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Hiển thị các nút phân trang */}
                <div>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            className="btn btn-primary me-2"
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
