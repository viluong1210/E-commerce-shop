"use client";
import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";
import RegisterButton from "./RegisterButton";
import { ProductType } from "@/types";
import { listSize } from "@/containts";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const router = useRouter();
  const cart = localStorage.getItem("cartItems");

  const cartItems: ProductType[] = useMemo(() => {
    if (cart) return JSON.parse(cart);

    return [];
  }, [cart]);

  return (
    <div className="w-full h-full">
      <div className="h-6/10 overflow-y-auto px-2">
        {cartItems.map((record) => {
          return (
            <div
              className="flex flex-col justify-start py-5 border-b"
              key={uuid()}
            >
              <div className="flex">
                <img className="w-24" src={record.images[0].url} />
                <div className="flex flex-col xl:mx-3 mx-1">
                  <h3 className="text-[#6c6d70] xl:text-base text-xs font-normal font-montserrat">
                    {record.name}
                  </h3>{" "}
                  <div className="flex w-full text-[#6c6d70] xl:text-sm text-xs font-normal font-montserrat mt-5">
                    <span className="xl:mr-5 mr-3">Màu sắc: Đen</span>
                    <span className="mr-1">Size:</span>
                    <span className="uppercase">{listSize[0]}</span>
                  </div>
                  <div className="flex justify-between mt-3 gap-5">
                    <div className="flex justify-start items-start">
                      <div className="border-t flex border-b border-t-[#e7e8e9] xl:min-w-6 xl:min-w-4">
                        <button className="border flex items-center justify-center border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl text-base h-8 w-8">
                          -
                        </button>
                        <button className="text-sm h-8 w-8">
                          {record?.quantity || 1}{" "}
                        </button>
                        <button className="border border-[#e7e8e9] rounded-tl-2xl rounded-br-2xl text-base h-8 w-8">
                          +
                        </button>
                      </div>
                    </div>
                    <span className="text-[#6c6d70] text-sm font-normal font-montserrat">
                      {" "}
                      {record.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <RegisterButton onClick={() => router.push("/cart")}>
          <span className="uppercase">Đặt hàng</span>
        </RegisterButton>
      </div>
    </div>
  );
};

export default App;
