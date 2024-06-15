"use client"

import Navigate from '@/components/homeComponents/navigate'
import '../../../../styles/page/detail.css'
import Footer from '@/components/homeComponents/navbarEnd'
import { Breadcrumb } from '@/components/homeComponents/Breadcrumb'
import ImageDetailSlider from './components/ImageDetailSlider'
import { CategoryLabel } from '@/components/homeComponents/CategoryLabel'
import { productDetail } from '@/mock/productProps'
import { Rate, Tabs, TabsProps } from 'antd'
import { ColorDot } from '@/components/homeComponents/ColorDot'
import { useState } from 'react'
import RegisterButton from '@/components/homeComponents/RegisterButton'
import { HeartOutlined } from '@ant-design/icons'
import SlickSlider from '@/components/homeComponents/SlickSlider'

export default function Product() {
  const [colorActive, setColorActive] = useState<string>('')

  const handleCheckColor = (color: string) => {
    setColorActive(color)
  }
  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'GIỚI THIỆU',
      children: productDetail.introduce,
    },
    {
      key: '2',
      label: 'CHI TIẾT SẢN PHẨM',
      children: productDetail.detail.group,
    },
    {
      key: '3',
      label: 'BẢO QUẢN',
      children: productDetail.use,
    },
  ]
  return (
    <div className="w-full h-full flex justify-center detail-product bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24 mb-28">
          <Breadcrumb title={'Nữ'} child={'Áo sơ mi lụa cánh hoa'} />
          <div className="flex md:flex-row flex-col w-full justify-between mt-5">
            <div className="md:w-6/12 w-full">
              <ImageDetailSlider listImage={productDetail.listImage} />
            </div>
            <div className="lg:w-5/12 md:w-6/12 w-full flex justify-start">
              <div className="xl:w-10/12 lg:w-full w-full flex flex-col justify-start items-start">
                <CategoryLabel label={productDetail.name} />
                <div className="lg:flex-row flex flex-col xl:gap-5 lg:gap-2 lg:items-center items-start text-[#6c6d70] mb-4">
                  <div className="flex gap-3">
                    <span>{productDetail.id}</span>
                    <Rate defaultValue={5} disabled />
                  </div>
                  <span>(0 đánh giá)</span>
                </div>
                <div className="flex justify-start relative items-end mt-4">
                  <span className="text-[#221f20] text-2xl font-semibold">
                    {productDetail.priceProduct.sale}
                  </span>
                  <span className="text-[#a8a9ad] text-base ml-1 line-through">
                    {productDetail.priceProduct.originPrice}
                  </span>
                  <button className="bg-[#dc633a] text-sm font-semibold text-[#f7f8f9] px-3 py-[2px] absolute bottom-4 -right-16">
                    -{productDetail.voucher}
                  </button>
                </div>
                <span className="text-[#221f20] text-2xl font-semibold my-5">
                  Màu sắc: Đen
                </span>
                <ColorDot
                  listColor={productDetail.listColor}
                  colorActive={colorActive}
                  handleCheckColor={handleCheckColor}
                />
                <div className="count flex justify-center items-center">
                  <span>Số lượng</span>
                  <div className="border-t flex border-b border-t-[#e7e8e9] mt-5 ml-3">
                    <button className="border flex items-center justify-center border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl text-[28px]  w-[48px] h-[48px]">
                      -
                    </button>
                    <button className="text-sm w-[48px] h-[48px]">1</button>
                    <button className="border border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl text-[28px]  w-[48px] h-[48px]">
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center lg:gap-4 gap-1 mt-8">
                  <RegisterButton>
                    <span className="uppercase">Thêm vào giỏ hàng</span>
                  </RegisterButton>
                  <RegisterButton>
                    <span className="uppercase">Mua hàng</span>
                  </RegisterButton>
                  <RegisterButton>
                    <HeartOutlined />
                  </RegisterButton>
                </div>
                <span className="mt-5 underline text-sm">Tìm tại cửa hàng</span>
                <div className="mt-6">
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SlickSlider />
        <Footer />
      </div>
    </div>
  )
}
