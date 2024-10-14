import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username:{type:String, required: true }, // user's username
    password:{ type: String, required: true } // user's password
})

export default mongoose.model("User", userSchema);