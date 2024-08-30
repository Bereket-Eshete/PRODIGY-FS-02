import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import EditEmployee from "./pages/EditEmployee";
import ShowEmployee from "./pages/ShowEmployee";
import Home from "./pages/Home";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateEmployee" element={<CreateEmployee />} />
        <Route path="DeleteEmployee" element={<DeleteEmployee />} />
        <Route path="/EditEmployee" element={<EditEmployee />} />
        <Route path="/ShowEmployee" element={<ShowEmployee />} />
      </Routes>
    </div>
  );
};
export default App;
