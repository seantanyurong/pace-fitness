import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dfhxocdgi",
  },
});

const myImage = cld.image("pace-fitness/heroBanner");

const Carousel = () => {
  return (
    <section className="mt-16">
      {" "}
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage
            className="rounded-lg"
            cldImg={myImage}
            alt="heroBanner"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
