import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Input from "../components/Input";
import axios from "axios";
export const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const API_URL = `http://localhost:5000/api/auth`;
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      password,
    };
    axios
      .post(`${API_URL}/login`, data)
      .then((response) => {
        setLoading(false);
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/Home");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50  backdrop:-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden m-auto"
    >
      <div className="p-9">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text">
          {" "}
          Welcome Back
        </h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex iteam-center mb-6">
            <Link
              to={"/forgot-password"}
              className="text-sm text-green-400 hover:underline"
            >
              forgot password?
            </Link>
          </div>
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500  focus:ring-offset-2 focus:ring-offset-gray-900 transition dueation-200"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader className="size-6 animate-spin mx-auto" />
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Do not have an account?{" "}
          <Link to={"/signup"} className="text-green-400 hover:underline">
            {" "}
            Signup
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
export default Login;
