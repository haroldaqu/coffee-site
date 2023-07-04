import Button from "../layouts/Button"

const Contact  = () => {
    return(
        <div className="contact">
            <div className="contact_header">
                <h1>
                    Contact us about <br></br> our coffee products
                    <img src="/images/vectors/microphone.png" alt=""  className="vector vector--microphone"/>
                </h1>
            </div>
            <div className="contact_form">
                <img src="/images/contact/contact.png" alt="" />
                <form action="">
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Number"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <Button children={"SEND MESSAGE"}></Button>
                </form>                
            </div>

        </div>
    )
}

export default Contact 