import jwt from "jsonwebtoken"
import User from '../Model/usermodel.js'
import bcrypt from "bcrypt" // here we use bcrypt, it use used to hash the password before saving it into database.
// generally bcrypt is used for security purposes

export const registerUser = async(req,res)=>{
    const {username, password} = req.body;

    if(!username || !password) return res.status(400).json({ message: "Username and password are required" });

    try{
        const hashedPassword = await bcrypt.hash(password,10); // stores the resulting hashed password here. bcrypt is used to create hash the password. Hashing is one-way transformation that converts the password into a secure format 
        const user = new User({username, password: hashedPassword}); // User is created and saved in mongodb
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    }catch(err){
        res.status(500).json({ message: "Error registering user", error: err.message });
    }
}

export const login = async(req,res)=>{
    const {username,password} = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    try{
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({ message: "User not found" });
    
        const valid = await bcrypt.compare(password, user.password); // checks if the provided password matches the stored hash
        if(!valid) return res.status(400).json({ message: "Invalid password" });
    
        const accessToken = jwt.sign({userId: user._id}, "shashank",{expiresIn:"10h"}); // generates a JWT token for user
        res.send({ token:accessToken });
    }catch(err){
        res.status(500).json({ message: "Error logging in user", err });
    }
    
}

export const authenticateToken = (req,res,next) =>{ // middleware
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    console.log("Auth Header:", authHeader); // Debug log
    console.log("Token:", token); // Debug log
    if (!token) {
        return res.status(401).json({ message: "Access token is missing or invalid" });
    }
    
    jwt.verify(token, "shashank", (err,user)=>{ // verifies the token
        if (err) {
            console.log("JWT Verification Error:", err); // Debug log
            return res.status(403).json({ message: "Invalid token" });
        }
        console.log("Decoded User:", user);

        req.user = user; // attaches the decoded user to the input 
        next();
    });
}