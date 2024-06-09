"use client"

import Navigate from '@/components/navigate'
import '../../styles/page/cart.css'
import Footer from '@/components/navbarEnd'
import TimeLine from './components/TimeLine'
import TableListProduct from './components/TableListProduct'
import { ArrowLeftOutlined, WarningOutlined } from '@ant-design/icons'
import RegisterButton from '@/components/RegisterButton'

export default function Cart() {
  const totalCart = [
    { title: 'Tổng sản phẩm', count: '3' },
    { title: 'Tổng tiền hàng', count: '5.570.000đ' },
    { title: 'Thành tiền', count: '2.785.000đ' },
    { title: 'Tạm tính', count: '2.785.000đ' },
  ]

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

              <div className="xl:w-1/3 w-2/3 mt-4">
                <RegisterButton>
                  <ArrowLeftOutlined className="mr-3" />{' '}
                  <span className="uppercase">Tiếp tục mua hàng</span>
                </RegisterButton>
              </div>
            </div>
            <div className="lg:w-1/3 w-10/12 px-4 ml-2">
              <div className="bg-[rgba(247,248,249,0.5)]py-5">
                <h5 className="text-[#221f20] text-xl mb-[18px] font-medium">
                  Tổng tiền giỏ hàng
                </h5>
                {totalCart.map((item: any, index) => {
                  return (
                    <div key={index} className="flex justify-between mb-4">
                      <span className="text-[#57585a] text-sm">
                        {item.title}
                      </span>
                      <span className="text-[#221f20] font-semibold text-base">
                        {item.count}
                      </span>
                    </div>
                  )
                })}
                <p className="mb-4 text-[#AC2F33] text-sm">
                  <WarningOutlined className="mr-3" />
                  Miễn đổi trả đối với sản phẩm đồng giá / sale trên 50%
                </p>
                <p className="mb-4 text-[#AC2F33] text-sm">
                  <WarningOutlined className="mr-3" />
                  Đặt hàng trước 2/2 với KH ở tỉnh, trước 4/2 với KH ở Hà Nội và
                  TP Hồ Chí Minh để nhận hàng trước Tết.
                </p>
                <div className="w-full h-[1px] bg-[#E7E8E9] my-6"></div>
                <RegisterButton>
                  <span className="uppercase">Đặt hàng</span>
                </RegisterButton>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
