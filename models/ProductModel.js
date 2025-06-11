import mongoose from "mongoose";

const variatSchema = new mongoose.Schema({
    color:{type:String,required:true},
    stock:{type:Number,required:true},
    image:{type:String,required:true}
});

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    variants:[variatSchema]
},{timestamps:true})

export default mongoose.model("Product",productSchema);