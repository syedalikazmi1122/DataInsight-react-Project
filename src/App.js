import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import AnimatedRoutes from "./components/animatedRoutes";
import Footer from "./components/Footer/footer";
import {BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  const [isLoggedin, setisLoggedin] = React.useState(false);

  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
