import React from "react";
import { PageHeader } from "../UIComponents";

// import Swiper core and required modules
import {
  Navigation,
  EffectFade,
  Pagination,
  A11y,
  Zoom,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="w-full h-[40rem]">
      <Swiper
        // install Swiper modules
        modules={[EffectFade, Navigation, Zoom, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        effect={"fade"}
        zoom={{
          maxRatio: 10,
        }}
        loop={true}
        speed={2100}
        autoplay={{
          delay: 2000,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <PageHeader
            imgURL="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            pageName="Give Child The Gift Of Education"
            descText="Helping Today, Helping Tommorow"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PageHeader
            imgURL="https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            pageName="Give Child The Gift Of Education"
            descText="Helping Today, Helping Tommorow"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PageHeader
            imgURL="https://images.unsplash.com/photo-1542385900-ba5b0f6e84d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            pageName="Give Child The Gift Of Education"
            descText="Helping Today, Helping Tommorow"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PageHeader
            imgURL="https://images.unsplash.com/photo-1495983239379-7f250e210f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
            pageName="Give Child The Gift Of Education"
            descText="Helping Today, Helping Tommorow"
            btnText="Discover More"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
