import Navigate from "@/components/homeComponents/navigate";
import "@/styles/page/detail.css";
import Footer from "@/components/homeComponents/navbarEnd";
import { Breadcrumb } from "@/components/homeComponents/Breadcrumb";
import ImageDetailSlider from "./components/ImageDetailSlider";
import DetailProduct from "./components/DetailProduct";

import { GetServerSidePropsContext } from "next";
import { getAllProducts, getdetailProducts } from "@/services/productsService";
import { ProductType } from "@/types";
import ProductsRelated from "./components/ProductsRelated";
import { productDetail } from "@/mock/productProps";

export default async function Page(context: GetServerSidePropsContext) {
  const { id }: any = context.params;
  const product: ProductType = await getdetailProducts(id);

  const products = await getAllProducts({
    limit: 4,
    page: 1,
    category: product.category,
  });

  return (
    <div className="w-full h-full flex justify-center detail-product bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24 mb-28">
          <Breadcrumb title={"Nữ"} child={"Áo sơ mi lụa cánh hoa"} />
          <div className="flex md:flex-row flex-col w-full justify-between mt-5">
            <div className="md:w-6/12 w-full">
              <ImageDetailSlider
                listImage={products.listImage?.map((i) => i.url)}
              />
            </div>
            <DetailProduct product={product} />
          </div>
        </div>

        <ProductsRelated products={products?.data || []} />
        <Footer />
      </div>
    </div>
  );
}
