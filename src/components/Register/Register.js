import React, { useState } from "react";
import { motion } from "framer-motion";
import sidepic from "./registersidepic.jpg";
import PhoneInput from "react-phone-number-input";
export default function Register() {
  const [userType, setUserType] = useState("patient");
  const [value, setValue] = React.useState();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen bg-blue-200  "
      >
        <div className=" flex justify-end bg-blue-200">
          <div className="w-screen space-y-0 flex pt-10 justify-center">
            <div
              className="flex border rounded-md w-3/12 items-center bg-blue-400"
              style={{
                backgroundImage: `url(${sidepic})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className=" ml-3 text-blue-500"> Create An Account</h3>
             
            </div>
            <div className="border  border-white"></div>
            <div className="grid border w-3/12 justify-center  rounded-lg   bg-blue-400  border-solid">
              <h3 className=" ml-10 pt-10 inline-block content-center text-white ">
                Register
              </h3>
              <form className="grid  pt-1 space-y-4 justify-center mb-10 ">
                <span className="space-x-6 flex justify-center">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-gray-600"
                      checked={userType === "doctor"}
                      onChange={() => setUserType("doctor")}
                    />
                    <span className="ml-2 text-blue-900">Doctor</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 "
                      checked={userType === "patient"}
                      onChange={() => setUserType("patient")}
                    />
                    <span className="ml-2 text-blue-900">Patient</span>
                  </label>
                </span>
                {userType === "doctor" && (
                  <input
                    type="text"
                    placeholder="Doctor's ID"
                    className="w-56 placeholder:text-sm placeholder:pl-2 border rounded-md "
                  />
                )}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-56 border placeholder:text-sm placeholder:pl-2 rounded-md"
                />
                <input
                  type="password"
                  className="border w-56 placeholder:text-sm placeholder:pl-2 rounded-md"
                  placeholder="Password"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-56 border placeholder:text-sm placeholder:pl-2 rounded-md"
                />
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  className="w-56 text-black border placeholder:text-sm placeholder:pl-2  p-1   rounded-md"
                  name="contactNumber"
                />

                <span className="space-x-6 flex justify-center">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-blue-900"> Male </span>
                  </label>
                  <label>
                    <input
                      className="form-radio h-5 w-5 text-blue-900"
                      type="radio"
                      name="gender"
                      value="female"
                    />
                    <span className="ml-2 text-blue-900"> Female </span>
                  </label>
                </span>

                <label>
                  <input type="checkbox" className=" inline  " />
                  <p className="inline text-blue-700  text-sm pl-1">
                    I agree to the terms of service
                  </p>
                </label>
                <button
                  type="submit"
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border rounded-md bg-white text-blue-700 font-semibold w-24 ml-20"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border rounded-md bg-white text-blue-700 font-semibold w-24 ml-20"
                >
                  Clear Form
                </button>
             <p>Already have an Account ? <a href="/login">login</a></p>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
