import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import classes from "./carousel.module.css";

import SlideOne from '../../public/img/slide1.jpg'
import SlideTwo from '../../public/img/slide2.jpg'
import SlideThree from '../../public/img/slide3.jpg'

const slides = [
 {
    name:SlideOne,
    alt:'SlideOne'
 },
 {
    name:SlideTwo,
    alt:'SlideTwo'
 },
 {
    name:SlideThree,
    alt:'SlideThree'
 },
];

function Carousel() {
    return (
        <Swiper
            modules={[ Pagination, Autoplay]}
            pagination={{ dynamicBullets: true }}
            autoplay
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.alt}>
                    <Image alt={slide.alt} src={slide.name} objectFit='contain' priority />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;