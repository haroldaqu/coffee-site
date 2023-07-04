import { useState } from "react"
import Button from "../../layouts/Button"

const Newsletter = ({}) => {
    const [subscribed, setSubscribed] = useState(false)

    return (
        <div className="home_newsletter">
            <div className="">
                <h1>Stay updated to get our special offers</h1>
                <img src="/images/vectors/line-scratch.png" alt="" className="vector vector--linescratch"/>
                <img src="/images/vectors/microphone.png" alt="" className="vector vector--microphone" />
                {subscribed ?
                    <div className="newsletter_form">
                        <p>SUBSCRIBED</p>
                        <i className="bi bi-check"></i>
                    </div>:
                    <div className="newsletter_form">
                        <input type="email"  placeholder="EMAIL ADDRESS"/>
                        <button 
                            children={"SUBSCRIBE"} 
                            onClick={() => setSubscribed(true)}></button>
                    </div>                    
                }
            </div>
        </div>
    )
}

export default Newsletter