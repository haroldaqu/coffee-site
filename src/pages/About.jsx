import Button from "../layouts/Button"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";




const About  = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
        },
    };

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

            <section className="about_banner">
                <img src="/images/about/banner.png" alt="" />
            </section>

            <section className="about_info">
                <div className="about_info--one">
                    <h1>
                        HOW OUR <br /> JOURNEY <br /> STARTED
                    </h1>
                    <img src="/images/vectors/line-scratch.png" alt="" className="vector vector--line"/>
                </div>
                <div className="about_info--two">
                    <p>
                        With a passion for coffee at our core, our company was founded on the belief that a great cup of coffee can transform your day. From the very beginning, we dedicated ourselves to sourcing the highest quality beans and perfecting our roasting techniques. This commitment to excellence is what sets us apart.
                    </p>
                    <p>
                        As our reputation grew, so did our ambition. We expanded our offerings, exploring unique flavors and innovative brewing methods. Our team of coffee enthusiasts works tirelessly to deliver an unparalleled coffee experience to our customers, ensuring that each sip is a moment of pure bliss.


                    </p>
                    <p>
                        Today, we take pride in our journey, from those early days of experimentation to becoming a trusted name in the world of coffee. Join us on this flavorful adventure, and let our passion for coffee ignite your senses.
                    </p>
                </div>

                    <Swiper 
                        spaceBetween={30}
                        pagination={{
                            pagination,
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <i className="swiper--right bi bi-quote"></i>
                            <p>"The coffee product from [Company Name] is an absolute game-changer! The flavor profile is incredibly rich and bold, with hints of chocolate and caramel that dance on the palate. It's the perfect pick-me-up in the morning or a delightful treat for any time of the day. I can't imagine starting my day without this exceptional coffee."</p>
                            <i className="swiper--left bi bi-quote"></i>
                        </SwiperSlide>
                        <SwiperSlide>
                            <i className="swiper--right bi bi-quote"></i>
                            <p>"I'm blown away by the quality of [Company Name]'s coffee product. The aroma alone is enough to get me excited for my morning ritual. The taste is smooth and well-balanced, with subtle notes of fruit and a lingering, satisfying finish. It's evident that this brand takes pride in their craft, and I'm grateful to have discovered their remarkable coffee."</p>
                            <i className="swiper--left bi bi-quote"></i>
                        </SwiperSlide>
                        <SwiperSlide>
                            <i className="swiper--right bi bi-quote"></i>
                            <p>"As a coffee aficionado, I've tried countless brands, but [Company Name]'s coffee product truly stands out. The beans are clearly sourced with care, resulting in a cup of coffee that is bursting with flavor and freshness. The attention to detail in the roasting process is evident in every sip. It's clear that [Company Name] is committed to delivering an exceptional coffee experience, and they've certainly won me over as a loyal customer."</p>
                            <i className="swiper--left bi bi-quote"></i>
                        </SwiperSlide>
                    </Swiper>
                <div className="about_info--four">
                    <h1>
                        CUSTOMER <br /> REVIEWS
                    </h1>
                    <img src="/images/vectors/arrow.png" alt="" className="vector"/>
                </div>
            </section>
            
        </main>
    )
}

export default About 