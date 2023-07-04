import { Link } from "react-router-dom"
import Button from "../../layouts/Button"

const HomeHeaders = ({setCurrentLink}) => {
    return(
            <section className="home_headers">
                <img src="/images/home/hero.png" alt="" />
                <div className="headers_content--one">
                    <div className="">
                        <span>Whats new?</span>
                        <h1>Meet our new coffee!</h1>
                        <p>Try one of our signature selections and see what everyone’s talking about or select ‘Catalogue’ at the top of the page to view all the possibilities.</p>
                        <Link to="/about" onClick={() => setCurrentLink(2)}>
                            <Button children={"Learn More"} />
                        </Link>
                        
                    </div>
                </div>
                <div className="headers_content--two">
                        <div className="">                          <h1>What's interesting about this coffee?</h1>
                        <img src="/images/vectors/line-scratch.png" alt="" className="vector"/>
                        <p>Try one of our signature selections and see what everyone’s talking about or select ‘Catalogue’ at the top of the page to view all the possibilities.</p>
                    </div>
                </div>
                <img src="/images/home/hero2.png" alt="" />
        </section>
    )
}

export default HomeHeaders