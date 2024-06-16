"use client"
import { Select } from 'antd'
import React from 'react'
import type { SelectProps } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import '../../styles/component/searchInput.css'
import useCreateQueryString from '@/hooks/useCreateQueryString'
import {  useRouter } from 'next/navigation'
const options: SelectProps['options'] = []



const SearchInput: React.FC = () => {
  const createQueryString = useCreateQueryString()
  const router = useRouter();


  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
    
  }


  const onSearch = (value: string) => {
    router.push(
      `/products?${createQueryString({search : value})}`,
      {
        scroll: false,
      },
    );
  }
  return <Select
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
}

export default SearchInput
