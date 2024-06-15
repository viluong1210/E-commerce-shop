import { Input, InputProps } from 'antd'

export const InputBox = ({ placeholder, type }: InputProps) => {
  return (
    <Input
      className="rounded text-sm w-[358px] h-12 text-[#57585A] border border-solid border-[#E7E8E9] font-montserrat"
      placeholder={placeholder}
      type={type}
    />
  )
}
