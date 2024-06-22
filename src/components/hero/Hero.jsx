import React from 'react'
import {motion} from "framer-motion";
import "./hero.scss";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

const textVariants ={
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:0,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};

const sliderVariants ={
  initial:{
    x:0
  },
  animate:{
    x:"-200%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20
    }
  }
};

export const Hero = () => {

  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <section className='hero'>
      
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}><span>I'm, </span>SANTHOSH KUMAR</motion.h2>
          <motion.h1 variants={textVariants}>
          <Typewriter 
          loop={3} typeSpeed={96}
          deleteSpeed={75} delaySpeed={1000} onLoopDone={handleDone}

                onInit={(typewriter) => {
                    typewriter
                        .typeString("Web Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("UI Developer")
                        .deleteAll()
                        .pauseFor(10)
                        .typeString("Web Developer")
                        .start();
                }}
            /> 
            
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* <motion.button variants={textVariants}>See the latest works</motion.button> */}
            <Link to="/Contact"><motion.button variants={textVariants} >Contact Me</motion.button></Link>
          </motion.div>
          {/* <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=''  /> */}
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Front-End Developer
      </motion.div>

      <div className="imageContainer" id="imageContainer">
       <img src="/portfolio-img1.png" alt="" /> 
      </div>
    </section>
  )
}
