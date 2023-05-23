interface IProps {
  children: React.ReactNode
  hasBorder?: boolean
}

const SelectJobItemInput = ({ children, hasBorder }: IProps) => {
  return (
    <div className={`${hasBorder && 'border-b-2'} bg-violet-400 select-none text-xl text-white w-full px-10 py-5 text-center transition-all`}>
      {children}
    </div>
  )
}

export default SelectJobItemInput
