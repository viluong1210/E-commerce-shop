"use client"

import Navigate from '@/components/navigate'
import Footer from '@/components/navbarEnd'
import { Checkbox, Form } from 'antd'
import { InputBox } from '@/components/InputBox'
import RegisterButton from '@/components/RegisterButton'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}
export default function Login  () {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />

        <div className="w-full justify-center items-center flex flex-col lg:flex-row mt-10 py-10">
          <div className="lg:w-1/2 w-full py-5 flex justify-center">
            <div className="w-full flex flex-col justify-center items-center border-r">
              <h5 className="text-[#221f20] text-xl font-semibold cursor-pointer">
                Bạn đã có tài khoản IVY
              </h5>
              <div className="lg:w-9/12 w-11/12 text-center">
                <p className="text-sm text-[#6c6d70] my-4 leading-6">
                  Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành
                  viên và nhận được những ưu đãi tốt hơn!
                </p>
              </div>
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
                <Form.Item<FieldType>
                  name="username"
                  className="justify-center flex  flex-col items-center"
                >
                  <InputBox placeholder={'Email/SDT'} type="email" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="password"
                  className="justify-center flex  flex-col items-center"
                >
                  <InputBox placeholder={'Password'} type="password" />
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
              </Form>
              <div className="mt-5 w-full flex justify-center">
                <div className="text-center w-8/12">
                  <RegisterButton>
                    <span className="uppercase">Đăng nhập</span>
                  </RegisterButton>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full  py-5 flex justify-center">
            <div className="w-full flex flex-col justify-center items-center border-r">
              <h5 className="text-[#221f20] text-xl font-semibold cursor-pointer">
                Khách hàng mới của IVY moda
              </h5>
              <div className="w-9/12 text-center">
                <p className="text-sm text-[#6c6d70] my-4 leading-6">
                  Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy
                  chọn này để truy cập biểu mẫu đăng ký. Bằng cách cung cấp cho
                  IVY moda thông tin chi tiết của bạn, quá trình mua hàng trên
                  ivymoda.com sẽ là một trải nghiệm thú vị và nhanh chóng hơn!
                </p>
              </div>

              <div className="mt-5 w-full flex justify-center">
                <div className="text-center w-8/12">
                  <RegisterButton>
                    <span className="uppercase">Đăng ký</span>
                  </RegisterButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
