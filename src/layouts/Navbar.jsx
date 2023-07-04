import { useState } from "react"
import { NavLink } from "react-router-dom"
import Button from "./Button"

const Navbar = ({mobileMenu, setMobileMenu, currentLink, setCurrentLink}) => {

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return(
        <nav className="navbar">
            <NavLink to="/" className="navbar_logo">
                <img src="/images/vectors/logo.png" alt="" />
                Cama Coffee
            </NavLink>
            <ul className={mobileMenu ? `active` : null} onClick={() => toggleMenu()}>
                <li onClick={() => setCurrentLink(1)} >
                    <NavLink to="/" className={currentLink === 1 ? "active" : null}>Home</NavLink>
                </li>
                <li onClick={() => setCurrentLink(2)}>
                    <NavLink to="/about" className={currentLink === 2 ? "active" : null}>About</NavLink>
                </li>
                <li onClick={() => setCurrentLink(3)}>
                    <NavLink to="/products" className={currentLink === 3 ? "active" : null}>Products</NavLink>
                </li>
                <li onClick={() => setCurrentLink(4)}>
                    <NavLink to="/contact" className={currentLink === 4 ? "active" : null}>Contact</NavLink>
                </li>
            </ul>
            <Button children={"Buy Now"} />
            <NavLink href="#" className={`icon ${mobileMenu ? `active` : null}`} onClick={() => toggleMenu()}>
                {mobileMenu ?
                    <i className="bi bi-x"></i> :
                    <i className="bi bi-list"></i>
                }
            </NavLink>
        </nav>
    )
}

export default Navbar