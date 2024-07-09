"use client";

import Navigate from "@/components/homeComponents/navigate";
import Footer from "@/components/homeComponents/navbarEnd";
import { ArrowLeftOutlined, WarningOutlined } from "@ant-design/icons";
import RegisterButton from "@/components/homeComponents/RegisterButton";
import { Form } from "antd";
import { FormSelect } from "@/components/homeComponents/FormSelect";
import { InputBox } from "@/components/homeComponents/InputBox";
import { useMemo } from "react";

export default function SumeCart() {
  // const total = [
  //   { title: "Tổng sản phẩm", count: "3" },
  //   { title: "Tổng tiền hàng", count: "5.570.000đ" },
  //   { title: "Thành tiền", count: "2.785.000đ" },
  //   { title: "Tạm tính", count: "2.785.000đ" },
  // ];

  const total = [
    { title: "Tổng sản phẩm" },
    { title: "Tổng tiền hàng" },
    { title: "Thành tiền" },
    { title: "Tạm tính" },
  ];

  const cart = localStorage.getItem("cartItems");

  const totalCart = useMemo(() => {
    if (cart) JSON.parse(cart);

    const cardItems = cart ? JSON.parse(cart) : [];

    const productCount = cardItems.reduce((pre, curr) => {
      console.log("preprepre", pre);

      console.log("currcurr", curr);

      return (pre += curr.quantity);
    }, 0);

    const totals = items.reduce(
      (acc, item) => {
        acc.totalQuantity += item.quantity;
        acc.totalPrice += item.quantity * item.price;
        return acc;
      },
      { totalQuantity: 0, totalPrice: 0 },
    );

    console.log("productCount", productCount);

    return [];
  }, [cart]);

  return (
    <div className="bg-[rgba(247,248,249,0.5)]py-5">
      <h5 className="text-[#221f20] text-xl mb-[18px] font-medium">
        Tổng tiền giỏ hàng
      </h5>
      {totalCart.map((item: any, index) => {
        return (
          <div key={index} className="flex justify-between mb-4">
            <span className="text-[#57585a] text-sm">{item.title}</span>
            <span className="text-[#221f20] font-semibold text-base">
              {item.count}
            </span>
          </div>
        );
      })}
      <div className="w-full h-[1px] bg-[#E7E8E9] my-6"></div>
      <div className="w-full">
        <Form.Item name="voucher">
          <div className="flex justify-between  gap-10 mb-3">
            <span className="text-[#3e3e3f] leading-6 text-base font-semibold border-r pr-12 border-r-[#939598]">
              Mã phiếu giảm giá
            </span>
            <span className="text-[#939598] leading-6 text-base font-semibold">
              Mã của tôi
            </span>
          </div>
          <div className="flex gap-5 w-full justify-between">
            <InputBox width="278px" placeholder={"Mã giảm giá"} type="text" />{" "}
            <RegisterButton bgColor="#FFF" color="#221f20">
              <span className="uppercase">Áp dụng</span>
            </RegisterButton>
          </div>
        </Form.Item>
        <Form.Item name="support" className="-mt-5 mb-10">
          <FormSelect
            placeholder={"Mã nhân viên hỗ trợ"}
            sizes={"360px"}
            options={[]}
            onChange={() => {
              console.log("he he");
            }}
          />
        </Form.Item>
      </div>
      <RegisterButton>
        <span className="uppercase">Hoàn Thành</span>
      </RegisterButton>
    </div>
  );
}
