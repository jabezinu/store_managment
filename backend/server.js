import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.error(`Error on the Product viewing ${error.message}`);
        res.status(500).json({success: false, message: "Server Error"});        
    }
})

app.post("/api/products", async (req, res) => {
    const product = req.body;
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "please fill all filds"})
    }

    const newProduct  = new Product(product)

    try {
        await newProduct.save();
        return res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error(`Error on the product creatig ${error.massage}`);        
        res.status(500).json({success: false, message: "Server Error"})
    }
})

app.delete("/api/products/:id", async (req, res) => {
    try {
        const {id} = req.params;        
        
        await Product.findByIdAndDelete(id);

        res.status(200).json({success: true, message: "product deleted"})
        console.log("text for testing");
        
    } catch (error) {
        console.error(`Error on the product deletion ${error.massage}`);        
        res.status(500).json({success: false, message: "Server Error"})
    }
})

// console.log(process.env.MONGO_URI);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");    
});