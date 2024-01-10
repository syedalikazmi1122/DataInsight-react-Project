import React from "react";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  function navigateAboutus() {
    navigate("/aboutus");
  }
    function navigateContactus() {
      navigate("/Contact");
    }
  return (
    <div className=" flex  space-x-40 justify-center   bg-blue-300">
      <div className="  pb-10 grid items-center justify-center">
        <p className="   w-64 text-blue-600 pt-4">
          We try our best to provide users with a comfortable user experience
          but if you face any issue ......
        </p>
        <button className="border w-36 border-solid   font-bold text-blue-800 border-white transform transition duration-500 ease-in-out hover:scale-105 hover-arrow"
        onClick={navigateContactus}
        >
          Contact us <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="border border-white"></div>
      <div className=" pb-10 grid items-center justify-center">
        <p className="  w-64 text-blue-600 pt-4 justify-center">
          If you are interested to know more about our work ,our mission then  do visit..
        </p>
        <button className="border w-36 border-solid   font-bold text-blue-800 border-white transform transition duration-500 ease-in-out hover:scale-105 hover-arrow"
        onClick={navigateAboutus}>
          About us <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );};