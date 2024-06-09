import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import type { CSSProperties } from 'react'
import React, { useState } from 'react'
import type { CollapseProps } from 'antd'
import { Button, Collapse, Radio, Slider, Space, theme } from 'antd'
import { ColorDot } from '@/components/ColorDot'

type Option = {
  key: number
  label: string
}
const size = ['4-5', '6-7', '8-9', '10-11', '12-13']
const listColor = [
  'yellow',
  'green',
  'pink',
  'red',
  'gray',
  'white',
  'black',
  'purple',
  'blue',
]
const listPromotion: Option[] = [
  {
    key: 1,
    label: 'Dưới 30%',
  },
  {
    key: 2,
    label: 'Từ 30% - 50%',
  },
  {
    key: 3,
    label: 'Từ 50% - 70%',
  },
  {
    key: 4,
    label: 'Từ 70%',
  },
  {
    key: 5,
    label: 'Giá đặc biệt',
  },
]

export const FilterProduct = () => {
  const [colorActive, setColorActive] = useState<string>('')

  const handleCheckColor = (color: string) => {
    setColorActive(color)
  }

  const renderButtonSize = () => {
    return (
      <div className="flex button-size">
        {size.map((item: string) => {
          return <Button key={item}>{item}</Button>
        })}
      </div>
    )
  }
  const renderPrice = () => {
    return (
      <div className="w-full">
        <Slider
          defaultValue={30}
          styles={{
            track: {
              background: 'black',
            },
          }}
        />
        <div className="flex justify-between">
          <span>0</span>
          <span>10.000.000đ</span>
        </div>
      </div>
    )
  }

  const renderPromotion = () => {
    return (
      <Radio.Group name="radiogroup" defaultValue={1}>
        <Space direction="vertical" className="render-option-radio">
          {listPromotion.map((item: Option) => {
            return (
              <Radio key={item.key} value={item.key}>
                {item.label}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    )
  }
  const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
    panelStyle,
  ) => [
    {
      key: '1',
      label: 'Size',
      children: renderButtonSize(),
      style: panelStyle,
    },
    {
      key: '2',
      label: 'Màu sắc',
      children: (
        <ColorDot
          listColor={listColor}
          handleCheckColor={handleCheckColor}
          colorActive={colorActive}
        />
      ),
      style: panelStyle,
    },
    {
      key: '3',
      label: 'Mức chiết khấu',
      children: renderPrice(),
      style: panelStyle,
    },
    {
      key: '4',
      label: 'Nâng cao',
      children: renderPromotion(),
      style: panelStyle,
    },
  ]

  const { token } = theme.useToken()

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  }

  return (
    <div className="filter-product">
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
        defaultActiveKey={['1']}
        ghost
        items={getItems(panelStyle)}
      />
    </div>
  )
}
