import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

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

export const Links = ({ setIsOpen }) => {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.div className="links" variants={variants}>
      <motion.a
        onClick={handleLinkClick}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/">Home</Link>
      </motion.a>
      <motion.a
        onClick={handleLinkClick}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/Portfolio">Portfolio</Link>
      </motion.a>
      <motion.a
        onClick={handleLinkClick}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/About">About</Link>
      </motion.a>
      <motion.a
        onClick={handleLinkClick}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/Contact">Contact</Link>
      </motion.a>
    </motion.div>
  );
};
