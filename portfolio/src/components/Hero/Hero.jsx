import React from "react";
import "./Hero.css";
import mee from '../../assets/mee.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ()=>{
    return (
        <div id = "home"className="Hero">
            <img className="hero-img"src={mee}></img>
            <h1><span>Hey, I'm Kanika</span> , Full Stack Web Developer</h1>
            <p>I'm a passionate Frontend Developer with a strong foundation in HTML, CSS, and JavaScript, as well as expertise in React. </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>

        </div>
    )
} 
export default Hero