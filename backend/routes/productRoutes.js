import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, admin, createProduct);
router.get("/top", getTopProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, admin, updateProduct);
router.post("/:id/reviews", protect, createProductReview);
router.delete("/:id", protect, admin, deleteProduct);

export default router;
