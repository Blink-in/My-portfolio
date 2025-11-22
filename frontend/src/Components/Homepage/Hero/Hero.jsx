import React from 'react'
import profileImg from "../../../assets/Uche.jpg"
import "./Hero.css"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Hero = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
 
  return (
     <motion.div
      className='hero'
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      
    >
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
      <motion.div className='mainhero' variants={itemVariants}>
        <img className='profile' src={profileImg} />
        <motion.div className='herosec' variants={itemVariants}>
            <li>Full-Stack Developer</li><br />
            <h1>Emmanuel U Ebirim</h1>
            <p className='heropara'>I build software that connects people with technology in meaningful ways. From concept to code, I focus on clarity,
                 performance, and a seamless user experience.</p>
            <motion.div className='hero-btn' variants={itemVariants}>
                <button className='btn1'>Projects</button>
                <button className='btn2'>About Me</button>
            </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
