import '@/styles/component/productItem.css'
import {  useState } from 'react'
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Button, Rate } from 'antd'
import { ColorDot } from './ColorDot'
import { ProductType } from '@/types'
import { listColor,  } from '@/containts'

type IProps = {
  itemProduct: ProductType
}
export const ProductItem = ({ itemProduct }: IProps) => {
  const [colorActive, setColorActive] = useState<string>('')


  const handleCheckColor = (color: string) => {
    setColorActive(color)
  } 
 
  return (
    
    <div onClick={() => {console.log("render router");
    }} className="product-item relative">
      <div className="container">
        <img
          src={itemProduct?.images?.[0]?.url}
          alt={itemProduct.name}
          className="w-full h-auto block"
        />
        <div className="overlay absolute top-0 bottom-0 right-0 left-0 h-full w-full opacity-0 duration-700">
          <img
            src={itemProduct?.images?.[1]?.url}
            alt={itemProduct.name}
            className="w-full h-auto block"
          />
        </div>
      </div>
      <Button className="bg-[#DC633A] promotion h-9 font-semibold text-sm rounded-tl-full rounded-bl-full rounded-tr-xl rounded-br-full  text-white absolute top-2 right-2 border-0">
        {/* -{itemProduct.infoProduct.voucher} */}
      </Button>
      <div className="flex justify-between mt-5">
        <ColorDot
          listColor={listColor}
          colorActive={colorActive}
          handleCheckColor={handleCheckColor}
        />
        <Rate count={1} character={<HeartOutlined />} />
      </div>
      <div className="block text-left mt-5">
        <h3 className="text-[#57585A] text-base font-normal mb-2 hover:text-[#AC2F33] font-montserrat">
          {itemProduct.name}
        </h3>
      </div>
      <div className="flex justify-between cart-btn">
        <div className="flex gap-3 items-center">
          <span className="text-[#3E3E3F] font-semibold font-montserrat text-base">
            {itemProduct.price}
          </span>
          <span className="text-[#A8A9AD] font-semibold font-montserrat text-xs line-through">
            {itemProduct.price}
          </span>
        </div>
        <Button
          className="border h-8 px-3 rounded-tl-lg rounded-tr-0 rounded-br-lg bg-[#221F20]  hover:bg-white cursor-pointer flex justify-center items-center"
          icon={
            <ShoppingOutlined className="icon-cart text-white hover:text-[#221F20]" />
          }
        />
      </div>
    </div>
  )
}
