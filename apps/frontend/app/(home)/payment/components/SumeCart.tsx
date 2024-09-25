"use client";

import RegisterButton from "@/components/homeComponents/RegisterButton";
import { FormInstance } from "antd";

import { createOrder } from "@/services/ordersService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import TotalCart from "../../cart/components/TotalCart";

type Props = {
  form: FormInstance;
};

export default function SumeCart({ form }: Props) {
  const router = useRouter();

  const handleSubmit = () => {
    const datas = form.getFieldsValue();
    const cart = localStorage.getItem("cartItems");

    let cartParse = [];

    if (cart) {
      cartParse = JSON.parse(cart);
    }

    const formatdata = {
      ...datas,
      orderItems: cartParse.map((i: any) => ({
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
      <TotalCart style="lg:w-1/1  px-4 ml-2 mt-2" isDisplay={true} />

      <RegisterButton onClick={handleSubmit}>
        <span className="uppercase">Hoàn Thành</span>
      </RegisterButton>
    </div>
  );
}
