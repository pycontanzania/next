import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Carousel({ gallery }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
      autoplay
    >
      {gallery &&
        gallery.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative aspect-w-1 aspect-h-1 rounded-lg">
              <Image
                alt={slide.name}
                src={slide.image}
                layout="fill"
                priority
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Carousel;
