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



const Stacks = () => {
  return (
    <div id='stacks'>
      <div className='stack-container'>
        <p>
            My Stacks
        </p>
        <h1>Technologies I Work With</h1>
        <div className='stack-flex'>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={nodejs} alt="" />
            <img src={express} alt="" />
            <img src={mongodb} alt="" />
            <img src={git} alt="" />
            <img src={github} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Stacks
