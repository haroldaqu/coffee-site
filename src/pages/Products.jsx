import HomeProduct from "../components/home/HomeProduct"

const Products  = () => {
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
                <div className="">
                    <HomeProduct toggle={true} />
                    <HomeProduct toggle={true} />
                    <HomeProduct toggle={true} />
                </div>
                <div className="lineup_name">
                    <img src="/images/vectors/arrow-squiggly.png" alt="" className="vector" />
                    <h1>Specialty Lineup</h1>
                </div>
            </section>

            <section className="mountain_line">
                <div className="">
                    <HomeProduct toggle={true} />
                    <HomeProduct toggle={true} />
                    <HomeProduct toggle={true} />
                </div>
                <div className="lineup_name">
                    <img src="/images/vectors/arrow-squiggly.png" alt="" className="vector" />
                    <h1>Mountain Lineup</h1>
                </div>
            </section>

        </main>
    )
}

export default Products 