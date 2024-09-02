"use client";

import { Collapse, CollapseProps } from "antd";
import React, { useEffect, useState } from "react";
import { OrderForm } from "./InforData";
import OrderItems from "./OrderItems";
import { useParams } from "next/navigation";
import { getdetailOrder } from "@/services/ordersService";

export default function OrdersDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    if (id) {
      getdetailOrder(id).then((data) => {
        setOrder(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "User Information",
      children: <OrderForm data={order} />,
    },
    {
      key: "2",
      label: "Order Items",
      children: <OrderItems data={order?.orderItems || []} />,
    },
  ];

  return <Collapse items={items} defaultActiveKey={["1"]} />;
}
