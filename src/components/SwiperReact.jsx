// Import Swiper React components
import {SiUpwork, SiFreelancer, SiLinkedin, SiFacebook} from "react-icons/si";
import SwiperCore, {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const SwiperReact = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      slidesPerView={4}
      autoplay={{
        delay: 800,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
      }}
      speed={200}
      loop={true}
      onSlideChange={() => console.log("change")}
      className="w-full flex justify-center items-center"
    >
      <SwiperSlide className="flex justify-center">
        <SiUpwork size={50} />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <SiFreelancer size={50} />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <SiLinkedin size={50} />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <SiFacebook size={50} />
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperReact;
