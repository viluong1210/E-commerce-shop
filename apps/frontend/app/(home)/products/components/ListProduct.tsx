"use client"

import { Select, SelectProps } from 'antd'
import { CategoryLabel } from '@/components/homeComponents/CategoryLabel'
import { ProductItem } from '@/components/homeComponents/ProductItem'
import "@/styles/page/product.css"
import PaginationProduct from '@/components/homeComponents/PaginationProduct'
import { DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Paging, ProductType, ResponseType } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import useCreateQueryString from '@/hooks/useCreateQueryString'


type Props = {
  
  data : ResponseType<ProductType>
}

export const ListProduct = ({ data }: Props) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false)

  const createQueryString = useCreateQueryString()
  const router = useRouter();
  const pathname = usePathname();
  const options: SelectProps['options'] = [
    {
      value: 1,
      label: 'Mặc định',
    },
    {
      value: 2,
      label: 'Mới nhất',
    },
    {
      value: 3,
      label: 'Cũ nhất',
    },
    {
      value: 4,
      label: 'Giá: cao đến thấp',
    },
    {
      value: 5,
      label: 'Giá: thấp đến cao',
    },
  ]

  const handleChange = (value: number) => {

    let param  ={}

    switch (value) {
      case 2:
        param = {dateSort : 'esc'} 
        break;
      case 3:
        param = {dateSort : 'desc'} 
        break;
      case 4:
        param = {priceSort : 'esc'} 
        break;
      case 5:
        param = {priceSort : 'desc'} 
        break;
      default:
        param = {}
        break;
    }


    router.push(
      `${pathname}?${createQueryString({...param})}`,
      {
        scroll: false,
      },
    );
  }
  
  return (
    <div className="text-center product-list flex flex-col">
      <div className="flex justify-between">
        <CategoryLabel label={'NEW ARRIVAL'} />
        <Select
          className="filter-product-item lg:w-[240px]"
          placeholder="Sắp xếp theo"
          onChange={handleChange}
          options={options}
          suffixIcon={
            <DownOutlined
              className="text-sm"
              rotate={isActiveFilter ? 180 : 0}
            />
          }
          onClick={() => setIsActiveFilter(!isActiveFilter)}
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-4">
        {data.data.map((item: ProductType) => {
          return <ProductItem itemProduct={item} key={item.id} />
        })}
      </div>
      <PaginationProduct count={data.count} page={data.page} limit={data.limit}/>
    </div>
  )
}
