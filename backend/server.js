import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.post("/", async (req, res) => {
    const product = req.body;
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "please fill all filds"})
    }

    const newProduct  = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error(`Error on the product creatig ${error.massage}`);        
        res.status(500).json({success: false, message: "Server Error"})
    }
})

// console.log(process.env.MONGO_URI);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");    
})