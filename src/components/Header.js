import React from "react"
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"> <img alt="" src="" />Homepage</NavLink>
                        </li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header