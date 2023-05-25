interface IProps {
  children: React.ReactNode
}

const SelectHeading = ({ children }: IProps) => {
  return <h3 className="text-[1.85rem] text-gray-300 text-center">{children}</h3>
}

export default SelectHeading
