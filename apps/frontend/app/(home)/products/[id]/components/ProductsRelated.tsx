"use client";
import { ListProductCarousel } from "@/components/homeComponents/ListProductCarousel";
import { ProductType } from "@/types";
import React from "react";

type Props = {
  products: ProductType[];
};

export default function ProductsRelated({ products }: Props) {
  return <ListProductCarousel products={products} disableViewsAll={false} />;
}
