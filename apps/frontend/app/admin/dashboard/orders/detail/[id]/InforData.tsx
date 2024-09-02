"use client";

import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { Col, Form, Input, Row } from "antd";

interface OrderFormProps {
  data: any;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  data,
}: OrderFormProps) => {
  const [form] = useForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({ ...data, ...data.UserInformation });
    }
  }, [data]);

  const onFinish = async (values: any) => {};

  const sexOptions = {
    male: "Male",
    female: "Female",
  };

  return (
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
  );
};
