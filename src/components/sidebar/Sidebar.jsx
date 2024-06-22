import { useState, useEffect } from 'react';
import "./sidebar.scss";
import { ToggleButton } from './toggleButton/ToggleButton';
import { Links } from './links/Links';
import { motion } from "framer-motion";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const heroElement = document.querySelector('.hero');
        if (heroElement) {
            heroElement.style.zIndex = open ? '-1' : '1';
        }
    }, [open]);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring", stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0, 
                opacity:1,
                // type: "spring", 
                 stiffness: 400,
                 damping: 10,

                staggerChildren:0.5,

                // ease:"linear",
                // duration:0
            }
        }
    }

    return (
        <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links setIsOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
    );
}
