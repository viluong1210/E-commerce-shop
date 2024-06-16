import { Button, ButtonProps } from 'antd'
import '../../styles/component/regisButton.css'

interface Props extends ButtonProps{
  onClick ?: ()=> void
}

const RegisterButton = ({ children ,onClick}: Props) => {
  return (
    <div className="regis-button">
      <Button onClick={onClick}  className="h-max py-3 bg-[#221F20] border border-[#221F20] hover:bg-white text-[#F7F8F9] mb-[20px] w-full font-semibold lg:text-base text-xs">
        {children}
      </Button>
    </div>
  )
}
export default RegisterButton
