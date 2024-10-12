//react
import React from "react";
//react-router-dom
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";

function App() {




  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
