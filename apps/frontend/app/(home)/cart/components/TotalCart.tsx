"use client";

import RegisterButton from "@/components/homeComponents/RegisterButton";
import { WarningOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formatToVND } from "@/lib/utils";

type Props = {
  style?: string;
  isDisplay?: boolean;
};

export default function TotalCart({ style, isDisplay = false }: Props) {
  const [totalCart, setTotalCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cartItems");
      if (!cart) return;

      const cartItems: any[] = JSON.parse(cart);

      const result: any = [];

      result.push({
        title: "Tổng sản phẩm",
        count: `${cartItems?.length || 0}`,
      });
      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      result.push({ title: "Tổng tiền hàng", count: formatToVND(totalPrice) });

      result.push({ title: "Thành tiền", count: formatToVND(totalPrice) });

      result.push({ title: "Tạm tính", count: formatToVND(totalPrice) });

      setTotalCart(result);
    }
  }, []);

  return (
    <div className={style ? style : `lg:w-1/3 w-10/12 px-4 ml-2`}>
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
        <p className="mb-4 text-[#AC2F33] text-sm">
          <WarningOutlined className="mr-3" />
          Miễn đổi trả đối với sản phẩm đồng giá / sale trên 50%
        </p>
        <p className="mb-4 text-[#AC2F33] text-sm">
          <WarningOutlined className="mr-3" />
          Đặt hàng trước 2/2 với KH ở tỉnh, trước 4/2 với KH ở Hà Nội và TP Hồ
          Chí Minh để nhận hàng trước Tết.
        </p>
        <div className="w-full h-[1px] bg-[#E7E8E9] my-6"></div>
        {!isDisplay && (
          <RegisterButton onClick={() => router.push("/payment")}>
            <span className="uppercase">Đặt hàng</span>
          </RegisterButton>
        )}
      </div>
    </div>
  );
}
