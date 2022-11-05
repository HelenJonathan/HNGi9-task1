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


// import React from 'react';
// import { BrowserRouter } from "react-router-dom";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// import Profile from "./Components/Profile"

// const App = () => {
  
//   return (
//     <div>
//       <BrowserRouter> 
//       <Profile />
//       <Body />
//       <Footer />
//       </BrowserRouter>
      
//     </div>
//   );
// }

export default App;