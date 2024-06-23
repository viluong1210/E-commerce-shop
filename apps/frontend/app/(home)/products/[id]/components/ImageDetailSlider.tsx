"use client";

import { useState } from "react";
import ImageZoom from "react-image-zooom";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
type IProps = {
  listImage: string[];
};
export default function ImageDetailSlider({ listImage }: IProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="flex w-full relative">
      <div className="w-9/12 pr-5">
        <Swiper
          loop={true}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="text-left"
        >
          {listImage?.length &&
            listImage.map((product: string, index: number) => (
              <SwiperSlide key={index}>
                <div className="w-full overflow-hidden shadow-2xl border rounded-md">
                  <ImageZoom
                    src={product}
                    zoom="200"
                    className="h-full w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="md:w-4/12 w-5/12">
        <Swiper
          onSwiper={(swiper) => swiper && setThumbsSwiper(swiper)}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            865: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          direction={"vertical"}
          className="w-3/12 lg:h-[500px] h-[400px] swiper-pagination right-0"
        >
          {listImage &&
            listImage.map((product: string, index: number) => (
              <SwiperSlide key={index}>
                <div className="w-7/12 h-max overflow-hidden shadow-2xl border rounded-md">
                  <img
                    src={product}
                    alt={"ivy-moda"}
                    className="h-5/6 w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
