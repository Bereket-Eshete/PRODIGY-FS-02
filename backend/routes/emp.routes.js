import express from "express";
import {
  createEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/emp.controller.js";
const router = express.Router();
import authMidleware from "../midleware/auth.midleware.js";
router.post("/create", authMidleware, createEmployee);
router.get("/", authMidleware, getEmployee);
router.get("/:id", authMidleware, getEmployeeById);
router.put("/update/:id", authMidleware, updateEmployee);
router.delete("/delete/:id", authMidleware, deleteEmployee);

export default router;
