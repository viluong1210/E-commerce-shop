import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { ProductItem } from './ProductItem'

import { Button } from 'antd'
import { ProductType } from '@/types'
type IProps = {
  products: ProductType[]
}
export const ListProductCarousel = ({ products }: IProps) => {
  console.log('productsproducts',products);
  
  return (
    <div className="list-product w-full mb-7 slider-app">
      <Swiper
        slidesPerView={5}
        effect={'creative'}
        spaceBetween={10}
        loop={true}
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {products?.length &&
          products?.map((item: ProductType) => (
            <SwiperSlide key={item.id}>
              <ProductItem itemProduct={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="text-center w-full mt-7">
        <Button className="bg-white h-max text-base text-[#221F20] hover:bg-[#221F20] py-[13px] px-8 border border-solid border-[#221F20] rounded-tl-3xl rounded-br-3xl">
          Xem tất cả
        </Button>
      </div>
    </div>
  )
}
