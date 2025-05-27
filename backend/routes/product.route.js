import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.error(`Error on the Product viewing ${error.message}`);
        res.status(500).json({success: false, message: "Server Error"});        
    }
})

productRoutes.post("/", async (req, res) => {
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

productRoutes.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.error(`Error on the Product viewing ${error.message}`);
        res.status(500).json({success: false, message: "Server Error"});        
    }
})

productRoutes.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {name, price, image} = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success: false, message: "no such product"})
        }

        const updatedProducts = await Product.findByIdAndUpdate(id,{
            name,
            price,
            image,
        },{ new: true});

        res.status(200).json({success: true, data: updatedProducts})
    } catch (error) {
        console.error(`Error on the Product viewing ${error.message}`);
        res.status(500).json({success: false, message: "Server Error"});        
    }
})

productRoutes.delete("/:id", async (req, res) => {
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

export default productRoutes;