import { Button, ButtonProps } from 'antd'
import '../../styles/component/regisButton.css'
const RegisterButton = ({ children }: ButtonProps) => {
  return (
    <div className="regis-button">
      <Button className="h-max py-3 bg-[#221F20] border border-[#221F20] hover:bg-white text-[#F7F8F9] mb-[20px] w-full font-semibold lg:text-base text-xs">
        {children}
      </Button>
    </div>
  )
}
export default RegisterButton
