import React from 'react'
import "./Stacks.css"
import html from "../../../assets/html5.svg";
import css from "../../../assets/css3.svg";
import javascript from "../../../assets/js.svg";
import react from "../../../assets/react.svg";
import  matUi from "../../../assets/html5.svg";
import nodejs from "../../../assets/nodejs.svg";
import express from "../../../assets/expressjs.svg";
import mongodb from "../../../assets/mongodb.svg";
import git from "../../../assets/git.svg";
import github from "../../../assets/github.svg";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



const Stacks = () => {
   const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.12,
          duration: 0.6
        }
      }
    }
  
    const itemVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
  return (
    <motion.div 
        ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
    id='stacks'>
      <motion.div className='stack-container' variants={itemVariants}>
        <p>
            My Stacks
        </p>
        <h1>Technologies I Work With</h1>
        <motion.div className='stack-flex' variants={itemVariants}>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={nodejs} alt="" />
            <img src={express} alt="" />
            <img src={mongodb} alt="" />
            <img src={git} alt="" />
            <img src={github} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Stacks
