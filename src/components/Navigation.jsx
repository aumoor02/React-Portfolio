import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

function Navigation({scrollRef}) {
    const scrollDown = (e) => {
        e.current.scrollIntoView({
            behavior: "smooth"
        });
    };
    
    return (
        <div className="navigation">
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => scrollDown(scrollRef)}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;
