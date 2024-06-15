import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { linkCarouselImageHome } from '@/mock/menuProps'
export default function Carousel() {
  return (
    <div className="w-full mb-7 slider-app mt-7">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        className="mySwiper"
      >
        {linkCarouselImageHome &&
          linkCarouselImageHome?.map((value: string, index: number) => (
            <SwiperSlide key={index} className="relative">
              <img
                className="rounded-tl-[80px] rounded-br-[80px]"
                src={value}
                alt="image slide 1"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
