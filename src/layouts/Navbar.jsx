import { useState } from "react"
import { NavLink } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return(
        <nav className="navbar">
            <NavLink to="/" className="navbar_logo">Coffee</NavLink>
            <ul className={mobileMenu ? `active` : null} onClick={() => toggleMenu()}>
                <li>
                    <NavLink to="/" className="active">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/products" >PRODUCTS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" >CONTACT</NavLink>
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