import express from "express";
import { registerUser, login } from "../Controller/authcontroller.js";

const router = express.Router();

router.post("/register",registerUser); // define POST route for user registration
router.post('/login',login); // define POST route for user login

export default router;