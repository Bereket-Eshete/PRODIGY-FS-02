import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="logout-btn border text-white cursor-pointer p-3 rounded-lg"
    >
      Logout
    </button>
  );
};

export default Logout;
