import { Slider } from "antd";
import type { SliderSingleProps } from "antd";
const TimeLine = () => {
  const marks: SliderSingleProps["marks"] = {
    0: "Giỏ hàng",
    30: "Đặt hàng",
    60: "Thanh toán",
    100: "Hoàn thành đơn",
  };
  return (
    <div className="w-full border border-[#e7e8e9] py-4 px-16 flex justify-centers rounded-tl-2xl rounded-br-2xl">
      <Slider className="w-full" marks={marks} />
    </div>
  );
};

export default TimeLine;
