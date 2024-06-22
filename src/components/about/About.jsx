import React from 'react';
import './logo-slider.css';
import './about.scss';
import {motion} from "framer-motion";

export const About = () => {

    const textVariants ={
        initial:{
          x:500,
          opacity:0
        },
        animate:{
          x:0,
          opacity:1,
          transition:{
            duration:1.9,
            staggerChildren:0.3
          }
        },
      };


  return (
    <motion.div className='about'
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
                <motion.h2 variants={textVariants}>ABOUT</motion.h2>
                <motion.h1 variants={textVariants}>MORE ON ME</motion.h1>
            </div>

            <div className="description">
                <motion.p variants={textVariants}>I'm a dedicated <span>Frontend Developer</span> with a passion <br />for crafting web applications that are pivotal to <br />the overall success of the product.</motion.p>
                <motion.p>I thoroughly enjoy the process of building web applications</motion.p>
            </div>
        </motion.div>

        <div className="imageContainer">
            <img src="/img/developer.png" alt="" />
        </div>
        </div>
        

        <div className="slider">
            <div className="logos">
                <div className="logo-slide">
                    <img src="/slider-logos/html.png" alt="" /> 
                    <img src="/slider-logos/css.png" alt="" /> 
                    <img src="/slider-logos/js.png" className='js-img' alt="" />
                    <img src="/slider-logos/react-js.png" alt="" /> 
                    <img src="/slider-logos/bootstrap.png" alt="" /> 
                    <img src="/slider-logos/Tailwind-CSS.png" alt="" /> 
                    <img src="/slider-logos/sass.png" alt="" /> 
                    <img src="/slider-logos/photoshop.png" alt="" /> 
                    <img src="/slider-logos/sql.png" alt="" /> 
                </div>

                <div className="logo-slide">
                    <img src="/slider-logos/html.png" alt="" /> 
                    <img src="/slider-logos/css.png" alt="" /> 
                    <img src="/slider-logos/js.png" className='js-img' alt="" />
                    <img src="/slider-logos/react-js.png" alt="" /> 
                    <img src="/slider-logos/bootstrap.png" alt="" /> 
                    <img src="/slider-logos/Tailwind-CSS.png" alt="" /> 
                    <img src="/slider-logos/sass.png" alt="" /> 
                    <img src="/slider-logos/photoshop.png" alt="" /> 
                    <img src="/slider-logos/sql.png" alt="" /> 
                </div>
            </div>
        </div>
    </motion.div>
  )
}
