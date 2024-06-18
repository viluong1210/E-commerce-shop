import Navigate from '@/components/homeComponents/navigate'
import Footer from '@/components/homeComponents/navbarEnd'
import FormLogin from './FormLogin'
import RightInformation from './RightInformation'

export default function Login() {
  
  

  return (
    <div className="w-full h-full flex justify-center bg-[#FFF]">
      <div className="lg:w-11/12 w-full px-4 lg:px-6 pb-5">
        <Navigate />

        <div className="w-full justify-center items-center flex flex-col lg:flex-row mt-10 py-10">
          <div className="lg:w-1/2 w-full py-5 flex justify-center">
            <div className="w-full flex flex-col justify-center items-center border-r">
              <h5 className="text-[#221f20] text-xl font-semibold cursor-pointer">
                Bạn đã có tài khoản IVY
              </h5>
              <div className="lg:w-9/12 w-11/12 text-center">
                <p className="text-sm text-[#6c6d70] my-4 leading-6">
                  Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành
                  viên và nhận được những ưu đãi tốt hơn!
                </p>
              </div>
             <FormLogin />
            </div>
          </div>
         <RightInformation />
        </div>
        <Footer />
      </div>
    </div>
  )
}
