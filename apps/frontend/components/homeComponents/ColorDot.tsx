import { CheckOutlined } from '@ant-design/icons'
import { Button } from 'antd'

type IProps = {
  listColor: string[]
  colorActive: string
  handleCheckColor: (item: string) => void
}
export const ColorDot = ({
  listColor,
  colorActive,
  handleCheckColor,
}: IProps) => {
  return (
    <div className="flex gap-2">
      {listColor.map((item: string) => {
        return (
          <div key={item} className="color-dot">
            <Button
              onClick={() => handleCheckColor(item)}
              className="border cursor-pointer flex justify-center items-center rounded-full"
              style={{ background: item }}
              shape="circle"
              size="small"
              icon={
                colorActive === item && (
                  <CheckOutlined className="text-gray-400 text-xs" />
                )
              }
            />
          </div>
        )
      })}
    </div>
  )
}
