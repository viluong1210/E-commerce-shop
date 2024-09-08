"use client";

import RegisterButton from "@/components/homeComponents/RegisterButton";
import { Form, FormInstance } from "antd";
import { FormSelect } from "@/components/homeComponents/FormSelect";
import { InputBox } from "@/components/homeComponents/InputBox";
import { createOrder } from "@/services/ordersService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  form: FormInstance;
};

export default function SumeCart({ form }: Props) {
  const router = useRouter();

  const total = [
    { title: "Tổng sản phẩm", count: "3" },
    { title: "Tổng tiền hàng", count: "5.570.000đ" },
    { title: "Thành tiền", count: "2.785.000đ" },
    { title: "Tạm tính", count: "2.785.000đ" },
  ];

  const handleSubmit = () => {
    const datas = form.getFieldsValue();
    const cart = localStorage.getItem("cartItems");

    let cartParse = [];

    if (cart) {
      cartParse = JSON.parse(cart);
    }

    const formatdata = {
      ...datas,
      orderItems: cartParse.map((i) => ({
        productId: i.id,
        quantity: i.quantity,
        price: i.price,
      })),
    };

    createOrder(formatdata)
      .then(() => {
        toast.success("Đặt hàng thành công!");
        router.push("/");
        localStorage.setItem("cartItems", JSON.stringify([]));
      })
      .catch((res) => {
        toast.error("Gặp vấn đề khi đặt hàng");
      });
  };

  return (
    <div className="bg-[rgba(247,248,249,0.5)]py-5">
      <h5 className="text-[#221f20] text-xl mb-[18px] font-medium w-full ">
        Tổng tiền giỏ hàng
      </h5>
      {total.map((item: any, index) => {
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
      <RegisterButton onClick={handleSubmit}>
        <span className="uppercase">Hoàn Thành</span>
      </RegisterButton>
    </div>
  );
}
