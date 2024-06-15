"use client";

import Navigate from '@/components/homeComponents/navigate'
import '../../../styles/page/detail.css'
import Footer from '@/components/homeComponents/navbarEnd'
import { Breadcrumb } from '@/components/homeComponents/Breadcrumb'

export default function Product() {
  const listImage = [
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/d9b35efcb2e9b92794dcd64cafb07f66.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/3e954d8077a8893b32dc9c29ea1ca7fa.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/01e12c182a7ac719b25821c7bf71964d.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/62814f0335a3abeeffb126422a5f4a80.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/03/31/71fd257ed566e95e2fa47ab0b1d9e763.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/03/31/71fd257ed566e95e2fa47ab0b1d9e763.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/08d6fab2cb5d5dd44418706cb40754e6.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/993e2eadafa16dd56079b45a4e858f73.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/4eeadc06afb1d79a8041ad73e737a568.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/28/6f8462667caf84b5904ae7c3cdbb5ed4.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/30/96990ec5a3cafbe4441949dc6d5a11d4.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/30/e8d1e3e0f3d4364156a9152fbb8480c9.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/30/ddf0ce2eb0964fb6914ed482971250e0.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/01/30/b5508e1b929d1e1b24d86c61d6d52f92.jpg',
  ]
  return (
    <div className="w-full h-full flex justify-center detail-product bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-3 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24">
          <Breadcrumb title={'Giới thiệu về IVY moda'} />
          <div className=" h-[1px] bg-[#E7E8E9] my-6"></div>
          <div className="mt-5">
            {listImage.map((item) => {
              return <img key={item} src={item} />
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
