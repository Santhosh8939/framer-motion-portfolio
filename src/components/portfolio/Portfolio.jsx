import React from 'react'
import {motion} from "framer-motion";
import './portfolio.scss';
import { Cards } from '../cards/Cards';

export const Portfolio = () => {

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
    <motion.div className='portfolio'
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: "100%",opacity:0 }}
    transition={{
        type: 'tween',
        ease: 'anticipate',
        duration: 1.5,
    }} >
        <div className='mainContainer'>
        <motion.div className="textContainter" variants={textVariants} initial="initial" animate="animate">
        <div className="title">
                <motion.h2 variants={textVariants}>PORTFOLIO</motion.h2>
                <motion.h1 variants={textVariants}>PROJECTS</motion.h1>
            </div>
        </motion.div>

        <div className="cardsSection">
            <center><Cards /></center>
        </div>
        </div>
    </motion.div>
  )
}
