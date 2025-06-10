import mongoose from "mongoose";
export async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}ecommerce_db`)
        console.log("Database connected Successfully");
        
    } catch (error) {
        console.log("Error connecting to MongoDB",error);
        
    }

}