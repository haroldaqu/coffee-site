import Button from "../../layouts/Button"

const HomeProduct = ({toggle}) => {
    return (
        <div className="home_product">
            <img src="/images/products/colombia_coffee.png" alt="" />
            <h3>Colombia</h3>
            <p>We have a possion for coffee and people. Make sure you always have your favorite cup of coffee around to start your day off right.</p>
            {toggle ? <Button  children={"BUY NOW"}/> : null}
        </div>
    )
}

export default HomeProduct