import React from "react";
import { SocialIcon } from "react-social-icons";


function Footer() {
    return (
        <div>
            <ul>
                <li>
                    <SocialIcon url="https://www.linkedin.com/in/austinmoore93/" />
                </li>
                <li>
                    <SocialIcon url="https://github.com/aumoor02" />
                </li>
                <li>
                    <SocialIcon url="mailto:astncmoore@gmail.com" bgColor="#EA4335"/>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
