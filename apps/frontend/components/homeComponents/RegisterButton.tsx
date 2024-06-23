import { Button, ButtonProps } from "antd";
import "../../styles/component/regisButton.css";

interface Props extends ButtonProps {
  onClick?: () => void;
  bgColor?: string;
  color?: string;
  hoverBg?: string;
  hoverColor?: string;
}

const RegisterButton = ({
  children,
  onClick,
  bgColor = "#221F20",
  color = "#F7F8F9",
  hoverBg = "#FFF",
  hoverColor = "#221F20",
}: Props) => {
  return (
    <div className="regis-button">
      <Button
        htmlType="submit"
        onClick={onClick}
        className={`h-max py-3 bg-[${bgColor}] border border-[${hoverColor}] hover:bg-[${hoverBg}] text-[${color}] mb-[20px] w-full font-semibold lg:text-base text-xs`}
      >
        {children}
      </Button>
    </div>
  );
};
export default RegisterButton;
