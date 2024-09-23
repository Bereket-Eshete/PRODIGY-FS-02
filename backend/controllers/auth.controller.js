import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "User already exist" });
    }
    const hashpassword = await bcryptjs.hash(password, 10);
    console.log(hashpassword);
    const newUser = new User({ email, password: hashpassword });
    await newUser.save();
    res.status(201).json({ message: "user created sucessfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid credinatials" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credinatials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    res.status(200).json({ message: "login successfully", token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};
