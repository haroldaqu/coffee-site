import { useEffect, useState } from "react"
import HomeProduct from "../components/home/HomeProduct"
import productsData from "../data/ProductsData"

const Products  = ({setCurrentLink, products}) => {
    const [specialty, setSpecialty] = useState([])
    const [mountain, setMountain] = useState([])

    useEffect(() => {
        const filterSpecialtiy =  productsData && productsData.filter((product) => {
            return product.lineup === 1
        }) 
        setSpecialty(filterSpecialtiy)
        const filterMountain =  productsData && productsData.filter((product) => {
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
                    {/* {specialty.length !== 0 && specialty.map((product => (
                        <HomeProduct 
                        key={product.id} 
                        product={product}
                        toggle={true}
                        />
                    )))}   */}
                    {products && 
                        products
                        .filter(product => product.lineup === "Specialty")
                        .map(product => (
                        <HomeProduct 
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
                <div className="lineup_name">
                    <img src="/images/vectors/arrow-squiggly.png" alt="" className="" />
                    <h1>Specialty Lineup</h1>
                </div>
            </section>

            <section className="mountain_line">
                <div className="mountain_line--products">
                    {/* {mountain.length !== 0 && mountain.map((product => (
                        <HomeProduct 
                        key={product.id} 
                        product={product}
                        toggle={true}
                        />
                    )))}   */}
                    {products && 
                        products
                        .filter(product => product.lineup === "Mountain")
                        .map(product => (
                        <HomeProduct 
                            key={product.id}
                            product={product}
                        />
                    ))}
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