import React from 'react';
import './contact.scss';
import {motion} from "framer-motion";
import { Icons } from '../icons/Icons';


export const Contact = () => {
    const textVariants ={
        initial:{
          x:500,
          opacity:0
        },
        animate:{
          x:0,
          opacity:1,
          transition:{
            duration:2.4,
            staggerChildren:0.1
          }
        },
      };

  return (
    <motion.div className='contact' 
    initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%",opacity:0 }}
        transition={{
            type: 'tween',
            ease: 'anticipate',
            duration: 1.5,
        }} >
        <div className="mainContainer">
        <motion.div className="textContainter"  variants={textVariants} initial="initial" animate="animate">
            <div className="title">
                <motion.h1 variants={textVariants}>CONTACT ME</motion.h1>
            </div>

            <div className="description">
                <motion.p variants={textVariants}>I'm a dedicated <span>Frontend Developer</span> with a passion <br />for crafting web applications that are pivotal to <br />the overall success of the product.</motion.p>
                <motion.p variants={textVariants}>I thoroughly enjoy the process of building websites</motion.p>
                <motion.p variants={textVariants}><small>Feel free to get in touch for projects, opportunities, or just to Say HELLO.</small></motion.p>
                
                <div className="icon">
                  <Icons />
                </div>
                
            </div>
        </motion.div>
            <div className="imageContainer">
                <img style={{borderRadius: "50%"}} src="/img/mail.gif" alt="contact" className="contactImage" />
            </div>
        </div>
    </motion.div>
  )
}
