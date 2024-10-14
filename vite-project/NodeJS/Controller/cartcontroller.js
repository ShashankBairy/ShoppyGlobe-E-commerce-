import Cart from "../Model/cartmodel.js";
import Product from '../Model/productmodel.js';

// Add to cart
export const addTocart = async (req, res) => {
    console.log("User:", req.user); // Debug log
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId); // find the product ID
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        let cart = await Cart.findOne({ userId: req.user.userId }); // fetches the userID
        if (!cart) {
            cart = new Cart({ userId: req.user.userId, products: [] });
        }

        if (!Array.isArray(cart.products)) {
            cart.products = [];
        }

        const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }
        await cart.save();
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update cart item
export const updateCartitem = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId });  // fetches the userID
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const productIndex = cart.products.findIndex(p => p.product.toString() === req.params.id); // fetches the product ID
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        cart.products[productIndex].quantity = req.body.quantity; // updates the quantity of the product
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Remove cart item
export const removeCartitem = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId }); // fetches the user ID 
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.products = cart.products.filter(p => p.product.toString() !== req.params.id); // removes the product
        await cart.save();
        res.json({ message: "Item removed from cart" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
