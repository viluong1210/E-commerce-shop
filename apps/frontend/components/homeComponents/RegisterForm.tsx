import { Form } from "antd";
import { InputBox } from "./InputBox";
import { FormSelect } from "./FormSelect";
import { FormDatePicker } from "./FormDatePicker";
import { provinceVietNam } from "@/mock/province";
import { DefaultOptionType } from "antd/es/select";
import { useEffect, useMemo, useState } from "react";
import { Districts, Province, Wards } from "@/types/productType";
import TextArea from "antd/es/input/TextArea";

const RegisterForm = () => {
  const [districts, setDistricts] = useState<Districts[] | undefined>([]);
  const [districtsOptions, setDistrictsOptions] = useState<
    DefaultOptionType[] | undefined
  >([]);

  const [wardsOptions, setWardOptions] = useState<
    DefaultOptionType[] | undefined
  >([]);

  const mapData = (list: Province[] | Districts[] | Wards[]) => {
    return list?.map((item) => {
      return {
        value: item.Id,
        label: item.Name,
      };
    });
  };
  const getProvince: DefaultOptionType[] = useMemo(() => {
    return mapData(provinceVietNam);
  }, [provinceVietNam]);

  const handleChangeProvince = (value: string) => {
    const ditricList = provinceVietNam.find((item) => item.Id === value)
      ?.Districts;

    setDistricts(ditricList);

    const optionDitricts = mapData(ditricList as Districts[]);

    setDistrictsOptions(optionDitricts);
  };

  const handleChangeDistricts = (value: string) => {
    const wardsList = districts?.find((item) => item.Id === value)?.Wards;

    const optionWards = mapData(wardsList as Wards[]);

    setWardOptions(optionWards);
  };
  return (
    <div>
      <div className="gap-5 flex">
        <Form.Item
          name="firstName"
          className="justify-center flex  flex-col items-center"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">Họ</span>
          }
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <InputBox placeholder={"Họ..."} type="text" />
        </Form.Item>
        <Form.Item
          name="lastName"
          className="justify-center flex  flex-col items-center"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">
              Tên
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <InputBox placeholder={"Tên..."} type="text" />
        </Form.Item>
      </div>
      <div className="gap-5 flex">
        <Form.Item
          name="mail"
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
      <div className="gap-5 flex items-center">
        <Form.Item
          name="birthday"
          className="justify-center mt-3 flex flex-col items-center"
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
        <Form.Item
          name="sex"
          className="justify-center flex flex-col items-center"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">
              Giới tính
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your sex!",
            },
          ]}
        >
          <FormSelect placeholder={"Giới tính..."} sizes={"360px"} />
        </Form.Item>
      </div>
      <div className="gap-5 flex">
        <Form.Item
          name="province"
          className="justify-center flex  flex-col items-center"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">
              Tỉnh/Thành phố
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your sex!",
            },
          ]}
        >
          <FormSelect
            placeholder={"Tỉnh/Thành phố..."}
            sizes={"360px"}
            options={getProvince}
            onChange={handleChangeProvince}
          />
        </Form.Item>
        <Form.Item
          name="districts"
          className="justify-center flex flex-col items-center"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">
              Quận/Huyện
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your sex!",
            },
          ]}
        >
          <FormSelect
            placeholder={" Quận/Huyện"}
            sizes={"360px"}
            options={districtsOptions}
            onChange={handleChangeDistricts}
          />
        </Form.Item>
      </div>
      <div className="gap-5 flex w-full">
        <Form.Item
          name="ward"
          className=" w-full"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">
              Phường/Xã
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
            placeholder={"Phường/Xã"}
            sizes={"360px"}
            options={wardsOptions}
            onChange={handleChangeDistricts}
          />
        </Form.Item>
      </div>
      <div className="gap-5 flex w-full">
        <Form.Item
          name="address"
          className=" w-full"
          label={
            <span className="text-[#6C6D70] font-montserrat text-base">
              Địa chỉ
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea rows={3} placeholder={"Địa chỉ..."} />
        </Form.Item>
      </div>
    </div>
  );
};
export default RegisterForm;
