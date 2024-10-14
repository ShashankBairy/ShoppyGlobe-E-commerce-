import express from "express";
import { getAllproducts, getProductsbyid } from "../Controller/productcontroller.js";

const router = express.Router();

router.get("/products",getAllproducts); // define GET route to fetch all the products
router.get("/products/:id",getProductsbyid); // define GET route to fetch a single product by its id

export default router;