"use client"

import { CategoryLabel } from '@/components/homeComponents/CategoryLabel'
import { ColorDot } from '@/components/homeComponents/ColorDot'
import RegisterButton from '@/components/homeComponents/RegisterButton'
import { productDetail } from '@/mock/productProps'
import { ProductType } from '@/types'
import { HeartOutlined } from '@ant-design/icons'
import { Rate, Tabs, TabsProps } from 'antd'
import React, { useState } from 'react'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'GIỚI THIỆU',

  },
  {
    key: '2',
    label: 'CHI TIẾT SẢN PHẨM',

  },
  {
    key: '3',
    label: 'BẢO QUẢN',

  },
]


type Props = {
  product: ProductType
}

export default function DetailProduct({ product }: Props) {

  const [colorActive, setColorActive] = useState<string>('')

  const handleCheckColor = (color: string) => {
    setColorActive(color)
  }

  const onChange = (key: string) => {
    console.log(key)
  }

  const addProductToCart = () => {

    const cartItems = localStorage.getItem('cartItems');
    if (!cartItems) {
      localStorage.setItem('cartItems', JSON.stringify([product]))
      return
    }
    const cartItemsParse = JSON.parse(cartItems);
    localStorage.setItem('cartItems', JSON.stringify([...cartItemsParse, product]));
  }

  return (
    <div className="lg:w-5/12 md:w-6/12 w-full flex justify-start">
      <div className="xl:w-10/12 lg:w-full w-full flex flex-col justify-start items-start">
        <CategoryLabel label={product.name} />
        <div className="lg:flex-row flex flex-col xl:gap-5 lg:gap-2 lg:items-center items-start text-[#6c6d70] mb-4">
          <div className="flex gap-3">
            <span>{productDetail.id}</span>
            <Rate defaultValue={5} disabled />
          </div>
          <span>(0 đánh giá)</span>
        </div>
        <div className="flex justify-start relative items-end mt-4">
          <span className="text-[#221f20] text-2xl font-semibold">
            {product.price}
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
          <RegisterButton onClick={addProductToCart}>
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
  )
}
