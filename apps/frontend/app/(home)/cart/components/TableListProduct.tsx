"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { ProductType } from "@/types";
import { listSize } from "@/containts";
import { formatToVND } from "@/lib/utils";
import { listProduct } from "@/mock/productProps";

const columns: TableColumnsType<ProductType> = [
  {
    title: "TÊN SẢN PHẨM",
    key: "name",
    width: 250,
    render: (_, record) => (
      <div className="flex justify-start">
        <img className="w-1/3" src={record.images[0]?.url} />
        <div className="flex flex-col xl:mx-3 mx-1">
          <h3 className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
            {record.name}
          </h3>{" "}
          <div className="flex w-full text-[#6c6d70] xl:text-sm text-xs font-normal font-montserrat mt-5">
            <span className="xl:mr-5 mr-3">Màu sắc: Đen</span>
            <span className="mr-1">Size:</span>
            <span className="uppercase">{listSize[0]}</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "CHIẾT KHẤU",
    key: "price",
    width: 80,
    render: (_, record) => (
      <div className="flex flex-col justify-start items-start">
        <span className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
          {" "}
          {formatToVND(record.price)}
        </span>
        {/* <span className="text-sm text-[#d73831] font-montserrat font-bold">
          {" "}
          ( -50%)
        </span> */}
      </div>
    ),
  },

  {
    title: "SỐ LƯỢNG",
    width: 150,
    key: "quantity",
    render: (_, record) => (
      <div className="flex justify-start items-start">
        <div className="flex xl:min-w-6 xl:min-w-4">
          <button className="border flex items-center justify-center border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl xl:text-[28px] xl:w-[48px] xl:h-[48px] text-xl w-[40px] h-[40px]">
            -
          </button>
          <button className="text-sm xl:text-[20px] xl:w-[48px] xl:h-[48px] w-[40px] h-[40px]">
            {record?.quantity || 1}
          </button>
          <button className="border border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl text-[28px] xl:text-[28px] xl:w-[48px] xl:h-[48px] text-xl w-[40px] h-[40px]">
            +
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "TỔNG TIỀN",
    width: 80,
    key: "sum",
    render: (_, record) => (
      <div className="flex flex-col justify-start items-start">
        <span className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
          {formatToVND(
            record?.quantity ? record.quantity * record.price : record.price,
          )}
        </span>
      </div>
    ),
  },
];

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cartItems");
      if (cart) {
        setCartItems(JSON.parse(cart));
      }
    }
  }, []);

  return (
    <div className="mt-5">
      <Table
        columns={columns}
        dataSource={cartItems || []}
        pagination={false}
        // scroll={{ x: 1200 }}
      />
    </div>
  );
};

export default App;
