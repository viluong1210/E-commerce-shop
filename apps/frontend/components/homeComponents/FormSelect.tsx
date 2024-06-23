import { SelectProps, Select } from "antd";
import "../../styles/component/selectInput.css";

type IProps = SelectProps & {
  sizes: string;
};
export const FormSelect = ({
  placeholder,
  sizes,
  options,
  onChange,
  value,
}: IProps) => {
  return (
    <Select
      className="rounded select-search text-sm w-[358px] text-[#57585A]  font-montserrat"
      placeholder={placeholder}
      showSearch
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (String(optionA?.labe) ?? "")
          ?.toLowerCase()
          .localeCompare((String(optionB?.label) ?? "")?.toLowerCase())
      }
      onChange={onChange}
      options={options}
      style={{ width: sizes }}
    />
  );
};
