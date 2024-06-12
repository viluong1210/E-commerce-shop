import { Slider } from 'antd'
import type { SliderSingleProps } from 'antd'
const TimeLine = () => {
  const marks: SliderSingleProps['marks'] = {
    0: 'Giỏ hàng',
    30: 'Đặt hàng',
    60: 'Thanh toán',
    100: 'Hoàn thành đơn',
  }
  return (
    <div className="w-full border py-4 px-16 rounded-tl-2xl rounded-br-2xl">
      <Slider
        className="w-full"
        disabled
        marks={marks}
        tooltip={{ open: true }}
      />
    </div>
  )
}

export default TimeLine
