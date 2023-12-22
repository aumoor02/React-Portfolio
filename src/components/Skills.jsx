import React from "react";
import CodingSkills from "../assets/coding-skills.jpg";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


function Skills() {
    return (
        <div className="skills-container">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-list">
                <div className="skill">
                    <RocketLaunchIcon/> HTML/CSS
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> JavaScript
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> Bootstrap
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> React.js
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> React Native
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> Node.js
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> Express.js
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> MongoDB
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> Python
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> PostgreSQL
                </div>
                <div className="skill">
                    <RocketLaunchIcon/> Git/Github
                </div>
            </div>
            <img
                className="programming-img"
                src={CodingSkills}
                alt="Computer/Programming"
            />
        </div>
    );
}

export default Skills;
