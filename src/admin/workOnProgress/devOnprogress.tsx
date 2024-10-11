import React from "react";
import { useNavigate } from "react-router-dom";


const DevOnProgress: React.FC = () => {

    const navigate =useNavigate()
    const handleClick =()=>{
        navigate("/")
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Development in Progress</h1>
      <p className="mt-4 text-lg text-gray-600">We're working hard to bring you new features. Please check later</p>
      <a href="#"
         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
         onClick={handleClick
         }
      >
        Go Back
      </a>
    </div>
  );
};

export default DevOnProgress;
