import "./navbar.scss";
import React from 'react'
import {motion} from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const items =["Homepage", "Services", "Parallax", "Contact"]
  return (
    
    <div className="navbar">
      <Sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
            transition={{duration:0.5}} whileHover={{scale:1.3, animationDelay: 0.4}}>Santhosh Kumar</motion.span>
            
            <ul className="link-desk">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Parallax">Portfolio</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            </ul>

            {/* <div className="social">
                <motion.a whileHover={{ scale: 1.8 }} href="#" ><img src="/facebook.png" alt="" /></motion.a>
                <motion.a whileHover={{ scale: 1.8 }} href="#"><img src="/instagram.png" alt="" /></motion.a>
                <motion.a whileHover={{ scale: 1.8 }} href="#"><img src="/youtube.png" alt="" /></motion.a>
            </div> */}
        </div>
    </div>
  )
}
