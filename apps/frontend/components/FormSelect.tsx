import { SelectProps, Select } from 'antd'

type IProps = SelectProps & {
  sizes: string
}
export const FormSelect = ({ placeholder, sizes }: IProps) => {
  const options: SelectProps['options'] = []
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    })
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <Select
      className="rounded text-sm w-[358px] text-[#57585A]  font-montserrat"
      placeholder={placeholder}
      mode="tags"
      size="large"
      onChange={handleChange}
      options={options}
      style={{ width: sizes }}
    />
  )
}
