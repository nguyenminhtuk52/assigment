import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./routers/product";
import userRouter from "./routers/auth";
import categoryRouter from "./routers/category";
//
const app =express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/api",productRouter);
app.use("/api",categoryRouter);
app.use("/api",userRouter);
//
mongoose.connect("mongodb://localhost:27017/asm")
.then(()=>console.log("ket noi thanh cong "))
.catch(erorr=>console.log(erorr))
//
app.listen(8000,()=>{
    console.log("Dang chajy server port 8000")
})