import { Tabs } from 'antd'
import { CategoryLabel } from '@/components/homeComponents/CategoryLabel'
import { ListProductCarousel } from '@/components/homeComponents/ListProductCarousel'
import { listProduct } from '@/mock/productProps'

export const ListProduct = () => {
  return (
    <div className="text-center product-list flex flex-col">
      <div className="">
        <CategoryLabel label={'Sắm tết sang - Ivy sale hết'} />
        <Tabs centered defaultActiveKey="1" className="w-full h-full">
          <Tabs.TabPane tab="IVY moda " key="1">
            <ListProductCarousel products={listProduct} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="IVY men " key="2">
            <ListProductCarousel products={listProduct} />
          </Tabs.TabPane>
          <Tabs.TabPane tab=" IVY kids" key="3">
            <ListProductCarousel products={listProduct} />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <div className="">
        <CategoryLabel label={'YEAR END SALE - UP TO 50% TOÀN BỘ SẢN PHẨM'} />
        <Tabs centered defaultActiveKey="1" className="w-full h-full">
          <Tabs.TabPane tab="IVY moda " key="1">
            <ListProductCarousel products={listProduct} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="IVY men " key="2">
            <ListProductCarousel products={listProduct} />
          </Tabs.TabPane>
          <Tabs.TabPane tab=" IVY kids" key="3">
            <ListProductCarousel products={listProduct} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}
