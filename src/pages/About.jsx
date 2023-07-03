import SectionOne from "../components/about/SectionOne"
import Button from "../layouts/Button"


const About  = () => {
    return(
        <main className="about">

            <section className="about_header">
                <h1>
                    Fuel your day with our <br></br> exceptional coffee creations
                    <img src="/images/vectors/star.png" alt="" className="vector vector--star"/>
                    <img src="/images/vectors/line-scratch.png" alt="" className="vector vector--line"/>
                </h1>
                <div className="">
                    <img src="/images/about/header_one.png" alt="" />
                    <img src="/images/about/header_two.png" alt="" />
                    <div className="">
                        <img src="/images/about/header_three.png" alt="" />
                        <p>We have a possion for coffee and people. Make sure you always have your favorite cup of coffee around to start your day off right. We have a possion for coffee and people. Make sure you always have your favorite cup of coffee around to start your day off right.  e. Make sure you always have your favorite cup of coffee around to start your day off right. </p>
                        <Button children={"View Products"} />
                    </div>
                </div>
            </section>



        </main>
    )
}

export default About 