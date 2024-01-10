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
        className="  bg-blue-100  h-screen"
      >
        <div className="flex ml-10 sm:ml-24 ">
          <div className=" mt-10 ">
            <h2 className="text-2xl  sm:text-6xl font-bold text-blue-900  pt-8">
              Data Base System
            </h2>
            <p className=" ml-16 mt-1 leading-1  text-xl w-96 text-blue-500 ">
              Serving to provide ease to Doctors and Patients in mantaining
              there medical documents and informations.
            </p>
          </div>
          <div className="flex ml-64 relative group">
            <img
              src={doctor}
              alt="doctor"
              className="h-96 transform transition duration-500 ease-in-out hover:scale-105"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute transition duration-500 ease-in-out p-2 bg-blue-500 text-white rounded-lg text-xs bottom-full mb-2">
              Have a good day sir
            </div>
          </div>
        </div>

        <div className="flex ml-64  -mt-10  pb-10 ">
          <button
            className="hover-arrow bg-blue-500 h-12 border rounded-2xl px-2 text-white transform transition duration-500 ease-in-out hover:scale-105"
            onClick={navigateAboutus}
          >
            Learn about us
          </button>
        </div>
      </motion.div>
    </>
  );
}
