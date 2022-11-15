import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact"


const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
      <div> <Footer /> </div>
    </div>

  );

}

export default App;