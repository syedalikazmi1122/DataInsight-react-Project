import react from "react";
import doctor from "./doctorpic.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css"
import { motion } from "framer-motion";

export default function Home() {

 const navigate = useNavigate();
  function navigateAboutus()
  {
   navigate("/aboutus");
  }
  return (
    <>
      <motion.div
       initial ={{opacity:0}}
       animate ={{opacity:1}}
       exit ={{opacity:0}}
        className="  bg-blue-100  h-full w-full"
      >
        <div className="flex ml-5 sm:ml-24 ">
          <div className=" mt-10 ">
            <h2 className="text-2xl  sm:text-6xl font-bold text-blue-900  pt-8">
              Data Base System
            </h2>
            <p className=" ml-6 sm:ml-16 mt-1 leading-1 text-sm sm:text-xl w-48 sm:w-96 text-blue-500 ">
              Serving to provide ease to Doctors and Patients in mantaining
              there medical documents and informations.
            </p>
          </div>
          <div className="flex ml-20 sm:ml-64 relative group">
            <img
              src={doctor}
              alt="doctor"
              className="sm:h-96 transform transition duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="flex ml-10 sm:ml-64  sm:-mt-10  pb-10 ">
          <button
            className="hover-arrow bg-blue-500 h-12 border rounded-2xl sm:px-2 text-white transform transition duration-500 ease-in-out hover:scale-105"
            onClick={navigateAboutus}
          >
            Learn about us
          </button>
        </div>
      </motion.div>
    </>
  );
}
