import React from "react";
import { useNavigate } from "react-router-dom";


const WorkOnProgress: React.FC = () => {

    const navigate =useNavigate()
    const handleClick =()=>{
        navigate("/")
    }
  return (
    
    <div className="mx-auto w-full" >
      <div className="flex flex-col w-full px-4 max-w-7xl items-center justify-center h-[60vh] mx-auto bg-gray-100">
      <h1 className="text-xl md:text-4xl font-semibold md:font-bold text-gray-800">Development in Progress</h1>
      <p className="mt-4  text-sm md:text-lg text-gray-600">We're working hard to bring you new features. Please check back later!</p>
      <a href="#"
         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
         onClick={handleClick
         }
      >
        Go Back
      </a>
    </div>
    </div>
  );
};

export default WorkOnProgress;
