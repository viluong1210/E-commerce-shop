import { CategoryLabel } from "@/components/homeComponents/CategoryLabel";

import { getAllCategorys } from "@/services/categoryService";
import ProductOutstandingTabs from "./ProductOutstandingTabs";

export const ListProduct = async () => {
  const categories = await getAllCategorys().then((data) => {
    return data.data?.map((i: any) => ({ value: i.id, label: i.name }));
  });

  return (
    <div className="text-center product-list flex flex-col">
      <div className="">
        <CategoryLabel label={"Sản Phẩm Nổi Bật"} />
        <ProductOutstandingTabs categories={categories} />
      </div>
    </div>
  );
};
