import React from 'react'
import { Table } from 'antd'
import type { TableColumnsType, TableProps } from 'antd'
import { listProduct } from '@/mock/productProps'
import { Products } from '@/types/productType'

const columns: TableColumnsType<Products> = [
  {
    title: 'TÊN SẢN PHẨM',
    width: 250,
    render: (_, record) => (
      <div className="flex justify-start">
        <img className="w-1/3" src={record.mainImage} />
        <div className="flex flex-col xl:mx-3 mx-1">
          <h3 className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
            {record.infoProduct.titleProduct}
          </h3>{' '}
          <div className="flex w-full text-[#6c6d70] xl:text-sm text-xs font-normal font-montserrat mt-5">
            <span className="xl:mr-5 mr-3">Màu sắc: Đen</span>
            <span className="mr-1">Size:</span>
            <span className="uppercase">{record.infoProduct.listSize[0]}</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'CHIẾT KHẤU',
    width: 80,
    render: (_, record) => (
      <div className="flex flex-col justify-start items-start">
        <span className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
          {' '}
          {record.infoProduct.priceProduct.originPrice}
        </span>
        <span className="text-sm text-[#d73831] font-montserrat font-bold">
          {' '}
          ( -{record.infoProduct.voucher})
        </span>
      </div>
    ),
  },

  {
    title: 'SỐ LƯỢNG',
    width: 150,
    render: () => (
      <div className="flex justify-start items-start">
        <div className="border-t flex border-b border-t-[#e7e8e9] xl:min-w-6 xl:min-w-4">
          <button className="border flex items-center justify-center border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl xl:text-[28px] xl:w-[48px] xl:h-[48px] text-xl w-[40px] h-[40px]">
            -
          </button>
          <button className="text-sm xl:text-[28px] xl:w-[48px] xl:h-[48px] w-[40px] h-[40px]">
            1
          </button>
          <button className="border border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl text-[28px] xl:text-[28px] xl:w-[48px] xl:h-[48px] text-xl w-[40px] h-[40px]">
            +
          </button>
        </div>
      </div>
    ),
  },
  {
    title: 'TỔNG TIỀN',
    width: 80,
    render: (_, record) => (
      <div className="flex flex-col justify-start items-start">
        <span className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
          {' '}
          {record.infoProduct.priceProduct.sale}
        </span>
      </div>
    ),
  },
]

const onChange: TableProps<Products>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log('params', pagination, filters, sorter, extra)
}

const App: React.FC = () => (
  <div className="mt-5">
    <Table
      columns={columns}
      dataSource={listProduct}
      onChange={onChange}
      pagination={false}
      scroll={{ x: window.innerWidth - 1000 }}
    />
  </div>
)

export default App
