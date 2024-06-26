"use client"

import Navigate from '@/components/navigate'
import Footer from '@/components/navbarEnd'
import { Checkbox, Form } from 'antd'
import { InputBox } from '@/components/InputBox'
import RegisterButton from '@/components/RegisterButton'
import { FormDatePicker } from '@/components/FormDatePicker'
import { FormSelect } from '@/components/FormSelect'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}
export default function Register() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-11/12 h-full w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full h-full justify-center items-center flex flex-col mt-10 py-10">
          <h5 className="text-[#221f20] uppercase text-2xl font-semibold cursor-pointe mt-5">
            Đăng ký
          </h5>
          <div className="flex lg:flex-row flex-col w-full h-full justify-center items-start ">
            <div className="lg:w-7/12 w-full py-5 flex justify-center">
              <div className="w-full flex flex-col justify-center items-start border-r">
                <div className="w-full">
                  <h4 className="text-base text-[#221f20] my-4 leading-6">
                    Thông tin khách hàng
                  </h4>
                </div>
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <div className="gap-5 flex">
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Họ
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox placeholder={'Họ...'} type="text" />
                    </Form.Item>
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Tên
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox placeholder={'Tên...'} type="text" />
                    </Form.Item>
                  </div>
                  <div className="gap-5 flex">
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Email
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox placeholder={'Email...'} type="email" />
                    </Form.Item>
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Điện thoại
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox placeholder={'Điện thoại...'} type="text" />
                    </Form.Item>
                  </div>
                  <div className="gap-5 flex">
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Ngày sinh
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <FormDatePicker placeholder={'Ngày sinh...'} />
                    </Form.Item>
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Giới tính
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <FormSelect
                        placeholder={'Giới tính...'}
                        sizes={'360px'}
                      />
                    </Form.Item>
                  </div>
                  <div className="gap-5 flex">
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Ngày sinh
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <FormDatePicker placeholder={'Ngày sinh...'} />
                    </Form.Item>
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Giới tính
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <FormSelect
                        placeholder={'Giới tính...'}
                        sizes={'360px'}
                      />
                    </Form.Item>
                  </div>
                  <div className="gap-5 flex w-full">
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center flex w-full  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Giới tính
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <FormSelect
                        placeholder={'Giới tính...'}
                        sizes={'750px'}
                      />
                    </Form.Item>
                  </div>
                  <div className="gap-5 flex w-full">
                    <Form.Item<FieldType>
                      name="username"
                      className=" w-full"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Giới tính
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox placeholder={'Email...'} type="email" />
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
            <div className="lg:w-5/12 w-full h-full py-5 flex px-5">
              <div className="w-full flex flex-col justify-start items-start">
                <div className="w-full">
                  <h4 className="text-base text-[#221f20] my-4 leading-6">
                    Thông tin mật khẩu
                  </h4>
                </div>
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <div className="w-full">
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center w-full flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Mật khẩu
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox
                        className="w-full"
                        placeholder={'Mật khẩu...'}
                        type="password"
                      />
                    </Form.Item>
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center w-full flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Nhập lại mật khẩu
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox
                        className="w-full"
                        placeholder={'Nhập lại mật khẩu...'}
                        type="password"
                      />
                    </Form.Item>
                    <Form.Item<FieldType>
                      name="username"
                      className="justify-center w-full flex  flex-col items-center"
                      label={
                        <span className="text-[#6C6D70] font-montserrat text-base">
                          Mời nhập các ký tự trong hình vào ô sau
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <InputBox
                        className="w-full"
                        placeholder={
                          'Mời nhập các ký tự trong hình vào ô sau...'
                        }
                        type="password"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col gap-5 justify-center">
                    <Checkbox className="border flex items-center border-[#faf9f9] h-[18px] text-base font-montserrat w-max">
                      Đồng ý với các điều khoản của IVY
                    </Checkbox>
                    <Checkbox className="border border-[#faf9f9] h-[18px] text-base font-montserrat w-max items-center">
                      Đăng ký nhận bản tin
                    </Checkbox>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
