import productsData from "../../data/ProductsData"
import Button from "../../layouts/Button"
import HomeProduct from "./HomeProduct"
import ProductCarousel from "./ProductCarousel"


import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Lineup = ({setCurrentLink}) => {
    const id = [1,2,3]
    const [lineup, setLineup] = useState([])

    useEffect(() => {
        const filterLineup =  productsData && productsData.filter((product) => {
            return product.lineup === 1
        }) 
        setLineup(filterLineup)
    },[])

    return (
        <section className="home_lineup">
            <div className="lineup">
                <div className="lineup_content">
                    <h1>THE NEW LINE UP</h1>
                    <img src="/images/vectors/arrow-swirl.png" alt="" className="vector--arrow"/>
                    <div className="">
                        <p>We have a passion for coffee and people. Make sure you always have your favorite cup of coffee around to start your day off right.</p>
                        <Link to="/products" onClick={() => setCurrentLink(3)}>
                            <Button  children={"More Products"}/>
                        </Link>
                        
                    </div>
                </div>
                    <ProductCarousel  lineup={lineup} />  
                    <div className="lineup_products">
                        {lineup.length !== 0 && lineup.map((product => (
                            <HomeProduct key={product.id} product={product}/>
                        )))}          
                    </div> 

            </div>
        </section>
    )
}

export default Lineup