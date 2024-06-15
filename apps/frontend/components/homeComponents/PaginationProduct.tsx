import React, { useState } from 'react'
import type { PaginationProps } from 'antd'
import { Button, Pagination } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import '../../styles/component/panigation.css'
const PaginationProduct: React.FC = () => {
  const [current, setCurrent] = useState(1)

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page)
    setCurrent(page)
  }
  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return (
        <Button>
          <DoubleLeftOutlined />
        </Button>
      )
    }
    if (type === 'next') {
      return (
        <Button>
          <DoubleRightOutlined />
        </Button>
      )
    }
    return originalElement
  }

  return (
    <div className="pagination-product mt-5 w-full flex justify-center">
      <Pagination
        current={current}
        onChange={onChange}
        total={5}
        itemRender={itemRender}
      />
    </div>
  )
}

export default PaginationProduct
