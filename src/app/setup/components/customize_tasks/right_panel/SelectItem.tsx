interface IProps {
  children: React.ReactNode
  noBorder?: boolean
}

const SelectItem = ({ children, noBorder }: IProps) => {
  return (
    <div className={`${!noBorder && 'border-white'} text-xl text-white w-full px-10 py-5 text-center bg-red-400 border-b-[1px]`}>
      <div>{children}</div>
    </div>
  )
}

export default SelectItem
