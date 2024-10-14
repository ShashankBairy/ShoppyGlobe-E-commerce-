import express from "express";
import { addTocart, updateCartitem, removeCartitem} from "../Controller/cartcontroller.js";
import { authenticateToken } from "../Controller/authcontroller.js";

const router = express.Router();

router.post('/cart', authenticateToken, addTocart); // define POST route to add an item to the cart
router.put('/cart/:id', authenticateToken, updateCartitem); // define PUT route to update an item in the cart, give product id here
router.delete('/cart/:id',authenticateToken,removeCartitem); // define DELETE route to delete an item in the cart, give product id here

export default router;
