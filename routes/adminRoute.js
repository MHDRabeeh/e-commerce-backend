import express from 'express'
import upload from '../middleware/uploadMiddleware.js'
import { createProduct } from '../controllers/productController.js'

const router = express.Router()
router.post("/add-product",upload.any(),createProduct)
export default router
