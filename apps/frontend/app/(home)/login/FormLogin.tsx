"use client";
import { InputBox } from "@/components/homeComponents/InputBox";
import RegisterButton from "@/components/homeComponents/RegisterButton";
import { login } from "@/services/authService";
import { Checkbox, Form } from "antd";
import React from "react";

export default function FormLogin() {
  const onFinish = (values: any) => {
    console.log("Success:Success", values);
    login(values)
      .then((res) => {
        console.log("resresresres", res);
      })
      .catch((err) => {
        console.log("errerrerrerr", err);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          className="justify-center flex  flex-col items-center"
        >
          <InputBox placeholder={"Email/SDT"} type="email" />
        </Form.Item>

        <Form.Item
          name="password"
          className="justify-center flex  flex-col items-center"
        >
          <InputBox placeholder={"Password"} type="password" />
        </Form.Item>

        <div className="flex justify-center gap-5 items-center">
          <Checkbox className="border border-[#faf9f9] h-[18px] text-base font-montserrat w-max">
            Ghi nhớ đăng nhập
          </Checkbox>
          <span className="underline text-sm font-montserrat">
            Quên mật khẩu?
          </span>
        </div>

        <div className="flex justify-center gap-5 items-center mt-5">
          <span className="underline text-sm font-montserrat">
            Đăng nhập bằng QR
          </span>
          <span className="underline text-sm font-montserrat">
            Đăng nhập bằng QR
          </span>
        </div>

        <div className="mt-5 w-full flex justify-center">
          <div className="text-center w-8/12">
            <RegisterButton>
              <span className="uppercase">Đăng nhập</span>
            </RegisterButton>
          </div>
        </div>
      </Form>
    </>
  );
}
