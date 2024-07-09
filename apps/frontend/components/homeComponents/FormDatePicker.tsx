import { DatePicker, DatePickerProps } from "antd";

export const FormDatePicker = (props: DatePickerProps) => {
  return (
    <DatePicker
      className="rounded text-sm w-[358px] h-12 text-[#57585A] border border-solid border-[#E7E8E9] font-montserrat"
      {...props}
    />
  );
};
