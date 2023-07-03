import Button from "../../layouts/Button"
import HomeProduct from "./HomeProduct"
import ProductCarousel from "./ProductCarousel"


const Lineup = () => {

    return (
        <section className="home_lineup">
            <div className="lineup">
                <div className="lineup_content">
                    <h1>THE NEW LINE UP</h1>
                    <img src="/images/vectors/arrow-swirl.png" alt="" className="vector--arrow"/>
                    <div className="">
                        <p>We have a passion for coffee and people. Make sure you always have your favorite cup of coffee around to start your day off right.</p>
                        <Button  children={"More Products"}/>
                    </div>
                </div>
                    <ProductCarousel />  
                    <div className="lineup_products">
                        <HomeProduct />
                        <HomeProduct />
                        <HomeProduct />                
                    </div> 

            </div>
        </section>
    )
}

export default Lineup