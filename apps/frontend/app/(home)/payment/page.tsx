"use client";

import Navigate from "@/components/homeComponents/navigate";
import "../../../styles/page/cart.css";
import Footer from "@/components/homeComponents/navbarEnd";
import TimeLine from "./components/TimeLine";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import RegisterButton from "@/components/homeComponents/RegisterButton";
import SumeCart from "./components/SumeCart";
import RegisterForm from "@/components/homeComponents/RegisterForm";
import { useForm } from "antd/es/form/Form";

export default function Cart() {
  const [form] = useForm();

  return (
    <div className="w-full h-full flex justify-center cart-product bg-[#FFF]">
      <div className="lg:w-11/12 px-4 lg:px-4 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24">
          <div className="flex w-full lg:flex-row flex-col justify-center lg:items-start items-center">
            <div className="timeline-component lg:w-2/3 w-11/12">
              <TimeLine />
              <div className=" h-[1px] bg-[#E7E8E9] my-6"></div>
              <div className="flex w-full gap-5 mt-5">
                <div className="w-1/2">
                  <div className="w-full flex ">
                    <span className="text-[#221f20] text-xl font-medium">
                      Thông tin giao hàng
                    </span>

                    {/* <div className="flex mt-5 justify-between w-full">
                      <RegisterButton>
                        <span className="uppercase px-5">Đăng nhập</span>
                      </RegisterButton>
                      <RegisterButton bgColor="#FFF" color="#221f20">
                        <span className="uppercase px-5">Đăng ký</span>
                      </RegisterButton>
                    </div>
                    <span className="text-[#221f20] text-xs">
                      Đăng nhập/ Đăng ký tài khoản để được tích điểm và nhận
                      thêm nhiều ưu đãi từ IVY moda.
                    </span> */}

                    {/* <div className="w-1/2">
                      <span className="text-[#221f20] text-xl font-medium mb-5">
                        Phương thức giao hàng
                      </span>
                      <div className="w-11/12 mt-5 flex py-10 justify-center items-center border rounded-tl-3xl rounded-br-3xl border-[#e7e8e9]">
                        <div className="flex gap-5">
                          <CheckCircleOutlined className="text-black" />
                          <span className="text-[#221f20] text-base font-medium">
                            Chuyển phát nhanh
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="w-full">
                    <RegisterForm form={form} />
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 w-2/3 mt-4">
                <RegisterButton>
                  <ArrowLeftOutlined className="mr-3" />{" "}
                  <span className="uppercase">Tiếp tục mua hàng</span>
                </RegisterButton>
              </div>
            </div>
            <div className="lg:w-1/3 w-10/12 px-4 ml-2">
              <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center bg-[rgba(247,248,249,0.5)] px-4">
                <SumeCart form={form} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
