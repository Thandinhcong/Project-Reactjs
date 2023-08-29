import Cart from "../model/Cart";
import Product from "../model/product";
export const listCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
        if (!cart) {
            return res.status(404).json({ message: "Gio hàng không tồn tại" });
        }
        res.status(200).json({ cart })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
export const AddCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }
        const cartItem = {
            product: productId,
            quantity: quantity || 1,
        };
        let cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            // Tạo giỏ hàng mới nếu chưa tồn tại
            cart = new Cart({
                user: req.user.id,
                items: [cartItem],
            });
        }
        else {
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingItem = cart.items.find(
                (item) => item.product.toString() === productId
            );

            if (existingItem) {
                // Nếu sản phẩm đã tồn tại, cập nhật số lượng
                existingItem.quantity += quantity || 1;
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm mới vào mảng items
                cart.items.push(cartItem);
            }
        }
        await cart.save();
        res.status(200).json({ message: 'Sản phẩm đã được thêm vào giỏ hàng' });
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}