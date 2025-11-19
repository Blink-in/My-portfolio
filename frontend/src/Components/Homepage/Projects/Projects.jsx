import React from 'react'
import "./Projects.css"
import Spaweb from "../../../assets/project1.png"
const Projects = () => {
  return (
    <div id='projects'>
      <div className='project-container'>
        <p></p>
        <h1></h1>
        <div className='project-flex'>
            <div className='spa-app'>
                <img src={Spaweb} />
                <div className='spa-para'>
                    <h1>Beauty Spa Website</h1>
                    <div className='tech-used'>
                        <p>React</p>
                        <p>Express js</p>
                        <p>Mongodb</p>
                    </div>
                    <p className='spa-write'>
                        I developed a responsive and user-friendly website for a Beauty Spa without collaboration with designers. 
                        The site provides members and visitors with easy access to information, events, service lists and a Booking
                         feature for reservations.
                         It delivers fast performance, mobile compatibility, and smooth navigation.
                    </p>
                    <button>Live preview</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
