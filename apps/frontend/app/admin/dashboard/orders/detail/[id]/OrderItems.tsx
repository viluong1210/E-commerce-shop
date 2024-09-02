import { Table } from "antd";
import React from "react";

type Props = {
  data: any[];
};

export default function OrderItems({ data }: Props) {
  const columns = [
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return <Table pagination={false} dataSource={data} columns={columns} />;
}
