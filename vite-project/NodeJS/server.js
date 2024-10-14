    import express from "express";
    import mongoose from "mongoose";
    import authroute from "./Routes/authroute.js"
    import cartroute from "./Routes/cartroute.js"
    import productroute from "./Routes/productroute.js"
    import fetch from "node-fetch";
    import Product from "./Model/productmodel.js"

    const app = new express();
    app.use(express.json()); // middleware to parse JSON bodies
    app.use(authroute);
    app.use(cartroute);
    app.use(productroute);

    app.listen(2024,()=>{
        console.log("Server is running on port 2024")
    })

    mongoose.connect("mongodb://localhost:27017"); // url to connect mongodb
    const db = mongoose.connection;
    db.on("open",async()=>{
        console.log("Connected to MongoDB");

        const count = await Product.countDocuments(); // checks if products already exists
        if(count  === 0){ // if count is zero, then it fetches the api and stores the data in database 
            try{
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                const products = data.products.map(product =>({
                   name:product.title,
                   price: product.price,
                   description: product.description,
                   stockQuantity: product.stock
                }))
                await Product.insertMany(products); // add fetched products to MongoDB
                console.log("Products added to MongoDB");
            }catch(err){
                console.error("Error adding products:", err);
            }
        }else {
            console.log("Products already exist in the database");
        }
    })

    db.on("error",()=>{
        console.log("Something went wrong")
    })
