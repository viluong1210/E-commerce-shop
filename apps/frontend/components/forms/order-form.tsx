"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "antd/es/form/Form";
import { Col, Collapse, CollapseProps, Form, Input, Row } from "antd";
import { getdetailOrder } from "@/services/ordersService";

interface OrderFormProps {}

export const OrderForm: React.FC<OrderFormProps> = () => {
  const { id } = useParams();
  const [form] = useForm();

  useEffect(() => {
    if (id) {
      // form.setFieldsValue(state);
      getdetailOrder(id).then((data) => {
        console.log("datadatadata", data);

        form.setFieldsValue({ ...data, ...data.UserInformation });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onFinish = async (values: any) => {};

  const sexOptions = {
    male: "Male",
    female: "Female",
  };
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>hehe</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>hehe</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>hehe</p>,
    },
  ];
  return (
    <>
      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item name="name" label="Name">
              <Input placeholder="Name" readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="phone" label="Phone">
              <Input placeholder="Phone" readOnly />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input placeholder="Email" readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="sex" label="Sex">
              <Input placeholder="Sex" readOnly />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item name="createdAt" label="Order Date">
              <Input placeholder="Order Date" readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="status" label="Status">
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item name="birthday" label="Birthday">
              <Input placeholder="Birthday" readOnly />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="address" label="Address">
              <Input.TextArea rows={3} readOnly />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />; ;
    </>
  );
};
