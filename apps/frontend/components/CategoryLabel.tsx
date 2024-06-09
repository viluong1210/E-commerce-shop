type IProp = {
  label: string
}
export const CategoryLabel = ({ label }: IProp) => {
  return (
    <div className="xl:text-[30px] lg:text-2xl md:text-base text-sm text-center font-semibold mb-6 tracking-[2px] text-[#221F20] uppercase font-montserrat leading-8">
      {label}
    </div>
  )
}
