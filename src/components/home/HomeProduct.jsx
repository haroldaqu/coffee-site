import Button from "../../layouts/Button"

const HomeProduct = ({toggle, product}) => {
    return (
        <div className="home_product">
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {toggle ? <Button  children={"BUY NOW"}/> : null}
            <p>{product.price}</p>
        </div>
    )
}

export default HomeProduct