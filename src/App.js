// import React, { useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
      
//       <h2>{count}</h2>

//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease} style={{ margin: "0 10px" }}>
//         Decrease
//       </button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;