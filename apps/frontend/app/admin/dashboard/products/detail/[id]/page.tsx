import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import { getAllCategorys } from "@/services/categoryService";

import React from "react";

export default async function Page() {
  const breadcrumbItems = [
    { title: "Products", link: "/admin/dashboard/products" },
    { title: "Detail", link: "/admin/dashboard/products/detail" },
  ];

  const categories = await getAllCategorys().then((data) => {
    return data.data?.map((i: any) => ({ value: i.id, label: i.name }));
  });

  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ProductForm
        disable={true}
        categories={categories}
        initialData={null}
        key={null}
      />
    </div>
  );
}
