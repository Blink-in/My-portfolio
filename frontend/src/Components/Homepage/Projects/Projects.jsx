import React from 'react'
import "./Projects.css"
import Spaweb from "../../../assets/project1.png"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Projects = () => {
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
          id='projects'
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          
        >
      <motion.div className='project-container' variants={itemVariants}>
        <p></p>
        <h1></h1>
        <motion.div className='project-flex' variants={itemVariants}>

          <h1 className='pro-head'>Projects ive worked on</h1>
            <motion.div className='spa-app' variants={itemVariants}>
                <img src={Spaweb} />
                <motion.div className='spa-para' variants={itemVariants}>
                    <h1>Beauty Spa Website</h1>
                    <motion.div className='tech-used' variants={itemVariants}>
                        <p>React</p>
                        <p>Express js</p>
                        <p>Mongodb</p>
                    </motion.div>
                    <p className='spa-write'>
                        I developed a responsive and user-friendly website for a Beauty Spa without collaboration with designers. 
                        The site provides members and visitors with easy access to information, events, service lists and a Booking
                         feature for reservations.
                         It delivers fast performance, mobile compatibility, and smooth navigation.
                    </p>
                    <button>Live preview</button>
                </motion.div>
            </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
