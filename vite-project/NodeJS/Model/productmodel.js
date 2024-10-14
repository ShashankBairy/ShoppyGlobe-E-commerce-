import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, // product name
    price: { type: Number, required: true }, // product price
    description: { type: String, required: true }, // product description
    stockQuantity: { type: Number, required: true } // product stock quantity
})

    
export default mongoose.model("Product", productSchema);

