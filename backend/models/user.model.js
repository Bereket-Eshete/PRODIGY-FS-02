import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    lastLoginDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("user", UserSchema);
