import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { showProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/get',showProduct)

export default router;
