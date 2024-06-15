
"use client"
import Navigate from '@/components/homeComponents/navigate'
import '../../../styles/page/home.css'
import Footer from '@/components/homeComponents/navbarEnd'
import { Breadcrumb } from '@/components/homeComponents/Breadcrumb'
import { FilterProduct } from './components/FilterProduct'
import { ListProduct } from './components/ListProduct'
export default function Product() {
  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />
        <div className="w-full lg:mt-24">
          <Breadcrumb title={'ÁO KHOÁC'} />
          <div className="flex justify-center">
            <div className="w-1/4  hidden lg:block">
              <FilterProduct />
            </div>
            <div className="lg:w-3/4 w-11/12">
              <ListProduct />
            </div>{' '}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
