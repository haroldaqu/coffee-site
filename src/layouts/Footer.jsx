import { NavLink } from "react-router-dom"

const Footer = ({setCurrentLink}) => {
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
                        <li onClick={() => setCurrentLink(1)}>
                            <NavLink to="/" className="active">HOME</NavLink>
                        </li>
                        <li onClick={() => setCurrentLink(3)}>
                            <NavLink to="/products" >PRODUCTS</NavLink>
                        </li>
                        <li onClick={() => setCurrentLink(2)}>
                            <NavLink to="/about" >ABOUT</NavLink>
                        </li>
                        <li onClick={() => setCurrentLink(4)}>
                            <NavLink to="/contact" >CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer