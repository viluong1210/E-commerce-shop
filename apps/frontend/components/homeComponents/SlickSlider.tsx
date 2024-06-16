"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
// Import Swiper styles
import 'swiper/css/effect-cards'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import { productImage } from '@/mock/productProps'

export default function SlickSlider() {
  return (
    <div className="w-full mb-5">
      <Swiper
        slidesPerView={4}
        effect={'creative'}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          639: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          865: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {' '}
        {productImage &&
          productImage.map((product: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-full overflow-hidden shadow-2xl border rounded-md">
                <img src={product} alt={'ivy-moda'} className="h-full w-full" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
