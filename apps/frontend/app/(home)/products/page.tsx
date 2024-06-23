import Navigate from "@/components/homeComponents/navigate";
import "../../../styles/page/home.css";
import Footer from "@/components/homeComponents/navbarEnd";
import { Breadcrumb } from "@/components/homeComponents/Breadcrumb";
import { FilterProduct } from "./components/FilterProduct";
import { ListProduct } from "./components/ListProduct";
import { getAllProducts } from "@/services/productsService";
import { ProductType, ResponseType } from "@/types";
import { getAllCategorys } from "@/services/categoryService";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined | null;
  };
};
export default async function Product({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const name = searchParams.search || null;

  const category = searchParams.category || null;

  const products: ResponseType<ProductType> = await getAllProducts({
    limit: pageLimit,
    page,
    category,
    name,
  });

  const categorys = await getAllCategorys();

  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24">
          <Breadcrumb title={"ÁO KHOÁC"} />
          <div className="flex justify-center">
            <div className="w-1/4  hidden lg:block">
              <FilterProduct />
            </div>
            <div className="lg:w-3/4 w-11/12">
              <ListProduct data={products} categorys={categorys} />
            </div>{" "}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
