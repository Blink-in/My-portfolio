import React from 'react'
import "./Body.css"
const Body = () => {
  return (
    <div id='about'>
      <div className='about-container'>
        
<div className='about-main'>
<p className='abt'>ABOUT ME</p>
<p className='stand'>Why I Stand Out</p>
<div className='about-para'>
<p>I am a Full Stack Developer with 2+ years of experience 
    designing, developing, and deploying scalable web applications. 
    Skilled in modern technologies including React, Node.js, Express.js, MongoDB,
     and WebSockets, with expertise in REST API development, 
    authentication/ authorization, etc</p>
<p>Proven ability to deliver production ready solutions from institutional  user friendly web platforms. 
     Passionate about innovation, collaboration, and building secure,
     high performance applications that enhance usability, scalability, and user engagement.</p>
</div>

<div className='about-btn'>
    <button id='btn1'>Download Resume</button>
    <button id='btn2'>Get In Touch</button>
</div>



</div>
<div className='about-exp'>
    <div>
        <p>
Years of Experience
</p>
<h1>2+</h1>
    </div>

<div>
    <p>Completed Projects</p>
<h1>10+</h1>
</div>
<div><p>Client Satisfaction</p>
<h1>90%</h1></div>
</div>
      </div> 
    </div>
  )
}

export default Body
