import { Input, InputProps } from "antd";

interface IProps extends InputProps {
  width?: string;
}

export const InputBox = ({ placeholder, type, width = "358px" }: IProps) => {
  return (
    <Input
      className={`rounded text-sm w-[${width}] h-12 text-[#57585A] border border-solid border-[#E7E8E9] font-montserrat bg-white`}
      placeholder={placeholder}
      type={type}
    />
  );
};
