"use client";

import Navigate from "@/components/homeComponents/navigate";
import { ButtonSale } from "./components/ButtonSale";
import Carousel from "./components/Carousel";
import SlickSlider from "@/components/homeComponents/SlickSlider";
import { ListProduct } from "./components/ListProduct";
import "../../styles/page/home.css";
import Footer from "@/components/homeComponents/navbarEnd";
export default function Page() {
  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <ButtonSale />
        <Carousel />
        <ListProduct />
        <div className="w-full text-center">
          <img
            className="rounded-tl-[80px] rounded-br-[80px]"
            src="https://pubcdn.ivymoda.com/files/news/2024/01/19/577be46e0000b76d3bb77db916bf2625.jpg"
            alt="ivy-,oda"
          />
          <h1 className="text-[38px] font-semibold mb-6 tracking-[2px] text-[#221F20] font-montserrat">
            GALLERY
          </h1>
          <SlickSlider />
        </div>
        <Footer />
      </div>
    </div>
  );
}
