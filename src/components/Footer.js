import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="footer-container">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/austinmoore93/">
                        <i>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2xl"
                                style={{
                                    color: "#0077B5",
                                    backgroundColor: "white",
                                }}
                            />
                        </i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/aumoor02">
                        <i>
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="2xl"
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                }}
                            />
                        </i>
                    </a>
                </li>
                <li>
                    <a href="mailto:astncmoore@gmail.com">
                        <i>
                            <FontAwesomeIcon
                                icon={faGoogle}
                                size="2xl"
                                style={{ color: "black", backgroundColor: "white" }}
                            />
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
