import React from "react";
import Navigation from "./Navigation";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Header({scrollRef}) {
    const scrollDown = (e) => {
        e.current.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div className="header">
            <Navigation scrollRef={scrollRef}/>
            <div className="header-description">
                <h1>Austin Moore</h1>
                <p>
                    I am a web developer who uses front-end technologies <br />
                    to bring web pages to life!
                </p>
            </div>
            <button onClick={() => scrollDown(scrollRef)} className="header-btn">
                Learn More
                <div><KeyboardDoubleArrowDownIcon/></div>
            </button>
        </div>
    );
}

export default Header;
