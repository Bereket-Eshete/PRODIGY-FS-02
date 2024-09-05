import express from "express";
import {
  createEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/emp.controller.js";
const router = express.Router();

router.post("/create", createEmployee);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

export default router;
