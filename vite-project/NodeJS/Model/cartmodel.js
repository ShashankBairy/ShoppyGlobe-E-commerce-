import mongoose from "mongoose"

const cartItemschema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, // reference to the user, indicating the user who owns this cart 
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // reference to th product, indicating the specific product added to the cart
        quantity: { type: Number, required: true }
    }]
})

export default mongoose.model("Cart", cartItemschema);