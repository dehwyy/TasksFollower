interface IProps {
  children: React.ReactNode
}

const SelectWrapper = ({ children }: IProps) => {
  return (
    <div className='grid place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-5 pt-2'>
      {children}
    </div>
    )
}

export default SelectWrapper