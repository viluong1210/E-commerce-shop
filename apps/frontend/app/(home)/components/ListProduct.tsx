import { Tabs } from 'antd'
import { CategoryLabel } from '@/components/homeComponents/CategoryLabel'
import { ListProductCarousel } from '@/components/homeComponents/ListProductCarousel'

import { getAllProducts } from '@/services/productsService'
import { ProductType, ResponseType } from '@/types'

export const ListProduct = async () => {
  const products : ResponseType<ProductType> = await getAllProducts({
    limit: 10,
    page : 1,
   
  })

  // console.log('products.dataproducts.data',products.data);
  
  return (
    <div className="text-center product-list flex flex-col">
      <div className="">
        <CategoryLabel label={'Sắm tết sang - Ivy sale hết'} />
        <Tabs centered defaultActiveKey="1" className="w-full h-full">
          <Tabs.TabPane tab="IVY moda" key="1">
            <ListProductCarousel products={products.data} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="IVY men" key="2">
            <ListProductCarousel products={products.data} />
          </Tabs.TabPane>
          <Tabs.TabPane tab=" IVY kids" key="3">
            <ListProductCarousel products={products.data} />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <div className="">
        <CategoryLabel label={'YEAR END SALE - UP TO 50% TOÀN BỘ SẢN PHẨM'} />
        <Tabs centered defaultActiveKey="1" className="w-full h-full">
          <Tabs.TabPane tab="IVY moda " key="1">
            <ListProductCarousel products={products.data} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="IVY men " key="2">
            <ListProductCarousel products={products.data} />
          </Tabs.TabPane>
          <Tabs.TabPane tab=" IVY kids" key="3">
            <ListProductCarousel products={products.data} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}
