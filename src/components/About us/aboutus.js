import React from "react";
import headbg from "./doctors1.jpg";
import digitilization from "./digitilization.jpg";
import { IoIosBulb, IoMdFlash, IoIosArrowDown } from "react-icons/io"; // Import the bulb and arrow icons
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll"; // Import the Link and Element components

export default function Aboutus() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-screen "
      >
        <Element name="aboutUs">
          <div className=" mt-8 bg-blue-100">
            <div className="flex    space-x-96">
              <div className=" mt-10 ml-10 ">
                <h2 className="text-2xl  sm:text-4xl font-bold text-blue-900  pt-8">
                  About us
                </h2>
                <p className=" ml-16 mt-1 leading-1  text-xl w-96 text-blue-500 ">
                  We are working on the process of digitilization of medical
                  process to serve the medical industry and the patients with
                  ease.
                </p>
              </div>
              <img
                src={headbg}
                className="h-64 py-2  transform transition duration-500 hover:scale-110"
              />
            </div>
            <div className="flex justify-center">
              <Link
                to="ourMission"
                smooth={true}
                duration={500}
                className="hover:animate-bounce"
              >
                <IoIosArrowDown size={40} className="text-blue-600" />
              </Link>
            </div>
          </div>
        </Element>

        <Element name="ourMission">
          <div className=" -mt-1 bg-blue-200">
            <div className="flex    space-x-96">
              <IoMdFlash
                size={100}
                className="text-blue-500 ml-60 mt-20 transform transition duration-500 hover:scale-110"
              />
              <div className=" mt-10 ml-10 ">
                <h2 className="text-2xl  sm:text-4xl font-bold text-blue-900  pt-8">
                  Our Mission
                </h2>
                <p className=" ml-16 mt-1 leading-1  text-xl w-96 text-blue-500 ">
                  We are working on the process of digitilization of medical
                  process to serve the medical industry and the patients with
                  ease.
                </p>
              </div>
            </div>
          </div>
        </Element>

        {/* what is digitilization */}
        <div className=" -mt-1 bg-blue-100">
          <div className="flex    space-x-96">
            <div className=" mt-10 ml-10 ">
              <h2 className="text-2xl  sm:text-4xl font-bold text-blue-900  pt-8">
                Why Digitilization
              </h2>
              <p className=" ml-16 mt-1 leading-1  text-sm  text-blue-500 ">
                Digitalizing medical prescriptions provides various advantages
                over paper-based prescriptions, including increased accuracy and
                reduced chance of medical mistakes, improved patient safety, and
                reduced risk of adverse responses. Furthermore, due to its ease
                of access and portability, digitizing medical prescriptions
                leads to an efficient workflow. Digitalizing the medical
                prescription aids in the collection of an efficient medical
                record for the patient.
              </p>
            </div>
            <img
              src={digitilization}
              className="h-64 py-2 pr-10 transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
