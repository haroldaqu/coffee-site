import { useEffect, useState } from "react"
import HomeProduct from "../components/home/HomeProduct"
import ProductsData from "../data/ProductsData"

const Products  = ({setCurrentLink}) => {
    const [specialty, setSpecialty] = useState([])
    const [mountain, setMountain] = useState([])

    useEffect(() => {
        const filterSpecialtiy =  ProductsData && ProductsData.filter((product) => {
            return product.lineup === 1
        }) 
        setSpecialty(filterSpecialtiy)
        const filterMountain =  ProductsData && ProductsData.filter((product) => {
            return product.lineup === 2
        }) 
        setMountain(filterMountain)
    },[])

    return(
        <main className="products">
            
            <section className="products_header">
                <h1>
                    Discover a world of<br></br> exceptional coffee delights
                    <img src="/images/vectors/okay.png" alt="" className="vector vector--okay"/>
                    <img src="/images/vectors/line-scratch.png" alt="" className="vector vector--line"/>
                </h1>
            </section>

            <section className="specialty_line">
                <div className="specialty_line--products">
                    {specialty.length !== 0 && specialty.map((product => (
                        <HomeProduct 
                        key={product.id} 
                        product={product}
                        toggle={true}
                        />
                    )))}  
                </div>
                <div className="lineup_name">
                    <img src="/images/vectors/arrow-squiggly.png" alt="" className="" />
                    <h1>Specialty Lineup</h1>
                </div>
            </section>

            <section className="mountain_line">
                <div className="mountain_line--products">
                    {mountain.length !== 0 && mountain.map((product => (
                        <HomeProduct 
                        key={product.id} 
                        product={product}
                        toggle={true}
                        />
                    )))}  
                </div>
                <div className="lineup_name">
                    <img src="/images/vectors/arrow-squiggly.png" alt="" className="" />
                    <h1>Mountain Lineup</h1>
                </div>
            </section>

        </main>
    )
}

export default Products 