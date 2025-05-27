import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controller.js";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts)

productRoutes.post("/", createProduct)

productRoutes.get("/:id", getProduct)

productRoutes.put("/:id", updateProduct)

productRoutes.delete("/:id", deleteProduct)

export default productRoutes;