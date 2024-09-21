import Navigate from "@/components/homeComponents/navigate";
import "../../../styles/page/cart.css";
import Footer from "@/components/homeComponents/navbarEnd";
import TimeLine from "./components/TimeLine";
import TableListProduct from "./components/TableListProduct";
import { ArrowLeftOutlined, WarningOutlined } from "@ant-design/icons";
import RegisterButton from "@/components/homeComponents/RegisterButton";
// import { useRouter } from "next/navigation";
import TotalCart from "./components/TotalCart";

export default function Cart() {
  // const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center cart-product bg-[#FFF]">
      <div className="lg:w-11/12 px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24">
          <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center">
            <div className="timeline-component lg:w-2/3 w-11/12">
              <TimeLine />
              <TableListProduct />
              <div className=" h-[1px] bg-[#E7E8E9] my-6"></div>

              {/* <div className="xl:w-1/3 w-2/3 mt-4">
                <RegisterButton onClick={() => router.push("/products")}>
                  <ArrowLeftOutlined className="mr-3" />{" "}
                  <span className="uppercase">Tiếp tục mua hàng</span>
                </RegisterButton>
              </div> */}
            </div>
            <TotalCart />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
