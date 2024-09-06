import React from "react";
import { useState } from "react";
import BackArrow from "../components/BackArrow";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      department,
      designation,
      salary,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/employee/create", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Employee Created Succesfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  return (
    <div className="p-6">
      {loading ? <Spinner /> : " "}

      <div className="max-w-md w-full bg-gray-800 bg-opacity-50  backdrop:-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden m-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold my-6  bg-gradient-to-r from-sky-400 to bg-emerald-500 text-transparent bg-clip-text font-serif">
            Create Employee
          </h1>
          <form onSubmit={handleForm}>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className="w-full pl-2 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2  focus:ring-green-500 text-white 
              placeholder-gray-400 transition duration-200 mb-3"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className="w-full pl-2 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2  focus:ring-green-500 text-white 
              placeholder-gray-400 transition duration-200 mb-3"
            />

            <input
              type="text"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              placeholder="Department"
              className="w-full pl-2 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2  focus:ring-green-500 text-white 
              placeholder-gray-400 transition duration-200 mb-3"
            />

            <input
              type="text"
              value={designation}
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              placeholder="Designation"
              className="w-full pl-2 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2  focus:ring-green-500 text-white 
              placeholder-gray-400 transition duration-200 mb-3"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Phone N.0"
              className="w-full pl-2 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2  focus:ring-green-500 text-white 
              placeholder-gray-400 transition duration-200 mb-3"
            />

            <input
              type="text"
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              placeholder="Salary"
              className="w-full pl-2 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2  focus:ring-green-500 text-white 
              placeholder-gray-400 transition duration-200 mb-3"
            />
            <button
              type="submit"
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-sky-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500  focus:ring-offset-2 focus:ring-offset-gray-900 transition dueation-200 text-xl"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
