import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackArrow = ({ destination = "/" }) => {
  return (
    <div className="felx">
      <Link to={destination}>
        <BsArrowLeft className="bg-sky-600 text-gray-600 p-5 rounded-md w-fit" />
      </Link>
    </div>
  );
};

export default BackArrow;
