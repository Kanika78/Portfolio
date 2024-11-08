import React from "react";
import "./About.css";
import theme_pattern from'../../assets/theme_pattern.svg';
import mee from '../../assets/mee.jpg';

const About = ()=>{
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src= {theme_pattern}></img>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={mee}></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}></hr></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"80%"}}></hr></div>
                    </div>
                </div>
            </div>

            <div className="about-achivement">
                <div className="achivement">
                    <h1>3+</h1>
                    <p>Leetcode badges</p>
                </div>
                <hr></hr>
                <div className="achivement">
                    <h1>2</h1>
                    <p>Hackathons</p>
                </div>
                <hr></hr>
                <div className="achivement">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
            </div>

        </div>
    )
}
export default About;