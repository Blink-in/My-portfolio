import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Body from './Body/Body'
import Stacks from './Stacks-sec/Stacks'
import Projects from './Projects/Projects'
import ContactForm from './ContactForm/ContactForm'
import Footer from './Footer/Footer'
const HomeRender = () => {
  return (
    <>
     <Header /> 
     <Hero />
     <Body />
     <Stacks />
     <Projects />
     <ContactForm />    
     <Footer />
     </>
  )
}

export default HomeRender
