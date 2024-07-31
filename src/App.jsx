import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Navbar/Home";
import Photos from "./Navbar/Photos";
import About from "./Navbar/About"

const App = () => {
 return (
   <Router>
     <Navbar />
     
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Photos" element={<Photos />} />
       <Route path="/About-Us" element={<About />} />
      </Routes>
    
   </Router>
 );
};

export default App;
