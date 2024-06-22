import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

export const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section>
      <div className='parallax' ref={ref}>
        <motion.h1 style={{ y: yText }}>Parallax</motion.h1>
        <motion.div className="mountain" style={{ y: yBg }}></motion.div>
        <motion.div className="planets" style={{ y: yBg }}></motion.div>
        <motion.div className="stars" style={{ y: yBg }}></motion.div>
      </div>
    </section>
  );
};
