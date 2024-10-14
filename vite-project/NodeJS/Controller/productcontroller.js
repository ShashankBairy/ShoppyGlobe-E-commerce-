import Product from '../Model/productmodel.js'
import mongoose from 'mongoose';


// to get the all the products
export const getAllproducts = async(req,res)=>{
    try{
        const products = await Product.find(); // fetch all the products from the database
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({ error: 'Error fetching products',details: err.message });
    }
}


// to get a product by its ID
export const getProductsbyid = async(req,res)=>{
    const{id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid product ID format' });
    }
    try{
        const product = await Product.findById(id); // find the product by its ID
        if(!product){
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }catch(err){
        console.error("Error fetching product:", err);
        res.status(500).json({ error: 'Error fetching product',details: err.message });
    }
}