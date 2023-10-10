import React from 'react'
import Profile from "../assets/Pikes-Peak-Profile.jpg"

function About() {
  return (
    <div className='about'>
        <img className='profile-img' src={Profile} alt="Austin Moore"/>
        <div className='about-detals'>
            <h2>About Me</h2>
            <p>I am a Full-Stack Web Developer out of Nebraska <br />
            who has experience with the MERN stack. <br /> I love to learn new technologies
            and explore <br /> the wonderful industry of Web Development. <br /> I am passionate about
            creating interactive, functional, <br /> and beautiful websites. I love working on a team <br /> 
            with other passionate individuals, and I can't <br />  wait to bring my leadership skills to your organization.
            </p>
        </div>
    </div>
  )
}

export default About
