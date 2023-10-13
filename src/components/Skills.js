import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Skills() {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="skill">
                <div>HTML/CSS</div>
                <i><FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "red", backgroundColor: "white"}} /></i>
                <i><FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "blue", backgroundColor: "white"}} /></i>
            </div>
            <div className="skill">
                <div>JavaScript</div>
                <i><FontAwesomeIcon icon={faJs} size="2xl" style={{color: "yellow", backgroundColor: "black"}} /></i>
            </div>
            <div className="skill">
                <div>Python</div>
                <i><FontAwesomeIcon icon={faPython} size="2xl" style={{color: "white", backgroundColor: "black"}} /></i>
            </div>
            <div className="skill">
                <div>Node.js</div>
                <i><FontAwesomeIcon icon={faNode} size="2xl" style={{color: "green",}} /></i>
            </div>
            <div className="skill">
                <div>bootstrap</div>
                <i><FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "purple", backgroundColor: "white"}} /></i>
            </div>
            <div className="skill">
                <div>React</div>
                <i><FontAwesomeIcon icon={faReact} size="2xl" style={{color: "rgb(20, 158, 202)", backgroundColor: "white"}} /></i>
            </div>
            <div className="skill">
                <div>PostgreSQL</div>
                <i><FontAwesomeIcon icon={faDatabase} size="2xl" style={{color: "rgb(51, 103, 145)", backgroundColor: "white"}} /></i>
            </div>
            <div className="skill">
                <div>Docker</div>
                <i><FontAwesomeIcon icon={faDocker} size="2xl" style={{color: "#1D63ED", backgroundColor: "white"}} /></i>
            </div>
            <div className="skill">
                <div>Git/Github</div>
                <i><FontAwesomeIcon icon={faGitAlt} size="2xl" style={{color: "#F1502F", backgroundColor: "white"}} /></i>
                <i><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "black", backgroundColor: "white"}} /></i>
            </div>
        </div>
    );
}

export default Skills;
