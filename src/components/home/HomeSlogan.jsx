import { Link } from "react-router-dom"
import Button from "../../layouts/Button"

const HomeSlogan = ({setCurrentLink}) => {
    return(
        <div className="home_slogan">
            <h1>From passion to perfect, crafted specialty coffee was born.</h1>
            <div className="slogan_container">
                <div className="slogan_one">
                    <img src="/images/home/slogan1.png" alt="" />
                    <Link to="/about" onClick={() => setCurrentLink(2)}>
                        <Button children={"About"} />
                    </Link>
                    
                </div>
                <div className="slogan_two">
                    <img src="/images/home/slogan2.png" alt="" />
                    <Link to="/products" onClick={() => setCurrentLink(3)}>
                        <Button  children={"Products"}/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeSlogan