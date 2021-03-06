import React from "react"
import { NavLink } from 'react-router-dom'

function Header() {
    const activeStyle = { color: "orange" }
    return (
        <nav>
            <NavLink exact to="/" activeStyle={activeStyle}> <img alt="" src="" />
                Homepage
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
            {" | "}
            <NavLink to="/courses" activeStyle={activeStyle}>
                Courses
            </NavLink>
        </nav>
    )
}

export default Header