interface IProps {
  children: React.ReactNode
}

const SelectHeading = ({ children }: IProps) => {
  
  return (
    <h3 className='text-xl flex gap-1 sm:items-center sm:flex-col'>
      {children}
    </h3>
    )
}

export default SelectHeading