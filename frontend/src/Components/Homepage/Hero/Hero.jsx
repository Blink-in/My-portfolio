import React from 'react'
import profileImg from "../../../assets/Uche.jpg"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
      <div className='mainhero'>
        <img className='profile' src={profileImg} />
        <div className='herosec'>
            <li>Full-Stack Developer</li><br />
            <h1>Emmanuel U Ebirim</h1>
            <p className='heropara'>I build software that connects people with technology in meaningful ways. From concept to code, I focus on clarity,
                 performance, and a seamless user experience.</p>
            <div className='hero-btn'>
                <button className='btn1'>Projects</button>
                <button className='btn2'>About Me</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
