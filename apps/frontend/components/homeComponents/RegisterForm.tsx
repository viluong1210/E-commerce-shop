import { Form } from "antd";
import { InputBox } from "./InputBox";
import { FormSelect } from "./FormSelect";
import { FormDatePicker } from "./FormDatePicker";

import TextArea from "antd/es/input/TextArea";

const SexOptions = [
  {
    value: "male",
    label: "Nam",
  },
  {
    value: "female",
    label: "Nữ",
  },
  {
    value: "other",
    label: "Khác",
  },
];

type OrderItem = {
  productId: string;
  quantity: number;
  price: number;
};

type User = {
  name: string;
  phone: string;
  provinceId: number;
  districtId: number;
  email: string;
  sex: string;
  wardId: number;
  address: string;
  birthday: string;
  orderItems?: OrderItem[];
};

type Props = {
  form: any;
};

const RegisterForm = ({ form }: Props) => {
  return (
    <Form form={form} layout="vertical">
      <div>
        <div className="gap-5 flex lg:flex-row flex-col items-center">
          <Form.Item
            name="name"
            className="justify-center flex  flex-col items-center"
            label={
              <span className="text-[#6C6D70] font-montserrat text-base">
                Tên
              </span>
            }
            rules={[
              {
                required: true,
                message: "vui lòng nhập họ tên!",
              },
            ]}
          >
            <InputBox placeholder={"Họ và tên..."} type="text" />
          </Form.Item>
          <Form.Item
            name="phone"
            className="justify-center flex flex-col items-center"
            label={
              <span className="text-[#6C6D70] font-montserrat text-base">
                Điện thoại
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <InputBox placeholder={"Điện thoại..."} type="text" />
          </Form.Item>
        </div>
        <div className="gap-5 flex lg:flex-row flex-col items-center">
          <Form.Item
            name="email"
            className="justify-center flex  flex-col items-center"
            label={
              <span className="text-[#6C6D70] font-montserrat text-base">
                Email
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <InputBox placeholder={"Email..."} type="email" />
          </Form.Item>
          <Form.Item
            name="birthday"
            className="justify-center flex flex-col items-center"
            label={
              <span className="text-[#6C6D70] font-montserrat text-base">
                Ngày sinh
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your birthday!",
              },
            ]}
          >
            <FormDatePicker placeholder={"Ngày sinh..."} />
          </Form.Item>
        </div>
        <div className="gap-5 flex lg:flex-row flex-col items-center">
          <Form.Item
            name="sex"
            className="justify-center flex flex-col items-center"
            label={
              <span className="text-[#6C6D70] font-montserrat text-base">
                Giới Tính
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <FormSelect
              placeholder={"Giới Tính"}
              sizes={"360px"}
              options={SexOptions}
            />
          </Form.Item>

          <Form.Item
            name="address"
            className="justify-center flex flex-col items-center"
            label={
              <span className="text-[#6C6D70] font-montserrat text-base">
                Địa chỉ cụ thể
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <TextArea
              className="rounded text-sm w-[358px] h-12 text-[#57585A] border border-solid border-[#E7E8E9] font-montserrat"
              rows={3}
              placeholder={"Địa chỉ cụ thể..."}
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};
export default RegisterForm;
