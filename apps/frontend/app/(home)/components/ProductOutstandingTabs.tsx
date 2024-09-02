`use client`;
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { ListProductCarousel } from "@/components/homeComponents/ListProductCarousel";

import { getAllProducts } from "@/services/productsService";

type Props = {
  categories: any;
};

export default function ProductOutstandingTabs({ categories }: Props) {
  const [category, setCategory] = useState(categories?.[0].value);
  const [products, setProducts] = useState([]);

  const items = categories?.map((i: any, idx: any) => ({
    key: i.value,
    label: i.label,
    children: <ListProductCarousel products={products} />,
  }));

  const onChange = (data) => {
    setCategory(data);
  };

  useEffect(() => {
    if (!category) return;
    getAllProducts({
      limit: 3,
      page: 1,
      category,
    }).then((data) => {
      setProducts(data?.data || []);
    });
  }, [category]);

  return (
    <Tabs
      centered
      onChange={onChange}
      items={items}
      className="w-full h-full"
    />
  );
}
