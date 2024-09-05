import React from "react";
import { useState, useEffect } from "react";
import BackArrow from "../components/BackArrow";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
const EditEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [salary, setSalary] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/employee/${id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setDepartment(response.data.department);
        setDesignation(response.data.designation);
        setSalary(response.data.salary);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);
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
      .put(`http://localhost:5000/employee/update/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Employee Edited Succesfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  return (
    <div className="p-4">
      <BackArrow />
      <h1 className="text-3xl my-4">Edit Employee</h1>
      {loading ? <Spinner /> : " "}
      <div className="border-sky-500 border-2 flex  justify-center items-center rounded-xl w-96 p-4">
        <form onSubmit={handleForm} className="my-4 ">
          <label className="text-xl mr-4 text-gray-500">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          <label className="text-xl mr-4 text-gray-500">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          <label className="text-xl mr-4 text-gray-500">Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          <label className="text-xl mr-4 text-gray-500">Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          <label className="text-xl mr-4 text-gray-500">Salary:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
          <button
            type="submit"
            className=" bg-sky-600 text-white cursor-pointer p-2 m-8"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
