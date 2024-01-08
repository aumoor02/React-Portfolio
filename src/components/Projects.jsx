import React from 'react'
import Maze from "../assets/projects/Screenshot 2023-08-31 114227.png"
import StudyTimeMobile from "../assets/projects/Screenshot 2023-11-08 235614.png"
import Hangman from "../assets/projects/Screenshot 2024-01-05 145309.png"
import StudyTime from "../assets/projects/Screenshot 2024-01-05 154534.png"
import UnderConstruction from "../assets/projects/Under-Construction.jpg"

function Projects() {
  return (
    <div className='project-container'>
      <h2 className='projects-heading'>Projects</h2>
      <div className='projects'>
        <div className='project'>
          <h4>
            <a href='https://github.com/aumoor02/maze-game'>JavaScript Maze Game</a>
          </h4>
          <img className='project-img-wide' src={Maze} alt='Maze Game' />
          <p>Technologies Used: HTML, CSS, JavaScript, HTML Canvas API</p>
        </div>
        <div className='project'>
          <h4>
            <a href='https://github.com/AJS-Bootcamp/Study-App-Mobile'>Study Time Mobile App</a>
          </h4>
          <img className='project-img-tall' src={StudyTimeMobile} alt='Study Time Mobile App' />
          <p>Technologies Used: React Native, HTML, CSS</p>
        </div>
        <div className='project'>
          <h4>
            <a href='https://github.com/aumoor02/Hangman-Game'>Hangman</a>
          </h4>
          <img className='project-img-wide' src={Hangman} alt='Hangman' />
          <p>Technologies Used: Python</p>
        </div>
        <div className='project'>
          <h4>
            <a href='https://github.com/AJS-Bootcamp/study-time'>Study Time</a>
          </h4>
          <img className='project-img-wide' src={StudyTime} alt='Study App' />
          <p>Technologies Used: React.js, HTML, CSS, Bootstrap</p>
        </div>
        <div className='project'>
          <h4>
            <a href='https://github.com/AJS-Bootcamp/Movie-Reviews'>Movie Reviews</a>
          </h4>
          <img className='project-img-wide' src={UnderConstruction} alt='Current Project Unavailable' />
          <p>Technologies Used: React.js, Node.js, Express, MongoDB, HTML, CSS</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
