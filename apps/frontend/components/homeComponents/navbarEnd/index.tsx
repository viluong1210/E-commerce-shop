import { Button, Input } from "antd";
import RegisterButton from "@/components/homeComponents/RegisterButton";

type FooterText = {
  title?: string;
  content: string;
};
type FooterText2 = {
  title?: string;
  children: string[];
};
export default function Footer() {
  const footerText: FooterText[] = [
    // {
    //   content: "Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650",
    // },
    // {
    //   title: "Địa chỉ đăng ký:",
    //   content: "Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam",
    // },
    // {
    //   title: "Số điện thoại",
    //   content: " 0243 205 2222/ 090 589 8683",
    // },
    // {
    //   title: "Email",
    //   content: "hanaleee1505@gmail.com",
    // },
  ];
  const footerText2: FooterText2[] = [
    // {
    //   title: "Giới thiệu",
    //   children: ["Về IVY moda", "Tuyển dụng", "Hệ thống cửa hàng"],
    // },
    // {
    //   title: "Dịch vụ khách hàng",
    //   children: [
    //     "Chính sách điều khoản",
    //     "Hướng dẫn mua hàng",
    //     "Chính sách thanh toán",
    //     "Chính sách đổi trả",
    //     "Chính sách bảo hành",
    //     "Chính sách giao nhận vận chuyển",
    //   ],
    // },
    {
      title: "Liên hệ",
      children: [
        "Email : hanaleee1505@gmail.com",
        "Line : hanaleee1505@gmail.com",
        "Instagram : https://www.instagram.com/hana_lemy",
      ],
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-white my-4 w-full text-[#3E3E3F] border-t border-t-[#D1D2D4] border-b border-b-[#D1D2D4] py-14">
        <div className="w-full flex xl:flex-row justify-between flex-col gap-5">
          <div className="xl:w-1/4 w-10/12 flex flex-col">
            {/* <div className="flex gap-4  items-center">
              <img
                className="h-8"
                src="https://pubcdn.ivymoda.com/ivy2/images/logo-footer.png"
              />
              <img
                className="h-6"
                src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777"
              />
              <img
                className="h-8"
                src="https://pubcdn.ivymoda.com/ivy2/images/img-congthuong.png"
              />
            </div> */}
            {footerText.map((item: FooterText, index: number) => {
              return (
                <div className="w-full mt-3" key={index}>
                  <span className="text-sm w-full font-semibold">
                    {item.title}{" "}
                  </span>
                  <span className="text-sm ">{item.content}</span>
                </div>
              );
            })}
            <div className="mt-5">
              <RegisterButton children={"Hotline: 0901820106"} />
            </div>
          </div>
          {footerText2.map((item: FooterText2, index: number) => {
            return (
              <div className="xl:w-1/5  w-10/12 text-left ml-4" key={index}>
                <h5 className="text-2xl font-semibold break-keep w-max">
                  {item.title}
                </h5>
                {item.children.map((value: string, index: number) => (
                  <p key={index} className="text-sm mt-5">
                    {value}
                  </p>
                ))}
              </div>
            );
          })}
          <div className="xl:w-[35%] w-10/12">
            <div className="rounded-tl-[56px] p-5 rounded-br-[56px] border-[#E7E8E9] border-[6px]">
              <p className="font-semibold text-xl">
                Request For Quotation (RFQ)
              </p>
              <Input
                className="mt-5"
                placeholder="Enter question..."
                type={"email"}
              />
              <Button className="mt-5 bg-white h-max text-base text-[#221F20] hover:bg-[#221F20] py-[13px] px-8 border border-solid border-[#221F20] rounded-tl-3xl rounded-br-3xl">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[#221F20]">
        <span>©Daisy All rights reserved</span>
      </div>
    </div>
  );
}
