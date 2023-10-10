import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

function Navigation() {
    return (
        <div className="navigation">
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>About</NavLink>
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
