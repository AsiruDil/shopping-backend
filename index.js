import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routers/userRouter.js";

dotenv.config()
let app=express();

const mongodbURI = process.env.MONGO_URI

mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("connected to MongoDb");
    }
)
app.use(express.json());

app.use("/api/users",userRouter);

app.listen(3000,()=>{
    console.log("Server runnig on port 3000")
})  