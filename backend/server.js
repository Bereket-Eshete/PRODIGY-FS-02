import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./DB/connectDB.js";
import employeeRoutes from "./routes/emp.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/employee", employeeRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is on http://localhost:5000");
});
