import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackArrow from "../components/BackArrow";
const ShowEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/employee/${id}`)
      .then((response) => {
        setEmployee(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <BackArrow />
      <h1 className="text-3xl my-4">Show Employee Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex  flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            <span>{employee._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{employee.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{employee.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Department</span>
            <span>{employee.department}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Designation</span>
            <span>{employee.designation}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Salary</span>
            <span>{employee.salary}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Status</span>
            <span>{employee.status}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Date of joining</span>
            <span>{employee.dateOfJoining}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(employee.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(employee.UpdatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEmployee;
