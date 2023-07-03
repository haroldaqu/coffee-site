import { NavLink } from "react-router-dom"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="">
                <div className="footer_socials">
                    <NavLink to="/" className="navbar_logo">Coffee</NavLink>
                    <ul>
                        <a href="#"><i className="bi bi-facebook"></i> </a>
                        <a href="#"><i className="bi bi-twitter"></i> </a>
                        <a href="#"><i className="bi bi-linkedin"></i> </a>
                    </ul>
                </div>
                <div className="footer_links">
                    <ul>
                        <li>
                            <NavLink to="/" className="active">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" >PRODUCTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" >CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer