import { Select, SelectProps } from 'antd'
import { CategoryLabel } from '@/components/CategoryLabel'
import { ProductItem } from '@/components/ProductItem'
import { listProduct } from '@/mock/productProps'
import { Products } from '@/types/productType'
import '../../../styles/page/product.css'
import PaginationProduct from '@/components/PaginationProduct'
import { DownOutlined } from '@ant-design/icons'
import { useState } from 'react'
export const ListProduct = () => {
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
      label: 'Được mua nhiều nhất',
    },
    {
      value: 4,
      label: 'Được yêu thích nhất',
    },
    {
      value: 5,
      label: 'Giá: cao đến thấp',
    },
    {
      value: 6,
      label: 'Giá: thấp đến cao',
    },
  ]
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const [isActiveFilter, setIsActiveFilter] = useState(false)
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
        {listProduct.map((item: Products) => {
          return <ProductItem itemProduct={item} key={item.id} />
        })}
      </div>
      <PaginationProduct />
    </div>
  )
}
