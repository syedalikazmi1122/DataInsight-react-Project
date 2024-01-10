

import React from "react";
import { useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../../App.css";
import { IoIosBulb, IoIosFlash ,IoIosMail } from "react-icons/io"; // Import the bulb icon
import { IoIosStar } from "react-icons/io"; // Import the bulb icon
import { animateScroll as scroll, Link, Element } from 'react-scroll'; // Import the Link and Element components
import { IoIosHelpCircle, IoMdArrowDropdownCircle } from "react-icons/io"; //import the queury icon
import { motion } from "framer-motion";
export default function Contact() {
   const [value, setValue] = React.useState();
   const [showMessageInput, setShowMessageInput] = React.useState(false);
  
   return (
     <>
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
       >
         {/* To control the transitions from one screen to another */}
         <div className="h-full">
           <div className="bg-blue-100 h-1/2 flex flex-col ">
             <div className="flex justify-center mt-12">
               <h3 className="text-blue-500 font-bold">Get in Touch</h3>
             </div>
             <div className="flex space-x-56 justify-center items-center mt-3 flex-row">
               <div className="grid">
                 {/* for ideas  */}
                 <div className="flex flex-col items-center">
                   <IoIosFlash
                     size={55}
                     className="text-blue-500 transform transition duration-500 hover:scale-110"
                   />{" "}
                   {/* Bulb icon */}
                   <p
                     className="w-64 text-lg mt-1  text-blue-500 leading-2"
                     id="contactustextforfirstdiv"
                   >
                     If you find an innovative idea that could benefit patients
                     or medical staff, please contact us.
                   </p>
                 </div>
               </div>
               {/* for questions */}
               <div className="grid">
                 {/* for ideas  */}
                 <div className="flex flex-col items-center">
                   <IoIosHelpCircle
                     size={55}
                     className="text-blue-500 transform transition duration-500 hover:scale-110"
                   />{" "}
                   {/* Bulb icon */}
                   <p
                     className="w-64 text-lg mt-1  text-blue-500 leading-2"
                     id="contactustextforfirstdiv"
                   >
                     If you encounter any issues or difficulties, please don't
                     hesitate to reach out to us.your queries will be resolved
                     as soon as possible.
                   </p>
                 </div>
               </div>
               {/* to stay connected */}
               <div className="grid">
                 {/* for ideas  */}
                 <div className="flex flex-col items-center">
                   <IoIosMail
                     size={53}
                     className="transform transition duration-500 hover:scale-110 text-blue-500"
                   />{" "}
                   {/* Bulb icon */}
                   <p
                     className="w-64 text-lg mt-1  text-blue-500 leading-2"
                     id="contactustextforfirstdiv"
                   >
                     Stay connected to us via socials,for queury fill the below
                     form or email us at Datainsight@gmail.com .
                   </p>
                 </div>
               </div>
             </div>

             <div className="flex justify-center">
               <Link
                 to="messageUs"
                 smooth={true}
                 duration={500}
                 className="hover:animate-bounce"
               >
                 <IoMdArrowDropdownCircle size={40} className="text-blue-600" />
               </Link>
             </div>
           </div>
         </div>

         {/* Add this block of code */}
         <Element name="messageUs">
           {/* the contact us form  */}
           <div className=" flex h-1/2 space-x-48  ml-40">
             <div className="gird">
               <h2
                 className=" mt-20 text-blue-600"
                 id="contactustextforfirstdiv"
               >
                 Message us
               </h2>
               <p className="w-64">
                 You can fill this form to message us, Soon your queury will be
                 addressed and your problem will be solved.
               </p>
             </div>
             <div className=" flex h-1/2 space-x-48  ml-40">
               <div className="grid mt-10">
                 <form
                   action="https://getform.io/f/c6070b62-8a56-420d-aa44-f9f156eb31a7"
                   method="POST"
                   className="flex flex-col space-y-10 justify-center
               items-center mb-10"
                 >
                   <input
                     type="text"
                     name="name"
                     placeholder=" Enter your name"
                     className="border-2 border-blue-300 rounded-md"
                   />
                   <input
                     type="email"
                     name="email"
                     placeholder="Enter your email here"
                     className="border-2 border-blue-300 rounded-md"
                   />
                   <PhoneInput
                     placeholder="Enter phone number"
                     value={value}
                     onChange={setValue}
                     className="text-blue-500 border-2 border-blue-300 rounded-md"
                     name="contactNumber"
                   />

                   <input
                     type="text"
                     name="city"
                     placeholder="Enter your city"
                     className="border-2 border-blue-300 rounded-md"
                   />

                   {showMessageInput ? (
                     <div
                       style={{
                         position: "fixed",
                         top: 0,
                         left: 0,
                         width: "100%",
                         height: "100%",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center",
                       }}
                     >
                       <div style={{ position: "relative" }}>
                         <textarea
                           name="message"
                           required
                           className="border-2 border-blue-300 rounded-md placeholder:content-center"
                           placeholder="Any suggestions?"
                           rows="5"
                           cols="33"
                           style={{ padding: "10px 40px 10px 10px" }} // Make room for the button
                         />
                         <button
                           type="button"
                           onClick={() => setShowMessageInput(false)}
                           style={{
                             position: "relative",
                             bottom: "10px",
                           }}
                           className="bg-blue-700 text-white transition-colors duration-200 hover:bg-blue-800 rounded-md w-36 h-8"
                         >
                           Ok
                         </button>
                       </div>
                     </div>
                   ) : (
                     <button
                       type="button"
                       onClick={() => setShowMessageInput(true)}
                       className="bg-blue-700 text-white transition-colors duration-200 hover:bg-blue-800 rounded-md w-36 h-8 "
                     >
                       Message Box
                     </button>
                   )}

                   <input
                     type="submit"
                     value="Submit"
                     className="submit-btn bg-blue-700 text-white transition-colors duration-200 hover:bg-blue-800 rounded-md w-36 h-8"
                   />
                 </form>
               </div>
             </div>
           </div>
         </Element>
       </motion.div>
     </>
   );
}