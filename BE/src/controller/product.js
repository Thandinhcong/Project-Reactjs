import Product from "../model/product";
import Category from "../model/category";
import Joi from "joi";

const schemaProduct = Joi.object({
    name: Joi.string().required("Vui lòng nhập tên"),
    price: Joi.number().required("Vui lòng nhập số tiền"),
    original_price: Joi.number(),
    description: Joi.string().required("Nhập mô tả"),
    salient_features: Joi.string().required(),
    categoryId: Joi.string(),
    image: Joi.string(),
    quantity: Joi.number(),
    sizes: Joi.array(),
})


export const ListProduct = async (req, res) => {
    const { _page = 1, _limit = 20, _sort = "createAt", _order = "asc" } = req.query;
    const options = {
        limit: 20,
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order === "desc" ? -1 : 1,
        }
    }
    try {
        const { docs: products } = await Product.paginate({}, options)
        if (!products) {
            res.status(400).json({
                message: "Không có sản phẩm nòa",
            })
        }
        else {
            res.status(200).json({
                products,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
}
export const ListOneProduct = async (req, res) => {
    try {
        const products = await Product.findOne({ _id: req.params.id }).populate("categoryId")
        if (!products) {
            res.status(400).json({
                message: "Không có sản phẩm nòa",
            })
        }
        else {
            res.status(200).json({
                message: "List product",
                products,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
}
export const Addproduct = async (req, res) => {
    try {
        const { error } = schemaProduct.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map(err => err.message);
            res.status(400).json({
                message: errors,
            })
        }
        const products = await Product.create(req.body);
        await Category.findByIdAndUpdate(products.categoryId, {
            $addToSet: {
                products: products._id,
            },
        });
        if (!products) {
            return res.status(400).json({
                message: "Không thể tạo sản phẩm"
            })
        } else {

            return res.status(201).json({
                message: "Thêm sản phẩm thành công",
                data: products,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Lỗi xảy ra khi tạo sản phẩm",
            error: error.message,
        });
    }
}
export const UpdateProduct = async (req, res) => {
    try {

        const data = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!data) {
            return res.status(400).json({
                message: "Không có sản phẩm nòa",
            });
        }

        const oldCategoryId = data.categoryId;
        await Category.findByIdAndUpdate(
            oldCategoryId,
            { $pull: { products: req.params.id } }
        );

        const newCategoryId = req.body.categoryId;
        if (newCategoryId) {
            await Category.findByIdAndUpdate(
                newCategoryId,
                { $addToSet: { products: req.params.id } }
            );
        }

        return res.status(200).json({
            message: "update product success",
            data: data,
        });


    } catch (error) {
        res.status(500).json({
            message: "có lỗi zảy ra",
        })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);

        if (!deletedProduct) {
            return res.status(400).json({
                message: "Không có sản phẩm nào",
            });
        }
        const updatedCategory = await Category.findOneAndUpdate(
            { products: req.params.id },
            { $pull: { products: req.params.id } },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(400).json({
                message: "Không tìm thấy danh mục chứa sản phẩm",
            });
        }

        return res.status(200).json({
            message: "Xóa sản phẩm thành công và đã cập nhật danh mục",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
