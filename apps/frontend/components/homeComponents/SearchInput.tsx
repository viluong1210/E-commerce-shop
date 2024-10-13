"use client";
import { Input } from "antd";
import React, { useState } from "react";
import type { SelectProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../styles/component/searchInput.css";
import useCreateQueryString from "@/hooks/useCreateQueryString";
import { useRouter } from "next/navigation";
import { InputBox } from "./InputBox";
const options: SelectProps["options"] = [];

const SearchInput: React.FC = () => {
  const createQueryString = useCreateQueryString();

  const [valueSeach, setValueSeach] = useState<string>("");
  const router = useRouter();

  const onSearch = () => {
    router.push(`/products?${createQueryString({ search: valueSeach })}`, {
      scroll: false,
    });
  };

  return (
    <InputBox
      className="text-sm w-[358px]] h-12 text-[#57585A] font-montserrat"
      onChange={(e) => setValueSeach(e.target.value)}
      value={valueSeach}
      addonAfter={<SearchOutlined onClick={onSearch} />}
      placeholder="TÌM KIẾM SẢN PHẨM"
    />
  );
};

export default SearchInput;
