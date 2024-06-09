type IProps = {
  title: string
  child?: string
}
export const Breadcrumb = ({ title, child }: IProps) => {
  return (
    <div className="w-full text-left mt-5">
      <span className="text-[#6c6d70] text-sm mr-2 gap-3">Trang chủ -</span>
      <span className="text-[#221f20] text-sm mr-2">{title}</span>
      {child && <span className="text-[#221f20] text-sm">- {child}</span>}
    </div>
  )
}
