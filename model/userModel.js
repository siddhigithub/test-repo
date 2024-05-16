//import { urlencoded } from "body-parser";
import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    }
});

export default mongoose.model("users",userSchema);