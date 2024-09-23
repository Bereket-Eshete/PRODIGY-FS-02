import jwt from "jsonwebtoken";
const authMidleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user ID to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
export default authMidleware;
