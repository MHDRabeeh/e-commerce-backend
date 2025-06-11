import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js'


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
connectDB();


app.use('/api',userRoute);
app.use("/api/admin",adminRoute)

app.listen(PORT,(err)=>{
    if(!err){
        console.log("server is running PORT:",PORT);
        
    }else{
        console.log("Sever Error:",err);
        
    }

})