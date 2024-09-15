import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackArrow from "../components/BackArrow";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
const DeleteEmployee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/employee/delete/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Employee Deleted Succesfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold my-6  bg-gradient-to-r from-sky-400 to bg-emerald-500 text-transparent bg-clip-text font-serif text-center">
        Delete Employee
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl my-4 text-white">
          Are you sure you want to Delete
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteEmployee;
