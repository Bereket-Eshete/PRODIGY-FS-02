import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/employee/")
      .then((response) => {
        setEmployees(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex item-center justify-between">
        <h1 className="text-3xl my-8">Employee List</h1>
        <Link to={"/createEmployee"}>
          <MdOutlineAddBox className="text-sky-800 text-3xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">N.O</th>
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md">Email</th>
              <th className="border border-slate-600 rounded-md">Department</th>
              <th className="border border-slate-600 rounded-md">
                Designation
              </th>
              <th className="border border-slate-600 rounded-md">Salary</th>
              <th className="border border-slate-600 rounded-md">Opreation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {employee.name}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {employee.email}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {employee.department}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {employee.designation}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {employee.salary}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/ShowEmployee/${employee._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/EditEmployee/${employee._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/DeleteEmployee/${employee._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
