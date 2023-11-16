import React from "react";
import Profile from "../assets/Pikes-Peak-Profile.jpg";

function About() {
    return (
        <div className="about-container">
            <img className="profile-img" src={Profile} alt="Austin Moore" />
            <div className="about-detals">
                <h2 className="section-heading">About Me</h2>
                <p>
                    I am a Full-Stack Web Developer out of Nebraska who has
                    experience with the MERN stack. I love to learn new
                    technologies and explore the wonderful industry of Web
                    Development. I am passionate about creating interactive,
                    functional, and beautiful websites. I love working on a team
                    with other passionate individuals, and I can't wait to bring
                    my leadership skills to your organization.
                </p>
                <button className="about-btn">Download My Resumé</button>
            </div>
        </div>
    );
}

export default About;
