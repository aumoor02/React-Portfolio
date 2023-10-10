import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="header">
            <Navigation />
            <div className="header-description">
                <h1>Austin Moore</h1>
                <p>
                    I am a web developer who uses front-end technologies <br />
                    to bring web pages to life!
                </p>
            </div>
            <button className="btn">Learn More</button>
        </div>
    );
}

export default Header;
