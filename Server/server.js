require("dotenv").config();
const express=require("express");
const Cors=require("cors");
const connectDB=require("./db/connect");

const app=express();
app.use(Cors());
app.use(express.json());


const router=require("./routes/products");
app.use("/",router)
const PORT = process.env.PORT || 3000;

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }catch(error){
console.log(error);
    }
}
start();
module.exports = app;