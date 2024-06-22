import React from 'react'
import './nav.scss'
import './nav.css'
import { Link } from "react-router-dom";
import { Sidebar } from '../sidebar/Sidebar';
import {motion} from "framer-motion";

export const Nav = () => {

  
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};


  return (
    <div className='nav'>
      <Sidebar />
        {/* <span className='logo'>Nav</span> */}
        <nav className='nav-menu'>
            <motion.a variants={itemVariants}  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} class="buttonpro"><span><Link to="/">Home</Link></span></motion.a>
            <motion.a variants={itemVariants}  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} class="buttonpro"><span><Link to="/Portfolio">Portfolio</Link></span></motion.a>
            <motion.a variants={itemVariants}  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} class="buttonpro"><span><Link to="/About">About</Link></span></motion.a>
            <motion.a variants={itemVariants}  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} class="buttonpro"><span><Link to="/Contact">Contact</Link></span></motion.a>
        </nav>

        <div className="hamburger">

        </div>
    </div>
  )
}
