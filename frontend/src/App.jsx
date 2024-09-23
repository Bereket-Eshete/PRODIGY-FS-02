import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import EditEmployee from "./pages/EditEmployee";
import ShowEmployee from "./pages/ShowEmployee";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/privateRoute";
import { jwtDecode } from "jwt-decode";
export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <div className=" min-h-screen  bg-gradient-to-br from-gray-900 via-sky-900 to-green-600">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />

        <Route
          path="/Home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/CreateEmployee"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CreateEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/DeleteEmployee/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DeleteEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/EditEmployee/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <EditEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/ShowEmployee/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ShowEmployee />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
