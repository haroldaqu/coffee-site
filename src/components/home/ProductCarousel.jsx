import HomeProduct from "./HomeProduct"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const ProductCarousel = ({lineup}) => {
    return(
        <div className="product_carousel">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[ Navigation]}
                className="mySwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    3000: {
                        slidePerView: 3
                    }
                }}
            >
                {lineup.length !== 0 && lineup.map(product => (
                    <SwiperSlide key={product.id}>
                        <HomeProduct product={product} />
                    </SwiperSlide>  
                ))}
            </Swiper>
        </div>
    )
}

export default ProductCarousel