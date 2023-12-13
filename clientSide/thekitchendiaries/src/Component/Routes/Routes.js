

import React from "react";
import { Route, Routes } from "react-router-dom"; 

import Navbar from "../Navbar/Navbar";
import Homepage from "../Homepage/Index";
import Footer from "../Footer/Footer";
import Home from "../Homepage/Home";

function Routing() {
  return (
    
    
      <div>
        <Navbar/>
        <Home/>
        <Routes>
          
          <Route path="/recipe" element={<Homepage />} />
          
         
        </Routes>
        <Footer/>
      </div>
    
    
  );
}

export default Routing;
