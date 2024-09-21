"use client";

import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { Button, Col, Form, Input, Row } from "antd";
import dayjs from "dayjs";
import { changeStatusOrder } from "@/services/ordersService";
import { toast } from "react-toastify";
import { OrderStatus } from "@/constants/data";
import { useRouter } from "next/navigation";

interface OrderFormProps {
  data: any;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  data,
}: OrderFormProps) => {
  const [form] = useForm();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
        ...data.UserInformation,
        createdAt: dayjs(data.createdAt).format("DD/MM/YYYY"),
        birthday: dayjs(data.UserInformation.createdAt).format("DD/MM/YYYY"),
      });
    }
  }, [data]);

  const onFinish = async (values: any) => {};

  const changeStatus = () => {
    let status = data.status;

    if (status === OrderStatus.Pending) {
      status = OrderStatus.Confirm;
    } else if (status === OrderStatus.Confirm) {
      status = OrderStatus.Shipped;
    } else if (status === OrderStatus.Shipped) {
      status = OrderStatus.Completed;
    }

    changeStatusOrder(data.id, status)
      .then(() => {
        toast.success("Change Status successfuly");
        router.refresh();
      })
      .catch((res) => {
        toast.error("pls try again");
      });
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
      <Row gutter={[8, 8]} style={{ justifyContent: "right" }}>
        <div>
          <Button
            disabled={data?.status === OrderStatus.Completed}
            onClick={changeStatus}
            style={{ color: "black", border: "blue" }}
            type="primary"
          >
            Change Status{" "}
          </Button>
        </div>
      </Row>
    </Form>
  );
};
