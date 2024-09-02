import BreadCrumb from "@/components/breadcrumb";
import { getAllCategorys } from "@/services/categoryService";

import React from "react";
import OrdersDetail from "./Detail";

export default async function Page() {
  const breadcrumbItems = [
    { title: "Orders", link: "/admin/dashboard/orders" },
    { title: "Detail", link: "/admin/dashboard/orders/detail" },
  ];

  const categories = await getAllCategorys().then((data) => {
    return data.data?.map((i: any) => ({ value: i.id, label: i.name }));
  });

  return (
    <div
      className="flex-1 space-y-4 p-8"
      style={{ overflowY: "scroll", height: "100%" }}
    >
      <BreadCrumb items={breadcrumbItems} />
      <OrdersDetail />
    </div>
  );
}
