import { Select } from 'antd'
import React from 'react'
import type { SelectProps } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import '../styles/component/searchInput.css'
const options: SelectProps['options'] = []

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
const onSearch = (value: string) => {
  console.log('search:', value)
}

const SearchInput: React.FC = () => (
  <Select
    style={{ width: '100%' }}
    showSearch
    placeholder="TÌM KIẾM SẢN PHẨM "
    optionFilterProp="children"
    onSearch={onSearch}
    filterOption={(input, option : any) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    onChange={handleChange}
    options={options}
    suffixIcon={<SearchOutlined />}
  />
)

export default SearchInput
