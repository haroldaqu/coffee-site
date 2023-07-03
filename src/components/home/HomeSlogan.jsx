import Button from "../../layouts/Button"

const HomeSlogan = () => {
    return(
        <div className="home_slogan">
            <h1>From passion to perfect, crafted specialty coffee was born.</h1>
            <div className="slogan_container">
                <div className="slogan_one">
                    <img src="/images/home/slogan1.png" alt="" />
                    <Button children={"About"} />
                </div>
                <div className="slogan_two">
                    <img src="/images/home/slogan2.png" alt="" />
                    <Button  children={"Products"}/>
                </div>
            </div>
        </div>
    )
}

export default HomeSlogan