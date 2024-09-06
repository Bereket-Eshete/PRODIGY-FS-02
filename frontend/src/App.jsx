import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import EditEmployee from "./pages/EditEmployee";
import ShowEmployee from "./pages/ShowEmployee";
import Home from "./pages/Home";
export const App = () => {
  return (
    <div className=" min-h-screen  bg-gradient-to-br from-gray-900 via-sky-900 to-green-600">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateEmployee" element={<CreateEmployee />} />
        <Route path="/DeleteEmployee/:id" element={<DeleteEmployee />} />
        <Route path="/EditEmployee/:id" element={<EditEmployee />} />
        <Route path="/ShowEmployee/:id" element={<ShowEmployee />} />
      </Routes>
    </div>
  );
};
export default App;
