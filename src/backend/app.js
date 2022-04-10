import express from "express";
import nodemon from "nodemon";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import productRouter from "./routers/product";
//
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api",productRouter);
//
const PORT =8005;
app.listen(PORT,()=>{
    console.log(`Ban dang chay cong PORT: ${PORT}`);
});
//
mongoose.connect("mongodb://localhost:27017/asm")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch(error => console.log(error))
