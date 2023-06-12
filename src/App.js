import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-greyColor">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
