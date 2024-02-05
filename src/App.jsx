import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="bg-white dark:bg-dark dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Project />
    </div>
  );
}

export default App;
