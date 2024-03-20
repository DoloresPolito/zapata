"use-client";
import React, { useState } from "react";
import Styles from "./navbar.module.scss"
import {motion} from 'framer-motion'
import Link from "next/link";

const FramerNavbar = () => {

    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring",
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            },
        },
    };

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut",
            },
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0,
            },
        },
    };

    return (
        <div
            className={`${Styles.navbar} ${
                burgerMenuActive ? Styles.active : ""
            }`}
        >
            <div className={Styles.navigation}>
            
                <div
                    className={Styles.burgerMenuContainer}
                    onClick={() => toggleBurgerMenu()}
                >
                    <div className={Styles.burgerMenuTrigger}></div>
                    <div className={Styles.burgerMenu}></div>
                </div>
            </div>
            <div className={Styles.content}>
                <motion.ul
                    animate={burgerMenuActive ? "open" : "closed"}
                    variants={motionVariants}
                >
                    <motion.li variants={listItemVariants}>
                        <Link href="/">home</Link>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <Link href="/">about</Link>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <Link href="/">portfolio</Link>
                    </motion.li>
                    <motion.li variants={listItemVariants}>
                        <Link href="/">contact</Link>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    );
}


export default FramerNavbar;