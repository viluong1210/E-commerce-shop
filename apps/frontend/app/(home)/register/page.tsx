"use client";

import Navigate from "@/components/homeComponents/navigate";
import Footer from "@/components/homeComponents/navbarEnd";
import { Checkbox, Form } from "antd";
import { InputBox } from "@/components/homeComponents/InputBox";
import RegisterButton from "@/components/homeComponents/RegisterButton";

import RegisterForm from "@/components/homeComponents/RegisterForm";
import { registerApi } from "@/services/authService";
import { CreateUserType } from "@/types/authType";
import { toast } from "react-toastify";

export default function Register() {
  const onFinish = (values: any) => {
    const { recheckPassword, ...other } = values;

    if (recheckPassword !== other.passWord) {
      toast.error("Mặt khẩu không trùng khớp vui lòng nhập lại");
      return;
    }

    registerApi(other)
      .then(() => {
        toast.success("Đăng Ký thành công");
      })
      .catch(() => {
        toast.error("Có vài lỗi xảy ra, vui lòng thử lại");
      });
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-full h-full w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full h-full justify-center items-center flex flex-col mt-10 py-10">
          <h5 className="text-[#221f20] uppercase text-2xl font-semibold cursor-pointe mt-5">
            Đăng ký
          </h5>
          <Form<CreateUserType>
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="w-full px-10"
          >
            <div className="flex lg:flex-row flex-col w-full h-full justify-center items-start ">
              <div className="w-full py-5 flex justify-center">
                <div className="w-full flex flex-col justify-center items-start">
                  <div className="w-full">
                    <h4 className="text-lg font-medium text-[#221f20] my-4 leading-6">
                      Thông tin khách hàng
                    </h4>
                  </div>
                  <RegisterForm />
                </div>
              </div>
              <div className="w-full h-full justify-center py-5 flex pl-10">
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="w-full">
                    <h4 className="text-lg text-[#221f20] my-4 leading-6 font-medium">
                      Thông tin mật khẩu
                    </h4>
                  </div>
                  <div className="w-full">
                    <Form.Item
                      name="passWord"
                      className="w-ful"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Mật khẩu
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <InputBox
                        placeholder={"Mật khẩu..."}
                        type="password"
                        width="500px"
                      />
                    </Form.Item>
                    <Form.Item
                      name="recheckPassword"
                      className="w-full"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Nhập lại mật khẩu
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <InputBox
                        placeholder={"Nhập lại mật khẩu..."}
                        type="password"
                        width="500px"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col mb-6 gap-5 justify-center">
                    <Checkbox className="border flex items-center border-[#faf9f9] h-[18px] text-base font-montserrat w-max">
                      Đồng ý với các điều khoản của IVY
                    </Checkbox>
                  </div>
                  <RegisterButton>Đăng Ký </RegisterButton>
                </div>
              </div>
            </div>
          </Form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
