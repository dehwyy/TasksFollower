interface IProps {
  children: React.ReactNode
}

const SelectHeading = ({ children }: IProps) => {
  return <h3 className="text-[1.85rem] shadow-blue text-center">{children}</h3>
}

export default SelectHeading
