import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/Aboutt/About";
import Project from "./components/Projects/Project";
import GetinTouch from "./components/GetinTouch/GetinTouch";
import Footer from "./components/Footer/Footer";
const App = ()=>{
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Project/>
      <GetinTouch/>
      <Footer/>
    </div>

  )
}
export default App
