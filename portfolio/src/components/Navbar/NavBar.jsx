import React, { useRef } from "react";
import "./NavBar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import underline from '../../assets/nav_underline.svg';
import { useState } from "react";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const NavBar = ()=>{
    const[menu , setmenu] = useState("home");
    const menuRef = useRef();

    const openMenu = ()=>{
        menuRef.current.style.right = "0";
    }

    const closeMenu = ()=>{
        menuRef.current.style.right = "-350px";
    }
    return (
        <div className = "NavBar">
            <img src={menu_open} onClick={openMenu} className="nav-open"></img>
            <ul ref={menuRef}className="nav-menu">
                <img src={menu_close} onClick={closeMenu}className="nav-close"></img>
                <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu == "home" ? <img src={underline}></img> :<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>setmenu("about")}>About me</p></AnchorLink>{menu == "about" ? <img src={underline}></img> :<></>}</li>
                <li><p onClick={()=>setmenu("project")}>Project</p>{menu == "project"? <img src={underline}></img> :<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu == "contact"? <img src={underline}></img> :<></>}</li>

            </ul>
            <div  className="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>

        </div>
    )
}
export default NavBar