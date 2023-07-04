import ProductsData from "../../data/ProductsData"
import Button from "../../layouts/Button"
import HomeProduct from "./HomeProduct"
import ProductCarousel from "./ProductCarousel"


import { useEffect, useState } from "react"

const Lineup = () => {
    const id = [1,2,3]
    const [lineup, setLineup] = useState([])

    useEffect(() => {
        const filterLineup =  ProductsData && ProductsData.filter((product) => {
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
                        <Button  children={"More Products"}/>
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