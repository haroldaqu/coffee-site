const Newsletter = () => {
    return (
        <div className="home_newsletter">
            <div className="">
                <h1>Stay updated to get our special offers</h1>
                <img src="/images/vectors/line-scratch.png" alt="" className="vector"/>
                <img src="/images/vectors/microphone.png" alt="" className="vector vector--microphone" />
                <div className="newsletter_form">
                    <input type="text"  placeholder="EMAIL ADDRESS"/>
                    <button children={"SUBSCRIBE"} ></button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter