import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Logout from "../components/Logout";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/employee/", {
        headers: { Authorization: `Bearer ${token}` },
      })
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
      <div className="flex item-center justify-between mx-3">
        <h1 className="text-3xl font-bold my-6  bg-gradient-to-r from-sky-400 to bg-emerald-500 text-transparent bg-clip-text font-serif">
          Employee List
        </h1>
        <Link to={"/createEmployee"}>
          <div className="flex gap-2 items-center">
            <MdOutlineAddBox className="text-sky-600 text-3xl font-extrabold" />
            <p className="text-3xl bg-gradient-to-r from-sky-400 to bg-emerald-500 text-transparent bg-clip-text font-bold my-6 font-serif">
              Add Employee
            </p>
          </div>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2 m-2">
          <thead>
            <tr>
              <th className="border border-slate-500 rounded-md text-yellow-100 font-mono font-medium text-3xl">
                N.O
              </th>
              <th className="border border-slate-500 rounded-md text-white font-mono font-medium  text-3xl">
                Name
              </th>
              <th className="border border-slate-500 rounded-md text-yellow-100  font-mono text-3xl font-medium">
                Email
              </th>
              <th className="border border-slate-500 rounded-md text-yellow-100  font-mono  text-3xl font-medium">
                Department
              </th>
              <th className="border border-slate-500 rounded-md text-yellow-100  font-mono font-medium text-3xl">
                Designation
              </th>
              <th className="border border-slate-500 rounded-md text-yellow-100  font-mono  text-3xl font-medium">
                Salary
              </th>
              <th className="border border-slate-500 rounded-md text-yellow-100  font-mono  text-3xl font-medium">
                Opreation
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="h-8">
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  {index + 1}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  {employee.name}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  {employee.email}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  {employee.department}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  {employee.designation}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  {employee.salary}
                </td>
                <td className="border border-slate-500 rounded-md text-center text-xl text-white">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/ShowEmployee/${employee._id}`}>
                      <BsInfoCircle className="text-2xl text-green-400 font-bold" />
                    </Link>
                    <Link to={`/EditEmployee/${employee._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-400 font-bold" />
                    </Link>
                    <Link to={`/DeleteEmployee/${employee._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600 font-bold" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default Home;
