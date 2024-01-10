import React from "react";
import Aboutus from "../components/About us/aboutus";
import Login from "../components/Login/login";
import Home from "../components/home/Home";
import Contact from "../components/Contactus/contactus";
import Register from "../components/Register/Register";
import {AnimatePresence, animate} from 'framer-motion'; 
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AnimatePresence>
  );
};
export default App;