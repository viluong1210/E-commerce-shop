"use client";

import RegisterButton from "@/components/homeComponents/RegisterButton";
import { useRouter } from "next/navigation";
import React from "react";

export default function RightInformation() {
  const router = useRouter();
  return (
    <div className="lg:w-1/2 w-full  py-5 flex justify-center">
      <div className="w-full flex flex-col justify-center items-center border-r">
        <h5 className="text-[#221f20] text-xl font-semibold cursor-pointer">
          Khách hàng mới của IVY moda
        </h5>
        <div className="w-9/12 text-center">
          <p className="text-sm text-[#6c6d70] my-4 leading-6">
            Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này
            để truy cập biểu mẫu đăng ký. Bằng cách cung cấp cho IVY moda thông
            tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là một
            trải nghiệm thú vị và nhanh chóng hơn!
          </p>
        </div>

        <div className="mt-5 w-full flex justify-center">
          <div className="text-center w-8/12">
            <RegisterButton onClick={() => router.push("/register")}>
              <span className="uppercase">Đăng ký</span>
            </RegisterButton>
          </div>
        </div>
      </div>
    </div>
  );
}
