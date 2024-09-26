"use client";

import { Select, SelectProps } from "antd";
import { CategoryLabel } from "@/components/homeComponents/CategoryLabel";
import { ProductItem } from "@/components/homeComponents/ProductItem";
import "@/styles/page/product.css";
import PaginationProduct from "@/components/homeComponents/PaginationProduct";
import { DownOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { CategogyType, Paging, ProductType, ResponseType } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import useCreateQueryString from "@/hooks/useCreateQueryString";

type Props = {
  data: ResponseType<ProductType>;
  categorys: ResponseType<CategogyType>;
};

export const ListProduct = ({ data, categorys }: Props) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false);

  const createQueryString = useCreateQueryString();
  const router = useRouter();
  const pathname = usePathname();

  const options = useMemo(() => {
    return categorys.data?.map((i) => ({
      value: i.id,
      label: i.name,
    }));
  }, [categorys]);

  const handleChange = (value: string | null) => {
    router.push(`${pathname}?${createQueryString({ category: value })}`, {
      scroll: false,
    });
  };

  return (
    <div className="text-center product-list flex flex-col">
      <div className="flex justify-between">
        <CategoryLabel label={"Sản Phẩm"} />
        <Select
          className="filter-product-item lg:w-[240px]"
          placeholder="Categorys"
          onChange={handleChange}
          options={options}
          onClear={() => handleChange(null)}
          suffixIcon={
            <DownOutlined
              className="text-sm"
              rotate={isActiveFilter ? 180 : 0}
            />
          }
          onClick={() => setIsActiveFilter(!isActiveFilter)}
        />
      </div>
      {data.data?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-4">
            {data.data.map((item: ProductType) => {
              return <ProductItem itemProduct={item} key={item.id} />;
            })}
          </div>
          <PaginationProduct
            count={data.count}
            page={data.page}
            limit={data.limit}
          />
        </>
      ) : (
        <div>
          <h4 style={{ fontSize: 18, color: "#6C6D70" }}>
            Không tìm thấy sản phẩm phù hợp !
          </h4>
        </div>
      )}
    </div>
  );
};
